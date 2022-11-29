<template>
  <div v-if="posts.length">
      <h3>Список поcтов</h3>
      <v-post-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="$emit('remove', post)"
      />
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

</style>