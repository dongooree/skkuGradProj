<template>
  <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
</template>

<script>
import c1 from '../components/c1.vue'

export default {
    components: {c1},
    data () {
        return {
            n: 1
        }
    },
    methods: {
        increment (){
            this.n += 1
        }
    }
}
</script>
