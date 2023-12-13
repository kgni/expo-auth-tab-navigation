import React, { ComponentProps, PropsWithChildren } from 'react';
import { View } from 'react-native';

interface Props extends ComponentProps<typeof View> {}

const Card = ({ ...rest }: PropsWithChildren<Props>) => {
  return (
    <View
      {...rest}
      style={{
        alignSelf: 'stretch',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        padding: 52,
      }}>
      {rest.children}
    </View>
  );
};

export default Card;
