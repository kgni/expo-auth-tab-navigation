import { useIntl } from 'react-intl';
import * as yup from 'yup';

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w!@#$%^&*?~()-]{8,}$/;

// This regex is used since the .email() method from yup is not working to validate the proper format of an email. https://github.com/jquense/yup#stringemailmessage-string--function-schema
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const { formatMessage } = useIntl();

export const useValidation = () => {
  const { formatMessage } = useIntl();

  const emailRules = yup
    .string()
    .required(() => formatMessage({ id: 'validation.email.required' }))
    .email(() => formatMessage({ id: 'validation.email.invalid' }))
    .matches(emailRegex, () =>
      formatMessage({ id: 'validation.email.invalid' }),
    );
  const passwordRules = yup
    .string()
    .required(() => formatMessage({ id: 'validation.password.required' }))
    .matches(passwordRegex, () =>
      formatMessage({ id: 'validation.password.regex' }),
    );

  const confirmPasswordRules = yup
    .string()
    .required(() =>
      formatMessage({ id: 'validation.confirmPassword.required' }),
    )
    .matches(passwordRegex, () =>
      formatMessage({ id: 'validation.password.regex' }),
    )
    .oneOf([yup.ref('password'), ''], () =>
      formatMessage({ id: 'validation.password.match' }),
    );

  const loginSchema = yup.object().shape({
    email: emailRules,
    password: yup
      .string()
      .required(() => formatMessage({ id: 'validation.password.required' })),
  });

  const registerSchema = yup.object().shape({
    firstName: yup
      .string()
      .required(() => formatMessage({ id: 'validation.firstName.required' })),
    lastName: yup
      .string()
      .required(() => formatMessage({ id: 'validation.lastName.required' })),
    email: emailRules,
    password: passwordRules,
    confirmPassword: confirmPasswordRules,
  });

  return { loginSchema, registerSchema };
};
