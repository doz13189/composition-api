<template>
    <div>
        <p>Spaces Left: {{ event.spacesLeft }} out of {{ event.capacity }}</p>
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
    return { ...toRefs(event) }
  }
}

</script>
