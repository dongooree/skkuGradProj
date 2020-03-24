export const state = () => ({
    userInfos : [
        {names: 'pde', id: 0, age: '25'}
    ]
})

export const mutations = {
    add(state, userInfo) {
        state.userInfos.push(userInfo)
    }
}

export const getters = {
    userInfos(state) {
        return state.userInfos
    }
}