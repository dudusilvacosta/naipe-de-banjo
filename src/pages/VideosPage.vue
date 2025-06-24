<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Vídeos" icon="smart_display" />
    </q-breadcrumbs>
  </div>
  <div class="row justify-center q-gutter-sm">
    <q-intersection v-for="index in 30" :key="index" class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/DAGp4eleam4?si=yh7wMG3h9pRQDoJX"
        />
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
