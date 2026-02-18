<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Roda cantada" />
    </q-breadcrumbs>
    <div v-for="(musicas, genero) in generosCifras" :key="genero">
      <p class="text-body1">{{ genero }}</p>
      <q-list padding bordered class="rounded-borders">
        <q-expansion-item
          v-for="(musica, index) in musicas"
          :key="index"
          dense
          dense-toggle
          expand-separator
          :label="musica.nome + ' - ' + musica.tom"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section class="q-pt-none">
              <p class="autor">{{ musica.autor }}</p>
              <div v-html="musica.cifra"></div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
    <p class="text-body1">Xote</p>
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
          <q-card-section class="q-pt-none">
            <p class="autor">Ronaldo Silva</p>
            <p class="vermelho">Ab &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Db</p>
            <p>Nos olhos tá escrito</p>
            <p class="vermelho">
              Ab &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ebm &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ab
            </p>
            Tá escrito que você namora
            <p class="vermelho">
              Db &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cm &nbsp; &nbsp; &nbsp; &nbsp; Fm
            </p>
            <p>Que você serena e chora</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb7 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Eb7 &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp;Ab &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </p>
            <p>Com saudade desse amor</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ab7
            </p>
            <p>Olhei pro céu</p>
            Pro chão você no meu caminho
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Db
            </p>
            <p>Também vou chorar baixinho</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ab
            </p>
            <p>Se você disser que não</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Db &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ab
            </p>
            <p>Tem zabumbeiro na zabumba marcação</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bbm &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Cb7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Ab
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
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Db
            </p>
            <p>Meu namoro não tem pressa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Db &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; G#
            </p>
            <p>Meu amor pode esperar</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Relva -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Relva"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="autor">Allan Carvalho e Ronaldo Silva</p>
            <p class="vermelho">Gm</p>
            <p>Não vejo mais pela relva</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; D7
            </p>
            <p>O balé do beija-flor</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>As cores das borboletas</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>Nem o perfume do Sol</p>

            <p class="vermelho">Gm</p>
            <p>Cadê o ipê-amarelo</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; D7
            </p>
            <p>O vento leve da flor</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>A livre voz do canário</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>O vago-lume do amor?</p>

            <p class="vermelho">Gm</p>
            <p>A morada que Deus nos criou</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>É um presente Divino de luz</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>Não descuide do, sim, da paisagem</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>Como quem joga pedra na cruz</p>

            <p class="vermelho">
              Gm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Assim que florescer, quando o bem voltar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Eu quero ver nos teu rosto, morena</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>A mesma alegria que tinhas no olhar</p>
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
          <q-card-section class="q-pt-none">
            <p class="autor">Iris da Selva</p>
            <p class="vermelho">A</p>
            <p>Quero que me encontre</p>
            <p class="vermelho">
              E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A
            </p>
            <p>da janela do busão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Bm
            </p>
            <p>Chamando meu nome</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>feliz de emoção</p>
            <p>Aceno pra você</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>surpresa na rua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Quando menos perceber</p>
            <p class="vermelho">
              E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>lá se foi minha doçura</p>
            <p>Queria ter gritado</p>
            <p class="vermelho">&nbsp;E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A</p>
            <p>“quero te ver”</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Num domingo de tarde</p>
            <p class="vermelho">E &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A</p>
            <p>só eu e você</p>
            <p>Depois tem carimbó</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A
            </p>
            <p>quem abre é a lua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Vou dizer quando acabar</p>
            <p class="vermelho">
              &nbsp;E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A
            </p>
            <p>“minha dança ainda é tua”</p>

            <p class="vermelho">
              D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp;A
              &nbsp;&nbsp;D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp;A
            </p>
            <p>Voa bem-te-vi &nbsp; Voa pra avisar</p>
            <p class="vermelho">
              D &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp; A &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Cante, conte pra ela, passarinho</p>
            <p class="vermelho">
              D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
              &nbsp; &nbsp; &nbsp;A
            </p>
            <p>Que ela é meu cantar</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Uirapuru -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Uirapuru"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section class="q-pt-none">
            <p class="vermelho">
              Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;B7
            </p>
            <p>Certa vez de montaria</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;Em
            </p>
            <p>Eu descia o Paraná</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp;Am
            </p>
            <p>O caboclo que remava</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;G
            </p>
            <p>Não parava de falar</p>

            <p class="vermelho">
              B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>ah, ah Não parava de falar</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp;B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>ah, ah Que caboclo falador</p>

            <p class="vermelho">
              Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; B7
            </p>
            <p>Me contou do lobisomem</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>Da mãe-d'água, do tajá</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7 &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Disse do Jurutai Que se ri pro luar</p>

            <p class="vermelho">
              B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>ah, ah Que se ri pro luar</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>ah, ah Que caboclo falador!</p>

            <p class="vermelho">
              Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; B7
            </p>
            <p>Que mangava de visagem</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>Que matou surucucú</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>E jurou com pavulagem</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7 &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;G
            </p>
            <p>Que pegou uirapuru</p>

            <p class="vermelho">
              B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>ah, ah Que pegou uirapuru</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
            </p>
            <p>ah, ah Que caboclo tentador!</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Caboclinho, meu amor</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Arranja um pra mim</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G
            </p>
            <p>Ando roxo pra pegar Unzinho assim</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>O diabo foi-se embora Não quis me dar</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;B7
            </p>
            <p>Vou juntar meu dinheirinho</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
            </p>
            <p>Pra poder comprar</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;B7
            </p>
            <p>Mas no dia que eu comprar</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>O caboclo vai sofrer</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;D7 &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Eu vou desassossegar O seu bem querer</p>

            <p class="vermelho">
              B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>ah, ah O seu bem querer</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
            </p>
            <p>ah, ah Ora deixa ele pra lá!</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from 'src/boot/supabase';

interface Musica {
  id: number | null;
  nome: string;
  tom: string;
  autor: string;
  genero: string;
  repertorio: string;
  status: string;
  cifra: string;
}

const showProgress = ref(true);
const generosCifras = ref<Record<string, Musica[]>>({});

async function carregarCifras() {
  const { data, error } = await supabase
    .from('musicas')
    .select('*')
    .eq('repertorio', 'Roda')
    .order('nome', { ascending: true });

  if (error) {
    console.log(error);
    return;
  }

  // Agrupa por gênero
  generosCifras.value = (data as Musica[]).reduce(
    (acc, musica) => {
      if (!acc[musica.genero]) acc[musica.genero] = [];
      acc[musica.genero]!.push(musica);
      return acc;
    },
    {} as Record<string, Musica[]>,
  );
}

onMounted(async () => {
  await carregarCifras();
  showProgress.value = false;
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
</style>
