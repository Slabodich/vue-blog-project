<template>
    <div class="app">
      <h1>Страница с постами</h1>
      <v-my-button
          @click="showDialog"
      >
        Создать пост
      </v-my-button>
      <v-popup v-model:show="dialogVisible">
        <v-post-form

            @create="addPost"
        />
      </v-popup>

      <v-post-list
          :posts="posts"
          @remove="removePost"
      />
    </div>
</template>

<script>
  import VPostForm from './components/v-postForm'
  import VPostList from "@/components/v-postList";
    export default {
        name: "App",
      components:{
        VPostForm,
        VPostList
      },
        data(){
            return{
                posts: [
                    {id:1, title: 'Заголовок', body:'Описание'},
                    {id:2, title: 'Заголовок2', body:'Описание2'},
                    {id:3, title: 'Заголовок3', body:'Описание3'}
                ],
              title: '',
              body: '',
              dialogVisible: false
            }

        },
        methods:{
          addPost(post){
            this.posts.push(post)
            this.dialogVisible = false
          },
          removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
          },
          showDialog(){
            this.dialogVisible = true
          }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app{
        padding: 16px;

    }

</style>