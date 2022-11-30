<template>
    <div class="app">
      <h1>Страница с постами</h1>
      <div class="app__btns">
        <v-my-button
            class="app__btns-add"
            @click="showDialog"
        >
          Создать пост
        </v-my-button>
        <v-select
          v-model="selectedSort"
          :options="sortOptions"
        />
      </div>
      <v-popup v-model:show="dialogVisible">
        <v-post-form

            @create="addPost"
        />
      </v-popup>

      <v-post-list
          :posts="selectedPosts"
          @remove="removePost"
      />
    </div>
</template>

<script>
  import VPostForm from './components/v-postForm'
  import VPostList from "@/components/v-postList"
  import axios from "axios"
    export default {
        name: "App",
      components:{
        VPostForm,
        VPostList
      },
        data(){
            return{
                posts: [],
              title: '',
              body: '',
              dialogVisible: false,
              selectedSort: '',
              sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
              ]
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
          },
          async fetchPosts(){
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
              this.posts = response.data
            }catch (e){
              alert("Ошибка")
            }
          }
        },
      mounted() {
          this.fetchPosts()
      },
      computed:{
        selectedPosts(){
          return [... this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        }

      }
    }
</script>

<style scoped lang="scss">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app{
      padding: 16px;
      &__btns{
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
      }
    }

</style>