<template>
  <div>
    <!-- <p>{{ name }}</p> -->
    <p>{{ capacity }}</p>
    <button @click='increaseCapacity()'>Increase Capacity</button>

    <p>Attending</p>
    <ul>
      <li v-for='(name, index) in attending' :key='index'>
        {{ name }}
      </li>
    </ul>

    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>

  </div>
</template>

<script>
// import { watchEffect, ref } from 'vue'
import { ref, computed } from 'vue'

export default {
  setup (props, context) {
    console.log('context', context)
    // console.log('attrs', context.attrs)
    // console.log('slots', context.slots)
    // console.log('parent', context.parent)
    // console.log('root', context.root)
    // console.log('emit', context.emit)
    // watchEffect(() => {
    //   console.log(props.name)
    // })

    // data
    const capacity = ref(3)
    console.log(capacity)

    // methods
    function increaseCapacity () {
      capacity.value++
    }

    // computed
    const attending = ref(['Tim', 'Bob', 'Joe'])
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length
    })

    return { capacity, attending, increaseCapacity, spacesLeft }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
