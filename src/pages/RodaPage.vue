<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Roda cantada" />
    </q-breadcrumbs>
    <div class="q-pa-md">
      <q-list padding bordered class="rounded-borders">
        <!-- Água de Ouro -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Água de Ouro"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Allan Carvalho</p>
              <p class="vermelho"></p>
              <p>Ó Dona deixa eu te dar o lírio das pedras</p>

              <p class="vermelho"></p>
              <p>Emana desses teus olhos a prata lunar</p>

              <p class="vermelho"></p>
              <p>Ó Dona venha à vela de longe te oiá</p>

              <p class="vermelho"></p>
              <p>E te ofertar as pérolas doces da praia</p>

              <p class="vermelho"></p>
              <p>Água de ouro brilha da estrela</p>

              <p class="vermelho"></p>
              <p>Do manto belo, Do teu altar</p>

              <p class="vermelho"></p>
              <p>Acende o Círio das eras</p>

              <p class="vermelho"></p>
              <p>Clareia!</p>

              <p class="vermelho"></p>
              <p>No breu da noite és a estrela</p>

              <p class="vermelho"></p>
              <p>Luz da candeia lunar</p>

              <p class="vermelho"></p>
              <p>Linda com manto de ouro</p>

              <p class="vermelho"></p>
              <p>Do reino da pedra</p>

              <p class="vermelho"></p>
              <p>Do mar</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
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
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Db &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ab
              </p>
              <p>Tem zabumbeiro na zabumba marcação</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bbm &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Eb7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;Ab
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
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Db &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#
              </p>
              <p>Meu amor pode esperar</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Barra Nova -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Barra Nova"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Allan Carva e Ronaldo Silva</p>
              <p class="vermelho">Am</p>
              <p>Meu vaqueiro vai dizer</p>
              <p>Que a madeira do meu boi</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;Bm7
              </p>
              <p>Tá dourada, tem brilhante</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Fita verde e amarela</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Da &nbsp; &nbsp; janela vejo ela</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp;
                Am
              </p>
              <p>Luna prata, luna bela</p>
              <p>No horizonte a claridão</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
              </p>
              <p>Do meu cordão balanceando com meu boi</p>

              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; E7
              </p>
              <p>Ô, rola Boi Malhadinho!</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Am
              </p>
              <p>Barriqueiro da virada</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;C
              </p>
              <p>No romper da madrugada</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp;G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; G7
              </p>
              <p>Barra nova pelo vento</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
              </p>
              <p>Barra nova pelo vento</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Canoinha Bailarina -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Canoinha Bailarina"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Allan Carva, Cincinato Jr e Ronaldo Silva</p>
              <p class="vermelho">
                Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;E
              </p>
              <p>Canoinha é bailarina</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; F#m
              </p>
              <p>Menina dos olhos meus</p>
              <p class="vermelho">
                Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
              </p>
              <p>Navega o tempo e o sol poente</p>
              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
              </p>
              <p>Labirintos de água e céu</p>
              <p class="vermelho">Bm &nbsp; &nbsp; &nbsp;&nbsp;E</p>
              <p>C a n o a</p>
              <p class="vermelho">A &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;F#m</p>
              <p>Banzeiro</p>
              <p class="vermelho">Bm &nbsp; &nbsp;&nbsp;E</p>
              <p>V e n t o</p>
              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
              </p>
              <p>Balanço do mar</p>
              <p class="vermelho">
                Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;E
              </p>
              <p>Chegar bem perto da Lua</p>
              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; F#m
              </p>
              <p>Olhar de perto as sereias</p>
              <p class="vermelho">
                Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;E
              </p>
              <p>O vento forte dos mares</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
              </p>
              <p>A valsa dos lumes, as loas de areia</p>
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
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;A
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
        <!-- Florindo Tapera -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Florindo Tapera"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Ronaldo Silva</p>
              <p class="vermelho">
                A &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
              </p>
              <p>Ciranda, ciranda</p>
              <p class="vermelho">G F</p>
              <p>da beira da praia</p>
              <p>Arraia, espadarte</p>
              <p class="vermelho">G</p>
              <p>cavalo marinho</p>
              <p class="vermelho">C</p>
              <p>Meninos de barro</p>
              <p>Ó, aro da lua</p>
              <p class="vermelho">G</p>
              <p>Eu vou pelos rios</p>
              <p class="vermelho">F G</p>
              <p>florindo taperas</p>
              <p class="vermelho">C</p>
              <p>Eu vou pelos rios</p>
              <p class="vermelho">G F</p>
              <p>florindo taperas</p>
              <p class="vermelho">G</p>
              <p>Pois é na floresta</p>
              <p class="vermelho">C G</p>
              <p>que eu vivo cantando</p>
              <p>Dançando ciranda</p>
              <p class="vermelho">F</p>
              <p>Bailando, pois é</p>
              <p class="vermelho">G</p>
              <p>E o verde exala</p>
              <p>Em torno de mim</p>
              <p class="vermelho">C</p>
              <p>O cheiro suave</p>
              <p class="vermelho">G F</p>
              <p>de patchouli</p>
              <p class="vermelho">G</p>
              <p>O cheiro suave</p>
              <p class="vermelho">C G</p>
              <p>de patchouli</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Luz Divina -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Luz Divina"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Ronaldo Silva</p>
              <p class="vermelho">C</p>
              <p>Luz divina, ê...</p>

              <p class="vermelho">Am</p>
              <p>Luz do dia, ê...</p>

              <p class="vermelho">C</p>
              <p>Luz da aurora, ê...</p>

              <p class="vermelho">Am</p>
              <p>Ilumina ê...</p>

              <p class="vermelho">
                C &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Esse brinquedo singelo</p>
              <p>Esse brinquedo singelo</p>

              <p class="vermelho">
                C &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Que vem na embarcação</p>
              <p>Que vem na embarcação</p>

              <p class="vermelho">
                C &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Am
              </p>
              <p>Para alegrar corações</p>
              <p>Para alegrar corações</p>

              <p class="vermelho">
                C &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Para alegrar a floresta</p>

              <p class="vermelho">C</p>
              <p>Luz divina, ê...</p>

              <p class="vermelho">Am</p>
              <p>Luz do dia, ê...</p>

              <p class="vermelho">C</p>
              <p>Luz da aurora, ê...</p>

              <p class="vermelho">Am</p>
              <p>Ilumina ê...</p>

              <p class="vermelho">C</p>
              <p>
                Cordão do mar <br />
                é maré cheia
              </p>

              <p class="vermelho">Am</p>
              <p>vem raiando</p>

              <p class="vermelho">C</p>
              <p>
                O astro rei <br />
                vem clareando
              </p>

              <p class="vermelho">Am</p>
              <p>A Guajarina</p>

              <p class="vermelho">C</p>
              <p>Vem raiando o dia, vem</p>

              <p class="vermelho">Am</p>
              <p>Vem raiando o dia, vem</p>
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
              <p class="autor">Allan Carvalho e Ronaldo Silva</p>
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
        <!-- Navio de Ouro -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Navio de Ouro"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Allan Carvalho e Ronaldo Silva</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; E7
              </p>
              <p>Dona da casa, o meu boi quer brincar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp;
                &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp;Am
              </p>
              <p>Eu vou ajudar ladrilhar o terreiro</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7
              </p>
              <p>Ô, dona da casa, o meu boi quer brincar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp; &nbsp; &nbsp;
                &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Eu vou ajudar ladrilhar o terreiro</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Am
              </p>
              <p>Ô, dona da casa, com quê se ladrilha?</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;Am
              </p>
              <p>Com ouro fino primeiro</p>
              <p class="vermelho">
                Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; E7
              </p>
              <p>Na proa do meu navio</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Que beijou naquela croa</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7
              </p>
              <p>Vai um rosário de flores</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Bandeiras e fitas de cores</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                E7
              </p>
              <p>Vai um rezador, um bailante</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;Am
              </p>
              <p>Do Boi Ouro Fino</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7
              </p>
              <p>Um tocador de caixa de santo</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Rufando as loas de rio</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Fios de ouro nos raios do sol</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp;Am
              </p>
              <p>Vai dourando o cetim, o cetim da bandeira</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp;E7 &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Fios de prata nos raios da lua</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Prateando as areias, as areias da estrada...</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Quando o banjo chegar -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Quando o Banjo Chegar"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Vinícius Leite e Allan Carvalho</p>
              <p class="vermelho">Am</p>
              <p>Quando o banjo chegar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;E7
              </p>
              <p>Eu vou sentar a mão</p>
              <p>Pra ver o povo dançar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Am
              </p>
              <p>Carimbó no salão</p>
              <p class="vermelho">E7</p>
              <p>Menino vai logo buscar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Não posso esperar pra ver</p>
              <p class="vermelho">
                A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Dm7
              </p>
              <p>Quando o banjo chegar</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C7
              </p>
              <p>Multidão vai dançar</p>
              <p class="vermelho">
                F7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bbm7
              </p>
              <p>E o povão vai cantar pra valer</p>
              <p class="vermelho">
                E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>E o povão vai dançar pra valer</p>
              <p class="vermelho">
                Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7
              </p>
              <p>Roda a tua saia menina</p>
              <p class="vermelho">
                Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E7
              </p>
              <p>É tanta gente bonita</p>
              <p class="vermelho">F7</p>
              <p>Esse tambor me alucina</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;E7
              </p>
              <p>Meu coração quer te ver</p>
              <p class="vermelho">
                A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm7
              </p>
              <p>Roda tua saia menina</p>
              <p class="vermelho">
                G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
              </p>
              <p>É tanta gente bonita</p>
              <p class="vermelho">
                F7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bbm7
              </p>
              <p>Esse tambor me alucina</p>
              <p class="vermelho">
                E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Am
              </p>
              <p>Meu coração quer te ver</p>
              <p class="vermelho">Am</p>
              <p>O banjo na minha mão</p>
              <p class="vermelho">E7</p>
              <p>Esquenta o salão</p>
              <p class="vermelho">Am</p>
              <p>Sua boca na minha boca</p>
              <p class="vermelho">E7</p>
              <p>Esquenta o meu coração</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Senhora da Amazônia -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Senhora da Amazônia"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="autor">Vinícius Leite e Allan Carvalho</p>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;D
              </p>
              <p>Senhora da Amazônia</p>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; D
              </p>
              <p>Venho trazer uma prenda</p>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Bm
              </p>
              <p>Cortejo de miritis</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm
              </p>
              <p>Meu Batalhão de ouro e prata</p>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; D
              </p>
              <p>Quando chegas nas águas do Guajará</p>

              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              </p>
              <p>Vens com teu manto abençoando</p>

              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
              </p>
              <p>Rainha mãe da floresta És mãe,</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
              </p>
              <p>és luz do mundo</p>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
              </p>
              <p>Maria dos navegantes</p>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Bm
              </p>
              <p>Maria dos pescadores</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp;
                &nbsp; Bm
              </p>
              <p>Maria dos cantadores</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#7 &nbsp; &nbsp; Bm
              </p>
              <p>Maria de Nazaré</p>
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
