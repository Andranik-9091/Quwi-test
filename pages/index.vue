<template>
  <div class="home">
    <div class="container">
      <div v-if="!projectsList.length" class="projects-empty">
        You have no projects
      </div>
      <div v-else class="projects">
        <project-item
          v-for="project in projectsList"
          :key="project.id"
          :project-data="project"
          @open="TOGGLE_EDIT_MODAL(true)"
        />
      </div>
    </div>
    <edit-project v-if="isOpenEditModal" @close="TOGGLE_EDIT_MODAL(false)" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import EditProject from '~/components/EditProject.vue'
import ProjectItem from '~/components/ProjectItem.vue'
export default {
  name: 'Home',
  components: { ProjectItem, EditProject },
  layout: 'main',
  middleware: 'authenticated',
  computed: {
    ...mapGetters({
      projectsList: 'projects/getProjectsList',
      isOpenEditModal: 'projects/isOpenEditModal',
    }),
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    ...mapMutations({
      TOGGLE_EDIT_MODAL: 'projects/TOGGLE_EDIT_MODAL',
    }),
    ...mapActions({
      getProjects: 'projects/getProjects',
    }),
  },
}
</script>

<style lang="scss" scoped>
.home {
  height: calc(100vh - 80px);
  background: $dark;
  padding-top: 50px;
}
.projects {
  width: 767px;
  max-width: 100%;
  margin: 0 auto;
}
.projects-empty {
  color: $base-white;
}
</style>
