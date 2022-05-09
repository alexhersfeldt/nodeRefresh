import { writable } from "svelte/store"

export let user = writable(null);


export const products = [
    {
        name: "chair",
        description: "Old vintage chair used by King Frederik th 7th",
        price: 15000,
        imageUrl:"images/vintage-chair.jpg"
    },
    {
        name: "Table",
        description: "Old table used by John Keneddy",
        price: 25000,
        imageUrl:"images/table.jpg"
    },
    {
        name: "Lamp",
        description: "Modern Lamp designed by Arn Jacobsen",
        price: 5000,
        imageUrl:"images/lamp.jpg"
    },
]