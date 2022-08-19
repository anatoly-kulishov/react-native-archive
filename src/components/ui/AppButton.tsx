import React, { FC } from 'react';
import { ButtonProps, StyleSheet, View } from 'react-native';
import { AppText } from './AppText';
import { PressableArea } from './PressableArea';

interface IAppButtonProps extends ButtonProps {
  bgColor: 'primary' | 'white' | 'black';
}

export const AppButton: FC<IAppButtonProps> = props => {
  const { title, color } = props;

  return (
    <PressableArea onPress={props.onPress}>
      <View style={[styles.button, { backgroundColor: color }]}>
        <AppText fontFamily="bold">{title}</AppText>
      </View>
    </PressableArea>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
