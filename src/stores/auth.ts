import { defineStore } from 'pinia';
import { supabase } from 'src/boot/supabase';
import type { Session, User } from '@supabase/supabase-js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    session: null as Session | null,
    loading: true,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    async loadSession() {
      const { data } = await supabase.auth.getSession();
      this.session = data.session;
      this.user = data.session?.user ?? null;
      this.loading = false;
    },

    async signUp(email: string, password: string, nome: string) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { nome },
        },
      });

      if (error) throw error;
      return data;
    },

    async signIn(email: string, password: string) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      this.session = data.session;
      this.user = data.user;
    },

    async signOut() {
      await supabase.auth.signOut();
      this.user = null;
      this.session = null;
    },
  },
});
