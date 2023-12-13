import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { supabase } from '@/core/config/supabase.config';

export const supabaseApi = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      queryFn: async () => {
        const { data, error } = await supabase.from('employees').select('*');

        if (error) {
          return { error };
        }

        return { data };
      },
    }),
  }),
});

export const { useGetEmployeesQuery } = supabaseApi;
