<template>
  <composition name="aa" />
  <reactive />
</template>

<script>
import Composition from './components/Composition.vue'
import Reactive from './components/Reactive.vue'

export default {
  name: 'App',
  components: {
    Composition,
    Reactive
  }
}
</script>

<style>

</style>
