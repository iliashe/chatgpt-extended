<template>
  <form class="border-2 border-white px-4 py-8 flex flex-col gap-4">
    <div class="flex flex-col">
      <label for="username">Username</label>
      <input v-model="username" class="text-black" type="text" name="username" placeholder="Hulk" />
    </div>

    <div class="flex flex-col">
      <label for="email">Email<sup>*</sup></label>
      <input v-model="email" class="text-black" type="email" name="email" placeholder="example@email.com" required />
    </div>

    <div class="flex flex-col">
      <label for="password">Password<sup>*</sup></label>
      <input v-model="password" class="text-black" type="password" name="password" placeholder="qwerty123" required />
    </div>
  </form>

  <button @click="submitForm()" type="submit" class="p-4 border-2 border-white">
    Submit
  </button>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"
import { useUserStore } from "@/stores/user"

const user = useUserStore()

const username = ref("")
const email = ref("")
const password = ref("")

function submitForm() {
  if (email && password) {
    axios
      .post(import.meta.env.VITE_API_URL + '/user/login', {
        email: email.value,
        password: password.value
      })
      .then(res => {
        console.log(res.data)
        if (res.data) {
          user.isLogged = true
        }
      })
      .catch(err => console.log(err))
  }
}
</script>