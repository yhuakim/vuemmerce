<template>
    <div
        v-for="product in products"
        :key="product.id"
        class="w-40 container relative p-2 lg:top-0 shadow-md"
    >
        <div class="h-36 w-36 relative">
            <img
                :src="product.image"
                :alt="product.title"
                class="object-contain h-36 w-36"
            />
            <small
                class="absolute bottom-0 left-2 p-1 bg-black/50 text-[.5rem] text-white"
                >{{ product.category }}</small
            >
        </div>
        <div class="p-2 border-b">
            <h3 class="text-lg z-10 truncate">{{ product.title }}</h3>
            <p class="text-lg">
                ${{ Number(product.price + product.price * 0.022).toFixed(2) }}
            </p>
        </div>

        <div class="grid grid-cols-2 pt-1">
            <ul class="">
                <li class="text-[.7rem] text-[#222222]/50">
                    {{ product.rating.count }} orders
                </li>
                <li class="text-[.7rem] text-[#ffd700]">
                    <i class="fa fa-star"></i>
                    {{ product.rating.rate }}
                </li>
            </ul>
            <div class="flex items-center justify-end">
                <button class="">
                    <i
                        @click="addToCart(product)"
                        class="fa fa-cart-plus cursor-pointer"
                    ></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDisplay',
    props: ['products'],
    methods: {
        addToCart(product) {
            try {
                this.$store.commit('addToCartItems', product)
                console.log(product)
            } catch (error) {
                alert(`Sorry, an error occurs from our side while adding your product to the cart, we are currently working on it, Kindly try again.

`)
            }
        },
    },
}
</script>
