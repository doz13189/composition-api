<template>
  <composition name="aa" />
  <reactive />
  <modularizing />
  <lifecycle />
  <watch />
</template>

<script>
import Composition from './components/Composition.vue'
import Reactive from './components/Reactive.vue'
import Modularizing from './components/Modularizing.vue'
import Lifecycle from './components/Lifecycle.vue'
import Watch from './components/Watch.vue'

export default {
  name: 'App',
  components: {
    Composition,
    Reactive,
    Modularizing,
    Lifecycle,
    Watch
  }
}
</script>

<style>

</style>
