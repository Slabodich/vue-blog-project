<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "v-my-button",
}
</script>
<style scoped lang="scss">
  .btn{
    padding: 10px 15px;
    background: none;
    border: solid 2px #15daa3;
    color: #15daa3  ;
    &:hover{
      cursor: pointer;
    }
  }
</style>