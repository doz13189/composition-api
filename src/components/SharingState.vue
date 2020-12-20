<template>
  <div>
    <h1>Google</h1>
    <input v-model="searchInput" />

    <h1>Google</h1>
    <p>{{ searchInput }} : {{ count }}</p>
    <p>{{ result }}</p>

  </div>

</template>
<script>
import { ref, watch } from 'vue'
import getEventCount from '@/api/event.js';
import usePromise from '@/composables/use-promise';


export default {
  setup() {
    const searchInput = ref('')
    const getEvents = usePromise(search =>
      eventApi.getEventCount(search.value)
    );

    let count = ref(0)
    watch(searchInput, () => {
      console.log('watch')

      if (searchInput.value !== '') {
        console.log('watch')
        // loadData(searchInput);
        // count.value = getEventCount(searchInput.value)
        getEvents.createPromise(searchInput);
        console.log('getEvents', getEvents.result.value)
      }
      else {
        getEvents.result.value = null;
      }
    });
      return { searchInput, ...getEvents }
  }
};

</script>