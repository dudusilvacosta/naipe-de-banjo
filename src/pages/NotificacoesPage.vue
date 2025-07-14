<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pl-md q-pt-md q-pr-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Notificações" icon="notifications" />
    </q-breadcrumbs>
    <div>
      <div style="width: 100%; letter-spacing: 1px; max-width: 400px; font-weight: 500">
        <q-chat-message
          :text="[
            '🎉 Este espaço é dedicado exclusivamente às suas notificações. Aqui você receberá avisos importantes como atualizações, novidades, mensagens e lembretes relevantes para você. Tudo organizado e ao seu alcance. Fique de olho nas notificações e aproveite ao máximo o nosso app!',
          ]"
          class="q-mb-md"
        />

        <q-chat-message
          :text="[
            '📢 Aviso Importante Este site ainda está em fase de desenvolvimento. Por isso, pedimos que o compartilhamento seja feito somente entre os membros do grupo de testes. 👀 Encontrou algum erro, bug ou tem alguma sugestão? Sua opinião é muito importante! Por favor, compartilhe com a equipe de desenvolvimento. 🙏 Agradecemos pela colaboração e paciência!',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTimeout } from 'quasar';

const showProgress = ref(true);
const { registerTimeout } = useTimeout();

onMounted(() => {
  registerTimeout(() => {
    showProgress.value = false;
  }, 1000); // 1 segundo = 1000 ms
});
</script>
