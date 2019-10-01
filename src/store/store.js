import Vue from 'vue'
import Vuex from 'vuex'
import book from './book'
import getters from './gettters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    book
  },
  getters
})
