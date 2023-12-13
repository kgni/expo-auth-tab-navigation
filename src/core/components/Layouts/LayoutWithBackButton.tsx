import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { COLORS } from '@/core/styles/colors';

interface Props {
  title?: string;
  withBackButton?: boolean;
  centerTitle?: boolean;
}

const Layout = ({
  title,
  withBackButton,
  centerTitle,
  children,
}: PropsWithChildren<Props>) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: insets.top + 16,
      }}
      bounces={false}
      keyboardShouldPersistTaps='handled'>
      <Feather
        name='chevron-left'
        color={COLORS.black}
        size={24}
        onPress={router.back}
        style={{ zIndex: 999 }}
        suppressHighlighting
      />
      {children}
    </ScrollView>
  );
};

export default Layout;
