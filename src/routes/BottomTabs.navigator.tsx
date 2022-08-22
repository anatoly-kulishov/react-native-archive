import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AnalyticsIcon,
  HistoryIcon,
  HomeIcon,
  UIKitIcon,
} from '../components/ui/Icons';
import { Analytics } from '../screens/Analytics.screen';
import { History } from '../screens/History.screen';
import { Home } from '../screens/Home.screen';
import { themeConfig } from '../configs/theme.config';
import { UIKit } from '../screens/UIKit.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: themeConfig.colorBlue,
        tabBarInactiveTintColor: themeConfig.colorGrey,
        tabBarShowLabel: false,
        headerTitleStyle: { fontFamily: themeConfig.fontFamilyBold },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size} />;
          }

          if (route.name === 'UIKit') {
            return <UIKitIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Charts' }}
      />
      <BottomTabs.Screen
        name="UIKit"
        component={UIKit}
        options={{ title: 'UI Kit' }}
      />
    </BottomTabs.Navigator>
  );
};
