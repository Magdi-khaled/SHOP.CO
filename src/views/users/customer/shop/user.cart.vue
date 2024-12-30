<template>
    <userNavbar v-if="tuser === 'customer'"></userNavbar>
    <baseNavbar v-else></baseNavbar>
    <div>
        <div class="px-6 sm:px-16">
            <h1 class="whitespace-nowrap text-2xl font-bold uppercase py-4">
                <i class="fa-regular fa-cart-shopping"></i>
                your cart
            </h1>
            <div class="flex flex-wrap justify-between">
                <div v-if="!cartItems.length"
                    class=" w-full lg:w-7/12 bg-gray-50  border-2 rounded-md mb-6 lg:mb-2 flex justify-center items-center">
                    <h1 class="font-bold text-xl capitalize text-gray-600">no items in your cart...</h1>
                </div>
                <div v-else class=" w-full lg:w-7/12 border-2 rounded-md mb-6 lg:mb-0">
                    <div v-for="item in cartItems" class="cart-item flex flex-wrap relative">
                        <button class="text-md sm:text-xl absolute right-[5%] top-[12%]" title="remove-item">
                            <i class="fa-solid fa-trash-can text-red-600 hover:text-red-400 cursor-pointer"></i>
                        </button>
                        <div class="w-3/12 m-3 sm:m-3">
                            <img class="w-full sm:w-11/12 rounded-md border-2 border-gray-400" :src="item.imgSrc"
                                alt="cart-product">
                        </div>
                        <div class="w-8/12 py-4 flex flex-col justify-between">
                            <div>
                                <h1 class="font-bold text-sm sm:text-xl capitalize whitespace-nowrap">
                                    {{ item.title }}</h1>
                                <p class="font-medium text-sm sm:text-lg capitalize">size: <span class="text-gray-500">
                                        {{ item.size }}</span>
                                </p>
                                <p class="font-medium text-sm sm:text-lg capitalize">color: <span class="text-gray-500">
                                        {{ item.color }}</span>
                                </p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="font-bold text-sm sm:text-xl capitalize">
                                    <span class="text-gray-600 text-sm">EGP </span>{{ item.price }}
                                </p>
                                <div class="pagination py-1 mr-[6px] sm:mr-[-5px] font-medium flex items-center justify-between
                                text-sm sm:text-lg rounded-md  text-gray-600 bg-gray-200 border-2 border-gray-400">
                                    <button @click="item.quantity--">
                                        <i class="fa-solid fa-minus px-1 sm:px-2"></i>
                                    </button>
                                    <p disabled class="px-2 border-x-2 border-x-gray-600">{{ item.quantity }}
                                    </p>
                                    <button @click="item.quantity++">
                                        <i class="fa-solid fa-plus px-1 sm:px-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr class="w-full bg-gray-300 block">
                    </div>
                </div>
                <checkoutComponent :subTotal="calcSubTotal" :Discount="0.2" :deliveryFees="15"
                    class="w-full lg:w-4/12 rounded-md h-fit">
                </checkoutComponent>
            </div>
        </div>
        <baseFooter></baseFooter>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import baseNavbar from '../../../../components/baseNavbar.vue';
import userNavbar from '../../../../components/user/userNavbar.vue';
import baseFooter from '../../../../components/baseFooter.vue';
import checkoutComponent from '../../../../components/cart/checkout.shop.vue';
import UserNavbar from '../../../../components/user/userNavbar.vue';
export default {
    components: { baseNavbar, userNavbar, checkoutComponent, baseFooter },
    data() {
        return {
            tuser: localStorage.getItem('user'),
            cartItems: reactive([]),
        }
    },
    computed: {
        ...mapGetters(['Get_CartItems']),
        calcSubTotal() {
            var total = 0;
            this.Get_CartItems.forEach(item => {
                console.log(item.price);
                total += item.price * item.quantity;
            });
            return total;
        }
    },
    created() {
        this.fetchData();
    },
    methods: {
        ...mapActions(['FetchCartItems']),
        async fetchData() {
            try {
                await this.FetchCartItems();
                this.initData();
            }
            catch (error) {
                console.error('Fetching Cart Error: ', error);
            }
        },
        initData() {
            this.cartItems = this.Get_CartItems;
        }
    }
}
</script>
<style scoped></style>