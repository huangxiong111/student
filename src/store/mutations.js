const mutations = {
    show(state){
        state.showFoot = true
    },
    hide(state){
        state.showFoot = false
    },
    newNum(state, sum){
        state.changeNum += sum
    },
    jianNum(state, sum){
        state.changeNum -= sum
    }
}

export default mutations