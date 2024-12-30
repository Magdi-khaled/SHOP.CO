<template>
    <!-- SALE FIRST SIGN UP -->
    <!-- <div class="bg-black py-1 flex items-center justify-start px-2 md:px-0 sm:justify-center">
        <p class="text-white text-sm">Sign up and get 20% of your first order.
            <router-link :to="'/shop.co/signup'" class="underline font-bold">Sign Up Now</router-link>
            <button>
                <i class="fa-light fa-xmark text-white text-md md:text-xl top-2 md:top-0 right-4"></i>
            </button>
        </p>
    </div> -->
    <!-- NAVIGATION -->
    <div class="flex flex-row items-center justify-between px-8 md:px-16 py-3 ">
        <button @click="hiddenNav = !hiddenNav" v-if="!showNav" class="pr-5 hover:text-gray-500 text-2xl">
            <i class="fa-solid fa-bars"></i>
        </button>
        <!-- LOGO SHOP.CO -->
        <div>
            <router-link to="/shop.co/home">
                <img src="../assets/images/logo/shop-co-logo.png" alt="SHOP.CO">
            </router-link>
        </div>
        <!-- NAV-LINKS -->
        <div class="nav-links">
            <ul v-if="showNav" class="list-none flex gap-5">
                <!-- <li @mouseover="dropDown = true" @mouseleave="dropDown = false"
                class="whitespace-nowrap relative cursor-pointer py-4"> -->
                <li class="relative cursor-pointer py-4">
                    <router-link to="/shop.co/home" class="whitespace-nowrap capitalize">
                        <i class="fa-solid fa-house"></i> home
                    </router-link>
                </li>
                <li class="relative cursor-pointer py-4">
                    <router-link to="/shop.co/shop" class="whitespace-nowrap capitalize">
                        <i class="fa-solid fa-shop"></i> Shop
                    </router-link>
                    <!--<i class="fa-regular fa-chevron-down text-sm"></i>
                    <ul v-if="dropDown" class="dropdown absolute text-black bg-white left-0 top-11 border-2 rounded-xl">
                        <li class="px-4 py-2 rounded-t-xl">
                            <router-link to="/shop.co/shop">casual</router-link>
                        </li>
                        <hr>
                        <li class="px-4 py-2">
                            <router-link to="/shop.co/shop">formal</router-link>
                        </li>
                        <hr>
                        <li class="px-4 py-2">
                            <router-link to="/shop.co/shop">party</router-link>
                        </li>
                        <hr>
                        <li class="px-4 py-2  rounded-b-xl">
                            <router-link to="/shop.co/shop">gym</router-link>
                        </li>
                    </ul> -->
                </li>
                <li class="py-4">
                    <router-link to="#" class="whitespace-nowrap capitalize">
                        <i class="fa-solid fa-badge-percent pr-1"></i> onSale
                    </router-link>
                </li>
                <li class="py-4">
                    <router-link to="#" class="whitespace-nowrap capitalize">
                        <i class="fa-regular fa-shirt"></i> brands
                    </router-link>
                </li>
            </ul>
        </div>
        <!-- hidden navbar -->
        <div
            :class="['nav-links-hidden border-r-4 border-r-gray-600 bg-white pt-12 fixed z-20 left-0 top-0 h-full w-full sm:w-8/12 md:w-6/12 p-4', { active: hiddenNav }]">
            <div class="flex gap-4  mb-5 ">
                <button @click="hiddenNav = false" class="px-4 hover:text-gray-500 text-2xl">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <img src="../assets/images/logo/shop-co-logo.png" alt="shop.co">
            </div>
            <ul lass="list-none W-6/12">
                <!-- :class="{ 'hover:bg-white': hDropDown, 'hover:text-white': !hDropDown }" -->
                <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white capitalize">
                    <router-link to="#"><i class="fa-solid fa-badge-percent w-1/12"></i> home</router-link>
                </li>
                <hr>
                <li @click="hDropDown = !hDropDown"
                    class="hidden-shop-li-1 hover:font-medium hover:text-white hover:bg-[#2f2f2f] whitespace-nowrap cursor-pointer capitalize">
                    <router-link to="/shop.co/shop">
                        <i class="fa-solid fa-shop w-1/12"></i> Shop
                    </router-link>
                    <!-- <i class="fa-solid fa-arrow-turn-down text-sm pl-4"></i>
                    <ul v-if="hDropDown" class="dropdown text-black bg-white border-2 rounded-xl">
                        <li class="rounded-t-xl">
                            <router-link class="w-full px-4 py-2" to="/shop.co/shop">men's clothes</router-link>
                        </li>
                        <hr>
                        <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white">
                            <router-link class="w-full px-4 py-2" to="/shop.co/shop">women's clothes</router-link>
                        </li>
                        <hr>
                        <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white">
                            <router-link class="w-full px-4 py-2" to="/shop.co/shop">children clothes</router-link>
                        </li>
                        <hr>
                        <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white rounded-b-xl">
                            <router-link class="w-full px-4 py-2" to="/shop.co/shop">fashion</router-link>
                        </li>
                    </ul> -->
                </li>
                <hr>
                <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white capitalize">
                    <router-link to="#"><i class="fa-solid fa-badge-percent w-1/12"></i> OnSale</router-link>
                </li>
                <hr>
                <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white capitalize">
                    <router-link to="#"><i class="fa-solid fa-clothes-hanger w-1/12"></i> brands</router-link>
                </li>
                <hr>
                <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white capitalize">
                    <router-link to="#"><i class="fa-brands fa-blogger-b w-1/12"></i> blogs</router-link>
                </li>
                <hr>
                <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white capitalize">
                    <router-link to="#"><i class="fa-solid fa-phone-volume w-1/12"></i> Support</router-link>
                </li>
                <hr>
                <li class="hover:bg-[#2f2f2f] hover:font-medium hover:text-white uppercase">
                    <router-link to="#"><i class="fa-solid fa-message-question w-1/12"></i> faq</router-link>
                </li>
            </ul>
        </div>
        <!-- CART - PROFILE - SEARCH -->
        <div class="w-7/12 md:w-6/12 flex flex-row justify-end">
            <!-- SEARCH-BAR -->
            <div v-if="!searchIcon" class="w-10/12 relative search-bar">
                <input name="searchText" v-model="searchText" @change="handleSearchResult" type="text"
                    placeholder="What are you looking for?"
                    class="w-full py-3 px-4 pl-12 bg-[#f2f2f2] outline-none rounded-md w-10/12 focus:bg-white focus:border-2">
                <i class="fa-regular fa-magnifying-glass absolute left-4 top-3 text-xl text-gray-400"></i>
                <ul v-if="searchText" class=" absolute bg-white w-full z-50 rounded-b-xl">
                    <template v-for="item in handleSearchResult" :key="index">
                        <li class="hover:bg-[#2f2f2f] hover:text-white px-10 py-2 cursor-pointer">{{ item }}
                        </li>
                    </template>
                </ul>
            </div>
            <div class="w-8/12 sm:w-3/12 flex items-center px-1 justify-end">
                <button v-if="searchIcon" class="w-4/12">
                    <i class="fa-solid fa-magnifying-glass text-xl"></i>
                </button>
                <!-- cart -->
                <button v-if="!cartLink" @click="cartOn = true" class="w-6/12 pr-4 text-center hover:opacity-70"
                    title="cart">
                    <!-- <img class="w-full" src="../assets/images/icons/cart.png" alt="cart"> -->
                    <i class="fa-solid fa-cart-shopping text-xl"></i>
                </button>
                <router-link v-else :to="gotoCart" title="cart">
                    <!-- <img class="w-full" src="../assets/images/icons/cart.png" alt="cart" title="cart"> -->
                    <i class="fa-solid fa-cart-shopping text-xl pr-2 "></i>
                </router-link>
                <cart-shop :showCart="cartOn" :showCart2="cartLink" @closeCart="cartOn = false"></cart-shop>
                <!-- sign in -->
                <router-link v-if="!userToken" :to="'/shop.co/login'" class="hover:opacity-70" title="sign in">
                    <i class="fa-duotone fa-solid fa-user text-black border-2 p-2 rounded-md"></i>
                </router-link>
                <div v-else class="flex w-7/12 items-center justify-end">
                    <router-link to="/shop.co/user/profile" class="pl-2 hover:opacity-70" title="profile">
                        <i class="fa-duotone fa-solid fa-user text-black border-2 p-2 rounded-md"></i>
                    </router-link>
                    <button @click="uLogout" class="pl-2 text-center justify-self-end hover:opacity-70" title="logout">
                        <i class="fa-solid fa-right-from-bracket text-gray-700 text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <hr>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import cartShop from '../components/cart/cart.shop.vue';
