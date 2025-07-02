<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Início" icon="home" />
    </q-breadcrumbs>
  </div>
  <div class="ibg">
    <q-scroll-area style="height: calc(100svh - 103px); width: 100%">
      <div class="q-ma-md q-py-xs">
        <p>É muito bom ver você em nosso web app dos Banjoístas do Batalhão da Estrela!</p>
        <p>
          Aqui você encontra um pouco da história do banjo no batalhão, fotos, vídeos, cifras de
          músicas, aulas de teoria musical, links para download de apostilas e também fica por
          dentro de todos os recados importantes.
        </p>
      </div>
    </q-scroll-area>
  </div>
</template>

<style scoped>
.ibg {
  max-width: 500px;
  background-image: url('../assets/banjonotas.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: bottom center;
}
</style>
