<template>
  <div class="flex flex-wrap gap-8">
    <textarea
      class="h-full p-4 rounded-md bg-black border-2 border-white"
      v-model="store.inputMessage"
    >
    </textarea>

    <button @click="sendMessage" class="px-8 py-2 bg-sky-500 rounded-md">Submit</button>
  </div>
</template>

<script setup>
import axios from "axios"
import { useInputStore } from "@/stores/input"

const store = useInputStore()

function sendMessage() {
  axios
    .post(import.meta.env.VITE_API_URL, {
      msg: store.inputMessage
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>