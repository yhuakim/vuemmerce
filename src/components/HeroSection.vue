<template>
    <section
        class="hero bg-[#EFEFEF] w-full h-screen font-['Poppins'] grid grid-cols-5 gap-4 relative"
    >
        <div class="flex items-center col-span-3">
            <div class="flex flex-col justify-center items-center p-5">
                <div class="text-2xl text-[#222222] rotate-[270deg] p-10">
                    <span class="font-bold tracking-tight">INTRO</span>
                </div>
                <div class="h-48">
                    <img class="h-full" src="../assets/Line.svg" alt="line" />
                </div>
                <div class="text-2xl font-light text-[#707070] rotate-[270deg]">
                    <span class="">01</span>
                </div>
            </div>
            <div class="text-left pl-5">
                <h1 class="font-primary font-black text-[#222222] text-[50px]">
                    SALE OFF! UP TO 70%
                </h1>
                <p
                    class="text-base py-4 mb-2 text-[#222222] leading-normal w-full"
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
                <div class="pt-4">
                    <button class="relative w-24">
                        <span class="text-base text-[#222222]">SHOP NOW</span>
                        <hr
                            class="border-8 absolute top-3 w-full border-[#FF2600]/10"
                        />
                    </button>
                </div>
            </div>
        </div>
        <div class="relative col-span-2">
            <img
                src="../assets/banner-img.png"
                alt="banner image"
                class="h-full z-50 absolute w-full object-scale"
            />
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
}
</script>

<style lang="scss" scoped></style>
