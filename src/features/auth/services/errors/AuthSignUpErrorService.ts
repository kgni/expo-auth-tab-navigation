// Currently we only get the error message and a general status code, but no specific error code. Therefore we have to parse the error message to get the specific error code and translate it - which can break if the message changes in the future. Currently there is an open feature request to add specific error codes: https://github.com/supabase/gotrue/issues/915

// To see an list of most error messages, see: https://docs.google.com/spreadsheets/d/1GRFrER_WrleH7XgrzM_wHnZNNTtdH1Bc0cGa5kvyOQM/edit#gid=417369651

import { AuthError } from '@supabase/supabase-js';
import { IntlShape } from 'react-intl';

class AuthSignUpErrorService {
  static getErrorMessage(
    error: AuthError | null,
    formatMessage: IntlShape['formatMessage'],
  ) {
    if (!error?.message) {
      return formatMessage({ id: 'error.common' });
    }

    switch (true) {
      case error.message.toLowerCase().includes('user already registered'):
        return formatMessage({ id: 'error.auth.email.exists' });

      default:
        return formatMessage({ id: 'error.common' });
    }
  }
}

export default AuthSignUpErrorService;
