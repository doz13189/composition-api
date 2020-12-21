<template>
  <h1>Second</h1>
  <input v-model="searchInput">
  <p>search word : {{ searchInput }}</p>
  <p>search word length + 4 : {{ getEvents.result.value }}</p>
  <p>loading : {{ getEvents.loading.value }}</p>
  <p>error : {{ getEvents.error.value }}</p>
</template>

<script>
import { defineComponent } from 'vue'
import { watch, ref } from 'vue'
import usePromise from '@/composables/use-promise.ts'

export default defineComponent({
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
})
</script>

