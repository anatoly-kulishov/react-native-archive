import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { AppText } from './AppText';
import { themeConfig } from '../../configs/theme.config';

interface IAppTextareaProps extends TextInputProps {
  label?: string;
  type?: 'input' | 'textarea';
}

export const AppTextInput: FC<IAppTextareaProps> = props => {
  const { label, style, type = 'input' } = props;

  return (
    <View>
      {label && <AppText style={styles.label}>{label}</AppText>}
      {type === 'textarea' && (
        <View>
          <TextInput
            style={[styles.textArea, style]}
            numberOfLines={10}
            multiline={true}
            {...props}
          />
        </View>
      )}
      {type === 'input' && (
        <View>
          <TextInput style={[styles.input, style]} {...props} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: themeConfig.colorGrey,
    backgroundColor: themeConfig.colorWhite,
    padding: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: themeConfig.colorGrey,
    backgroundColor: themeConfig.colorWhite,
    padding: 10,
  },
  label: {},
});
