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

<style scoped>
.post{
  border: solid 3px #20bf60;
  padding: 8px;
  margin-top: 16px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>