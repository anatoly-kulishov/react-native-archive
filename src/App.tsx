import type { FC } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { Platform, UIManager } from 'react-native';
import { BottomTabsNavigator } from './routes/BottomTabs.navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './App.provider';
import { store } from './store';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <NavigationContainer>
          <BottomTabsNavigator />
        </NavigationContainer>
      </AppProvider>
    </Provider>
  );
};

export default App;
