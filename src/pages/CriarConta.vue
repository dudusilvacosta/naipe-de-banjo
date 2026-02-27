<template>
  <div class="login">
    <div class="q-pa-md" style="width: 100%; max-width: 400px">
      <div class="text-h4 q-mb-md">Criar Conta</div>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <q-input filled v-model="email" label="Email *" lazy-rules style="width: 100%" />

        <q-input
          filled
          type="password"
          v-model="senha"
          label="Senha *"
          lazy-rules
          style="width: 100%"
        />

        <div>
          <q-btn label="Criar conta" type="submit" color="primary" />
          <q-btn outline label="Limpar" type="reset" color="primary" class="q-ml-sm" />
        </div>
        <q-btn flat style="color: goldenrod" label="Voltar" @click="irParaLogin" />
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
    const email = ref('');
    const senha = ref('');
    const router = useRouter();

    return {
      senha,
      email,

      async onSubmit() {
        const { data, error } = await supabase.auth.signUp({
          email: email.value,
          password: senha.value,
        });

        if (error) {
          console.error('Error signing up:', error);
          return;
        }

        alert('Conta criada com sucesso! Verifique seu email para confirmar a conta.');
        console.log('User signed up successfully:', data);
        await router.push('/');
      },

      onReset() {
        email.value = '';
        senha.value = '';
      },

      async irParaLogin() {
        await router.push('/login');
      },
    };
  },
};
</script>
