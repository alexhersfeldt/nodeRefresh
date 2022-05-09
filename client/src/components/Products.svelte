<script>
import { products } from "../stores";

const addToCart = ()=> {
// this is just a dummy function. In a finished product this would have added to a shopping cart with ability to buy it and stuff
}
</script>
    
<main>
{#each products as product}
    <div class="card">
        <div class="card-image">
                <img src={product.imageUrl} alt={product.name}>
        </div>
        <div class="card-content">
        <div class="media">
            <div class="media-content">
            <p class="title is-4">{product.name}</p>
            <p>{product.price} DKK / {product.price*0.13}€ </p>
            </div>
        </div>
    
        <div class="content">
        {product.description}
        </div>

        <footer class="card-footer">
            <a on:click={addToCart} class="card-footer-item">Add to cart</a> 
            
          </footer>
        </div>
    </div>
{/each}
</main>
    
<style>
    .card {
        width: 450px;
        margin: 10px;
    }
    .card-image {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        
        width: 350px;
        height: 350px;

    }
    main {
        display: flex;

        
    }
    
</style>