<template>
  <button class="base-btn"><slot /></button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.base-btn {
  width: 100%;
  background-color: $ui-button-bg;
  height: 52px;
  font-size: 1.125rem;
  font-weight: normal;
  color: $base-white;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: $ui-button-bg-hover;
  }
}
</style>
