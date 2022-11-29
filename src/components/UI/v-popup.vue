<template>
  <div
      class="popUp"
      v-if="show"
      @click="hideDialog"
  >
    <div class="popUp__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {
    show: {
      Type: Boolean,
      default: true
    },
  },
    methods:{
      hideDialog() {
        this.$emit('update:show', false)
      }
    },
}
</script>

<style scoped lang="scss">
.popUp{
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  &__content{
    background: white;
    margin: auto;
    padding: 20px;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
  }
}
</style>