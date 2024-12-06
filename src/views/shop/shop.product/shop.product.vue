```html
<template>
    <baseNavbar></baseNavbar>
    <div class="product h-screen mt-12 px-8 md:px-16 flex flex-wrap">
        <div class="images w-full sm:w-1/2 flex">
            <div class="w-3/12">
                <div v-for="(image, index) in images" :key="index" class="w-full p-2" @click="showImage(image, index)">
                    <img :class="{ 'border-2 border-red-400': selectedImageIndex == index }"
                        class="cursor-pointer rounded-3xl border-2" :src="image" alt="">
                </div>
            </div>
            <div class="w-9/12 p-2">
                <img class="w-full rounded-xl" :src="selectedImg" alt="">
            </div>
        </div>
        <div class="p-2">
            <p class="font-bold text-3xl capitalize font-sans">{{ product.title }}</p>
            <div class="product-rate">
                <div class="stars-rate flex items-center gap-2">
                    <div v-for="item in Math.floor(product.rate)">
                        <i class="fa-solid fa-star text-[#FFD43B]"></i>
                    </div>
                    <i v-if="isHalf(product.rate)" class="fa-duotone fa-solid fa-star-half"
                        style="--fa-primary-color: #FFD43B; --fa-secondary-color: #cdcdcd"></i>
                    <div v-for="item in clacStars(product.rate)">
                        <i class="fa-duotone fa-solid fa-star empty-star"></i>
                    </div>
                    <p class="pl-1 font-semibold">
                        {{ product.rate }}<span class="text-gray-400">/5</span>
                    </p>
                </div>
                <div class="product-price text-md sm:text-xl">
                    <p>${{ calcSale(product.price, product.sale) }}</p>
                    <div v-if="product.sale != 0.0" class="product-price-discount">
                        <div class="flex relative">
                            <p class="text-gray-400">
                                ${{ product.price }}</p>
                            <span class="w-full border-2 border-gray-500 rounded-full absolute left-0 top-3"></span>
                        </div>
                        <span class="sale">-{{ product.sale * 100 }}%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <baseFooter></baseFooter>
</template>
<script>
import baseNavbar from '../../../components/baseNavbar.vue';
import baseFooter from '../../../components/baseFooter.vue';
import { mapActions, mapGetters, } from 'vuex';
export default {
    components: { baseNavbar, baseFooter },
    data() {
        return {
            product: {},
            selectedImg: null,
            selectedImageIndex: null, // Tracks the clicked image
            images: [],
        }
    },
    computed: {
        ...mapGetters(['Get_Products']),
    },
    async created() {
        await this.fetchData();
        console.log(this.Get_Products);
        console.log(this.product);
    },
    methods: {
        ...mapActions(['fetchProducts']),
        async fetchData() {
            try {
                await this.fetchProducts();
                this.initData();
            } catch (err) {
                console.error(err);
            }
        },
        showImage(src, index) {
            this.selectedImg = src;
            this.selectedImageIndex = index;
        },
        initData() {
            this.product = this.Get_Products.find(v => v.id === +this.$route.params.id);
            //...
            this.images.push(new URL(this.product.src, import.meta.url).href);
            this.images.push(new URL(this.product.src, import.meta.url).href);
            this.images.push(new URL(this.product.src, import.meta.url).href);
            this.selectedImg = this.images[0];
        },
        calcSale(price, sale) {
            return (price * (1 - sale)).toFixed(0);
        },
        isHalf(rate) {
            var b = +Math.trunc(rate);
            return rate != b;
        },
        clacStars(rate) {
            return 5 - Math.ceil(rate);
        }
    }
}
</script>
<style scoped>
.product-price {
    display: flex;
    gap: 10px;
}

.product-price p:not(.product-price-discount) {
    font-weight: bold;
}

.product-price .product-price-discount {
    display: flex;
}

.product-price .product-price-discount .sale {
    display: flex;
    align-items: center;
    color: #FF3333;
    font-weight: bold;
    font-size: x-small;
    background-color: rgba(255, 0, 0, 0.148);
    padding: 0px 2px;
    margin-left: 10px;
    border-radius: 35px;
}

@media (max-width:656px) {
    .product-price p:not(.product-price-discount) {
        font-weight: bold;
        font-size: 100%;
    }


}
</style>
