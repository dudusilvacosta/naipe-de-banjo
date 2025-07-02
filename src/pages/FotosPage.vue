<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Fotos" icon="image" />
    </q-breadcrumbs>
  </div>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item clickable v-ripple to="/fotos/cirio2025" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_7LtuZTxL6fgVcqKFVeZQug5LVCnx0uf6w&s"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Arraial da Floresta</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/junho25" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgocwHYLok7UTfdtZrJzJV_9ANs7_o5r2oLw&s"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Círio 2024</q-item-section>
      </q-item>

      <q-item clickable v-ripple to="/fotos/cirio2024" exact>
        <q-item-section avatar>
          <q-avatar rounded size="100px">
            <img
              src="https://correioparaense.com.br/wp-content/uploads/2023/04/ARRAIAL-DO-PAVULAGEM-1-927x1024.jpeg"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section>Arraial do Saber</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
