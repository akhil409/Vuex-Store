<template>
        <div class="jobDetails">
              <h2>The path of the Current page is {{id}}</h2>
        </div>
</template>

<script>
export default {
    name:'Details',
     props:['id'],
    // data(){
    //     return{
    //         id:this.$route.params.id
    //     }
    // }

}
</script>

<style scoped>
   .jobDetails h2{
    background-color: #f4f4f4;
    border-radius: 10px;
    cursor: pointer;
    color: #444;
    text-align: center;
    margin-bottom: 30rem;
   }

   .jobDetails h2:hover{
    background-color: #ddd;
   }
</style>