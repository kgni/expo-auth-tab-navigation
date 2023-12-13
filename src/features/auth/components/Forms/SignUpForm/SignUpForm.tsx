// Formik x React Native example
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Formik } from 'formik';
import React, { useState } from 'react';
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
import AuthSignUpErrorService from '@/features/auth/services/errors/AuthSignUpErrorService';

const SignUpForm = () => {
  const { formatMessage } = useIntl();
  const { registerSchema } = useValidation();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isPasswordRepeatHidden, setIsPasswordRepeatHidden] = useState(true);

  return (
    // TODO: when using this in the screen, it needs to be wrapped in a scrollview that has keyboardShouldPersistTaps='handled'. Probably also need to be wrapped in a SafeAreaView
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={registerSchema}
      onSubmit={async (values, actions) => {
        const { error, data } = await AuthService.register(
          values.email,
          values.password,
        );

        if (error) {
          Alert.alert(`${error}`);
          actions.setSubmitting(false);
          actions.setErrors({
            email: AuthSignUpErrorService.getErrorMessage(error, formatMessage),
          });
        }
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
        touched,
        values,
        errors,
      }) => {
        return (
          <>
            <View style={{ gap: 16 }}>
              <AppTextInput
                onChangeText={handleChange('firstName')}
                onBlur={() => handleBlur('firstName')}
                placeholder={formatMessage({ id: 'signup.firstname' })}
                autoCapitalize='words'
                value={values.firstName}
                valid={touched.firstName && !errors.firstName}
                error={
                  touched.firstName && errors.firstName ? errors.firstName : ''
                }
              />
              <AppTextInput
                onChangeText={handleChange('lastName')}
                onBlur={() => handleBlur('lastName')}
                placeholder={formatMessage({ id: 'signup.lastname' })}
                autoCapitalize='words'
                value={values.lastName}
                valid={touched.lastName && !errors.lastName}
                error={
                  touched.lastName && errors.lastName ? errors.lastName : ''
                }
              />
            </View>
            <Divider
              width='80%'
              height={0.75}
              marginTop={32}
              marginBottom={32}
            />
            <View style={{ gap: 16 }}>
              <AppTextInput
                onChangeText={handleChange('email')}
                onBlur={() => handleBlur('email')}
                placeholder={formatMessage({ id: 'signup.email' })}
                value={values.email.toLowerCase()}
                valid={touched.email && !errors.email}
                error={touched.email && errors.email ? errors.email : ''}
                autoComplete='email'
                autoCapitalize='none'
                rightIcon={
                  <FontAwesome5
                    name='envelope'
                    size={20}
                    color={
                      touched.email && errors.email
                        ? COLORS.danger80
                        : touched.email && !errors.email
                        ? COLORS.success80
                        : COLORS.gray20
                    }
                  />
                }
              />
              <AppTextInput
                onChangeText={handleChange('password')}
                onBlur={() => handleBlur('password')}
                placeholder={formatMessage({ id: 'signup.password' })}
                autoCapitalize='none'
                value={values.password}
                valid={touched.password && !errors.password}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
                onIconPress={() => setIsPasswordHidden(!isPasswordHidden)}
                rightIcon={
                  <FontAwesome5
                    name={isPasswordHidden ? 'eye' : 'eye-slash'}
                    size={20}
                    color={
                      touched.password && errors.password
                        ? COLORS.danger80
                        : touched.password && !errors.password
                        ? COLORS.success80
                        : COLORS.gray20
                    }
                  />
                }
                secureTextEntry={isPasswordHidden}
              />
              <AppTextInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => handleBlur('confirmPassword')}
                placeholder={formatMessage({ id: 'signup.password_repeat' })}
                autoCapitalize='none'
                value={values.confirmPassword}
                valid={touched.confirmPassword && !errors.confirmPassword}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
                onIconPress={() =>
                  setIsPasswordRepeatHidden(!isPasswordRepeatHidden)
                }
                rightIcon={
                  <FontAwesome5
                    name={isPasswordRepeatHidden ? 'eye' : 'eye-slash'}
                    size={20}
                    // TODO: REFACTOR THE ICON COLOR, WHEN WE GET OUR CUSTOM ICONS. INSTEAD WE ARE JUST GOING TO PASS A STRING FOR THE ICON INTO THE AppTextInput COMPONENT
                    color={
                      touched.confirmPassword && errors.confirmPassword
                        ? COLORS.danger80
                        : touched.confirmPassword && !errors.confirmPassword
                        ? COLORS.success80
                        : COLORS.gray20
                    }
                  />
                }
                secureTextEntry={isPasswordRepeatHidden}
              />
            </View>
            <SpaceY height={32} />
            <Button
              text={formatMessage({ id: 'button.register' })}
              onPress={() => handleSubmit()}
              isLoading={isSubmitting}
              disabled={!isValid}
            />
            {/* TODO: add link to go to Login Page if you already have an account -> should replace the route don't add it to the stack */}
            <Divider
              width='80%'
              height={0.75}
              marginTop={32}
              marginBottom={32}
            />

            <SSOButtons onPressDisabled={isSubmitting} />
          </>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
