<template>
  <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3 quote">
        <div @click="removeQuote" class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
  </div>
</template>

<script>
import { store } from '../main.js'

export default {
    props: {
        id: Number
    },
    methods: {
        removeQuote() {
            store.$emit('destroyChild', this.id)
        }        
    }
}
</script>

<style>
.quote {
    padding: 10px;    
}
.card:hover {
    background-color: lightpink;
}
</style>
