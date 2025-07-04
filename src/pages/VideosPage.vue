<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Vídeos" icon="smart_display" />
    </q-breadcrumbs>
  </div>
  <div class="row justify-center q-gutter-sm">
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/RTBWrJWvTvs?si=utNw-cwOy1UjKwyJ"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/NgOI7yVn-lk?si=4nIaA92Uu-Hl03T3"
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
