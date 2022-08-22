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
import { theme } from '../configs/theme';
import { UIKit } from '../screens/UIKit.screen';
import { MainRoutesEnum } from '../shared/types';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        headerTitleStyle: { fontFamily: theme.fontFamilyBold },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color, size }) => {
          if (route.name === MainRoutesEnum.HOME) {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === MainRoutesEnum.HISTORY) {
            return <HistoryIcon color={color} size={size} />;
          }

          if (route.name === MainRoutesEnum.ANALYTICS) {
            return <AnalyticsIcon color={color} size={size} />;
          }

          if (route.name === MainRoutesEnum.UIKIT) {
            return <UIKitIcon color={color} size={size} />;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name={MainRoutesEnum.HOME}
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name={MainRoutesEnum.HISTORY}
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name={MainRoutesEnum.ANALYTICS}
        component={Analytics}
        options={{ title: 'Fancy Charts' }}
      />
      <BottomTabs.Screen
        name={MainRoutesEnum.UIKIT}
        component={UIKit}
        options={{ title: 'UI Kit' }}
      />
    </BottomTabs.Navigator>
  );
};
