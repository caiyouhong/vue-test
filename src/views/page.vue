<template>
    <div class="">
       <hello-world>
           <template v-slot:default="slotProps">
               <i class="fas fa-check"></i>
               <span class="green">{{ slotProps.item }}</span>
           </template>
       </hello-world>
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue'
    export default {
        components: {HelloWorld},
        data() {
            return {

            };
        },
        mounted() {

        },
        methods: {}
    };
</script>
<style scoped>

</style>