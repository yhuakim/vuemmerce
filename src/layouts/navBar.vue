<template>
    <nav
        class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-[51] top-0 left-0 border-b border-gray-200 dark:border-gray-600"
    >
        <div
            class="container flex flex-wrap items-center justify-between mx-auto"
        >
            <a href="/" class="flex items-center">
                <img
                    src="../assets/logo.svg"
                    class="h-6 mr-3 sm:h-9"
                    alt="Sello Logo"
                />
            </a>
            <div class="flex md:order-2">
                <button
                    @click="
                        cartQuantity > 0
                            ? toggle()
                            : alert('Add an Item to the cart')
                    "
                    type="button"
                    class="text-white z-[52] relative focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 cursor-pointer"
                >
                    <i class="fa fa-shopping-cart fa-2x text-[#222222]"></i>
                    <span
                        v-if="cartQuantity > 0"
                        class="bg-[#444444] text-white px-1.5 rounded-full absolute top-0 right-4 text-[10px] shadow-md"
                        >{{ cartQuantity }}</span
                    >
                </button>
                <button
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
            >
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                    <li>
                        <a
                            href="#home"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                            aria-current="page"
                            >Home</a
                        >
                    </li>
                    <li>
                        <a
                            href="#trend"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Trending</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Services</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div
        :class="open ? 'bg-red-500 opacity-25 z-[54]' : 'opacity-100'"
        v-bind:class="cartQuantity <= 0 ? 'hidden' : ''"
        class="fixed top-0 left-0 h-screen w-screen"
    ></div>
    <nav
        :class="open ? 'navbar-open' : 'navbar-close'"
        v-bind:class="cartQuantity <= 0 ? 'navbar-close' : ''"
        class="navbar z-[56] w-[32rem] fixed overflow-x-scroll bg-gray-100 left-0 top-0 h-screen"
    >
        <div class="flex pr-2 justify-end">
            <button @click="toggle()" class="p-2 text-black text-xl font-bold">
                &#9747;
            </button>
        </div>
        <h1 class="text-xl text-center font-bold pt-5">Menu</h1>
        <ul v-for="item in cartItems" class="list-none text-black">
            <li class="w-full grid grid-cols-4">
                <div class="w-32 h-32 col-span-1">
                    <img
                        :src="item.image"
                        :alt="item.title"
                        class="w-28 h-24 object-contain"
                    />
                </div>
                <div class="col-span-2">
                    <p>{{ item.title }}</p>
                    <p class="">
                        ${{
                            Number(
                                (item.price + item.price * 0.022) *
                                    item.quantity
                            ).toFixed(2)
                        }}
                    </p>
                </div>
                <div class="col-span-1 grid grid-cols-3 content-center">
                    <i
                        @click="decreaseQuantity(item)"
                        class="fa fa-minus-square"
                    ></i>
                    {{ item.quantity }}
                    <i
                        @click="increaseQuantity(item)"
                        class="fa fa-plus-square"
                    ></i>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'navBar',
    data() {
        return {
            open: false,
        }
    },
    computed: {
        cartItems() {
            return this.$store.state.cartItems
        },

        cartQuantity() {
            return this.$store.getters.cartQuantity
        },
    },
    methods: {
        toggle() {
            this.open = !this.open
        },

        increaseQuantity(item) {
            return this.$store.commit('increaseProductQuantity', item)
        },

        decreaseQuantity(item) {
            return this.$store.commit('decreaseProductQuantity', item)
        },
    },
}
</script>

<style>
.navbar {
    transition: all 330ms ease-out;
}

.navbar-open {
    transform: translateX(0%);
}
.navbar-close {
    transform: translateX(-100%);
}
</style>
