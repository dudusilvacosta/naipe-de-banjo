<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Extras" />
    </q-breadcrumbs>
    <p class="text-body1">Carimbó</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Barreira do Mar -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Barreira do Mar"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">André Nascimento</p>

            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>La na barreira do mar eu vi!</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>As tribos tocando tambor pra lua (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>A noite parece que vai me encantar,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Ouvindo o vibrado do maracá. (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; D7&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Gm
            </p>
            <p>Quem manda no Marajó é a maré!</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Quem manda na maré é a lua! (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>A noite parece que vai me encantar,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Ouvindo o vibrado do maracá. (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Cachaça, Aruãs, Formigas!</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Aráras, Mundis, Maruanázes! (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7 &nbsp; &nbsp; &nbsp; &nbsp;
              Gm
            </p>
            <p>Em quarto crescente maré lancei!</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Dm
            </p>
            <p>Busquei na maré minguante é morta! (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>A noite parece que vai me encantar,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Ouvindo o vibrado do maracá. (2x)</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Na barreira do mar, eu vi...</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; A7&nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Na barreira do mar, eu vi...</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Na barreira do mar, eu vi...</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; A7&nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Na barreira do Mar, Marajó.</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Mar aqui jó -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Mar aqui jó"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">Gilson Sobreiro E Acácio Cardoso</p>

            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Mar aqui, Mar aqui, mar aqui ,Mar aqui Jo</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb
            </p>
            <p>Mar aqui, Mar aqui, mar aqui ,Mar aqui Jo</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Mar aqui, Mar aqui, mar aqui ,Mar aqui Jo</p>
            <p class="vermelho">Dm &nbsp; &nbsp; &nbsp;A7</p>
            <p>É Marajó ....</p>
            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
            </p>
            <p>Tuas belezas cantadas pelos poetas</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Dm &nbsp; A7
            </p>
            <p>Matas virgens,campos verdes,belas praias.</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
            </p>
            <p>No suor e no gingado do caboclo</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp; A7
            </p>
            <p>Do tapuio,tapuio marajoara.</p>

            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
            </p>
            <p>Ao luar sai o boto pelas festas</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp;&nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; Dm &nbsp; &nbsp; A7
            </p>
            <p>Para encantar e seduzir moças donzelas.</p>

            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Lá no rio a Iara entoou um canto</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp;&nbsp;A7
            </p>
            <p>Para agarrar os moços La da tapera.</p>

            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Cai á noite e se acende a lamparina</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;Dm &nbsp; &nbsp;A7
            </p>
            <p>Mocho pronto,curumim senta na beira.</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
            </p>
            <p>Para escutar dos mais velhos as estórias,</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dm &nbsp; A7
            </p>
            <p>De visagem e de matinta pereira.</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Se Anamaitá -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Se Anamaitá"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">Coletivo Artivista Mairi</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Borari, Borari,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Borari, Borari,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Arapium, Arapium,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Arapium, Arapium,</p>
            <p class="vermelho">Em</p>
            <p>Se anamaitá, (2X)</p>
            <p class="vermelho">Bm</p>
            <p>Tupayú</p>
            <p>Tapajó</p>
            <p>Tupinambá</p>
            <p>Munduruku</p>
            <p>Maytapú</p>
            Kumarú
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Três Marias -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Três Marias"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">Iris da Selva</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              F#m &nbsp; D &nbsp; Bm
            </p>
            <p>Calma Maria</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>Não conte assim seus planos</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; D
            </p>
            <p>Pra qualquer pessoa</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Que atravessa a porta</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
            <p>Você não conhece</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>&nbsp; &nbsp; &nbsp; O território alheio</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D
            </p>
            <p>Você se entristece</p>
            <p class="vermelho">
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>&nbsp; &nbsp; &nbsp; E eu vou falar porque</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Eu gosto quando você assovia</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Tudo fica leve</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
            <p>Você não percebe mas</p>
            <p class="vermelho">
              &nbsp; &nbsp; Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>A casa inteira fica alegre</p>
            <p class="vermelho">F#m &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp;Bm &nbsp; C#7</p>
            <p>Você &nbsp;tem a for &nbsp; ça</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; Bm &nbsp; C#7</p>
            <p>Do vento</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm &nbsp; &nbsp;C#7 &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Você &nbsp; é mais forte do que não diz</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
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
.autor {
  color: #666;
  font-style: italic;
}

p {
  margin: 0;
  padding: 0;
}

.vermelho {
  color: red;
}
</style>
