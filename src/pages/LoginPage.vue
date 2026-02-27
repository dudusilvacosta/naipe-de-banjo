<template>
  <div class="login">
    <div class="q-pa-md" style="width: 100%; max-width: 400px">
      <div class="text-h4 q-mb-md">Login</div>

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        style="display: flex; flex-direction: column; align-items: center"
      >
        <q-input filled v-model="email" label="Email *" style="width: 100%" />
        <q-input filled type="password" v-model="senha" label="Senha *" style="width: 100%" />

        <div>
          <q-btn label="Entrar" type="submit" color="primary" />
          <q-btn outline label="Limpar" type="reset" color="primary" class="q-ml-sm" />
        </div>

        <q-btn flat style="color: black" label="Criar Conta" @click="irParaCadastro" />
        <q-btn flat style="color: black" label="Voltar ao Site" @click="irParaInicio" />
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';

export default {
  setup() {
    const email = ref('');
    const senha = ref('');
    const router = useRouter();
    const authStore = useAuthStore();

    async function onSubmit() {
      try {
        await authStore.signIn(email.value, senha.value);
        await router.push('/dashboard');
      } catch (error) {
        alert(error);
      }
    }

    function onReset() {
      email.value = '';
      senha.value = '';
    }

    async function irParaCadastro() {
      await router.push('/criar-conta');
    }

    async function irParaInicio() {
      await router.push('/');
    }

    return {
      email,
      senha,
      onSubmit,
      onReset,
      irParaCadastro,
      irParaInicio,
    };
  },
};
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
