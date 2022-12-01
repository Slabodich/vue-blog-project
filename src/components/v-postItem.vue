<template>
  <div class="post">
    <div>
      <div><strong>Название поста: </strong>{{post.title}}</div>
      <div><strong>Описание: </strong>{{post.title}}</div>
    </div>
    <div class="post__btns">
      <v-my-button
          @click="$emit('remove', post)"
      >Удалить</v-my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-postItem",
  props:{
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
.post{
  padding: 1em 2em;
  margin-top: 16px;
  color: black;
  box-shadow: 5px 5px rgba(0,0,0,.15);
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
  transition: all .4s ease;
  align-items: center;
  display: flex;
  justify-content: space-between;
  &:hover{
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 2.5px 2.5px rgba(0,0,0,.25);
    cursor: pointer;
  }
}
</style>