<template>
  <ul class="h-full w-full border-2 border-white">
    <li
      v-for="(message, index) in user.selectedConversation?.messages"
      :key="index"
    >
      {{ message.content }}
    </li>
  </ul>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const user = useUserStore()
</script>