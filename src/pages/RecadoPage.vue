<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Recados" icon="notifications" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="[
          'Seja bem-vindo(a)! 🎉 Este espaço é dedicado exclusivamente às suas notificações. Aqui você receberá avisos importantes como atualizações, novidades, mensagens e lembretes relevantes para você. Tudo organizado e ao seu alcance — fique de olho nas notificações e aproveite ao máximo o nosso app!',
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
