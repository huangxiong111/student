import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    showFoot: true,
    changeNum: 0
}

const getters = {
    isShow(state){
        return state.showFoot
    },
    getChangeNum(){
        return state.changeNum
    }
}

const mutations = {
    show(state){
        state.showFoot = true
    },
    hide(state){
        state.showFoot = false
    },
    newNum(state, sum){
        state.changeNum += sum
    }
}

const active = {
    hideFoot(context){
        context.commit('hide')
    },
    showFoot(context){
        context.commit('show')
    },
    getNnewNum(context, num){
        context.commit('newNum', num)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    active
})

export default store;