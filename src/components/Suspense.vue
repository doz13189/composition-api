<template>
  <Suspense>
    <template #default>
      <!-- Put component/components here, one or more of which makes an asychronous call -->
    </template>
    <template #fallback>
      <!-- What to display when loading -->
    </template>
  </Suspense>
</template>
<script>
export default {
    
}
</script>
