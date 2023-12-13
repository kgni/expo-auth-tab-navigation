import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Layout from '@/core/components/Layouts/LayoutWithBackButton';
import SignUpForm from '@/features/auth/components/Forms/SignUpForm/SignUpForm';

export default function RegisterPage() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Layout>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: -insets.top - 16,
          }}>
          <SignUpForm />
        </SafeAreaView>
      </Layout>
    </>
  );
}
