import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInputStore = defineStore('input', () => {
  const inputMessage = ref('')
  const inputAttachments = ref([])
  
  return { inputMessage, inputAttachments }
})