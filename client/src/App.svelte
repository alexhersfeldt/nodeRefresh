<script>
import Router from "svelte-spa-router"	
import Home from "./pages/Home.svelte";
import Dashboard from "./pages/Dashboard.svelte";
import Login from "./pages/Login.svelte"
import Register from "./pages/Register.svelte"
import Contact from "./pages/Contact.svelte"

const routes = {
	"/" : Home,
	"/dashboard" : Dashboard ,
	"/login" : Login,
	"/register" : Register,
	"/contact" : Contact
};
</script>
<Router {routes} />
<style>
	
</style>