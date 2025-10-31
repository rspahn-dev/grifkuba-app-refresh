import React, { useMemo, useState } from 'react';
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { addMessage } from '@shared/lib/data';

type SocialIconName =
  | 'logo-discord'
  | 'cloud-outline'
  | 'logo-instagram'
  | 'logo-linkedin'
  | 'brush-outline'
  | 'cafe-outline';

type SocialLink = {
  label: string;
  description: string;
  url: string;
  accent: string;
  icon: SocialIconName;
};

const socials: SocialLink[] = [
  {
    label: 'Discord',
    description: 'Join the Grifkuba community server to chat with volunteers and wiki teams.',
    url: 'https://discord.gg/eQNsPWR4',
    accent: '#5865F2',
    icon: 'logo-discord'
  },
  {
    label: 'Bluesky',
    description: 'Stay up to date with hosting news and collaboration opportunities.',
    url: 'https://bsky.app/profile/grifkuba.net',
    accent: '#38bdf8',
    icon: 'cloud-outline'
  },
  {
    label: 'Instagram',
    description: 'Peek behind the scenes with snapshots from events, meetups, and wiki teams.',
    url: 'https://www.instagram.com/grifkuba',
    accent: '#f97316',
    icon: 'logo-instagram'
  },
  {
    label: 'LinkedIn',
    description: 'Connect professionally and follow updates on infrastructure projects and hiring.',
    url: 'https://www.linkedin.com/company/grifkuba-gaming-services/',
    accent: '#0a66c2',
    icon: 'logo-linkedin'
  },
  {
    label: 'DeviantArt',
    description: 'Browse community artwork, concept pieces, and archived graphics from hosted wikis.',
    url: 'https://www.deviantart.com/grifkuba',
    accent: '#1abc9c',
    icon: 'brush-outline'
  },
  {
    label: 'Ko-fi',
    description: 'Support Grifkuba hosting and infrastructure costs with a one-time or monthly donation.',
    url: 'https://ko-fi.com/grifkuba',
    accent: '#f472b6',
    icon: 'cafe-outline'
  }
];

export default function SocialsScreen() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const errors = useMemo(() => {
    const result: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) result.name = 'Name is required';
    if (!email.trim()) result.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) result.email = 'Enter a valid email';
    if (!message.trim()) result.message = 'Tell us how we can help';
    return result;
  }, [name, email, message]);

  const handleOpen = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.warn('Unable to open social link', error);
    }
  };

  const handleSubmit = async () => {
    const hasErrors = Object.values(errors).some(Boolean);
    if (hasErrors) {
      Alert.alert('Form incomplete', 'Please fill out all required fields before submitting.');
      return;
    }

    try {
      setSubmitting(true);
      await addMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim()
      });
      setName('');
      setEmail('');
      setMessage('');
      Alert.alert('Message sent', 'Thanks! The Grifkuba team will reach out soon.');
    } catch (error) {
      console.warn('Failed to send contact message', error);
      Alert.alert('Unable to send', 'Please try again in a few minutes.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Grifkuba Socials</Text>
      <Text style={styles.subtitle}>
        Connect with us across the web to share feedback, find collaborators, and keep up with the
        latest hosting news.
      </Text>

      <View style={styles.list}>
        {socials.map((social) => (
          <TouchableOpacity
            key={social.label}
            style={[styles.card, { borderColor: social.accent }]}
            onPress={() => handleOpen(social.url)}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.badge, { backgroundColor: social.accent }]}>
                <Ionicons
                  name={social.icon}
                  size={20}
                  color="#0b1220"
                  accessibilityLabel={`${social.label} icon`}
                />
              </View>
              <Text style={styles.cardTitle}>{social.label}</Text>
            </View>
            <Text style={styles.cardBody}>{social.description}</Text>
            <Text style={styles.cardLink}>Open {social.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Contact Grifkuba</Text>
        <Text style={styles.formDescription}>
          Prefer email? Use the form below and we’ll follow up as soon as we can.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#64748b"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#64748b"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            placeholder="How can we help?"
            placeholderTextColor="#64748b"
            value={message}
            onChangeText={setMessage}
          />
          {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
        </View>

        <TouchableOpacity
          style={[styles.submitButton, submitting && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={submitting}
        >
          <Text style={styles.submitButtonText}>{submitting ? 'Sending…' : 'Send Message'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0b1220',
    padding: 24
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#38bdf8',
    textAlign: 'center',
    marginBottom: 8
  },
  subtitle: {
    color: '#cbd5f5',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 24
  },
  list: {
    gap: 16
  },
  card: {
    backgroundColor: '#0f172a',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    padding: 8
  },
  cardTitle: {
    color: '#e2e8f0',
    fontSize: 18,
    fontWeight: '700'
  },
  cardBody: {
    color: '#e2e8f0',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12
  },
  cardLink: {
    color: '#38bdf8',
    fontWeight: '600',
    fontSize: 14
  },
  formContainer: {
    marginTop: 32,
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1e293b'
  },
  formTitle: {
    color: '#38bdf8',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8
  },
  formDescription: {
    color: '#cbd5f5',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16
  },
  inputGroup: {
    marginBottom: 16
  },
  inputLabel: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6
  },
  input: {
    backgroundColor: '#0b1220',
    borderWidth: 1,
    borderColor: '#1e293b',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#e2e8f0',
    fontSize: 16
  },
  textArea: {
    minHeight: 130
  },
  errorText: {
    color: '#f87171',
    marginTop: 6,
    fontSize: 13
  },
  submitButton: {
    marginTop: 12,
    backgroundColor: '#38bdf8',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center'
  },
  submitButtonDisabled: {
    opacity: 0.6
  },
  submitButtonText: {
    color: '#0b1220',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.5
  }
});
