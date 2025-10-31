import React, { useEffect, useMemo, useState } from 'react';
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
import type { Article, Wiki } from '@shared/lib/types';
import { getArticle, getWikiById } from '@shared/lib/data';
import type { HomeStackParamList } from '../../App';
import { useWindowDimensions, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

type WikiDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'WikiDetail'>;

export default function WikiDetailScreen({ route }: WikiDetailScreenProps) {
  const { wikiId } = route.params;
  const [wiki, setWiki] = useState<Wiki | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [article, setArticle] = useState<Article | null>(null);
  const [articleError, setArticleError] = useState<string | null>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    let isMounted = true;

    getWikiById(wikiId)
      .then((data) => {
        if (isMounted) {
          setWiki(data);
          if (!data) {
            setError('Wiki not found.');
            setIsLoading(false);
            return;
          }
          return getArticle(wikiId, data.mainPage)
            .then((articleData) => {
              if (!isMounted) return;
              setArticle(articleData);
              setArticleError(articleData.error ?? null);
            })
            .catch(() => {
              if (!isMounted) return;
              setArticleError('Unable to load article content.');
            })
            .finally(() => {
              if (isMounted) {
                setIsLoading(false);
              }
            });
        }
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }
        setError('Unable to load this wiki.');
        setIsLoading(false);
      })
      .finally(() => {
        if (!isMounted) {
          return;
        }
        // ensure loading is stopped if article fetch not triggered
        setIsLoading(false);
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
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Site Overview</Text>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Homepage</Text>
          <Text style={styles.metaValue} selectable>
            {wiki.baseUrl}
          </Text>
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.metaLabel}>Main Page</Text>
          <Text style={styles.metaValue}>{wiki.mainPage.replace(/_/g, ' ')}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.ctaButton} onPress={() => openSite(wiki.baseUrl)}>
        <Text style={styles.ctaText}>Visit Site</Text>
      </TouchableOpacity>

      {articleError ? (
        <View style={styles.errorBanner}>
          <Text style={styles.errorBannerTitle}>Unable to load article</Text>
          <Text style={styles.errorBannerBody}>{articleError}</Text>
        </View>
      ) : (
        article && (
          <View style={styles.articleContainer}>
            <Text style={styles.articleTitle}>{article.title}</Text>
            {article.description ? (
              <Text style={styles.articleDescription}>{article.description}</Text>
            ) : null}
            {article.leadImage ? (
              <Image
                source={{ uri: article.leadImage }}
                resizeMode="contain"
                style={styles.articleImage}
              />
            ) : null}
            <HTMLContent html={article.content} contentWidth={width - 32} />
          </View>
        )
      )}
    </ScrollView>
  );
}

const HTML_WRAPPER_BEFORE = `<!DOCTYPE html><html><head><meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { background:#0b1220; color:#e2e8f0; font-family:-apple-system, system-ui, Roboto, sans-serif; margin:0; padding:16px; line-height:1.6; font-size:16px; }
    a { color:#38bdf8; }
    img { max-width:100%; height:auto; }
    table { width:100%; border-collapse:collapse; }
    th, td { border:1px solid rgba(255,255,255,0.15); padding:6px; }
    ul, ol { padding-left:20px; }
    h1, h2, h3, h4 { color:#38bdf8; margin-top:1.2em; }
  </style>
</head><body>`;
const HTML_WRAPPER_AFTER = `</body></html>`;

function HTMLContent({ html, contentWidth }: { html: string; contentWidth: number }) {
  const [height, setHeight] = useState<number>(400);

  const wrappedHtml = useMemo(() => `${HTML_WRAPPER_BEFORE}${html}${HTML_WRAPPER_AFTER}`, [html]);
  const injectedJavaScript = useMemo(
    () => `
      function updateSize() {
        var height = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
        window.ReactNativeWebView.postMessage(JSON.stringify({ height: height }));
      }
      window.addEventListener('load', updateSize);
      window.addEventListener('resize', updateSize);
      setTimeout(updateSize, 0);
      true;
    `,
    []
  );

  return (
    <View style={[styles.articleContent, { height }]}>
      <WebView
        originWhitelist={['*']}
        source={{ html: wrappedHtml }}
        injectedJavaScript={injectedJavaScript}
        javaScriptEnabled
        scrollEnabled={false}
        style={{ backgroundColor: 'transparent' }}
        onMessage={(event) => {
          try {
            const data = JSON.parse(event.nativeEvent.data);
            if (typeof data.height === 'number' && data.height > 0) {
              setHeight(Math.max(300, Math.ceil(data.height)));
            }
          } catch {
            // ignore malformed messages
          }
        }}
      />
    </View>
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
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4
  },
  metaLabel: {
    color: '#94a3b8',
    fontSize: 14,
    fontWeight: '600'
  },
  metaValue: {
    color: '#e2e8f0',
    fontSize: 14,
    marginLeft: 16,
    flex: 1,
    textAlign: 'right'
  },
  errorBanner: {
    backgroundColor: '#1f2937',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f87171',
    marginBottom: 20
  },
  errorBannerTitle: {
    color: '#f87171',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 6
  },
  errorBannerBody: {
    color: '#fca5a5',
    fontSize: 14
  },
  articleContainer: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1e293b',
    padding: 20,
    marginBottom: 24
  },
  articleTitle: {
    color: '#38bdf8',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8
  },
  articleDescription: {
    color: '#cbd5f5',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16
  },
  articleImage: {
    width: '100%',
    height: 180,
    marginBottom: 16
  },
  articleContent: {
    marginTop: 8,
    overflow: 'hidden'
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
