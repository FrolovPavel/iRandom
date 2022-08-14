import state from './state'
import getters from './getters'
import mutations from './mutations'

const layoutModule = {
  namespaced: true,
  state,
  getters,
  mutations
}

export default layoutModule
