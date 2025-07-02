<template>
  <div class="q-pa-md">
    <q-breadcrumbs>
      <q-breadcrumbs-el label="Aulas" icon="school" />
      <q-breadcrumbs-el label="Graus musicais - Harmonia tonal" />
    </q-breadcrumbs>
  </div>
  <div class="row justify-center q-gutter-sm">
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/EWb1ZoOjY6E?si=1A6jJTdcGZBBSd1a"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/8QAFwuz30UY?si=aFexVJpNtLx5Q3oy"
        />
      </q-card>
    </q-intersection>
    <q-intersection class="example-item">
      <q-card flat bordered class="q-ma-sm">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/8fIouuBa3pA?si=-0691SJvWDnfAfsY"
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
