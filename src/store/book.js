export default {
    state: {
        fileName: ''
    },
    mutations: {
        'SET_FILENAME': (state, value) => {
            state.fileName = value
        }
    },
    actions: {
        setFileName({commit}, value){
            return commit('SET_FILENAME', value)
        }
    }
}
