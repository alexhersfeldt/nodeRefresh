<script>
import axios from "axios"
import {onMount} from "svelte"

let name ="";
let email = "";
let password = "";

onMount(async() => {
    let {} = await axios.get()
})

</script>

<main>
    <form class="box">
    
        <div class="field" >
            <label for="" class="label">Name</label>
            <div class="control">
                <input class="input" type="text" bind:value={name} placeholder="John Doe">
            </div>
        </div>       

      <div class="field" >
        <label for="" class="label">Email</label>
        <div class="control">
          <input class="input" type="email" bind:value={email} placeholder="e.g. johndoe@gmail.com">
        </div>
      </div>

      <div class="field">
        <label for="" class="label">Password</label>
        <div class="control">
          <input class="input" type="password" bind:value={password} placeholder="****">
        </div>
      </div>


    <div class="field">
        <p class="control">
            <button class="button is-success">Login</button>
        </p>
    </div>

</form>


</main>

<style>
form.box {
    width: 400px;
    margin: 10px;
}

div.field {
    width: 300px;
    margin: auto;
    padding-bottom: 10px;

}
p.control, label {
    display: flex;
    justify-content: center;
   
}

</style>