<template>
    <userNavbar v-if="user == 'customer'" :currentlyShop="true"></userNavbar>
    <baseNavbar v-else></baseNavbar>
    <div class="bg-gray-100">
        <section class="shop w-[96%] px-4 sm:px-6 md:px-12 py-0 sm:py-8 flex gap-4 m-auto bg-white ">
            <filterShopComponent :showFilter="showFilter" @closeFilter="showFilter = false"></filterShopComponent>
            <div class="pl-0 md:pl-4 w-full md:w-11/12">
                <!-- Shop Header -->
                <div class="flex items-end capitalize font-medium mr-0 sm:mr-4">
                    <h1 class="capitalize text-2xl font-bold">casual</h1>
                    <div class="flex text-gray-400 justify-end w-full">
                        <p class="px-1 md:pr-6 whitespace-nowrap hidden md:block text-sm">
                            showing 1-15 <span class="lowercase">of</span> {{ 100 }} products
                        </p>
                        <div v-if="!filterButton" class="flex justify-between whitespace-nowrap text-sm">
                            sort by:
                            <div class="pl-1 relative z-30 ">
                                <button @click="mostPopular = !mostPopular"
                                    class="capitalize text-black transition hover:bg-gray-200 rounded-md">
                                    most popular <i class="fa-solid fa-chevron-down text-md"></i>
                                </button>
                                <div v-if="mostPopular"
                                    class="w-full rounded-sm border-2 mt-1 text-black bg-white absolute">
                                    <button @click="ascending = true"
                                        class="w-full text-start capitalize px-1 hover:bg-gray-200 flex items-center justify-between">
                                        ascending <i class="fa-solid fa-arrow-up-wide-short"></i>
                                    </button>
                                    <hr>
                                    <button @click="descending = true"
                                        class="w-full text-start capitalize px-1 hover:bg-gray-200 flex items-center justify-between">
                                        descending <i class="fa-solid fa-arrow-down-wide-short"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div v-if="filterButton" class="hover:bg-gray-200 rounded-md p-2 mt-2">
                            <button @click="showFilter = !showFilter" class="flex justify-end">
                                <img src="../../assets/images/icons/filter.png" alt="filter-icon" class="w-full">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Shop Products -->
                <div class="flex flex-wrap justify-between sm:justify-start gap-0 sm:gap-2 lg:gap-2">
                    <div v-for="product in shopProducts" :key="product" class="mt-4 border-[0.2px]
                    border-gray-300 rounded-md p-[4px] product relative">
                        <button @click="addToCart(product)" class="absolute top-2 right-2 p-1 border-black rounded-full"
                            title="Add To Cart">
                            <i class="fa-solid fa-cart-shopping text-gray-600 hover:text-black text-xl"></i>
                        </button>
                        <router-link :to="infoRoute(product._id)">
                            <baseProduct :product="product">
                            </baseProduct>
                        </router-link>
                    </div>
                </div>

                <!-- Pagination -->
                <pagination :currentPage="currentPage" :totalPages="totalPages" @page-changed="fetchData">
                </pagination>
            </div>
        </section>
        <hr>
    </div>
    <baseFooter></baseFooter>
</template>
<script>
import userNavbar from '../../components/user/userNavbar.vue';
import baseNavbar from '../../components/baseNavbar.vue';
import filterShopComponent from '../../components/cart/filter.shop.vue';
import baseFooter from '../../components/baseFooter.vue';
import baseProduct from '../../components/product.vue';
import pagination from '../../components/pagination.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: { baseNavbar, userNavbar, filterShopComponent, baseProduct, pagination, baseFooter },
    data() {
        return {
            user: localStorage.getItem('user'),
            shopProducts: [],
            currentPage: 1,
            totalPages: 6,
        }
    },
    setup() {
        const mostPopular = ref(false);
        const ascending = ref(false);
        const descending = ref(false);
        const showFilter = ref(false);
        const filterButton = ref(window.innerWidth < 775);
        const updateShow = () => {
            filterButton.value = window.innerWidth < 775;
        };
        onMounted(() => {
            addEventListener('resize', updateShow);
        });
        onBeforeUnmount(() => {
            addEventListener('resize', updateShow);
        });
        return {
            mostPopular, ascending, descending, showFilter, filterButton
        }
    },
    computed: {
        ...mapGetters(['Get_Products']),
    },
    async created() {
        await this.fetchData(this.currentPage);
    },
    methods: {
        ...mapActions(['fetchProducts', 'addItemToCart']),
        initData() {
            this.shopProducts = this.Get_Products;
            console.log('shopProducts:', this.shopProducts);
        },
        async fetchData(page) {
            try {
                await this.fetchProducts(page);
                await this.initData();
            }
            catch (err) {
                console.error('fetching shop products error : ', err);
            }
        },
        async addToCart(cartItem) {
            try {
                await this.addItemToCart(cartItem);
            }
            catch (err) {
                console.error('adding item to cart error : ', err);
            }
        },
        infoRoute(id) {
            return `/shop.co/shop/product/${id}`;
        },
    }
};

</script>

<style scoped>
.product {
    width: 24%;
}

@media (max-width:889px) {
    .product {
        width: 32%;
    }
}

@media (max-width:772px) {
    .product {
        width: 32%;
    }
}

@media (max-width:572px) {
    .product {
        width: 48%;
    }
}
</style>
