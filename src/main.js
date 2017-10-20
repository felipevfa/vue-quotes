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
      if (this.quotes.length < 10)
        this.quotes.push(quote)
    },
    removeQuote(index) {

    },
    getQuotes() {
      return this.quotes
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
})


