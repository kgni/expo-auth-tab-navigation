import { supabase } from '@/core/config/supabase.config';

class AuthService {
  static async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    return { data, error };
  }

  static async logout() {
    const { error } = await supabase.auth.signOut();

    return { error };
  }

  static async register(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    return { data, error };
  }
}

export default AuthService;
