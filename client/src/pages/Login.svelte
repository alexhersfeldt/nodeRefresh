<script>
import axios from "axios";
import{ push } from "svelte-spa-router";
import { user } from "../stores";
import toastr from "toastr"

let email;
let password;

  async function login() {
    try {
      const { data } = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      $user = data.user;
      console.log(data.user);
      toastr.success("Logged in");
      push("/dashboard");
    } catch (error) {
        toastr.warning('Incorrect login');
    }
  }



</script>

<main >
  
  <p class="title is-1 is-info">Welcome to "The Furniture Store"</p>
  <p class="title is-3 is-info">Please login</p>
  
  <div id="container">
    <form class="box" on:submit|preventDefault={login}>
    
            
      <div class="field" >
        <label for="" class="label">Email</label>
        <div class="control">
          <input class="input" type="text" bind:value={email} required placeholder="e.g. johndoe@gmail.com">
        </div>
      </div>

      <div class="field">
        <label for="" class="label">Password</label>
        <div class="control">
          <input class="input" type="password" bind:value={password} placeholder="****" required>
        </div>
      </div>


      <div class="field">
          <div class="control">
            <input type="submit" class="button is-info is-light" value="Submit" />
          </div>
      </div>

    </form>
  </div>
</main>

<style>
#container {
  display: flex;
  justify-content: center;
}

form.box {
    width: 400px;
    margin: 10px;

}

div.field {
    width: 300px;
    margin: auto;
    padding-bottom: 10px;

}
label, p {
    display: flex;
    justify-content: center;
   
}

</style>