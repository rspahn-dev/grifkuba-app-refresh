import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Wiki } from '@shared/lib/types';
import { getWikis } from '@shared/lib/data';
import type { RootStackParamList } from '../../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [wikis, setWikis] = useState<Wiki[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getWikis()
      .then((data) => {
        if (isMounted) {
          setWikis(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load wikis. Pull to refresh or try again later.');
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const openExternalLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Unsupported link', 'Your device cannot open this link.');
      }
    } catch (linkError) {
      console.warn('Failed to open link', linkError);
      Alert.alert('Unable to open link', 'Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sites We Host</Text>
      <Text style={styles.subHeading}>Tap a wiki to learn more or open the site.</Text>

      {isLoading && <ActivityIndicator size="large" color="#38bdf8" />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      <FlatList
        data={wikis}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.primaryAction}
              onPress={() => openExternalLink('https://switcher.gg/')}
            >
              <Text style={styles.actionLabel}>Visit Switcher.gg</Text>
              <Text style={styles.actionSubLabel}>Partner Community</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryAction}
              onPress={() =>
                openExternalLink(
                  'https://docs.google.com/forms/d/e/1FAIpQLSckYJy5j49HP7SOLpq_PIhCv31Yu1okpVPETQCSdqR6g3Bl2A/viewform?usp=sf_link'
                )
              }
            >
              <Text style={styles.actionLabel}>Become a Volunteer</Text>
              <Text style={styles.actionSubLabel}>Help maintain the network</Text>
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          !isLoading && !error ? (
            <Text style={styles.emptyState}>No wikis are available right now.</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('WikiDetail', { wikiId: item.id })}
          >
            {item.logo ? (
              <Image source={{ uri: item.logo }} style={styles.logo} resizeMode="contain" />
            ) : (
              <View style={[styles.logo, styles.logoPlaceholder]}>
                <Text style={styles.logoPlaceholderText}>{item.name.slice(0, 2).toUpperCase()}</Text>
              </View>
            )}
            <Text style={styles.cardTitle}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
    paddingHorizontal: 16,
    paddingTop: 24
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#38bdf8',
    textAlign: 'center'
  },
  subHeading: {
    fontSize: 16,
    color: '#cbd5f5',
    textAlign: 'center',
    marginBottom: 16
  },
  listContent: {
    paddingBottom: 32
  },
  columnWrapper: {
    justifyContent: 'space-between'
  },
  card: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4
  },
  cardTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#e2e8f0'
  },
  logo: {
    width: 80,
    height: 80
  },
  logoPlaceholder: {
    backgroundColor: '#1e293b',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoPlaceholderText: {
    color: '#94a3b8',
    fontWeight: '700',
    fontSize: 22
  },
  actionsContainer: {
    marginBottom: 16
  },
  primaryAction: {
    backgroundColor: '#1d4ed8',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12
  },
  secondaryAction: {
    backgroundColor: '#22c55e',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16
  },
  actionLabel: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700'
  },
  actionSubLabel: {
    color: '#e2e8f0',
    fontSize: 14,
    marginTop: 4
  },
  errorText: {
    color: '#f87171',
    textAlign: 'center',
    marginBottom: 16
  },
  emptyState: {
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 24
  }
});
