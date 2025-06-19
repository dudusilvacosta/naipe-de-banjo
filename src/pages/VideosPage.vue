<template>
  <div class="row justify-center q-gutter-sm">
    <q-intersection v-for="index in 60" :key="index" transition="scale" class="example-item">
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
