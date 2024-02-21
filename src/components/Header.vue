<template>
  <header id="header">
    <router-link to='/' exact>Filmaria</router-link>
    <router-link to='/salvos' exact class="meusFilmes"><button>SALVOS</button></router-link>
  </header>
</template>

<script>
export default {
  name: 'Header_'
}
</script>

<style scoped>
  #header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: brown;
  }

  #header a{
    text-decoration: none;
    font-size: 30px;
    color: #FFF;
    cursor: pointer;
  }

  button{
    cursor: pointer;
    border: 0;
    background: #FFF;
    padding: 5px 15px;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
  }
</style>