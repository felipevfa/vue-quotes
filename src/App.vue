<template>
    <div class="container-fluid">
        <app-header></app-header>
        <app-new-quote></app-new-quote>
        <app-quotes></app-quotes>

        <div class="alert alert-primary text-center" role="alert">
            Info: Click on a Quote to delete it!
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import NewQuote from './components/NewQuote.vue'
import Quotes from './components/Quotes.vue'

export default {
    components: {
        appHeader: Header,
        appNewQuote: NewQuote,
        appQuotes: Quotes
    }
};
</script>

<style>
.container-fluid {
    max-width: 80%;
    margin: 0 auto;
}
</style>
