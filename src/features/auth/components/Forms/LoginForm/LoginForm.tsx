// Formik x React Native example
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { useIntl } from 'react-intl';
import { Alert, View } from 'react-native';

import { Button } from '../../../../../core/components/Button/Button/Button';
import Divider from '../../../../../core/components/Divider/Divider';
import AppTextInput from '../../../../../core/components/Input/TextInput/TextInput';
import SpaceY from '../../../../../core/components/Spacing/SpaceY';
import SSOButtons from '../../SSOButtons';

import { useValidation } from '@/core/hooks/useValidation';
import { COLORS } from '@/core/styles/colors';
import AuthService from '@/features/auth/services/AuthService';
import AuthSignInErrorService from '@/features/auth/services/errors/AuthSignInErrorService';

const LoginForm = () => {
  const { formatMessage } = useIntl();
  const { loginSchema } = useValidation();
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={async (values, actions) => {
        const { error, data } = await AuthService.login(
          values.email,
          values.password,
        );
        if (error) {
          Alert.alert(`${error}`);
          actions.setSubmitting(false);
          actions.setErrors({
            email: AuthSignInErrorService.getErrorMessage(error, formatMessage),
            password: AuthSignInErrorService.getErrorMessage(
              error,
              formatMessage,
            ),
          });
        }

        if (data) {
          router.replace('/');
        }
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

        touched,
        values,
        errors,
      }) => {
        return (
          <>
            <View style={{ gap: 16 }}>
              <AppTextInput
                onChangeText={handleChange('email')}
                onBlur={() => handleBlur('email')}
                placeholder={formatMessage({ id: 'signup.email' })}
                value={values.email.toLowerCase()}
                error={touched.email && errors.email ? errors.email : ''}
                autoComplete='email'
                autoCapitalize='none'
                rightIcon={
                  <FontAwesome5
                    name='envelope'
                    size={20}
                    color={errors.email ? COLORS.danger80 : COLORS.gray20}
                  />
                }
              />
              <AppTextInput
                onChangeText={handleChange('password')}
                onBlur={() => handleBlur('password')}
                placeholder={formatMessage({ id: 'signup.password' })}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
                value={values.password}
                secureTextEntry
                rightIcon={
                  <FontAwesome5
                    name={'lock'}
                    size={20}
                    color={errors.email ? COLORS.danger80 : COLORS.gray20}
                  />
                }
              />
            </View>

            <SpaceY height={32} />
            <Button
              text={formatMessage({ id: 'button.login' })}
              onPress={() => handleSubmit()}
              isLoading={isSubmitting}
            />
            {/* TODO: add link to go to Signup Page if you don't have an account -> should replace the route don't add it to the stack */}
            <Divider width='80%' marginTop={32} marginBottom={32} />
            <SSOButtons onPressDisabled={isSubmitting} />
          </>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
