<template>
    <div>
        <!-- $store.commit()으로 mutations에 정의된 method 호출. vuex로 확인 -->
        <!-- <button @click="$store.commit('increment', 2)">{{ $store.state.counter }}</button> -->
        <!-- <button @click="$store.commit('increment', 2)">{{ count }}</button>  -->
        <ul class="users">
            <li v-for="user in users" v-bind:key="user">id: {{user.id}}, name: {{user.name}}, age: {{user.age}}</li>
        </ul>

        <div class="add">
            <input type="text" name="" v-model="id">
            <input type="text" name="" v-model="name">
            <input type="text" name="" v-model="age">
            <button type="button" @click="userAdd">추가</button>
        </div>
    </div>
</template>

<script>
import c1 from '../components/c1.vue'
// import {mapState} from 'vuex'
import {mapMutations, mapGetters} from 'vuex'

export default {
    // components: {c1},
    computed: mapGetters({
        users: 'users/userInfos'
    }),
    data () {
        return {
            name: '',
            age: '',
            id: ''
        }
    },
    methods: {      
        userAdd () {
            let userInfo = {name: this.name, age: this.age, id: this.id}
            this.add(userInfo)
            this.name = ''
            this.age = ''
            this.id = ''
        },
        ...mapMutations({   // methods에 add라는 method를 merge
            add: 'users/add'
        })
    }
    // // fetch는 페이지 렌더링 되기 전에 호출되므로 store을 인자로 받아야하며
    // fetch ({store}) {   
    //     console.log('test')     // 렌더링 전이기 때문에 웹 브라우저가 아닌 터미널에 출력됨
    //     store.commit('init', 2)
    // }
}
</script>
