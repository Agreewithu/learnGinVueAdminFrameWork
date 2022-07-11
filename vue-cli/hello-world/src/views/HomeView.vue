<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/home/about">About</router-link> |
      <router-link to="/home/Agreewithu">Agreewithu</router-link>
    </nav>
    <!--Router Transmiss Parameter -->
    <ul>
      <li v-for="(item, key) in 5" :key="key">
        <router-link :to="'/home/user/'+(key+1)">(Router Transmiss Parameter)I am user: {{key + 1}}</router-link>
        <br/>
        <router-link :to="{
          path:'/home/user/:id',
          query:{
            id:key+1
          }
        }">
          (Declare Transmiss Parameter)I am User:{{key+1}}
        </router-link>
        <br/>
        <ul><li @click="funcTransPara(key+1)">(Func Transmiss Para)I am user:{{key+1}}</li></ul>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  methods:{
    funcTransPara(tdata){
      this.$router.push({
        name:'user',
        query:{
          id:tdata
        }
      })
    }
  },
  components: {
    HelloWorld
  }
}
</script>
