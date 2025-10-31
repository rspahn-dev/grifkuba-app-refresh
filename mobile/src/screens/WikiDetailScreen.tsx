import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Wiki } from '@shared/lib/types';
import { getWikiById } from '@shared/lib/data';
import type { RootStackParamList } from '../../App';

type WikiDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'WikiDetail'>;

export default function WikiDetailScreen({ route }: WikiDetailScreenProps) {
  const { wikiId } = route.params;
  const [wiki, setWiki] = useState<Wiki | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getWikiById(wikiId)
      .then((data) => {
        if (isMounted) {
          setWiki(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Unable to load this wiki.');
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
  }, [wikiId]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  if (error || !wiki) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error ?? 'Wiki not found.'}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.header}>
        {wiki.logo && (
          <Image source={{ uri: wiki.logo }} style={styles.logo} resizeMode="contain" />
        )}
        <Text style={styles.title}>{wiki.name}</Text>
        <Text style={styles.subtitle}>Part of the Grifkuba hosting network</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Main Page</Text>
        <Text style={styles.sectionBody}>{wiki.mainPage.replace(/_/g, ' ')}</Text>
      </View>

      <TouchableOpacity style={styles.ctaButton} onPress={() => openSite(wiki.baseUrl)}>
        <Text style={styles.ctaText}>Open Site</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>API Endpoint</Text>
        <Text style={styles.sectionBody}>{wiki.apiUrl}</Text>
        <Text style={styles.sectionHint}>
          Use this endpoint to query the wiki via the MediaWiki API.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Share</Text>
        <Text style={styles.sectionBody} selectable>
          {wiki.baseUrl}
        </Text>
        <Text style={styles.sectionHint}>Long press to copy the link and share it with others.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
    padding: 16
  },
  centered: {
    flex: 1,
    backgroundColor: '#0b1220',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 24
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#38bdf8',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5f5',
    textAlign: 'center',
    marginTop: 4
  },
  section: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1e293b'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#e2e8f0',
    marginBottom: 8
  },
  sectionBody: {
    fontSize: 16,
    color: '#cbd5f5'
  },
  sectionHint: {
    marginTop: 8,
    fontSize: 14,
    color: '#94a3b8'
  },
  ctaButton: {
    backgroundColor: '#38bdf8',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20
  },
  ctaText: {
    color: '#0b1220',
    fontSize: 18,
    fontWeight: '700'
  },
  errorText: {
    color: '#f87171',
    fontSize: 16
  }
});
const openSite = async (url: string) => {
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
