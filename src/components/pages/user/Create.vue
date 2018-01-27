<template>
  <div>
    <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input" v-model="name">
  </div>
</div>

<!-- <div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fa fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fa fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fa fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div> -->

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click="addUser">Submit</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:'Create',
    data(){
      return{
        name:'',
        users:[]
      }
    },
    methods:{
      addUser(){
        let inputUsers={
          name:this.name
        }
        this.users.push(inputUsers);
      }
    }
  }
</script>