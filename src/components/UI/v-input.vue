<template>
  <input
      :value="modelValue"
      @input="updateInput"
      type="text"
      class="input"
  />
</template>

<script>
export default {
  name: "v-input",
  props:{
    modelValue: [String, Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input{
  border: solid 2px #424141;
  padding: 8px;
  margin-top: 16px;
}
</style>