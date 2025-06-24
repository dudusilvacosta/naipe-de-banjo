<template>
  <div class="q-pl-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple to="/fotos/cirio2025" exact>
        <q-item-section>
          <q-item-label>2025 Círio</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/junho25" exact>
        <q-item-section>
          <q-item-label>2025 Junho</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/cirio2024" exact>
        <q-item-section>
          <q-item-label>2024 Círio</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
