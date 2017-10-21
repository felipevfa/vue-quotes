import Vue from 'vue'
import App from './App.vue'

export const store = new Vue({
  data: function() {
    return {
      quotes: ['Default Quote']
    }
  },
  methods: {
    addQuote(quote) {
      if (!this.isFull)
        this.quotes.unshift(quote)
    },
    getQuotes() {
      return this.quotes
    }
  },
  computed: {
    isFull: function() {
      return this.quotes.length >= 10
    }
  }
});

store.$on('destroyChild', (index) => {
  store.quotes.splice(index, 1)
})

new Vue({
  el: '#app',
  render: h => h(App),
})


