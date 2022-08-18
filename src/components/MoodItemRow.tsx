import React from 'react';
import {LayoutAnimation, StyleSheet, View} from 'react-native';
import format from 'date-fns/format';
import {MoodOptionWithTimestamp} from "../shared/types";
import {theme} from "../shared/theme";
import {AppText} from "./AppText";
import {useAppContext} from "../App.provider";
import Reanimated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import {PressableArea} from "./PressableArea";

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp,
};

const maxPan = 80;

export const MoodItemRow: React.FC<MoodItemRowProps> = ({item}) => {
  const appContext = useAppContext();
  const offset = useSharedValue(0);

  const handlePress = React.useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    appContext.handleDeleteMood(item);
  }, [appContext, item]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const removeWithDelay = React.useCallback(() => {
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      appContext.handleDeleteMood(item);
    }, 250);
  }, [appContext, item]);

  const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,
    { shouldRemove: boolean }>(
    {
      onActive: (event, ctx) => {
        const xVal = Math.floor(event.translationX);
        offset.value = xVal;

        // use Absolute value so the user could swipe either left or right
        if (Math.abs(xVal) <= maxPan) {
          ctx.shouldRemove = false;
        } else {
          ctx.shouldRemove = true;
        }
      },
      onEnd: (_, ctx) => {
        if (ctx.shouldRemove) {
          // if the item should be remove, animate it off the screen first
          offset.value = withTiming(Math.sign(offset.value) * 2000);

          // then trigger the remove mood item with a small delay
          runOnJS(removeWithDelay)();
        } else {
          // otherwise, animate the item back to the start
          offset.value = withTiming(0);
        }
      },
    },
    [],
  );

  return (
    <PanGestureHandler
      // minDeltaX={1}
      // minDeltaY={100}
      onGestureEvent={onGestureEvent}>
      <Reanimated.View style={[styles.moodItem, animatedStyle]}>
        <View style={styles.iconAndDescription}>
          <AppText style={styles.moodValue}>{item.mood.emoji}</AppText>
          <AppText fontFamily="bold" style={styles.moodDescription}>{item.mood.description}</AppText>
        </View>
        <AppText style={styles.moodDate}>
          {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </AppText>
        <PressableArea hitSlop={16} onPress={handlePress}>
          <AppText fontFamily="light" style={styles.deleteText}>Delete</AppText>
        </PressableArea>
      </Reanimated.View>
    </PanGestureHandler>
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
    color: theme.colorLavender,
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
    color: theme.colorPurple,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    color: theme.colorBlue
  },
});
