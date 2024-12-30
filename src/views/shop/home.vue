<template>

    <userNavbar v-if="user == 'customer'" :currentlyShop="true"></userNavbar>
    <baseNavbar v-else></baseNavbar>
    <div>
        <!-- PREVIEW -->
        <section class="preview w-full flex flex-row flex-wrap">
            <div class="w-full lg:w-1/2 p-8 lg:p-16">
                <div>
                    <p
                        class="uppercase font-extrabold font-['lato',serif] text-2xl sm:text-5xl md:text-6xl whitespace-nowrap">
                        Find clothes
                        <br v-if="br1">
                        that matches
                        <br> your style
                    </p>
                    <p
                        class="py-5 sm:py-10 text-gray-600 text-sm md:text-lg font-medium whitespace-wrap md:whitespace-nowrap ">
                        Browse through our diverse range of meticulously crafted garments,
                        <br v-if="br1">
                        designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <baseButton class="goto-shop capitalize whitespace-nowrap px-16 sm:px-28"
                        :style="{ width: 'fit-content' }" @click="this.$router.push('/shop.co/shop')">
                        go shopping now <i class="fa-sharp fa-regular fa-bag-shopping pl-1"></i>
                    </baseButton>
                </div>

                <div class="results w-full flex flex-row flex-wrap lg:flex-nowrap pt-6 justify-start">
                    <div class="p-5 pl-0">
                        <p class="font-bold text-3xl sm:text-4xl">200+</p>
                        <p class="whitespace-nowrap">International Brands</p>
                    </div>
                    <div class="p-5 pl-0 sm:pl-5 border-x-none sm:border-x-2 border-x-gray-200">
                        <p class="font-bold text-3xl sm:text-4xl">2,000+</p>
                        <p class="whitespace-nowrap">High-Quality Products</p>
                    </div>
                    <div class="p-5 pl-0 sm:pl-5">
                        <p class="font-bold text-3xl sm:text-4xl">30,000+</p>
                        <p class="whitespace-nowrap">Happy Customers</p>
                    </div>
                </div>
            </div>

            <div class="w-full lg:w-1/2">
                <img loading="lazy" class="m-auto w-2/3 lg:w-full h-auto md:h-full"
                    src="../../assets/images/shop/preview/preview-main.png" alt="">
            </div>
        </section>

        <!-- BRANDS -->
        <section class="brands pt-3 w-full min-h-36 bg-black flex flex-wrap items-center justify-between px-8 md:px-16">
            <div>
                <img loading="lazy" src="../../assets/images/brands/versace.png" alt="VERSACE">
            </div>
            <div>
                <img loading="lazy" src="../../assets/images/brands/zara.png" alt="ZARA">
            </div>
            <div>
                <img loading="lazy" src="../../assets/images/brands/gucci.png" alt="GUCCI">
            </div>
            <div>
                <img loading="lazy" src="../../assets/images/brands/prada.png" alt="PRADA">
            </div>
            <div>
                <img loading="lazy" src="../../assets/images/brands/calvin-klein.png" alt="CALVI KLEIN">
            </div>
        </section>

        <!-- NEW ARRIVALS -->
        <section class="new-arrivals px-8 md:px-16">
            <div class="p-10 sm:p-16 pb-5 sm:pb-10">
                <h1 class="whitespace-nowrap tracking-normal text-2xl sm:text-3xl 
                md:text-4xl font-bold text-center uppercase">
                    new arrivals
                </h1>
            </div>
            <!-- Products -->
            <div class="new-arrivals-products">
                <div v-if="!spvCheck" class="flex flex-wrap justify-between gap-4">
                    <div v-for="product in newProducts" class="product cursor-pointer border-2 p-1 rounded-md
                    hover:border-gray-500 hover:shadow-md transition duration-300 ease-in-out">
                        <product :product="product" :style="{}"></product>
                    </div>
                </div>
                <swiper v-else class="flex flex-wrap justify-between" :modules="modules"
                    :slides-per-view="slidesPerView" :mousewheel="{ scorllable: true }"
                    :scrollbar="{ draggable: false }">
                    <swiper-slide v-for="product in newProducts" class="product cursor-pointer border-2 p-1 mx-1 rounded-md
                    hover:border-gray-500 hover:shadow-md transition duration-300 ease-in-out">
                        <product :product="product"></product>
                    </swiper-slide>
                </swiper>
                <div class="w-full text-center my-4">
                    <button @click="this.$router.push('/shop.co/shop')"
                        class="w-full sm:w-2/12 py-2 border-2 rounded-md capitalize hover:font-bold hover:bg-[#2f2f2f] hover:text-white  ">
                        view all <i class="fa-solid fa-chevrons-right text-sm pl-2"></i>
                    </button>
                </div>
            </div>
        </section>
        <hr class="m-auto w-1/2">

        <!-- Best seller -->
        <section class="top-selling px-8 md:px-16">
            <div class="p-10 sm:p-16 pb-5 sm:pb-10">
                <h1 class="whitespace-nowrap tracking-normal text-2xl sm:text-3xl 
                md:text-4xl font-bold text-center uppercase">
                    best seller
                </h1>
            </div>
            <!-- Products -->
            <div class="new-arrivals-products">
                <div v-if="!spvCheck" class="flex flex-wrap justify-between gap-4">
                    <div v-for="product in bestSellers" class="product cursor-pointer border-2 p-1 rounded-md
                    hover:border-gray-500 hover:shadow-md transition duration-300 ease-in-out">
                        <product :product="product"></product>
                    </div>
                </div>
                <swiper v-else class="flex flex-wrap justify-between" :modules="modules"
                    :slides-per-view="slidesPerView" :mousewheel="{ scorllable: true }"
                    :scrollbar="{ draggable: false }">
                    <swiper-slide v-for="product in bestSellers" class="product cursor-pointer border-2 p-1 mx-1 rounded-md
                    hover:border-gray-500 hover:shadow-md transition duration-300 ease-in-out">
                        <product :product="product"></product>
                    </swiper-slide>
                </swiper>
                <div class="w-full text-center my-4">
                    <button @click="this.$router.push('/shop.co/shop')"
                        class="w-full sm:w-2/12 py-2 border-2 rounded-md capitalize hover:font-bold hover:bg-[#2f2f2f] hover:text-white  ">
                        view all <i class="fa-solid fa-chevrons-right text-sm pl-2"></i>
                    </button>
                </div>
            </div>
        </section>

        <!-- BROWSE BY DRESS STYLE -->
        <section class="styles w-full p-6 md:p-12 lg:p-16 bg-white">
            <div class="p-6 bg-[#f0eeed] rounded-3xl">
                <p class="text-xl sm:text-3xl md:text-4xl font-bold uppercase text-center my-4">
                    browse by dress style
                </p>
                <div class="styles-imgs w-full flex flex-wrap justify-center">
                    <div class="w-full md:w-1/3 p-0 sm:p-4 pb-5 sm:pb-0 relative">
                        <img loading="lazy" src="../../assets/images/shop/styles/casual.png" alt="Casual">
                        <p
                            class="text-gray-500 text-center text-xl lg:text-3xl font-bold absolute left-5 sm:left-12 top-5 sm:top-12">
                            Casual
                        </p>
                    </div>
                    <div class="w-full md:w-2/3 p-0 sm:p-4 pb-5 sm:pb-0 relative">
                        <img loading="lazy" src="../../assets/images/shop/styles/formal.png" alt="formal">
                        <p
                            class="text-gray-500 text-center text-xl lg:text-3xl font-bold absolute left-5 sm:left-12 top-5 sm:top-12">
                            Formal
                        </p>
                    </div>
                    <div class="w-full md:w-2/3 p-0 sm:p-4 pb-5 sm:pb-0 relative">
                        <img loading="lazy" src="../../assets/images/shop/styles/party.png" alt="Party">
                        <p
                            class="text-gray-500 text-center text-xl lg:text-3xl font-bold absolute left-5 sm:left-12 top-5 sm:top-12">
                            Party
                        </p>
                    </div>
                    <div class="w-full md:w-1/3 p-0 sm:p-4 pb-5 sm:pb-0 relative">
                        <img loading="lazy" src="../../assets/images/shop/styles/gym.png" alt="GYM">
                        <p
                            class="text-gray-500 text-center text-xl lg:text-3xl font-bold absolute left-5 sm:left-12 top-5 sm:top-12">
                            Gym
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEEDBACK -->
        <section class="feedback px-6 md:px-16">
            <div class="py-10 sm:py-16">
                <h1 class="whitespace-nowrap tracking-normal text-2xl sm:text-3xl 
                md:text-4xl font-bold text-center uppercase">
                    our happy customers
                </h1>
            </div>
            <div class="swiper-cards">
                <swiper class="w-full flex justify-evenly" :modules="modules" :breakpoints="{
                    640: { slidesPerView: 1.25, spaceBetween: 15 },
                    768: { slidesPerView: 2.5, spaceBetween: 15 },
                    1024: { slidesPerView: 3.25, spaceBetween: 15 },
                }" navigation :pagination="{ clickable: true }" :mousewheel="{ scorllable: true }"
                    :scrollbar="{ draggable: false }">
                    <swiper-slide v-for="i in 5" class="feedback-card cursor-pointer">
                        <baseCard>
                        </baseCard>
                    </swiper-slide>
                </Swiper>
            </div>
        </section>

    </div>
    <!-- FOOTER -->
    <baseFooter></baseFooter>
