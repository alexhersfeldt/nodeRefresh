<script>
import { products } from "../stores";
</script>
    
<main>
{#each products as product}
    <div class="card">
        <div class="card-image">
        <figure class="image is-128x128">
            <img src={product.imageUrl} alt={product.name}>
        </figure>
        </div>
        <div class="card-content">
        <div class="media">
            <div class="media-content">
            <p class="title is-4">{product.name}</p>
            </div>
        </div>
    
        <div class="content">
        {product.description}
        </div>
        </div>
    </div>
{/each}
</main>
    
<style>
    .card {
        width: 400px;
        margin: 10px;
    }
    
</style>