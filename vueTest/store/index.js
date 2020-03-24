import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, value) {
      state.count += value
    },
    init (state, value) { // 두번째 인자가 없으면 0으로 초기화
      value = value || 0 // value가 false면 0값을 넣음 
      state.count = value
    }
  }
})

export default store