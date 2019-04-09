<template>
<div class="row">
    <div class="col-lg-6">
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-pills card-header-pills">
          <li class="nav-item">
            <a class="nav-link active" href="">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/Login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Single Sign in</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <h4 class="card-title">Login</h4>
        <div class="card-text">
            <form @submit.prevent="submit">
                <div class="form-group">
                  <label for="FirstName">Email</label>
                  <input type="text" v-model="data.email"
                    class="form-control" name="Email" id="Email" aria-describedby="helpEmail" placeholder="Email">
                  <small id="helpFirstName" class="form-text text-muted">You can use any email that you've used on our site.</small>
                <div class="form-group">
                  <label for="Password">Password</label>
                  <input type="password" v-model="data.password"
                    class="form-control" name="Password" id="Password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
      </div>
    </div>
    </div>
    <div class="col-lg-6">
      <div class="card border-success" v-if="newUser">
        <div class="card-body">
          <h4 class="card-title">Congrats! You've Logged In!</h4>
          <p class="card-text">
            {{newUser.FirstName}} {{newUser.LastName}} 
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { Globals } from "@/models/api";
import { Login } from "@/models/users";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export default {
    data: ()=> ({
        data: {},
        newUser: null
    }),
    methods: {
        async submit(){
            try {
              const m = await Login(this.data);
              this.newUser = m.user;
              Globals.user = m.user;
              Globals.user = m.token;
              toastr.success("You've logged in successfully!")
            } catch (error) {
              Globals.errors.push(error);
              toaster.error(error.msg);
            }
        }
    }
}
</script>

<style>
</style>