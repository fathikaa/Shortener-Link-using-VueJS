<template>
    <div class="flex justify-center items-center w-full h-screen bg-neutral-200 text-neutral-900">
      <div class="m-9 p-9 w-96 bg-neutral-50 shadow-lg">
        <h1 class="font-bold text-2xl">Daftar</h1>
        <h1 class="text-sm">Silahkan Isi Data Berikut</h1>
  
        <div class="mt-8">
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              
              <div class="md:col-span-5">
                <label for="full-name">Nama Lengkap</label>
                <input type="text" name="full-name" id="full-name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="App.input.user.nama" placeholder="nama lengkap" />
              </div>

              <div class="md:col-span-5">
                <label for="email">Alamat Email</label>
                <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" v-model="App.input.user.email" placeholder="email@domain.com" />
              </div>
  
              <div class="md:col-span-5">
                <label for="full_name">Password</label>
                <input type="password"
                id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="password">
              </div>
              
              <div class="md:col-span-5 text-center">
                <div class="inline-flex items-end">
                  <button @click="App.addUser(App.input.user)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Daftar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </template>
  
  <script>
  import {useApp} from '../stores/index';
  export default {
    setup() {
      const App = useApp();
      return {
        App,
      }
    },
    created() {
    }
  }
  </script>
  