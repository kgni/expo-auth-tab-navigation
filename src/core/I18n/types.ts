import { DA } from './locales';

// As per the formatJS docs, this is the way to setup auto-completion for our IDs
declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof DA;
    }
  }
}
