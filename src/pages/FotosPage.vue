<template>
  <div class="row justify-center q-gutter-sm">
    <q-intersection v-for="index in 60" :key="index" transition="scale" class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <img src="../assets/foto.jpg" />
      </q-card>
    </q-intersection>
  </div>
</template>

<style lang="sass" scoped>
.example-item
  width: 290px

@media screen and (max-width: 600px)
  .example-item
    width: 100%
</style>
