import { useRouter } from 'expo-router';
import React from 'react';
import { useIntl } from 'react-intl';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/core/components/Button/Button/Button';
import SpaceY from '@/core/components/Spacing/SpaceY';

const InitialPage = () => {
  const { formatMessage } = useIntl();
  const router = useRouter();
  return (
    <>
      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <SafeAreaView
          style={{ paddingHorizontal: 32, flex: 1, justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', gap: 12 }}>
            <Text style={{ fontSize: 30 }}>Welcome to VASKE.APP</Text>
            <Text style={{ fontSize: 20 }}>
              Your ultimate laundry companion!
            </Text>
          </View>
          <SpaceY height={32} />

          <View style={{ gap: 14 }}>
            <Button
              text={formatMessage({ id: 'button.login' })}
              onPress={() => router.push('/login')}
            />
            <Button
              variant='secondary'
              text={formatMessage({ id: 'button.register' })}
              onPress={() => router.push('/register')}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default InitialPage;
