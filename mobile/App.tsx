import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
  NavigatorScreenParams
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import WikiDetailScreen from './src/screens/WikiDetailScreen';
import TicketsScreen from './src/screens/TicketsScreen';
import NewTicketScreen from './src/screens/NewTicketScreen';
import SocialsScreen from './src/screens/SocialsScreen';

export type HomeStackParamList = {
  Home: undefined;
  WikiDetail: { wikiId: string };
};

export type SupportStackParamList = {
  TicketsList: undefined;
  NewTicket: undefined;
};

export type RootTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  TicketsTab: NavigatorScreenParams<SupportStackParamList>;
  SocialsTab: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SupportStack = createNativeStackNavigator<SupportStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

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

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#e2e8f0',
        headerTitleStyle: { fontWeight: '600' }
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Grifkuba Hub' }} />
      <HomeStack.Screen
        name="WikiDetail"
        component={WikiDetailScreen}
        options={({ route }) => ({
          title: route.params.wikiId.replace(/-/g, ' ')
        })}
      />
    </HomeStack.Navigator>
  );
}

function SupportStackNavigator() {
  return (
    <SupportStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#e2e8f0',
        headerTitleStyle: { fontWeight: '600' }
      }}
    >
      <SupportStack.Screen
        name="TicketsList"
        component={TicketsScreen}
        options={{ title: 'Support Tickets' }}
      />
      <SupportStack.Screen
        name="NewTicket"
        component={NewTicketScreen}
        options={{ title: 'Submit Ticket' }}
      />
    </SupportStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: '#0f172a', borderTopColor: '#1e293b' },
          tabBarActiveTintColor: '#38bdf8',
          tabBarInactiveTintColor: '#94a3b8'
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStackNavigator}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />
          }}
        />
        <Tab.Screen
          name="TicketsTab"
          component={SupportStackNavigator}
          options={{
            title: 'Tickets',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-buoy-outline" size={size} color={color} />
            )
          }}
        />
        <Tab.Screen
          name="SocialsTab"
          component={SocialsScreen}
          options={{
            title: 'Socials',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="share-social-outline" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
