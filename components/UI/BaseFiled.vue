<template>
  <div class="input_group">
    <div class="input_group-label">
      <p v-if="error" class="error">{{ error }}</p>
      <p v-else-if="value?.length">{{ label }}</p>
    </div>
    <input
      :value="value"
      :type="type"
      :placeholder="label"
      :autofocus="autofocus"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    autofocus: Boolean,
  },
  emits: ['input'],
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.input_group {
  position: relative;
  margin-bottom: 20px;
  &-label {
    margin: 0 10px;
    max-width: calc(100% - 20px);
    position: absolute;
    top: -0.55em;
    background: $base-white;
    display: block;
    float: left;
    padding: 0 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: $ui-text-input-label-normal;
  }
  .error {
    color: $ui-text-input-label-error;
  }
  input {
    width: 100%;
    border: 1px solid #dadada;
    border-radius: 5px;
    text-align: left;
    padding: 15px;
    outline: none;
    max-width: 100%;
  }
}
</style>
