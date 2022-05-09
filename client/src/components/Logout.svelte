<script>
import { user } from "../stores"
import axios from "axios";
import{ push } from "svelte-spa-router";
import toastr from "toastr"

async function logout() {
    try {
      const { data } = await axios.post("http://localhost:3000/api/logout", {
      });
      
      $user = null
      console.log(data)
      toastr.success("Logged out")
      push("/");
    
    } catch (error) {
      console.log(error)
    }
  }
</script>

<button class="button is-info is-light" on:click= {logout}>Logout</button>