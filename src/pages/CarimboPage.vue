<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Carimbó" />
    </q-breadcrumbs>
    <q-list padding bordered class="rounded-borders">
      <!-- Borboleta de Asa Amarela -->
      <q-expansion-item dense dense-toggle expand-separator label="Borboleta de Asa Amarela"
        header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Mestre Verequete</p>
            <p class="vermelho"></p>
            <p>Moça bonita que tá na janela</p>
            <p class="vermelho"></p>
            <p>Borboleta da asa amarela</p>
            <p class="vermelho"></p>
            <p>Moça bonita que tá na janela</p>
            <p class="vermelho"></p>
            <p>Borboleta da asa amarela</p>
            <p class="vermelho"></p>
            <p>Amarela, amarela, amarela</p>
            <p class="vermelho"></p>
            <p>Borboleta da asa amarela</p>
            <p class="vermelho"></p>
            <p>Amarela, amarela, amarela</p>
            <p class="vermelho"></p>
            <p>Borboleta da asa amarela</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Carimbó da Ilha -->
      <q-expansion-item dense dense-toggle expand-separator label="Carimbó da Ilha" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm
            </p>
            <p>Os versos de maiandeua carrego no coração</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7
            </p>
            <p>Em minhas asas de vidro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;F#m
            </p>
            <p>Canção de vento e de chão</p>
            <p class="vermelho">
              &nbsp; &nbsp; F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; A
            </p>
            <p>Canoa, veloz maresia balança no mar lá fora</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Maré não está pra peixe já é hora de ir embora</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm
            </p>
            <p>Vagueia no mar, vagueia vagueia na imensidão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp; &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Vaguei, linda sereia nos versos dessa canção</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;C#7
            </p>
            <p>Chico Braga eu me lembro batucando na rua</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Falando que a princesa nasceu do sol e da lua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
            </p>
            <p>Qualquer lugar da ilha encanta na pedra creia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;F#m
            </p>
            <p>Que a menina morena à noite, virou sereia</p>
            <p class="vermelho">
              F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Vagueia no mar, vagueia vagueia na imensidão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
            </p>
            <p>Vaguei, linda sereia nos versos dessa canção</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Carimbó do Marajó -->
      <q-expansion-item dense dense-toggle expand-separator label="Carimbó do Marajó" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Dança carimbó do Marajó</p>
            <p class="vermelho">
              A7 &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dm &nbsp;&nbsp; D7
            </p>
            <p>Dança carimbó lá da barreira</p>
            <p class="vermelho">
              Gm &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Dança no balanço do tambor</p>
            <p class="vermelho">
              Bb &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Dança carimbó da cachoeira</p>
            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>A roda girando eu quero ver</p>
            <p class="vermelho">
              G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Ver girando a roda que beleza</p>
            <p class="vermelho">
              G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp;C &nbsp;B7
            </p>
            <p>Ver a flor no galho da roseira</p>
            <p class="vermelho">
              Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; D
            </p>
            <p>Pelo vento forte perfumar</p>
            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Dança no balanço do milheiro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Dança no rufar desse tambor</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7</p>
            <p>Dança quando for raiando o dia</p>
            <p class="vermelho">
              Bb &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>No curral do boi do Piticaia</p>
            <p class="vermelho">
              Bb &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Dançarina vem girando a saia</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Chama Verequete -->
      <q-expansion-item dense dense-toggle expand-separator label="Chama Verequete" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Mestre Verequete</p>
            <p class="vermelho">
              Bb &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7
            </p>
            <p>Chama Verequete, ô, ô, ô</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb
            </p>
            <p>Chama Verequete, ô, ô, ô, ô</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7
            </p>
            <p>Chama Verequete, ô, ô, ô</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb
            </p>
            <p>Chama Verequete</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7
            </p>
            <p>Chama Verequete, Oh! Verê</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb
            </p>
            <p>Oi chama Verequete, Oh! Verê</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7</p>
            <p>Ogum Balailê, pelejar, pelejar</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb</p>
            <p>Ogum balaiê velejá velejá</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7</p>
            <p>Ogum balaiê velejá velejá</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb</p>
            <p>Ogum balaiê velejá velejá</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7</p>
            <p>Ogum ogum tatara com deus</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb</p>
            <p>Papai ogum tatara com deus</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F7</p>
            <p>Ogum ogum tatara com deus</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bb</p>
            <p>Papai ogum tatara com deus</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Curió do Bico Doce -->
      <q-expansion-item dense dense-toggle expand-separator label="Curió do Bico Doce" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Gonzaga Blantez</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dm</p>
            <p>Curió do bico doce</p>
            <p>Passarinho quem te trouxe</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; A
            </p>
            <p>Pra chamar meu carimbó</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Gm &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Gm &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Foi Verequete Verê, foi Verequete Verê</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Foi Verequete, foi Lucindo e Cupijó</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; A
            </p>
            <p>Na sombra do cajueiro, ô, ô, ô, ô</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Dm
            </p>
            <p>Lá no fundo do quintal</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;A
            </p>
            <p>A moça que roda a saia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Gm &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Dm
            </p>
            <p>É mimo de Marambaia na roda de carimbó</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Dança do carimbó (Dona Maria) -->
      <q-expansion-item dense dense-toggle expand-separator label="Dança do carimbó (Dona Maria)"
        header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Pinduca</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
            </p>
            <p>Dona Maria que dança é essa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Que a gente dança só</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
            </p>
            <p>Dona Maria que dança é essa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>É carimbó, é carimbó</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Braço pra cima, braço pra baixo</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>Agora eu já sei como é que é</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              C7
            </p>
            <p>Só falta bater a mão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Batendo também o pé</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              C7
            </p>
            <p>Só falta bater a mão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;F
            </p>
            <p>Batendo também o pé</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Embarca Morena Embarca -->
      <q-expansion-item dense dense-toggle expand-separator label="Embarca Morena Embarca" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Pinduca</p>
            <p class="vermelho">
              F
            </p>
            <p>Embarca, morena, embarca</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>molha o pé mas não molha a meia</p>
            <p class="vermelho">
              Bb &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Viemos de nossa terra</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>fazer barulho na terra alheia</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Meninda bonita (Anel de ouro) -->
      <q-expansion-item dense dense-toggle expand-separator label="Meninda bonita (Anel de ouro)"
        header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Mestre Lucindo</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Gm
            </p>
            <p>A menina bonita Tens anel de ouro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>Parece um tesouro o dedinho dela</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Gm
            </p>
            <p>A menina bonita Tens anel de ouro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>Parece um tesouro o dedinho dela</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>Ai quem me dera que eu fosse rico</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F
            </p>
            <p>Se eu tivesse dinheiro casaria com ela</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F
            </p>
            <p>Ai quem me dera que eu fosse rico</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F
            </p>
            <p>Se eu tivesse dinheiro casaria com ela</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- No Meio do Pitiú -->
      <q-expansion-item dense dense-toggle expand-separator label="No Meio do Pitiú" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Dona Onete</p>
            <p class="vermelho">Dm</p>
            <p>A garça namoradeira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Namora o malandro urubu</p>
            <p>Eles passam a tarde inteira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Causando o maior rebu</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Na doca do Ver-o-Peso</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú, no meio do Pitiú</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú, no meio do Pitiú</p>
            <p class="vermelho">
              Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Eu fui cantar carimbó</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp;Dm
            </p>
            <p>Lá no Ver-o-Peso</p>
            <p>Urubu sobrevoando</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Eu logo pude prever</p>
            <p>Parece que vai chover</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Dm
            </p>
            <p>Parece que vai chover</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Depois que a chuva passar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Vou cantar carimbó pra você</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú, no meio do Pitiú</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú, no meio do Pitiú</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Urubu malandro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; Dm
            </p>
            <p>Foi passear lá no Marajó</p>
            <p>Comeu de tudo</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
            </p>
            <p>Mas vivia numa tristeza só</p>
            <p>Urubu lhe perguntou</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>O que se passa, compadre?</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Tô com saudade da minha branca</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Do Ver-o-Peso, da sacanagem</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;A7
            </p>
            <p>Lá eu sou pop star</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio da malandragem</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Fico bem na foto</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Na entrevista e na reportagem</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú, no meio do Pitiú</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>No meio do Pitiú, no meio do Pitiú</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Pescador -->
      <q-expansion-item dense dense-toggle expand-separator label="Pescador" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Mestre Lucindo</p>
            <p class="vermelho">
              Gm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>Pescador pescador porque é</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>que no mar não tem jacaré ?</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>Pescador pescador porque foi,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>que no mar não tem peixe boi ?</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7
            </p>
            <p>Eu quero saber a razão</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>que no mar não tem tubarão ?</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D7
            </p>
            <p>Eu quero saber porque é</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>que no mar não tem jacaré ?</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb
            </p>
            <p>Ah! Como é bom pescar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D7 &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>na beira mar em noite de luar</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bb
            </p>
            <p>Ah! Como é bom pescar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D7 &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>na beira mar em noite de luar</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Relâmpago -->
      <q-expansion-item dense dense-toggle expand-separator label="Relâmpago" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="vermelho"></p>
            <p>Tá chovendo, tá relampeando,</p>
            <p class="vermelho"></p>
            <p>tá trovejando, tá relampeando</p>
            <p class="vermelho"></p>
            <p>Tá chovendo, tá relampeando,</p>
            <p class="vermelho"></p>
            <p>tá trovejando, tá relampeando</p>
            <p class="vermelho"></p>
            <p>Roda pião, roda pião, roda pião no chão</p>
            <p class="vermelho"></p>
            <p>Roda pião, roda pião, roda pião no chão</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Três Marias -->
      <q-expansion-item dense dense-toggle expand-separator label="Três Marias" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Iris da Selva</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
              &nbsp;
              D &nbsp; Bm
            </p>
            <p>Calma Maria</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Não conte assim seus planos</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              D</p>
            <p>Pra qualquer pessoa</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Que atravessa a porta</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
            <p>Você não conhece</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>&nbsp; &nbsp; &nbsp; O território alheio</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D</p>
            <p>Você se entristece</p>
            <p class="vermelho">Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>&nbsp; &nbsp; &nbsp; E eu vou falar porque</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Eu gosto quando você assovia</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>Tudo fica leve</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
            <p>Você não percebe mas</p>
            <p class="vermelho">&nbsp; &nbsp; Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#7</p>
            <p>A casa inteira fica alegre</p>
            <p class="vermelho">F#m &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp;Bm &nbsp; C#7</p>
            <p>Você &nbsp;tem a for &nbsp; ça</p>
            <p class="vermelho">F#m &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; Bm &nbsp; C#7</p>
            <p>Do vento</p>
            <p class="vermelho">F#m &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm &nbsp; &nbsp;C#7 &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m</p>
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
