import clients from '../../api/clients'

// initial state
const state = {
    all: []
  }

  // getters
  const getters = {}

  // actions
  const actions = {
    getAllClients ({ commit }) {
       clients.getAll(clients_list => {
        commit('setClients', clients_list)
      })
    }
  }

  // mutations
  const mutations = {
    setClients (state, clients) {
      state.all = clients||[]
    },

  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
