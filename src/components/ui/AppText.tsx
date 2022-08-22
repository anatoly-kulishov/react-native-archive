import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';
import { theme } from '../../configs/theme';

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
      return { fontFamily: theme.fontFamilyBold };
    }
    if (fontFamily === 'regular') {
      return { fontFamily: theme.fontFamilyRegular };
    }
    if (fontFamily === 'light') {
      return { fontFamily: theme.fontFamilyLight };
    }
  }, [fontFamily]);

  return (
    <Text {...props} style={[style, fontStyle]}>
      {children}
    </Text>
  );
};
