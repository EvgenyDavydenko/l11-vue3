<template>
<div>

  <h1 >
    Hello world!
  </h1>

  <button @click="login">
    login
  </button>
  <button @click="info">
    info
  </button>

  
</div>
</template>

<script setup>
import axios from 'axios'

const login = async () => {

  await axios.get('http://localhost:8080/sanctum/csrf-cookie').then(response => {
      // Login...
  });

  await axios.post('http://localhost:8080/login', {
    email: 'admin@mail.com',
    password: 'password',
  });

}

const info = async () => {

  axios.get('http://localhost:8080/api/user').then((res =>{
    console.log(res);
  }));

}

</script>