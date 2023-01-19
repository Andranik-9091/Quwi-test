<template>
  <div class="edit_modal-wrapper" @click="$emit('close')">
    <div class="edit_modal-card" @click.stop>
      <base-filed v-model="editableForm.name" label="Email" type="text" />
      <base-button @click.native="editProjectData">Edit</base-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BaseButton from './UI/BaseButton.vue'
import BaseFiled from './UI/BaseFiled.vue'
export default {
  components: { BaseFiled, BaseButton },
  data() {
    return {
      editableForm: {
        name: '',
      },
    }
  },
  computed: {
    ...mapGetters({
      getEditableProject: 'projects/getEditableProject',
    }),
  },
  mounted() {
    this.setEditableProjectName()
  },
  methods: {
    ...mapActions({
      editProject: 'projects/editProject',
    }),
    setEditableProjectName() {
      const name = this.getEditableProject.name

      this.editableForm.name = name || ''
    },
    editProjectData() {
      const projectData = {
        id: this.getEditableProject.id,
        name: this.editableForm.name,
      }

      try {
        this.editProject(projectData)
        this.$emit('close')
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped>
.edit_modal {
  &-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba($color: $dark, $alpha: 0.6);
  }
  &-card {
    width: 480px;
    margin: 20% auto 0;
    background: $base-white;
    padding: 20px;
    button {
      width: 100%;
      background: #c44512;
      height: 52px;
      font-size: 1.125rem;
      font-weight: normal;
      color: $base-white;
      border: none;
      outline: none;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
