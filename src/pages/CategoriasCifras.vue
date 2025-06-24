<template>
  <div class="q-pl-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Cifras" icon="music_note" />
    </q-breadcrumbs>
  </div>
  <div class="categorias ibg">
    <div class="q-pa-md q-gutter-sm">
      <div class="text-h6">
        <router-link
          to="/cifras/carimbo"
          class="q-item q-item-type row no-wrap"
          style="text-decoration: none"
        >
          Carimbó
        </router-link>
      </div>

      <q-separator />

      <div class="text-h6">
        <router-link
          to="/cifras/toada"
          class="q-item q-item-type row no-wrap"
          style="text-decoration: none"
        >
          Toada
        </router-link>
      </div>

      <q-separator />

      <div class="text-h6">
        <router-link
          to="/cifras/retumbao"
          class="q-item q-item-type row no-wrap"
          style="text-decoration: none"
        >
          Retumbão
        </router-link>
      </div>

      <q-separator />

      <div class="text-h6">
        <router-link
          to="/cifras/quadrilha"
          class="q-item q-item-type row no-wrap"
          style="text-decoration: none"
        >
          Quadrilha
        </router-link>
      </div>

      <q-separator />

      <div class="text-h6">
        <router-link
          to="/cifras/xote"
          class="q-item q-item-type row no-wrap"
          style="text-decoration: none"
        >
          Xote
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.categorias {
  height: calc(100svh - 71px);
  display: flex;
  flex-wrap: wrap;
}

.ibg {
  background-image: url('../assets/cifras.png');
  background-repeat: repeat-y;
  background-position: right top;
}
</style>
