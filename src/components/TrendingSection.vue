<template>
    <section
        class="trend container w-full h-screen font-['Poppins'] grid grid-cols-5 gap-4 relative"
    >
        <div class="flex items-center col-span-1">
            <div class="flex flex-col justify-center items-center p-5">
                <div
                    class="text-2xl text-[#222222] rotate-[270deg] px-10 py-14"
                >
                    <span class="font-bold tracking-tight">TRENDING</span>
                </div>
                <div class="h-48">
                    <img class="h-full" src="../assets/Line.svg" alt="line" />
                </div>
                <div class="text-2xl font-light text-[#707070] rotate-[270deg]">
                    <span class="p-4">02</span>
                </div>
            </div>
        </div>

        <div
            class="gallery w-full grid grid-cols-4 gap-y-4 col-span-4 items-center content-center relative"
        >
            <nav
                class="absolute top-20 md:top-30 grid grid-cols-2 w-full text-lg font-light z-10"
            >
                <ul class="grid grid-cols-3">
                    <li
                        @click="showClothes"
                        class="cursor-pointer"
                        :class="{ underline: clothesDisplay }"
                    >
                        Clothes
                    </li>
                    <li
                        @click="showJewelries"
                        class="cursor-pointer"
                        :class="{ underline: jewelriesDisplay }"
                    >
                        Jewelries
                    </li>
                    <li
                        @click="showElectronics"
                        class="cursor-pointer"
                        :class="{ underline: electronicsDisplay }"
                    >
                        Electronics
                    </li>
                </ul>
                <div class="flex items-center justify-end">
                    <span class="lg:pr-24">All products</span>
                </div>
            </nav>
            <ProductDisplay v-if="clothesDisplay" :products="clothing" />
            <ProductDisplay v-if="jewelriesDisplay" :products="jewelries" />
            <ProductDisplay v-if="electronicsDisplay" :products="electronics" />
        </div>
    </section>
</template>

<script>
import ProductDisplay from './ProductDisplay.vue'
export default {
    name: 'TrendingSection',
    components: {
        ProductDisplay,
    },
    data() {
        return {
            clothesDisplay: true,
            jewelriesDisplay: false,
            electronicsDisplay: false,
        }
    },
    methods: {
        showClothes() {
            if (
                this.clothesDisplay &&
                !this.jewelriesDisplay &&
                !this.electronicsDisplay
            ) {
                return
            } else if (!this.clothesDisplay) {
                this.clothesDisplay = true
                this.electronicsDisplay = false
                this.jewelriesDisplay = false
            }
        },
        showJewelries() {
            if (this.clothesDisplay || this.electronicsDisplay) {
                this.clothesDisplay = false
                this.electronicsDisplay = false
                this.jewelriesDisplay = true
            } else if (this.jewelriesDisplay) {
                return
            }
        },
        showElectronics() {
            if (this.clothesDisplay || this.jewelriesDisplay) {
                this.clothesDisplay = false
                this.electronicsDisplay = true
                this.jewelriesDisplay = false
            } else if (this.electronicsDisplay) {
                return
            }
        },
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        electronics() {
            return this.$store.state.electronics
        },
        jewelries() {
            return this.$store.state.jewelries
        },
        clothing() {
            return this.$store.state.clothes
        },
    },
}
</script>
