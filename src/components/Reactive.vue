<template>
    <div>
        <p>event capacity: out of {{ capacity }}</p>
        <p>Spaces Left: {{ spacesLeft }}</p>
        <p>Attending</p>
        <!-- <ul>
            <li v-for="(name, index) in event.attending" :key="index">
                {{ name }}
            </li>
        </ul>
        <button @click="increaseCapacity()">Increase Capacity</button> -->
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const event = reactive({
      capacity: 5,
      spacesLeft: 1011
    })

    // return { event }
    // return toRefs(event);
    console.log('event', event)
    return { ...toRefs(event) }
  }
}

</script>
