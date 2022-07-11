import { createStore } from 'vuex'

export default createStore({
  state: {
    myNum:0,
  },
  getters: {
  },
  mutations: {
    addNumber(state,params){
      state.myNum = state.myNum + params.num
    },
    delNumber(state){
      state.myNum--
    }
  },
  actions: {
    asyncAdd(context){
      setTimeout(()=>{
        context.commit('addNumber')
      },2000)
    },
    asyncDel(context){
      setTimeout(()=>{
        context.commit('delNumber')
      },2000)
    }
  },
  modules: {
  }
})
