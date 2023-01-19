export const state = () => ({
  projectsList: [],
  editModal: false,
  editableProject: null
})

export const getters = {
  getProjectsList(state) { return state.projectsList },
  isOpenEditModal(state) { return state.editModal },
  getEditableProject(state) { return state.editableProject },
}

export const mutations = {
  SET_PROJECTS_LIST(state, projects) {
    state.projectsList = projects
  },
  TOGGLE_EDIT_MODAL(state, bool) {
    state.editModal = bool
  },
  SET_EDITABLE_PROJECT(state, project) {
    state.editableProject = project
  },
  SET_PROJECT_DATA(state, project) {
    const editableData = state.projectsList.find(item => item.id === project.id)
    if (!editableData) return
    Object.assign(editableData, project)
  }
}

export const actions = {
  async getProjects({ commit }) {
    try {
      const { data } = await this.$axios.get(
        'projects-manage',
      )
      commit('SET_PROJECTS_LIST', data.projects)

    } catch (error) {
      throw new Error(error)
    }
  },
  async editProject({ commit }, projectData) {
    const editableData = {
      name: projectData.name
    }
    try {
      const { data } = await this.$axios.post(`projects-manage/update?id=${projectData.id}`, editableData)
      commit('SET_PROJECT_DATA', data.project)
    } catch (error) {
      throw new Error(error)
    }
  }
}
