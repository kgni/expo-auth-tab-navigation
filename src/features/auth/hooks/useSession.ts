import { supabase } from '@/core/config/supabase.config';
import { Session } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const useSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  async function getSession() {
    const { data: session, error } = await supabase.auth.getSession();
    if (error) {
      throw error;
    }
    setSession(session.session);
  }

  useEffect(() => {
    getSession();
  });

  return session;
};

export default useSession;
