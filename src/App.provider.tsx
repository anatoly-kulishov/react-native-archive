import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  MoodOptionType,
  MoodOptionWithTimestamp,
} from './shared/types/mood-option.types';
import { IChildren } from './shared/types';

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
  handleDeleteMood: (mood: MoodOptionWithTimestamp) => void;
};

const defaultValue = {
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {
    console.error('');
  }
};

const AppContext = React.createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC<IChildren> = ({ children }) => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, { mood, timestamp: Date.now() }];
      setAppData({ moods: newValue });
      return newValue;
    });
  }, []);

  const handleDeleteMood = React.useCallback(
    (mood: MoodOptionWithTimestamp) => {
      setMoodList(current => {
        const newValue = current.filter(
          item => item.timestamp !== mood.timestamp,
        );
        setAppData({ moods: newValue });
        return newValue;
      });
    },
    [],
  );

  return (
    <AppContext.Provider
      value={{ moodList, handleSelectMood, handleDeleteMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
