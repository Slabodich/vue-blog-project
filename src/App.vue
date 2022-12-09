<template>
    <div class="app">
      <h1>Страница с постами</h1>
      <v-input
          v-model="searchQuery"
          placeholder="Поиск...."
          class="app__search"
      />
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
          :posts="SortAndSearchPosts"
          @remove="removePost"
      />
      <div ref="observer" class="observer"></div>
<!--      <div class="page-wrapper">-->
<!--        <div-->
<!--            class="page"-->
<!--            v-for="pageNumber in totalPages"-->
<!--            :key="pageNumber"-->
<!--            :class="{-->
<!--              'current-page': page === pageNumber-->
<!--            }"-->
<!--            @click="changePage(pageNumber)"-->
<!--        >-->
<!--          {{pageNumber}}-->
<!--        </div>-->
<!--      </div>-->
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
              searchQuery: '',
              totalPages: 0,
              page: 1,
              limit: 10,
              sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
              ],

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
          // changePage(pageNumber){
          //   this.page = pageNumber
          //   this.fetchPosts()
          // },
          async fetchPosts(){
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                  _page: this.page,
                  _limit: this.limit
                }
              });
              this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
              this.posts = response.data
            }catch (e){
              alert("Ошибка")
            }
          },
          async loadMorePosts(){
            try {
              this.page += 1
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params:{
                  _page: this.page,
                  _limit: this.limit
                }
              });
              this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
              this.posts = [...this.posts,...response.data]
            }catch (e){
              alert("Ошибка")
            }
          }
        },
      mounted() {
          this.fetchPosts()
        let options = {

          rootMargin: '0px',
          threshold: 1.0
        }
        let callback = (entries) => {
          if(entries[0].isIntersecting && this.page < this.totalPages){
            this.loadMorePosts()
          }
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
      },
      computed:{
        selectedPosts(){
          return [... this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        SortAndSearchPosts(){
          return this.selectedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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
      &__search{
        width: 100%;
      }
    }
    .page-wrapper{
      display: flex;
      margin: 10px;
      .page{
        border: 1px solid black;
        padding: 15px;
        margin: 5px;
      }
      .current-page{
        border: 3px solid grey;
      }
    }


</style>