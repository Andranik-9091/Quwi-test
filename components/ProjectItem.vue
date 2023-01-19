<template>
  <div class="projectItem" @click="selectProject">
    <div class="projectItem-logo">
      <img :src="projectData.logo_url" alt="" />
      <h3>{{ projectData.name }}</h3>
    </div>
    <div
      class="projectItem-active"
      :class="{
        'active-project': isActiveProject(projectData.is_active) === 'active',
      }"
    >
      {{ isActiveProject(projectData.is_active) }}
    </div>
    <div v-if="projectData.date" class="projectItem-date">{{ projectData.date }}</div>
    <div v-else class="projectItem-date">
      <div
        v-for="item in projectDate"
        :key="item.id"
        class="projectItem-date-item"
      >
        <p>{{ item.label }}</p>
        <span>{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    projectData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      projectDate: [
        {
          id: 1,
          label: 'time this week',
          date: '00:00:00',
        },
        {
          id: 2,
          label: 'this month',
          date: '00:00:00',
        },
        {
          id: 3,
          label: 'total',
          date: '00:00:00',
        },
      ],
    }
  },
  methods: {
    ...mapMutations({
      SET_EDITABLE_PROJECT: 'projects/SET_EDITABLE_PROJECT',
    }),
    isActiveProject(data) {
      return data ? 'active' : 'inactive'
    },
    selectProject() {
      this.SET_EDITABLE_PROJECT(this.projectData)
      this.$emit('open')
    },
  },
}
</script>

<style lang="scss" scoped>
.projectItem {
  width: 100%;
  padding: 20px;
  background: $base-white;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  &-logo {
    display: flex;
    align-items: center;
    img {
      width: 64px;
      margin-right: 5px;
    }
  }
  &-active {
    text-transform: capitalize;
    color: red;
  }
  &-date {
    width: 180px;
    max-width: 100%;
    &-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .active-project {
    color: green;
  }
}
</style>
