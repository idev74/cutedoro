import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import LandingPage from './Landing';
import Sounds from './Sounds';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Landing Page" component={LandingPage} />
      <Tab.Screen name="Sounds" component={Sounds} />
    </Tab.Navigator>
  );
}