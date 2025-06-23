<template>
  <div class="q-pa-md">
    <div class="categorias">
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
  </div>
</template>
<style scoped>
.categorias {
  display: flex;
  flex-wrap: wrap;
}
</style>
