<template>
  <div>
    Search for <input v-model="searchInput" /> 
    <div>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watchEffect } from 'vue'
import getEventCount from '@/api/event.js'

export default {
  setup () {
    const searchInput = ref('')
    const results = ref(0)
    
    watchEffect(() => {
        results.value = getEventCount(searchInput.value)
    })

    // watch(() => {
    //     results.value = getEventCount(searchInput.value)
    // })

    // return { searchInput, results }
    return { searchInput, results }
  }
}
</script>