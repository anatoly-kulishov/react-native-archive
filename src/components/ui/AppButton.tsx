import React, { FC, useMemo } from 'react';
import { ButtonProps, StyleSheet, TextProps, View } from 'react-native';
import { AppText } from './AppText';
import { PressableArea } from './PressableArea';
import { theme } from '../../configs/theme';

interface IAppButtonProps extends ButtonProps, TextProps {
  type: 'primary' | 'danger';
}

export const AppButton: FC<IAppButtonProps> = props => {
  const { type, title, disabled } = props;

  const themeBgStyle = useMemo(() => {
    if (type === 'primary') {
      return { backgroundColor: theme.colorWhite, color: theme.colorRed };
    }
    if (type === 'danger') {
      return { backgroundColor: theme.colorRed };
    }
  }, [type]);

  const themeColorStyle = useMemo(() => {
    if (type === 'primary') {
      return { color: theme.colorBlack };
    }
    if (type === 'danger') {
      return { color: theme.colorWhite };
    }
  }, [type]);

  return (
    <PressableArea onPress={props.onPress} disabled={disabled}>
      <View
        style={[
          styles.button,
          disabled && styles.disabled,
          themeBgStyle,
          props.style,
        ]}>
        <AppText style={themeColorStyle} fontFamily="bold">
          {title}
        </AppText>
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
  disabled: {
    opacity: 0.5,
  },
});
