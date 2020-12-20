<template>
  <h1>Second Yahooo</h1>
  <input v-model="searchInput">
  <p>search word : {{ searchInput }}</p>
  <p>{{ getEvents.result.value }}</p>
  <p>{{ getEvents.loading.value }}</p>
  <p>{{ getEvents.error.value }}</p>
</template>

<script>
import { watch, ref } from 'vue'
import usePromise from '@/composables/use-promise.js'

export default {
  setup () {
    const searchInput = ref('')
    const getEvents = usePromise(search => search.value.length + 4)

    watch(searchInput, () => {
      if (searchInput.value !== '') {
        getEvents.createPromise(searchInput)
      } else {
        getEvents.result.value = null
      }
    })

    return { searchInput, getEvents }
  }
}
</script>

