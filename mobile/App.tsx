import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import WikiDetailScreen from './src/screens/WikiDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  WikiDetail: { wikiId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0b1220',
    primary: '#38bdf8',
    card: '#0f172a',
    text: '#e2e8f0',
    border: '#1e293b',
    notification: '#38bdf8'
  }
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0f172a' },
          headerTintColor: '#e2e8f0',
          headerTitleStyle: { fontWeight: '600' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Grifkuba Hub' }} />
        <Stack.Screen
          name="WikiDetail"
          component={WikiDetailScreen}
          options={({ route }) => ({
            title: route.params.wikiId.replace(/-/g, ' ')
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
