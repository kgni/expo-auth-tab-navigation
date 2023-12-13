import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';

import GoogleIcon from '../../../core/assets/icons/google-logo.svg';

import { SSOButton } from '@/core/components/Button/SSOButton/SSOButton';

interface Props {
  onPressDisabled?: boolean;
}

const SSOButtons = ({ onPressDisabled }: Props) => {
  const { formatMessage } = useIntl();
  return (
    <View style={{ gap: 12 }}>
      <SSOButton
        size='medium'
        text={formatMessage({ id: 'signup.google' })}
        icon={<GoogleIcon width={20} height={20} />}
        onPress={onPressDisabled ? undefined : () => console.log('google')}
      />
      <SSOButton
        size='medium'
        text={formatMessage({ id: 'signup.facebook' })}
        icon={<FontAwesome5 name='facebook' size={20} color={'#4267B2'} />}
        onPress={onPressDisabled ? undefined : () => console.log('facebook')}
      />
    </View>
  );
};

export default SSOButtons;
