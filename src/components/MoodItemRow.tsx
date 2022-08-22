import React from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import format from 'date-fns/format';
import { MoodOptionWithTimestamp } from '../shared/types';
import { useAppContext } from '../App.provider';
import { PressableArea } from './ui/PressableArea';
import { themeConfig } from '../configs/theme.config';
import { AppText } from './ui/AppText';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const appContext = useAppContext();
  const offset = useSharedValue(0);

  const handlePress = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    appContext.handleDeleteMood(item);
  }, [appContext, item]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <View style={[styles.moodItem, animatedStyle]}>
      <View style={styles.iconAndDescription}>
        <AppText style={styles.moodValue}>{item.mood.emoji}</AppText>
        <AppText fontFamily="bold" style={styles.moodDescription}>
          {item.mood.description}
        </AppText>
      </View>
      <AppText style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </AppText>
      <PressableArea hitSlop={16} onPress={handlePress}>
        <AppText fontFamily="regular" style={styles.deleteText}>
          Delete
        </AppText>
      </PressableArea>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: themeConfig.colorLavender,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: themeConfig.colorPurple,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: themeConfig.colorRed,
  },
});
