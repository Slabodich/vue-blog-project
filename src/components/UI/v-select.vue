<template>
  <select
      class="v-select"
      v-model="ModelValue"
      @change="changeOption"
  >
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "v-select",
  props:{
    modelValue:{
      Type: String,
    },
    options:{
      Type: Array,
      default: () => []
    }
  },
  methods:{
    changeOption(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>