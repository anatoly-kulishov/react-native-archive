import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { MoodOptionType } from '../shared/types';
import { PressableArea } from './ui/PressableArea';
import { themeConfig } from '../configs/theme.config';
import { AppText } from './ui/AppText';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  onSelect: (mood: MoodOptionType) => void;
};

const imageSrc = require('../../assets/butterflies.png');

export const MoodPicker: React.FC<MoodPickerProps> = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = React.useState<MoodOptionType>();
  const [hasSelected, setHasSelected] = React.useState(false);

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: selectedMood ? withTiming(1) : withTiming(0.5),
      transform: [{ scale: selectedMood ? withTiming(1) : 0.8 }],
    }),
    [selectedMood],
  );

  const handleSelect = React.useCallback(() => {
    if (selectedMood) {
      onSelect(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [onSelect, selectedMood]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={imageSrc} style={styles.image} />
        <PressableArea
          style={styles.button}
          onPress={() => setHasSelected(false)}>
          <AppText fontFamily="bold" style={styles.buttonText}>
            Back
          </AppText>
        </PressableArea>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppText fontFamily="bold" style={styles.heading}>
        How are you right now?
      </AppText>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <PressableArea
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                option.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}>
              <AppText style={styles.moodText}>{option.emoji}</AppText>
            </PressableArea>
            <AppText fontFamily="bold" style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option.description : ' '}
            </AppText>
          </View>
        ))}
      </View>
      <ReanimatedPressable
        style={[styles.button, buttonStyle]}
        onPress={handleSelect}>
        <AppText fontFamily="bold" style={styles.buttonText}>
          Choose
        </AppText>
      </ReanimatedPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
    color: themeConfig.colorPurple,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: themeConfig.colorPurple,
    borderColor: themeConfig.colorWhite,
  },
  descriptionText: {
    color: themeConfig.colorPurple,
    fontSize: 10,
    textAlign: 'center',
  },
  container: {
    height: 250,
    borderWidth: 2,
    borderColor: themeConfig.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    color: themeConfig.colorWhite,
  },
  button: {
    backgroundColor: themeConfig.colorPurple,
    width: 150,
    borderRadius: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: themeConfig.colorWhite,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
  },
});
