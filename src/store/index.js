import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex);

const state = {
    showFoot: true,
    changeNum: 0
}

// const getters = {
//     isShow(state){
//         return state.showFoot
//     },
//     getChangeNum(){
//         return state.changeNum
//     }
// }

const store = new Vuex.Store({
    state,
    //getters,
    mutations,
    actions
})

export default store;