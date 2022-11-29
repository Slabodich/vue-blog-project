<template>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <v-input
          v-model="post.title"
          type="text"
          placeholder="Название поста"

      />
      <v-input
          v-model="post.body"
          type="text"

          placeholder="Описание"
      />
      <v-my-button
          class="add-btn"
          @click="addPost"
      >
        Добавить
      </v-my-button>

    </form>
</template>

<script>

export default {
  name: "v-postForm",
  data(){
    return{
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods:{
    addPost(){
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
    form{
      display: flex;
      flex-direction: column;
      .add-btn{
        align-self: end;
        margin-top: 16px;
      }
    }

</style>