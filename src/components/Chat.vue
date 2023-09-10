<template>
  <ul class="h-full w-full border-2 border-white flex flex-col gap-12 py-4 overflow-y-auto">
    
    <li
      v-for="(message, index) in user.selectedConversation?.messages"
      :key="index"
      class="w-full"
    >
    
      <div
        :class="{
          'bg-sky-400 ml-auto mr-4': message.role === 'user',
          'bg-slate-600 ml-4': message.role === 'assistant'
        }"
        class="rounded max-w-[60%]"
      >
        
        <p class="p-4 text-xl">{{ message.content }}</p>
      
      </div>
    
    </li>
  
  </ul>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const user = useUserStore()
</script>