<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </h3>
    <div class="post-meta text-gray0700 flex items-center space-x-2">
      <div>{{ format(new Date(post.created_at), "MMMM dd, yyyy") }}</div>
      <div>&middot;</div>
      <div>{{ post.user.name }}</div>
    </div>
    <div class="post-preview leading-relaxed mt-4">
      <p class="line-clamp-4">{{ post.body }}</p>
    </div>
    <div class="mt-4">
      <NuxtLink
        class="bg-blue-700 hover:bg-blue-800 text-white rounded inline-block px-4 py-2"
        :to="`/posts/${post.id}`"
      >
        Read more
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns";
const { ...post } = defineProps({ post: Object });
</script>
