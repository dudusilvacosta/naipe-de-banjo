<template>
  <div style="height: 1px">
    <q-linear-progress v-if="showProgress" indeterminate color="amber-7" />
  </div>
  <div class="q-pa-md">
    <q-breadcrumbs class="q-mb-sm">
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
      <q-breadcrumbs-el label="Boi" />
    </q-breadcrumbs>
    <div class="q-pa-md">
      <q-list padding bordered class="rounded-borders">
        <!-- Balança de Ouro -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Balança de Ouro"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">Dm</p>
              <p>Canoa, me leva pra ver minha amada que tá no cruzeiro</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; A
              </p>
              <p>Fiando e bordando o couro do boi as minhas bandeiras</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;Dm
              </p>
              <p>Com linhas de ouro e fita amarela</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Olhei na janela e vi uma estrela</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A
              </p>
              <p>Passando ligeira no céu do Guamá pra mim, um sinal sagrado e bonito</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;Dm
              </p>
              <p>É meu São João abrindo a cancela</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Vai meu batalhão alegre e formoso</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Dm
              </p>
              <p>Nossa fortaleza é linda de ver</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Dm
              </p>
              <p>A rapaziada é balança de ouro</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp;F &nbsp; &nbsp; &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Dm
              </p>
              <p>Esse boi é um tesouro, é meu bem-querer</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Batalhão das Estrelas -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Batalhão das Estrelas"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Em &nbsp; &nbsp; C
              </p>
              <p>Abre os olhos, morena vem ver meu boi</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
              </p>
              <p>Tá vindo da estrela, traz batalhão afiado</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>E o couro bordado pro contrário ver.</p>
              <p class="vermelho">
                Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp;C &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Sei que ele ainda sente saudade</p>
              <p class="vermelho">
                Am &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Quando vê a bandeira azulada passar pela praça</p>
              <p class="vermelho">
                C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
              </p>
              <p>Modelo de graça do meu são João.</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; D
              </p>
              <p>Do arraial que é do sol</p>
              <p class="vermelho">
                Em &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; D
              </p>
              <p>Do arraial que é da lua</p>
              <p class="vermelho">
                C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Do povo na rua</p>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Do meu guarnicê.</p>
              <p class="vermelho">C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G</p>
              <p>Canta, Vardé</p>
              <p class="vermelho">
                C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Vardé das cuieiras</p>
              <p class="vermelho">
                C &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;G
              </p>
              <p>Que eu estrondo lá fora</p>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; Em
              </p>
              <p>E quando eu for embora, contrário</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp;
                &nbsp; &nbsp; C &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Nesse adeus é que tu choras</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Boi Brinquedo -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Boi Brinquedo"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">D</p>
              <p>Vem chegando o mês de maio</p>
              <p>E eu já vou me preparando</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              </p>
              <p>Com bandeiras, fitas, flores</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              </p>
              <p>Com as cores do arco-íris</p>

              <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D</p>
              <p>Vou serenando e imaginando o boi azul</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp;&nbsp; D &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              </p>
              <p>Balanceando com seu batalhão da estrela</p>

              <p class="vermelho">&nbsp; &nbsp; &nbsp; D</p>
              <p>E pelas ruas de Belém vira um folguedo</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; D
              </p>
              <p>Vira um tesouro da cultura popular</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                D
              </p>
              <p>Dança boi pavulagem, dança que eu quero ver</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; D
              </p>
              <p>Dança e balança, pelas ruas eu quero ver</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;D
              </p>
              <p>Dança boi pavulagem, dança que eu quero ver</p>

              <p class="vermelho">
                Bm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E
              </p>
              <p>Meu brinquedo encantador,</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D
              </p>
              <p>prenda bela de São João…</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Boi da Lua -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Boi da Lua"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E</p>
              <p>Meu São João</p>
              <p class="vermelho">Am</p>
              <p>São João, meu São João</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C
              </p>
              <p>Eu vim pagar a promessa</p>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Am
              </p>
              <p>De trazer esse boizinho</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp;C
              </p>
              <p>Para alegrar sua festa</p>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;&nbsp; Am
              </p>
              <p>Olhos de papel de seda</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                E &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Com uma estrela na testa</p>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Chora, chora</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;C
              </p>
              <p>Chora, boi da lua, vem pedir uma esmola</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>Para aquela boneca de anil</p>
              <p class="vermelho">
                Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Am
              </p>
              <p>Mamãe, eu vi boi da lua</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Dançar no planeta do Brasil</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Boi da Estrela -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Boi da Estrela"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D#m7</p>
              <p>A roseira tá florida</p>

              <p class="vermelho">
                G#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
              </p>
              <p>o jardim tá perfumado</p>

              <p class="vermelho">F#m</p>
              <p>Vento da campina</p>

              <p class="vermelho">
                &nbsp; &nbsp; G#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
              </p>
              <p>O céu todo estrelado</p>

              <p class="vermelho">&nbsp; &nbsp; &nbsp; C#m</p>
              <p>E a lua faz clarão</p>

              <p class="vermelho">G#7</p>
              <p>O terreiro iluminado</p>

              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; F#m
              </p>
              <p>Vem chegando o boi da estrela</p>

              <p class="vermelho">
                F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;D#m7
              </p>
              <p>Trazendo mastro e bandeira</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; G#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; C#m
              </p>
              <p>De São João do Carneirinho</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; D#m7
              </p>
              <p>Vem trazendo um batalhão</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;G#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; C#m
              </p>
              <p>Cantando e dançando toada de boi</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;C#m
              </p>
              <p>Dança boi da estrela</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C#m
              </p>
              <p>No clarão da lua cheia</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp;F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;C#m
              </p>
              <p>Dança boi da estrela</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; F#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;C#m
              </p>
              <p>No clarão do sol dourado</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;D#m7
              </p>
              <p>Dança para o sol e para lua</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#7 &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                C#m
              </p>
              <p>No meio da praça No meio da rua</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Bordado de Flores -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Bordado de Flores"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DM7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Bm
              </p>
              <p>Mandei fazer um bordado</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D
              </p>
              <p>Com flores de toda cor</p>

              <p class="vermelho">
                F#7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; Bm
              </p>
              <p>Para enfeitar o meu bolero</p>

              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; A7
              </p>
              <p>Enfeitar o meu cordão</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;D
              </p>
              <p>Flores do rio Caeté</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7 &nbsp; &nbsp; F#7
              </p>
              <p>Flores do rio Ararí</p>

              <p class="vermelho">
                Bm &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;D
              </p>
              <p>Flo &nbsp;&nbsp;res, bordado de flores</p>

              <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7</p>
              <p>De rara beleza</p>

              <p class="vermelho">
                &nbsp; &nbsp; G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp;C#
              </p>
              <p>Encanto de todas as &nbsp; cores</p>

              <p class="vermelho">D7</p>
              <p>Quando chegar mês de junho</p>

              <p class="vermelho">G</p>
              <p>Eu vou dançar, tocar tambor</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;D
              </p>
              <p>Sou do Batalhão da Estrela</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A7
              </p>
              <p>Barriqueiro do Guamá</p>

              <p class="vermelho">
                D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
              </p>
              <p>Embalando boi pelas ruas</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D
              </p>
              <p>Embalando boi pelas ruas</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A7
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                D
              </p>
              <p>Embalando boi pelas ruas de Belém</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Estrela do Chão -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Estrela do Chão"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">Cm</p>
              <p>Menina que pula a fogueira teu boi já chegou</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;G#
              </p>
              <p>Vem pra perto de mim</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A# &nbsp;&nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Cm
              </p>
              <p>Vem me ouvir que sou teu cantador</p>
              <p class="vermelho">Cm</p>
              <p>E canto cantigas bonitas toadas de amor</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; G#
              </p>
              <p>Coração me encanta</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;A# &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Cm
              </p>
              <p>Incendeia e clareia o que sou</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A# &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; G
              </p>
              <p>Eu que sou moleque querendo</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Cm
              </p>
              <p>Abraçar o mundo</p>
              <p class="vermelho">
                G# &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G
              </p>
              <p>E capitão do batalhão desse boi</p>
              <p class="vermelho">
                C &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;G
              </p>
              <p>Ê boi vê se dança pra ela</p>
              <p class="vermelho">
                Am &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; G
              </p>
              <p>A mais bela estrela do chão</p>
              <p class="vermelho">
                F &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; C
              </p>
              <p>Teu céu é aqui no terreiro</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;G
              </p>
              <p>Quero ser o primeiro</p>
              <p class="vermelho">
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; C
              </p>
              <p>A sentir teu calor teu clarão</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Iniciais BP -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Iniciais BP"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">Am</p>
              <p>Eu venho da fortaleza</p>
              <p class="vermelho">F</p>
              <p>Colhendo flor no balaio</p>
              <p class="vermelho">C</p>
              <p>Vou enfeitar o rosário</p>
              <p class="vermelho">
                G &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Am
              </p>
              <p>Pra quando for mês de maio</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Deixar bonito meu boi</p>
              <p class="vermelho">Am</p>
              <p>Bordei no couro esse ano</p>
              <p class="vermelho">F</p>
              <p>Com linha fina de prata</p>
              <p class="vermelho">C</p>
              <p>A estrela d'alva e a lua</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Pro astro rei... luz divina</p>
              <p class="vermelho">
                F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Am
              </p>
              <p>Fiz um ponteio dourado</p>
              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C
              </p>
              <p>É d'ouro, prata e brilhante</p>
              <p class="vermelho">G &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C</p>
              <p>As inicias BP</p>
              <p class="vermelho">
                Dm &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Am
              </p>
              <p>De rubis e diamantes</p>
              <p class="vermelho">B7</p>
              <p>Estrelinhas tão cintilantes</p>
              <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E7</p>
              <p>Que é pra todo mundo ver</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Noite de São João -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Noite de São João"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
              </p>
              <p>Eu fiz promessa pro meu boi</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Dm
              </p>
              <p>Pra você ficar comigo</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
              </p>
              <p>Se nessa noite de São João</p>

              <p class="vermelho">A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm</p>
              <p>Você aparecer</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Gm
              </p>
              <p>Eu te faço um verso</p>

              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; Dm
              </p>
              <p>Trago o meu batalhão</p>

              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;Gm
              </p>
              <p>Pra cantar toada bonita</p>

              <p class="vermelho">A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm</p>
              <p>Pro meu boi</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
              </p>
              <p>E nesse verso meu canto dirá</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Em
              </p>
              <p>Qual a cor que tem os olhos teus</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Em
              </p>
              <p>Vem minha estrela azulada</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; D
              </p>
              <p>Levanta Boi Pavulagem!</p>

              <p class="vermelho">Em</p>
              <p>Encanto dos olhos teus</p>

              <p class="vermelho">
                G &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; D
              </p>
              <p>Levanta Boi Pavulagem!</p>

              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Encanto dos olhos meus Vem ver, morena</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Reunida -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Reunida"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                A &nbsp; &nbsp; &nbsp; &nbsp; B &nbsp; &nbsp; E
              </p>
              <p>Lá vem meu boi, lá vem pelas ruas de Belém</p>
              <p class="vermelho">
                E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;E &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                A &nbsp; &nbsp; &nbsp; &nbsp; B &nbsp; &nbsp; E
              </p>
              <p>Lá vem meu boi, lá vem pelas ruas de Belém</p>
              <p class="vermelho">
                C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G#m &nbsp; &nbsp; A &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
              </p>
              <p>Quem querer eu dou meu coração</p>
              <p class="vermelho">
                C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; G#m
              </p>
              <p>Pra quela moça donzela</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; F &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E
              </p>
              <p>Que sorrir pro meu batalhão</p>
              <p class="vermelho">
                C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; G#m &nbsp; &nbsp; &nbsp; A &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;E
              </p>
              <p>Vem meu amor pelo céu tem estrelas</p>
              <p class="vermelho">
                C#m &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;G#m
              </p>
              <p>Anel brilhante da lua</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp;F# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;F &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; E
              </p>
              <p>Lumiando pra te balançar</p>
              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;B7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; E
              </p>
              <p>Balanço esse boi pra te ver dançar</p>
              <p class="vermelho">
                A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;E
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B7 &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;E
              </p>
              <p>Balanço esse boi (ê boi) Pra te na morar</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <!-- Toada do Igapó -->
        <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Toada do Igapó"
          header-class="text-primary"
        >
          <q-card>
            <q-card-section>
              <p class="vermelho">Dm</p>
              <p>E morena já faz mais de ano</p>
              <p class="vermelho">
                D7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
              </p>
              <p>Que eu não voltei pra te espiar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Fui olhar outros campos vi foi tanto lugar</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;D7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; Gm
              </p>
              <p>E no meu peito bate uma saudade forte</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; A
              </p>
              <p>E o vento do norte</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;Dm
              </p>
              <p>Me levou pro além-mar</p>

              <p class="vermelho">
                Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;A &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;Dm
              </p>
              <p>Meu vaqueiro, o Boi Pavulagem é sina</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; D7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; Gm
              </p>
              <p>Que balança nos festejos</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Das pequenas do Igapó</p>
              <p class="vermelho">
                D7 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm
              </p>
              <p>Que balança nos festejos</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Das pequenas do igapó</p>

              <p class="vermelho">
                Dm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A
              </p>
              <p>Repare a estrela nesse guarnecê pequeno</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Gm &nbsp; &nbsp; &nbsp;A &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; Dm
              </p>
              <p>Taí o boi, taí o boi, morena</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
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
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F# &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; B
              </p>
              <p>na mata do arvoredo</p>
              <p class="vermelho">&nbsp; &nbsp; &nbsp; &nbsp; E</p>
              <p>O lê lê, São João!</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;F# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; B
              </p>
              <p>Me valha São Pedro!</p>
              <p class="vermelho">
                &nbsp; &nbsp; &nbsp; &nbsp; F# &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B
              </p>
              <p>De onça eu tenho medo</p>
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
