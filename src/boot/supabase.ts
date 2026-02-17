import { defineBoot } from '#q-app/wrappers';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export default defineBoot(({ app }) => {
  app.config.globalProperties.$supabase = supabase;
});
