const actions = {
    hideFoot(context){
        context.commit('hide')
    },
    showFoot(context){
        context.commit('show')
    },
    getNewNum(context, num){
        context.commit('newNum', num)
    },
    jian(context, num){
        context.commit('jianNum', num)
    }
}

export default actions