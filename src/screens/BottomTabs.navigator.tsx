import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AnalyticsIcon, HistoryIcon, HomeIcon} from "../components/Icons";
import {Analytics} from "./Analytics.screen";
import {History} from './History.screen';
import {theme} from "../shared/theme";
import {Home} from './Home.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        headerTitleStyle: {fontFamily: theme.fontFamilyBold},
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size}/>;
          }

          if (route.name === 'History') {
            return <HistoryIcon color={color} size={size}/>;
          }

          if (route.name === 'Analytics') {
            return <AnalyticsIcon color={color} size={size}/>;
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{title: "Today's Mood"}}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{title: 'Past Moods'}}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{title: 'Fancy Charts'}}
      />
    </BottomTabs.Navigator>
  );
};
