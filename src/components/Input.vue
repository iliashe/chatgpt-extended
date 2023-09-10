<template>
  <div class="flex flex-wrap gap-8">
    <textarea
      class="h-full p-4 rounded-md bg-black border-2 border-white"
      v-model.trim="store.inputMessage"
    >
    </textarea>

    <button @click="sendMessage" class="h-max px-8 py-2 bg-sky-500 rounded-md">Submit</button>
  </div>
</template>

<script setup>
import axios from "axios"
import { useInputStore } from "@/stores/input"
import { useUserStore } from "@/stores/user";

const store = useInputStore()
const user = useUserStore()

function sendMessage() {
  axios
    .post(`${import.meta.env.VITE_API_URL}/conversation/send-message`, {
      conversationId: user.selectedConversation?.id,
      message: store.inputMessage
    })
    .then(res => {
      console.log(res.data)
      let updatedConversation
      return updatedConversation = res.data

    })
    .then(updatedConversation => {
      console.log(updatedConversation)
      // update conversation if it existed before, else create new one
      if (user.selectedConversation) {

        let conversation = user.conversations.find(conversation => conversation.id === user.selectedConversation.id)
        conversation = updatedConversation

      } else {

        user.conversations.push(updatedConversation)

      }

      user.selectedConversation = updatedConversation    
      
    })
    .catch(err => console.log(err));
}
</script>