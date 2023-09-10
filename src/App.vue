<template>
  <div class="h-full w-full flex">
    <aside class="h-full w-1/6">
      <Sidebar />
    </aside>
    
    <div class="h-full w-full flex flex-col">
      <header class="w-full">
        <Header />
      </header>
  
      <div class="h-full w-full overflow-y-auto">
        <Chat />
      </div>
  
      <div class="h-1/3 px-2 py-4">
        <Input />
      </div>
    </div>
  </div>

  <!-- <div class="" v-else>
    <Form />
  </div> -->


  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Chat from './components/Chat.vue'
import Input from './components/Input.vue'
import Form from './components/Form.vue'

import { onMounted } from 'vue'
import axios from 'axios'

import { useUserStore } from '@/stores/user'
const user = useUserStore()

onMounted(() => {
  axios
    .get(import.meta.env.VITE_API_URL + "/user/conversations")
    .then(res => {
      console.log(res.data)
      user.conversations = res.data
    })
    .catch(err => console.log(err))

})

</script>
