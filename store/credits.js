export const state = () => ({
  credits: null
})

export const mutations = {
  set(state, credits) {
    state.credits = credits
  }
}

export const actions = {
  async get({ state, commit, dispatch }, attributes) {
    const { credits } = (await this.$axios.get('credits')).data

    commit('set', credits)
  }
}