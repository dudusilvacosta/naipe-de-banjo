<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pl-md q-pt-md q-pr-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Notificações" icon="notifications" />
    </q-breadcrumbs>
    <div style="width: 100%; letter-spacing: 1px; max-width: 400px; font-weight: 500">
      <q-chat-message
        v-for="(value, index) in notificacoes"
        :key="index"
        bg-color="blue-9"
        text-color="white"
        :text="[value.msg]"
        class="q-mb-md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';

const showProgress = ref(true);
const notificacoes = ref<{ msg: string }[]>([]);

async function buscaNotificacoes() {
  const { data, error } = await supabase.from('notificacoes').select('*');

  if (error) {
    console.log(error);
    return;
  }

  notificacoes.value = data;
}

onMounted(() => {
  void buscaNotificacoes();
  showProgress.value = false;
});
</script>
