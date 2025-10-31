import React, { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import type { Ticket } from '@shared/lib/types';
import { getTickets } from '@shared/lib/data';
import type { SupportStackParamList } from '../../App';

type TicketsScreenProps = NativeStackScreenProps<SupportStackParamList, 'TicketsList'>;

const statusPalette: Record<
  Ticket['status'],
  { background: string; border: string; text: string }
> = {
  open: { background: '#0f172a', border: '#38bdf8', text: '#38bdf8' },
  'in progress': { background: '#0f172a', border: '#facc15', text: '#facc15' },
  closed: { background: '#0f172a', border: '#64748b', text: '#94a3b8' }
};

const urgencyPalette: Record<
  NonNullable<Ticket['urgency']>,
  { background: string; text: string }
> = {
  high: { background: '#1f2937', text: '#f87171' },
  medium: { background: '#1f2937', text: '#facc15' },
  low: { background: '#1f2937', text: '#38bdf8' }
};

type SortMode = 'all' | 'recent' | 'oldest' | 'status' | 'urgency';

export default function TicketsScreen({ navigation }: TicketsScreenProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>('all');

  const sortedTickets = useMemo(() => {
    const next = [...tickets];
    switch (sortMode) {
      case 'all':
        return next;
      case 'recent':
        return next.sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'oldest':
        return next.sort(
          (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case 'status': {
        const order: Record<Ticket['status'], number> = { open: 0, 'in progress': 1, closed: 2 };
        return next.sort((a, b) => order[a.status] - order[b.status]);
      }
      case 'urgency': {
        const order: Record<NonNullable<Ticket['urgency']>, number> = {
          high: 0,
          medium: 1,
          low: 2
        };
        return next.sort((a, b) => {
          const aRank = a.urgency ? order[a.urgency] : 3;
          const bRank = b.urgency ? order[b.urgency] : 3;
          return aRank - bRank;
        });
      }
      default:
        return next;
    }
  }, [tickets, sortMode]);

  const fetchTickets = useCallback(async () => {
    try {
      const data = await getTickets();
      setTickets(data);
      setError(null);
    } catch (err) {
      console.warn('Failed to load tickets', err);
      setError('Unable to load tickets right now.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchTickets();
    }, [fetchTickets])
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.navigate('NewTicket')}
          accessibilityLabel="Submit a support ticket"
        >
          <Text style={styles.headerButtonText}>New Ticket</Text>
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchTickets();
  };

  const renderTicket = ({ item }: { item: Ticket }) => {
    const statusStyles = statusPalette[item.status];
    const urgencyStyles = item.urgency ? urgencyPalette[item.urgency] : undefined;

    return (
      <View style={styles.ticketCard}>
        <View style={styles.ticketHeader}>
          <Text style={styles.ticketSubject} numberOfLines={2}>
            {item.subject}
          </Text>
          <View style={[styles.statusChip, statusStyles && { borderColor: statusStyles.border }]}>
            <Text style={[styles.statusChipText, statusStyles && { color: statusStyles.text }]}>
              {item.status.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={styles.ticketMessage} numberOfLines={3}>
          {item.message}
        </Text>

        <View style={styles.ticketMetaRow}>
          <Text style={styles.ticketMetaLabel}>Submitted</Text>
          <Text style={styles.ticketMetaValue}>{formatRelativeTime(item.createdAt)}</Text>
        </View>

        <View style={styles.ticketMetaRow}>
          <Text style={styles.ticketMetaLabel}>Contact</Text>
          <Text style={styles.ticketMetaValue}>{item.name}</Text>
        </View>

        {item.urgency && urgencyStyles && (
          <View style={[styles.urgencyBadge, { backgroundColor: urgencyStyles.background }]}>
            <Text style={[styles.urgencyText, { color: urgencyStyles.text }]}>
              {`Urgency: ${item.urgency}`}
            </Text>
          </View>
        )}

        {item.keywords && item.keywords.length > 0 && (
          <View style={styles.keywordRow}>
            {item.keywords.map((keyword, index) => (
              <View key={`${item.id}-${keyword}-${index}`} style={styles.keywordChip}>
                <Text style={styles.keywordText}>{keyword}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#38bdf8" />
        </View>
      ) : (
        <FlatList
          data={sortedTickets}
          keyExtractor={(item) => item.id}
          renderItem={renderTicket}
          contentContainerStyle={
            sortedTickets.length === 0 ? styles.emptyListContainer : styles.listContent
          }
          ListHeaderComponent={<SortControls sortMode={sortMode} setSortMode={setSortMode} />}
          ListHeaderComponentStyle={styles.listHeader}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No tickets yet</Text>
              <Text style={styles.emptySubtitle}>
                Tap “New Ticket” to submit a request to the Grifkuba team.
              </Text>
            </View>
          }
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#38bdf8"
              colors={['#38bdf8']}
            />
          }
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

function formatRelativeTime(date: Date): string {
  const target = new Date(date);
  const diffMs = Date.now() - target.getTime();
  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return 'Just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} day${days === 1 ? '' : 's'} ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months === 1 ? '' : 's'} ago`;
  const years = Math.floor(days / 365);
  return `${years} year${years === 1 ? '' : 's'} ago`;
}

const sortOptions: Array<{ key: SortMode; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'recent', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
  { key: 'status', label: 'Status' },
  { key: 'urgency', label: 'Urgency' }
];

type SortControlsProps = {
  sortMode: SortMode;
  setSortMode: (mode: SortMode) => void;
};

function SortControls({ sortMode, setSortMode }: SortControlsProps) {
  return (
    <View style={styles.sortRow}>
      {sortOptions.map((option) => {
        const isActive = sortMode === option.key;
        return (
          <TouchableOpacity
            key={option.key}
            style={[styles.sortButton, isActive && styles.sortButtonActive]}
            onPress={() => setSortMode(option.key)}
          >
            <Text style={[styles.sortButtonText, isActive && styles.sortButtonTextActive]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  listHeader: {
    marginBottom: 12
  },
  loadingWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContent: {
    paddingBottom: 24
  },
  ticketCard: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1e293b'
  },
  ticketHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  ticketSubject: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#e2e8f0',
    marginRight: 12
  },
  ticketMessage: {
    color: '#cbd5f5',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12
  },
  ticketMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  ticketMetaLabel: {
    color: '#94a3b8',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.6
  },
  ticketMetaValue: {
    color: '#e2e8f0',
    fontSize: 12
  },
  statusChip: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    borderWidth: 1
  },
  statusChipText: {
    fontSize: 12,
    fontWeight: '600'
  },
  urgencyBadge: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    alignSelf: 'flex-start'
  },
  urgencyText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.3
  },
  keywordRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12
  },
  keywordChip: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  keywordText: {
    color: '#94a3b8',
    fontSize: 12
  },
  sortRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#0f172a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1e293b',
    padding: 6,
    marginBottom: 8
  },
  sortButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center'
  },
  sortButtonActive: {
    backgroundColor: '#1d4ed8'
  },
  sortButtonText: {
    color: '#cbd5f5',
    fontSize: 13,
    fontWeight: '600'
  },
  sortButtonTextActive: {
    color: '#f8fafc'
  },
  emptyListContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyState: {
    alignItems: 'center',
    paddingHorizontal: 24
  },
  emptyTitle: {
    color: '#e2e8f0',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  emptySubtitle: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center'
  },
  errorText: {
    textAlign: 'center',
    color: '#f87171',
    paddingVertical: 12
  },
  headerButton: {
    marginRight: 4,
    backgroundColor: '#38bdf8',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999
  },
  headerButtonText: {
    color: '#0b1220',
    fontWeight: '600'
  }
});
