<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Roda cantada" />
    </q-breadcrumbs>
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
            <p class="vermelho">
              Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
            </p>
            <p>Ó Dona deixa eu te dar o lírio das pedras</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Emana desses teus olhos a prata lunar</p>

            <p class="vermelho">
              Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              D7 &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Ó Dona venha à vela de longe te oiá</p>

            <p class="vermelho">
              F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;&nbsp; B7
            </p>
            <p>E te ofertar as pérolas doces da praia</p>

            <p class="vermelho">Em</p>
            <p>Água de ouro brilha da estrela</p>

            <p class="vermelho">Am</p>
            <p>Do manto belo, Do teu altar</p>

            <p class="vermelho">B7</p>
            <p>Acende o Círio das eras</p>

            <p class="vermelho">&nbsp; &nbsp; Em &nbsp; &nbsp; B7</p>
            <p>Clareia!</p>

            <p class="vermelho">Em</p>
            <p>No breu da noite és a estrela</p>

            <p class="vermelho">Am</p>
            <p>Luz da candeia lunar</p>

            <p class="vermelho">B7</p>
            <p>Linda com manto de ouro</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Em
            </p>
            <p>Do reino da pedra</p>

            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B7</p>
            <p>Do mar</p>
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
              &nbsp; &nbsp; &nbsp; F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Bm7
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
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Do meu cordão balanceando com meu boi</p>

            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              E7
            </p>
            <p>Ô, rola Boi Malhadinho!</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Am
            </p>
            <p>Barriqueiro da virada</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;C
            </p>
            <p>No romper da madrugada</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp;G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; G7
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
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>Menina dos olhos meus</p>
            <p class="vermelho">
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Navega o tempo e o sol poente</p>
            <p class="vermelho">
              A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
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
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;E
            </p>
            <p>Chegar bem perto da Lua</p>
            <p class="vermelho">
              A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; F#m
            </p>
            <p>Olhar de perto as sereias</p>
            <p class="vermelho">
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;E
            </p>
            <p>O vento forte dos mares</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
            </p>
            <p>A valsa dos lumes, as loas de areia</p>
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
            <p class="vermelho">G</p>
            <p>Ciranda, ciranda</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; D</p>
            <p>da beira da praia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Arraia, espadarte</p>
            <p class="vermelho">D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G</p>
            <p>cavalo marinho</p>
            <p class="vermelho">D/F#</p>
            <p>Meninos de barro</p>
            <p>Ó, aro da lua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Eu vou pelos rios</p>
            <p class="vermelho">D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G</p>
            <p>florindo taperas</p>
            <p class="vermelho">G</p>
            <p>Pois é na floresta</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
            </p>
            <p>que eu vivo cantando</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Dançando ciranda</p>
            <p class="vermelho">D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G</p>
            <p>Bailando, pois é</p>
            <p class="vermelho">D/F#</p>
            <p>E o verde exala</p>
            <p>Em torno de mim</p>
            <p class="vermelho">&nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G</p>
            <p>O cheiro suave</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G</p>
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
            <p class="vermelho">D</p>
            <p>Luz divina, ê...</p>

            <p class="vermelho">Am</p>
            <p>Luz do dia, ê...</p>

            <p class="vermelho">D</p>
            <p>Luz da aurora, ê...</p>

            <p class="vermelho">Bm</p>
            <p>Ilumina ê...</p>

            <p class="vermelho">
              D &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Esse brinquedo singelo</p>
            <p>Esse brinquedo singelo</p>

            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Emana desses teus olhos a prata lunar</p>

            <p class="vermelho">
              Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              D7 &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Ó Dona venha à vela de longe te oiá</p>

            <p class="vermelho">
              D &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Para alegrar a floresta</p>

            <p class="vermelho">D</p>
            <p>Luz divina, ê...</p>

            <p class="vermelho">Bm</p>
            <p>Luz do dia, ê...</p>

            <p class="vermelho">D</p>
            <p>Luz da aurora, ê...</p>

            <p class="vermelho">Bm</p>
            <p>Ilumina ê...</p>

            <p class="vermelho">D</p>
            <p>
              Cordão do mar <br />
              é maré cheia
            </p>

            <p class="vermelho">Bm</p>
            <p>vem raiando</p>

            <p class="vermelho">D</p>
            <p>
              O astro rei <br />
              vem clareando
            </p>

            <p class="vermelho">Bm</p>
            <p>A Guajarina</p>

            <p class="vermelho">D</p>
            <p>Vem raiando o dia, vem</p>

            <p class="vermelho">Bm</p>
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
              Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;F
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
              G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; C
            </p>
            <p>Fogueira arde a fogueira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;C
            </p>
            <p>Clareia o meu coração</p>
            <p class="vermelho">Bm7 &nbsp; &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp; &nbsp;Am</p>
            <p>Essa toada do tempo</p>
            <p class="vermelho">Bm7 &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp; &nbsp;Am</p>
            <p>Traz alegria e luz</p>
            <p class="vermelho">
              G7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; C
            </p>
            <p>Pra clarear noite escura</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
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
              &nbsp; Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; E7
            </p>
            <p>Dona da casa, o meu boi quer brincar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp; &nbsp;
              &nbsp; &nbsp; E7 &nbsp; &nbsp;Am
            </p>
            <p>Eu vou ajudar ladrilhar o terreiro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7
            </p>
            <p>Ô, dona da casa, o meu boi quer brincar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp; &nbsp; &nbsp; &nbsp;
              E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>Eu vou ajudar ladrilhar o terreiro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>Ô, dona da casa, com quê se ladrilha?</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp;E7 &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;Am
            </p>
            <p>Com ouro fino primeiro</p>
            <p class="vermelho">
              Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; E7
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
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7
            </p>
            <p>Vai um rezador, um bailante</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
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
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;Am
            </p>
            <p>Vai dourando o cetim, o cetim da bandeira</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp;E7 &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
            </p>
            <p>Fios de prata nos raios da lua</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;E7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;Am
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
              A7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Dm7
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
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;D
            </p>
            <p>Senhora da Amazônia</p>
            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; D
            </p>
            <p>Venho trazer uma prenda</p>
            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Cortejo de miritis</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bm
            </p>
            <p>Meu Batalhão de ouro e prata</p>
            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              D
            </p>
            <p>Quando chegas nas águas do Guajará</p>

            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Vens com teu manto abençoando</p>

            <p class="vermelho">
              D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m
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
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; Bm
            </p>
            <p>Maria dos pescadores</p>
            <p class="vermelho">
              G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp;
              &nbsp; Bm
            </p>
            <p>Maria dos cantadores</p>
            <p class="vermelho">G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#7 &nbsp; &nbsp; Bm</p>
            <p>Maria de Nazaré</p>
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
          <q-card-section>
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
      <!-- Vós Sois o Lírio Mimoso -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Vós Sois o Lírio Mimoso"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
            </p>
            <p>Vós sois o lírio mimoso</p>
            <p class="vermelho">
              C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Do mais suave perfume</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; F7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>Que ao lado do Santo Esposo</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; C
            </p>
            <p>A castidade resume</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; C
            </p>
            <p>Ó, Virgem Mãe amorosa</p>
            <p class="vermelho">
              C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Fonte de amor e de fé</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;F7 &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>Dai-nos a bênção bondosa</p>
            <p class="vermelho">
              C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;F
            </p>
            <p>Senhora de Nazaré!</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Banguê</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Beijo da Primavera -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Beijo da Primavera"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Félix Faccon</p>
            <p class="vermelho">Gm</p>
            <p>Eu vi beija‐flor na janela, Eu vi beija‐flor voar,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;&nbsp; Cm &nbsp; &nbsp;D
            </p>
            <p>Ai que beijo que era, Coroa de pluma no ar</p>
            <p class="vermelho">
              Gm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Cm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;Gm
            </p>
            <p>Ai que verde que era, Mais bonito não há</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Beijo da primavera que gosto que tem,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Que vontade que dá</p>
            <p>Voa, vai beija‐flor, voa na janela da casa dela</p>
            <p>E me leva um carinho e me leva um</p>
            <p>denguinho nas asas pro meu amor</p>
            <p>Voa, vai beija‐flor, voa na janela da casa dela</p>
            <p>E me leva um carinho e me leva um</p>
            <p>denguinho nas asas pro meu amor</p>
            <p>Ai que bom que é, ai que verde que era</p>
            <p>Eu vi beija‐flor na janela</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Boi</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Urrou Meu Boi -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Urrou Meu Boi"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="vermelho">F#</p>
            <p>Urrou meu boi</p>
            <p>Que abalou as estrelas do céu</p>
            <p>Clareou no balanço do mar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;E
            </p>
            <p>No lençol de areia,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#
            </p>
            <p>fez a sereia cantar</p>
            <p class="vermelho">B</p>
            <p>Urrou! Urrou! Urrou!</p>
            <p class="vermelho">B</p>
            <p>Eu vi uma onça gemer,</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F# &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; B
            </p>
            <p>na mata do arvoredo</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; E</p>
            <p>O lê lê, São João!</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              B
            </p>
            <p>Me valha São Pedro!</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; F# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B
            </p>
            <p>De onça eu tenho medo</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Carimbó</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Lôa -->
      <q-expansion-item dense dense-toggle expand-separator label="Lôa" header-class="text-primary">
        <q-card>
          <q-card-section>
            <p class="autor">Ronaldo Silva</p>
            <p class="vermelho">
              Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Roda, roda, roda morena</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>Dança na areia da praia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>A lua cheia serena morena</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>O vento espalha tua saia</p>
            <p class="vermelho">Am</p>
            <p>Sereia cantando lôa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Não cansa de me chamar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Remo de faia canoa</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>Vai me levando pro mar</p>
            <p class="vermelho">
              Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Roda, roda, roda morena</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>Dança na areia da praia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>A lua cheia serena morena</p>
            <p class="vermelho">Am</p>
            <p>No meu tambor vou batendo</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Dm
            </p>
            <p>Um carimbó bem marcado</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>O teu olhar me querendo</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
            </p>
            <p>E eu te querendo embarcado</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- Pescaria -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Pescaria"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Mestre Cardoso</p>
            <p class="vermelho">D</p>
            <p>Eu fui numa pescaria</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G
            </p>
            <p>Botei minha malhadeira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Quando foi no outro dia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; D
            </p>
            <p>Tava só a bagaceira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
            </p>
            <p>Os peixes que estavam mortos</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Eu não sei quem foi</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp;A
            </p>
            <p>Eu boto a culpa no boto</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; D
            </p>
            <p>E cismo do peixe‐boi</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G
            </p>
            <p>Eu estava só</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Perdido no alto mar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Remei para o Marajó</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Cheguei foi em Marudá</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Lundu</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Balanço da Canoa -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Balanço da Canoa"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>Vou no balanço da canoa</p>
            <p class="vermelho">
              F&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C7
            </p>
            <p>Navegando lá na foz do rio</p>
            <p class="vermelho">
              A# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Minha igarité vai na flor d'água</p>
            <p class="vermelho">
              C7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Vai na correnteza da maré</p>
            <p class="vermelho">Dm</p>
            <p>Levo meu balaio bem florido</p>
            <p class="vermelho">
              D7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
            </p>
            <p>Levo meu tambor de sucuri</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>Pra cantar lundu marajoara</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7 &nbsp; A# &nbsp; A7
            </p>
            <p>No clarão da lua do arari</p>
            <p class="vermelho">
              F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>Dança no balanço da canoa</p>
            <p class="vermelho">
              F&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C7
            </p>
            <p>Balanceia vento e maresia</p>
            <p class="vermelho">
              A# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Dançando lundu vou navegando</p>
            <p class="vermelho">
              C7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Bailando lundu da cachoeira</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Marabaixo</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Sentinela do Mar -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Sentinela do Mar"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Ary Lobo</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Nas ondas do mar eu vi</p>
            <p class="vermelho">
              B &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Mamãe sereia cantar</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Nas ondas do mar eu vi</p>
            <p class="vermelho">
              B &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Num barquinho a navegar</p>
            <p class="vermelho">E7</p>
            <p>Mãe sereia quando canta</p>
            <p>É bonito o seu cantar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>A pureza no seu canto</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; E
            </p>
            <p>Como há em oxalá</p>
            <p class="vermelho">E7</p>
            <p>Vi seu barco pequenino</p>
            <p>Sereno a navegar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Tinha como timoneiro</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B</p>
            <p>O grande guerreiro</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Ogum beira mar</p>
            <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A</p>
            <p>Beira mar, ae beira mar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; E
            </p>
            <p>Beira mar, ae beira mar</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Mazurca</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Folias da Aurora -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Folias da Aurora"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Allan Carvalho e Ronaldo Silva</p>
            <p class="vermelho">A</p>
            <p>Violeiros da lua de prata</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bm
            </p>
            <p>Que viajam no tempo, nas eras</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; E
            </p>
            <p>Vem chegando no raiar do dia</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Vem trazendo as folias da aurora</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Vem cantando e tocando viola</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Pelas casas em noites de lua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Pelas ruas serenas lá vai</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Alegrando janelas, taperas</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Cantam as folias dos rios</p>
            <p class="vermelho">
              E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Cantam as folias do mar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; D
            </p>
            <p>Cantam para o sol</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; A
            </p>
            <p>Cantam para a lua</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
            </p>
            <p>Cantam as estrelas cadentes</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
    <p class="text-body1">Samba de cacete</p>
    <q-list padding bordered class="rounded-borders">
      <!-- Peixe Voador -->
      <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="Peixe Voador"
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            <p class="autor">Ronaldo Silva</p>
            <p class="vermelho">A#</p>
            <p>Marinheira, marinheira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cm
            </p>
            <p>eu quero saber quem foi</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>que mandou essa ribeira</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>pra brincar no peixe-boi</p>
            <p>Foi a sereia do mar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cm
            </p>
            <p>não foi, não foi</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; F
            </p>
            <p>Foi o peixe voador</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>não foi, não foi</p>
            <p>Foi estrela matutina</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Cm
            </p>
            <p>nessa noite de luar</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F
            </p>
            <p>que mandou essa menina</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; A#
            </p>
            <p>ver a onda balançar</p>

            <p>Luar, luar</p>
            <p>vem voando, vem voando</p>
            <p>luar, luar</p>
            <p>navegando e marujando</p>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
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
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Db &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Ab
            </p>
            <p>Tem zabumbeiro na zabumba marcação</p>
            <p class="vermelho">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bbm &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Eb7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
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
              D&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
              &nbsp; &nbsp; &nbsp;A
            </p>
            <p>Que ela é meu cantar</p>
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
