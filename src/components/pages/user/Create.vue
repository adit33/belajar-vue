<template>
  <div>
  <form-user></form-user>
  </div>
</template>

<script type="text/javascript">
  import form from './Form'
  export default{
    name:'Create',
    components:{FormUser : form},
    data(){
      return{
        // name:'',
        // users:[]
      }
    },
    methods:{
      addUser(){
        // let inputUsers={
        //   name:this.name
        // }
        // this.users.push(inputUsers);
      }
    }
  }
</script>