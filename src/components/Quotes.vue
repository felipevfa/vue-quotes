<template>
    <div class="row">
        <app-quote v-for="(quote, index) in store.getQuotes()" :key="index" :id="index">
            <p>{{ quote }}</p>
        </app-quote>
    </div>
</template>

<script>
import { store } from '../main.js'
import Quote from './Quote.vue'

export default {
    data: function() {
        return {
            store: store
        }
    },
    components: {
        appQuote: Quote
    },
}
</script>

<style>

</style>
