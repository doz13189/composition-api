<template>
  <div>
  </div>
</template>

<script>
import useEventSpace from '@/use/event-space.js'
// import { ref, computed } from 'vue';

export default {
  setup () {
    console.log(useEventSpace)
    const { capacity, attending, spacesLeft, increaseCapacity } = useEventSpace()
    // return useEventSpace()
    return { capacity, attending, spacesLeft, increaseCapacity }
  }
}

</script>

<style>
</style>
