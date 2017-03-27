<template>
<div>
  {{ store.state.text }}
</div>
</template>

<script>
import store from '../vuex/store'
export default {
  name: 'goto',
  data () {
    return {
      store
    }
  }
}
</script>

<style>
</style>
