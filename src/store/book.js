export default {
    state: {
        fileName: '',
        menuVisible: false
    },
    mutations: {
        'SET_FILENAME': (state, value) => {
            state.fileName = value
        },
        'SET_MENUVISIBLE': (state, value) => {
            state.menuVisible = value
        }
    },
    actions: {
        setFileName({commit}, value){
            return commit('SET_FILENAME', value)
        },
        setMenuVisible({commit}, value){
            return commit('SET_MENUVISIBLE', value)
        }
    }
}
