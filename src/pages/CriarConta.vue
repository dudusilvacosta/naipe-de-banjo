<template>
  <div class="login">
    <div class="q-pa-md" style="width: 100%; max-width: 400px">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <q-input filled v-model="nome" label="Email *" lazy-rules style="width: 100%" />

        <q-input
          type="password"
          filled
          v-model="email"
          label="Senha *"
          lazy-rules
          style="width: 100%"
        />

        <div>
          <q-btn label="Entrar" type="submit" color="primary" />
          <q-btn outline label="Limpar" type="reset" color="primary" class="q-ml-sm" />
        </div>
        <q-btn flat style="color: goldenrod" label="Criar Conta" />
      </q-form>
    </div>
  </div>
</template>
<script lang="ts">
import { supabase } from 'src/boot/supabase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const nome = ref('');
    const email = ref('');
    const route = useRouter();
    const router = useRouter();

    return {
      nome,
      email,

      async onSubmit() {
        const { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: nome.value,
          options: {
            emailRedirectTo: 'https://example.com/welcome',
          },
        });

        if (error) {
          console.error('Error signing up:', error);
          return;
        }

        console.log('User signed up successfully:', data);
        await router.push('/dashboard');
      },

      onReset() {
        nome.value = '';
        email.value = '';
      },
    };
  },
};
</script>
