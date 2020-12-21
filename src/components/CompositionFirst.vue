<template>
  <h1>First</h1>
  <input v-model="searchInput">
  <p>search word : {{ searchInput }}</p>
  <p>search word length : {{ getEvents.result.value }}</p>
  <p>loading : {{ getEvents.loading.value }}</p>
  <p>error : {{ getEvents.error.value }}</p>
</template>

<script>
import { watch, ref } from 'vue'
import usePromise from '@/composables/use-promise.js'

export default {
  setup () {
    const searchInput = ref('')
    const getEvents = usePromise(search => search.value.length)

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

