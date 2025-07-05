<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md" style="width: 100%; max-width: 40rem; margin: 0 auto">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Xote" />
    </q-breadcrumbs>
    <div class="q-pa-md">
      <q-list padding bordered class="rounded-borders">
        <!-- Domingo de Tartde -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Domingo de Tartde"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">
                A &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
              </p>
              <p>Quero que me encontre da janela do busão</p>
              <p class="vermelho">
                Bm &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
              </p>
              <p>Chamando meu nome feliz de emoção</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; A
              </p>
              <p>Aceno pra você surpresa na rua</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
              </p>
              <p>Quando menos perceber</p>
              <p class="vermelho">
                E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A
              </p>
              <p>Lá se foi minha doçura</p>
              <p class="vermelho">
                E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; A
              </p>
              <p>Queria ter gritado “quero te ver”</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; Bm &nbsp; &nbsp; E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; A
              </p>
              <p>Num domingo de tarde só eu e você</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A
              </p>
              <p>Depois tem carimbó quem abre é a lua</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
              </p>
              <p>Vou dizer quando acabar</p>
              <p class="vermelho">
                E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
              </p>
              <p>“minha dança ainda é tua”</p>

              <p class="vermelho">
                D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp;A
                &nbsp;&nbsp;D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp;A
              </p>
              <p>Voa bem-te-vi &nbsp; Voa pra avisar</p>
              <p class="vermelho">
                D &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp; &nbsp; A &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; F#m
              </p>
              <p>Cante, conte pra ela, passarinho</p>
              <p class="vermelho">
                D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
                &nbsp; &nbsp; &nbsp; &nbsp;A
              </p>
              <p>Que ela é meu cantar</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
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

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.vermelho {
  color: red;
}
</style>