</template>

<script>

import userNavbar from '../../components/user/userNavbar.vue';
import baseNavbar from '../../components/baseNavbar.vue';
import baseFooter from '../../components/baseFooter.vue';
import baseTitle from '../../components/baseTitle.vue';
import baseButton from '../../components/baseButton.vue';
import baseCard from '../../components/baseCard.vue';
import product from '../../components/product.vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Mousewheel, Scrollbar } from 'swiper/modules';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        baseNavbar, userNavbar, baseFooter, baseButton, baseCard, baseTitle,
        product,
        Swiper, SwiperSlide
    },
    data() {
        return {
            user: localStorage.getItem('user'),
            newProducts: [],
            bestSellers: []
        }
    },
    computed: {
        ...mapGetters(['Get_NewProducts', 'Get_bestSellers']),
        slidesPerView() {
            if (this.spvCheck) {
                this.spv = 1.5;
                return this.spv;
            }
            this.spv = 4;
            return this.spv;
        }
    },
    created() {
        this.fetchData();
    },
    setup() {

        const br1 = ref(window.innerWidth > 642);
        const spvCheck = ref(window.innerWidth < 590);
        const spv = ref(4);


        const updateShow = () => {
            br1.value = window.innerWidth > 642;
            spvCheck.value = window.innerWidth < 590;
        };
        onMounted(() => {
            window.addEventListener('resize', updateShow);
        });
        onBeforeUnmount(() => {
            window.addEventListener('resize', updateShow);
        });
        return {
            br1, spv, spvCheck,
            modules: [Navigation, Mousewheel, Scrollbar],
        };
    },
    methods: {
        ...mapActions(['fetchMainProducts']),
        initData() {
            this.newProducts = this.Get_NewProducts;
            this.bestSellers = this.Get_bestSellers;
        },
        async fetchData() {
            try {
                await this.fetchMainProducts();
                this.initData();
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>

<style scoped>
@import url('../../assets/stylesheets/shop/home-page.style.css');
</style>
