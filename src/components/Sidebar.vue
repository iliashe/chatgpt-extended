<template> 
  <ul class="h-full w-full border-2 border-white">
    <li
      v-for="(conversation, index) in user.conversations"
      :key="index"
      class="border border-white rounded p-4 cursor-pointer hover:bg-black/25"
      :class="{ 'bg-black/25': user.selectedConversation?.id === conversation.id }"
      @click="selectConversation(index)"
    >
      <h6 class="flex gap-2">
        <i>{{ conversation.title }}</i>
        <b>({{ conversation.id }})</b>
      </h6>
    </li>
  </ul>
</template>

<script setup>
import { useUserStore } from "@/stores/user"

const user = useUserStore()

function selectConversation(conversationIndex) {
  user.selectedConversation = user.conversations[conversationIndex]
}
</script>
