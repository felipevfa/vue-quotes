<template>
  <div>
      <h3>Quotes Added</h3>
      <div class="progress" style="height: 20px;">
          <div class="progress-bar" role="progressbar" 
              :style="width"
              :aria-valuenow="store.getQuotes().length" aria-valuemin="0" aria-valuemax="10">{{ store.getQuotes().length }}/10</div>
      </div>
  </div>
</template>

<script>
import { store } from '../main.js'

export default {
    data: function() {
        return {
            store: store
        }
    },
    computed: {
        width: function() {
            return "width: " + store.getQuotes().length*10 + '%;'
        }
    }
}
</script>

<style scoped>
h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
}
.progress-bar {
    padding: 10px;
}
</style>
