<template>
     <div>
        <h1>Users Lists</h1>
          <div v-for="user in usersAge" :key="user.id" class="jobs">
              <router-link :to="{ name:'Details', params:{ id: user.id }}">
                  <h2 class="lists">My name is {{user.name}} and i am {{user.age}} years old.My Present location is  {{user.Location}}.</h2>
              </router-link>
          </div>
          <!-- Not Recommeded because we cant track the data while changes we make changes -->
          <h3>Direct Updating</h3>
          <button v-on:click="reduceAge" class="btn btn-dark">Reduce age</button>
     </div>
</template>

<script>
export default {
    name:'UsersList',
    props:['id'],
    computed:{
        user1(){
          return this.$store.state.users
        },
        usersAge(){
            return this.$store.getters.userAge;
        }
    },
    methods:{
        reduceAge(){
            return this.$store.state.users.forEach((user)=>{
                return user.age-=10
            })
        }
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