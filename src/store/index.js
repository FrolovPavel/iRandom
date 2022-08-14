import { createStore } from 'vuex'
import password from './modules/passwords/module'

export default createStore({
  modules: {
    password
  }
})
