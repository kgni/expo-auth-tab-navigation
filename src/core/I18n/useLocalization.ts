import { useLocales } from 'expo-localization';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

import { DA, SupportedLanguages } from './locales';

/**
 * `useLocalization` determines the user's locale and translationMessages based on their selected language (shared preferences) or language from their phone settings.
 * @returns An object with two properties: "locale" and "translationMessages".
 */

export default function useLocalization() {
  const phoneLanguageCode = useLocales()[0].languageCode;
  const [languageCode, setPhoneLanguageCode] =
    useState<string>(phoneLanguageCode);

  let translationMessages;

  useEffect(() => {
    async function getLanguageCodeFromStorage() {
      const languageCode = await SecureStore.getItemAsync('locale');

      if (languageCode) {
        setPhoneLanguageCode(languageCode);
      }
    }
    getLanguageCodeFromStorage();
  }, []);

  switch (languageCode) {
    case SupportedLanguages.DA:
      translationMessages = DA;
      break;
    default:
      translationMessages = DA;
  }

  // TODO: create a function that changes the languageCode in the shared preferences

  return { locale: languageCode, translationMessages };
}
