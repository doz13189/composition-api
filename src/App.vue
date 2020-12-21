<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CompositionFirst />
  <CompositionSecond />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CompositionFirst from './components/CompositionFirst.vue';
import CompositionSecond from './components/CompositionSecond.vue';

export default defineComponent({
  components: {
    CompositionFirst,
    CompositionSecond
  }
});
</script>

<style>
</style>