import { mapActions, mapGetters } from 'vuex/dist/vuex.cjs.js';
export default {
    name: 'navbar',
    components: { cartShop },
    data() {
        return {
            products: ['T-shirt', 'boxer', 'dress', 'Jacket',],
            userToken: localStorage.getItem('token'),
        }
    },

    setup() {
        const dropDown = ref(false);
        const hDropDown = ref(false);
        const hiddenNav = ref(false);
        const cartOn = ref(false);
        const cartLink = ref(window.innerWidth < 865);
        const searchText = ref('');
        const show = ref(window.innerWidth > 1150);
        const searchIcon = ref(window.innerWidth <= 592);

        const updateShow = () => {
            show.value = window.innerWidth > 1150;
            searchIcon.value = window.innerWidth <= 592;
            cartLink.value = window.innerWidth < 865;
            cartOn.value = window.innerWidth < 865;
        };
        onMounted(() => {
            window.addEventListener('resize', updateShow);
        });
        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateShow);
        });

        return {
            hiddenNav, dropDown, hDropDown, show,
            cartOn, cartLink,
            searchText, searchIcon
        };
    },
    computed: {
        showNav() {
            if (window.innerWidth <= 1150) this.show = false;
            else this.show = true;
            return this.show;
        },
        handleSearchResult() {
            const searchedList = this.products.filter((item) =>
                item.toString().includes(this.searchText)
            );
            console.log('searching...');
            setTimeout(() => {
                this.show = false;
            }, 1000);
            this.show = true;
            return searchedList;
        },
        gotoCart() {
            return '/shop.co/user/shopping-cart';
        },
    },
    methods: {
        ...mapActions(['userLogout']),
        async uLogout() {
            try {
                await this.userLogout();
                setTimeout(() => {
                    this.$router.push({ name: 'shop.co-login' });

                }, 1500)
            } catch (error) {
                console.error('logout error : ', error);
            }
        },
    },
}
</script>
<style scoped>
@import url('../assets/stylesheets/shop/nav-bar.style.css');
</style>