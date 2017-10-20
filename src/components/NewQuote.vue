<template>
  <div>
      <form @submit.prevent="addQuote">
          <div class="form-group">
              <label for="quote">Quote</label>
              <textarea type="text" class="form-control" rows="3" id="quote" v-model="quote"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Add Quote</button>
      </form>  
    </div>
</template>

<script>
import { store } from '../main.js'

export default {
    data: function() {
        return {
            quote: 'Default Quote'
        }
    },
    methods: {
        addQuote() {
            store.addQuote(this.quote)
        }
    }
}
</script>

<style scoped>
form {
    max-width: 500px;
    margin: 2em auto;
}
label {
    font-weight: bold;
}
</style>
