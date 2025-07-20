<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Xote" />
    </q-breadcrumbs>
    <div class="q-pa-md">
      <q-list padding bordered class="rounded-borders">
        <!-- Ataiô -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Ataiô"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">G# &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#</p>
              <p>Nos olhos tá escrito</p>
              <p class="vermelho">
                C# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G# &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;D#m &nbsp; &nbsp; &nbsp; G#
              </p>
              Tá escrito que você namora
              <p class="vermelho">
                C# &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cm &nbsp; &nbsp; &nbsp; &nbsp; Fm
              </p>
              <p>Que você serena e chora</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb7 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;D#7 &nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp;G# &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </p>
              <p>Com saudade desse amor</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ab7
              </p>
              <p>Olhei pro céu</p>
              Pro chão você no meu caminho
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C#
              </p>
              <p>Também vou chorar baixinho</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#
              </p>
              <p>Se você disser que não</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;C# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G#
              </p>
              <p>Tem zabumbeiro na zabumba marcação</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bbm &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D#7 &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G#
              </p>
              <p>Sacode xote o arrasta-pé nesse salão</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ab7
              </p>
              <p>No passa a dança</p>
              <p>No passo que a dança dá</p>
              <p>Mesmo que você duvide</p>
              <p>Se espiche pra escorregar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#
              </p>
              <p>Meu namoro não tem pressa</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C# &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#
              </p>
              <p>Meu amor pode esperar</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
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
        <!-- Maio -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Maio"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">
                Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F
              </p>
              <p>Quando vem chegando maio</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;C
              </p>
              <p>Meu balaio já tem flor</p>
              <p class="vermelho">
                Bm7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Am
              </p>
              <p>Traz Batalhão na balança</p>
              <p class="vermelho">
                Bm7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;E7 &nbsp; &nbsp;
                &nbsp; Am
              </p>
              <p>faz chão da terra tremer</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm7 &nbsp; &nbsp; E7
                &nbsp; &nbsp;Am
              </p>
              <p>Buquê de flor no rosário</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm7 &nbsp; &nbsp; E7
                &nbsp; &nbsp;Am
              </p>
              <p>No calendário é São João</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; C
              </p>
              <p>Fogueira arde a fogueira</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;C
              </p>
              <p>Clareia o meu coração</p>
              <p class="vermelho">Bm7 &nbsp; &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp; &nbsp;Am</p>
              <p>Essa toada do tempo</p>
              <p class="vermelho">Bm7 &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp; &nbsp;Am</p>
              <p>Traz alegria e luz</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; C
              </p>
              <p>Pra clarear noite escura</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G7
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
              </p>
              <p>A Estrela D’Alva e a Luna</p>
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
