import type { FC } from 'react';
import React from 'react';
import { Platform, UIManager } from 'react-native';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './App.provider';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
