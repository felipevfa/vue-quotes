<template>
  <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3 quote">
        <div @click="key" class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        id: Number
    },
    methods: {
        key() {
            console.log("Id: " + this.id)
        }
    }
}
</script>

<style>
.quote {
    padding: 10px;    
}
</style>
