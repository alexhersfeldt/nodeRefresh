<script>
import axios from "axios";
import{ push } from "svelte-spa-router";
import toastr from "toastr"
import { user } from "../stores"


let email;
let name;
let message;


async function sendMail() {
    try {
      const { data } = await axios.post("http://localhost:3000/mail/send", {
        name,
        email,
        message,
      });
      toastr.success('Mail Sent, We will get back to you');
      push("/dashboard");
    } catch (error) {
      console.log(error.response.data.message)
      toastr.warning('Something did not work. Try again')
  }
  }

  
function redirect(url) {
    push(url)
}



</script>

<main>
    {#if user}
    <div id="container">
        <form class="box" on:submit ={()=>sendMail}>
        
                
          <div class="field" >
            <label for="" class="label">Name</label>
            <div class="control">
              <input class="input" type="text" bind:value={name} required>
            </div>
          </div>
    
          <div class="field">
            <label for="" class="label">Email</label>
            <div class="control">
              <input class="input" type="text" bind:value={email} required>
            </div>
          </div>

          <div class="field">
            <label for="" class="label">Message</label>
            <div class="control">
                <textarea class="textarea" rows=10 bind:value={message}></textarea>
            </div>
          </div>
    
    
          <div class="field">
              <div class="control">
                <input type="submit" class="button is-info is-light" value="Submit" on:click={()=> sendMail} />
                <a href="#/dashboard" class="button is-info is-light ">Go back</a>
              </div>
          </div>
    
        </form>
      </div>
      {:else}
      <h1>Not logged in</h1>
        <button class="button is-info is-light" on:click={() => redirect("/login")}>Login</button>
    {/if}

</main>