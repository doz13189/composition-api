<template>
  <composition-first />
  <composition-second />
</template>

<script>
import CompositionFirst from './components/CompositionFirst.vue'
import CompositionSecond from './components/CompositionSecond.vue'

export default {
  name: 'App',
  components: {
    CompositionFirst,
    CompositionSecond
  }
}
</script>

<style>

</style>
