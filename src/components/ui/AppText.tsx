import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';
import { themeConfig } from '../../configs/theme.config';

type AppTextType = TextProps & {
  fontFamily?: 'bold' | 'regular' | 'light';
};

export const AppText: React.FC<AppTextType> = ({
  children,
  fontFamily = 'regular',
  style,
  ...props
}) => {
  const fontStyle = useMemo(() => {
    if (fontFamily === 'bold') {
      return { fontFamily: themeConfig.fontFamilyBold };
    }
    if (fontFamily === 'regular') {
      return { fontFamily: themeConfig.fontFamilyRegular };
    }
    if (fontFamily === 'light') {
      return { fontFamily: themeConfig.fontFamilyLight };
    }
  }, [fontFamily]);

  return (
    <Text {...props} style={[style, fontStyle]}>
      {children}
    </Text>
  );
};
