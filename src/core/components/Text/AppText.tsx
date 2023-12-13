import React, { ComponentProps, PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { getFontWeightStyles, getTextStylesByVariant } from './AppText.styles';
import { AppTextVariants, FontWeights } from './AppText.utils';

interface Props extends ComponentProps<typeof Text> {
  variant?: AppTextVariants;
  fontWeight?: FontWeights;
}

const AppText = ({
  variant = 'body',
  fontWeight,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  const defaultStyles = getTextStylesByVariant(variant);
  const fontWeightStyle = getFontWeightStyles(fontWeight);
  return (
    <Text
      {...rest}
      style={[defaultStyles, { fontFamily: fontWeightStyle }, rest.style]}>
      {children}
    </Text>
  );
};

export default AppText;
