<template>
  <div v-if="posts.length">
      <h3>Список поcтов</h3>
    <transition-group name="post-list">
      <v-post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2
      v-else style="color: red"
  >
    Список постов пуст
  </h2>
</template>

<script>
import VPostItem from "@/components/v-postItem";

export default {
  name: "v-postList",
  components: {VPostItem},
  props:{
    posts:{
      type: Array,
      required: true
    },
  },
}
</script>

<style scoped>
  post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all 0.4s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .post-list-move {
    transition: transform 0.8s ease;
  }
</style>