import React, { useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { addTicket } from '@shared/lib/data';
import type { SupportStackParamList } from '../../App';

type NewTicketScreenProps = NativeStackScreenProps<SupportStackParamList, 'NewTicket'>;

type TicketFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  urgency: 'high' | 'medium' | 'low';
};

const initialState: TicketFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  urgency: 'medium'
};

export default function NewTicketScreen({ navigation }: NewTicketScreenProps) {
  const [form, setForm] = useState<TicketFormState>(initialState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [touched, setTouched] = useState<Record<keyof TicketFormState, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
    urgency: false
  });

  const errors = useMemo(() => validateForm(form), [form]);
  const isValid = useMemo(() => Object.values(errors).every((value) => value === null), [errors]);

  const updateField = <K extends keyof TicketFormState>(key: K, value: TicketFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const markTouched = <K extends keyof TicketFormState>(key: K) => {
    setTouched((prev) => ({ ...prev, [key]: true }));
  };

  const handleSubmit = async () => {
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
      urgency: true
    });

    if (!isValid || submitting) {
      return;
    }

    try {
      setSubmitting(true);
      await addTicket({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        urgency: form.urgency
      });
      setForm(initialState);
      Alert.alert(
        'Ticket submitted',
        'Thank you! A member of the Grifkuba team will follow up soon.',
        [
          {
            text: 'Close',
            onPress: () => navigation.navigate('TicketsList')
          }
        ]
      );
    } catch (error) {
      console.warn('Failed to submit ticket', error);
      Alert.alert('Submission failed', 'Please try again in a few moments.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Submit a ticket</Text>
        <Text style={styles.subtitle}>
          Share a few details about your request and we’ll route it to the right volunteer.
        </Text>

        <View style={styles.formSection}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#64748b"
            value={form.name}
            onChangeText={(value) => updateField('name', value)}
            onBlur={() => markTouched('name')}
            autoCapitalize="words"
          />
          {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#64748b"
            value={form.email}
            onChangeText={(value) => updateField('email', value)}
            onBlur={() => markTouched('email')}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Subject</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Issue accessing a hosted wiki"
            placeholderTextColor="#64748b"
            value={form.subject}
            onChangeText={(value) => updateField('subject', value)}
            onBlur={() => markTouched('subject')}
          />
          {touched.subject && errors.subject && (
            <Text style={styles.errorText}>{errors.subject}</Text>
          )}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Provide as much detail as you can..."
            placeholderTextColor="#64748b"
            value={form.message}
            onChangeText={(value) => updateField('message', value)}
            onBlur={() => markTouched('message')}
            multiline
            numberOfLines={5}
            textAlignVertical="top"
          />
          {touched.message && errors.message && (
            <Text style={styles.errorText}>{errors.message}</Text>
          )}
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Urgency</Text>
          <View style={styles.urgencyRow}>
            {(['high', 'medium', 'low'] as const).map((level) => {
              const isSelected = form.urgency === level;
              return (
                <TouchableOpacity
                  key={level}
                  style={[
                    styles.urgencyOption,
                    isSelected && styles.urgencyOptionSelected
                  ]}
                  onPress={() => {
                    updateField('urgency', level);
                    markTouched('urgency');
                  }}
                >
                  <Text
                    style={[
                      styles.urgencyText,
                      isSelected && styles.urgencyTextSelected
                    ]}
                  >
                    {level.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <TouchableOpacity
          style={[styles.submitButton, !isValid || submitting ? styles.submitButtonDisabled : null]}
          onPress={handleSubmit}
          disabled={!isValid || submitting}
        >
          <Text style={styles.submitButtonText}>
            {submitting ? 'Submitting…' : 'Submit Ticket'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function validateForm(values: TicketFormState): Record<keyof TicketFormState, string | null> {
  const results: Record<keyof TicketFormState, string | null> = {
    name: null,
    email: null,
    subject: null,
    message: null,
    urgency: null
  };

  if (!values.name.trim()) {
    results.name = 'Please enter your name.';
  } else if (values.name.trim().length < 2) {
    results.name = 'Name must be at least 2 characters.';
  }

  if (!values.email.trim()) {
    results.email = 'Please enter an email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    results.email = 'Enter a valid email address.';
  }

  if (!values.subject.trim()) {
    results.subject = 'Please add a subject.';
  } else if (values.subject.trim().length < 5) {
    results.subject = 'Subject should be at least 5 characters.';
  }

  if (!values.message.trim()) {
    results.message = 'A description of the issue is required.';
  } else if (values.message.trim().length < 10) {
    results.message = 'Please include a bit more detail.';
  }

  // urgency always set; no validation needed for now.

  return results;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220'
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#38bdf8',
    marginBottom: 8,
    textAlign: 'center'
  },
  subtitle: {
    color: '#cbd5f5',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 24
  },
  formSection: {
    marginBottom: 18
  },
  label: {
    color: '#e2e8f0',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6
  },
  input: {
    backgroundColor: '#0f172a',
    borderColor: '#1e293b',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#e2e8f0',
    fontSize: 16
  },
  textArea: {
    minHeight: 140
  },
  errorText: {
    color: '#f87171',
    marginTop: 6,
    fontSize: 13
  },
  urgencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  urgencyOption: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1e293b',
    alignItems: 'center',
    backgroundColor: '#0f172a'
  },
  urgencyOptionSelected: {
    borderColor: '#38bdf8',
    backgroundColor: '#1d4ed8'
  },
  urgencyText: {
    color: '#94a3b8',
    fontWeight: '600',
    letterSpacing: 0.6
  },
  urgencyTextSelected: {
    color: '#f8fafc'
  },
  submitButton: {
    backgroundColor: '#38bdf8',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12
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
