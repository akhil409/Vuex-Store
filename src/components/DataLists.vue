<template>
     <div>
        <h1>Data Lists</h1>
          <div v-for="user in userAge" :key="user.id" class="jobs">
              <router-link :to="{ name:'Details', params:{ id: user.id }}">
                  <h2 class="lists">My name is {{user.name}} and i am {{user.age}} years old.My Present location is  {{user.Location}}.</h2>
              </router-link>
          </div>
          <h3>Updating using Mutations</h3>
          <button v-on:click="reduceAge(10)" class="btn btn-success">Reduce Age</button>
     </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name:'DataLists',
    props:['users'],
    computed:{
        users1(){
            return this.$store.state.users;
        },
        // addAge(){
        //    return this.$store.getters.userAge;   
        // }

        //MapGetters from Vuex
        ...mapGetters([
            'userAge'
        ])
    },
    methods:{
        // reduceAges(ages){
        // //    return this.$store.commit('reduceAge')
        // return this.$store.dispatch('reduceAge',ages)
        // }

        //MapActions from Vuex
        ...mapActions([
            'reduceAge'
        ])
    }

}
</script>

<style scoped>
    .jobs h2{
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
    margin-bottom: 3rem;
   }

   .jobs h2:hover{
    background-color: #ddd;
   }

   .jobs a{
    text-decoration: none;
   }
</style>