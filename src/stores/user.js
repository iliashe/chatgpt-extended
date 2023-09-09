import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLogged = false

  const conversations = []
  const selectedConversation = null

})