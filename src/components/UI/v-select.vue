<template>
  <select
      class="v-select"
      v-model="localModelValue"
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
  },
  computed: {
    localModelValue: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue)
      },
    },
  },
}
</script>

<style scoped>

</style>