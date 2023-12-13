import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Layout from '@/core/components/Layouts/LayoutWithBackButton';
import LoginForm from '@/features/auth/components/Forms/LoginForm/LoginForm';

export default function LoginPage() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Layout>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: -insets.top - 16,
          }}>
          <LoginForm />
        </View>
      </Layout>
    </>
  );
}
