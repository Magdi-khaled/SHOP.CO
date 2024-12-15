```html
<template>
    <baseNavbar></baseNavbar>
    <div class="product h-fit mt-12 px-8 md:px-16 flex flex-wrap">
        <div class="images w-full md:w-1/2 flex">
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
        <div class="p-2 px-8 w-full md:w-1/2">
            <p class="candal-regular font-bold text-3xl md:text-5xl uppercase">{{ product.title }}</p>
            <div class="product-rate">
                <div class="stars-rate my-2 flex items-center gap-2">
                    <div v-for="item in Math.floor(product.rate)">
                        <i class="fa-solid fa-star text-[#FFD43B]"></i>
                    </div>
                    <i v-if="isHalf(product.rate)" class="fa-duotone fa-solid fa-star-half"
                        style="--fa-primary-color: #FFD43B; --fa-secondary-color: #cdcdcd"></i>
                    <div v-for="item in clacStars(product.rate)">
                        <i class="fa-duotone fa-solid fa-star empty-star text-[#cdcdcd]"></i>
                    </div>
                    <p class="pl-1 font-semibold">
                        {{ product.rate }}<span class="text-gray-400">/5</span>
                    </p>
                </div>
                <div class="product-price my-4 text-xl sm:text-3xl">
                    <p class="capitalize font-bold">${{ calcSale(product.price, product.sale) }}</p>
                    <div v-if="product.sale != 0.0" class="product-price-discount">
                        <div class="flex relative">
                            <p class="text-gray-400">
                                ${{ product.price }}
                            </p>
                            <span class="w-full border-2 border-gray-400 rounded-full absolute left-0 top-4"></span>
                        </div>
                        <span class="sale text-sm">-{{ product.sale * 100 }}%</span>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-10/12">
                <p class="text-gray-600">
                    This graphic t-shirt which is perfect for any occasion.
                    Crafted from a soft and breathable fabric, it
                    offers superior comfort and style.
                </p>
            </div>
            <hr class="my-4">
            <div>
                <p class="capitalize text-gray-600">select color</p>
                <div class="colors mt-3 flex">
                    <label v-for="item in product.providedColors" class="relative">
                        <input type="radio" v-model="color" :value="item.value" class="appearance-none w-10 h-10 
                        mr-3 border-2 border-gray-400 cursor-pointer rounded-full "
                            :class="{ 'outline outline-2 outline-[#000]': color == item.value }"
                            :style="{ 'background-color': `#${item.value}` }">
                        <i v-if="color" class="fa-solid fa-check text-white absolute z-30 py-3 px-4 text-2xl"
                            :class="{ 'hidden': color != item.value }"></i>
                    </label>
                </div>
            </div>
            <hr class="my-4">
            <div>
                <p class="capitalize text-gray-600">choose size</p>
                <div class="colors mt-3 flex">
                    <label v-for="item in product.providedSizes" :key="item" class="flex items-center cursor-pointer">
                        <input type="radio" v-model="size" :value="item" :id="item" class="appearance-none hidden">
                        <span
                            class="px-3 py-2 mr-1 bg-gray-200 text-gray-600 rounded-2xl capitalize font-bold transition-all"
                            :class="{ 'bg-[#000000] text-white': size === item }">
                            {{ item }}
                        </span>
                    </label>
                </div>
            </div>
            <hr class="my-4">
            <div class="flex justify-between w-full gap-5">
                <div
                    class="flex items-center justify-between bg-gray-200 text-gray-600 rounded-2xl font-bold w-3/12 text-xl py-2 px-4">
                    <button><i class="fa-solid fa-minus"></i></button>
                    <span class="font-bold">{{ quantity }}</span>
                    <button><i class="fa-solid fa-plus"></i></button>
                </div>
                <div class="w-9/12">
                    <baseButton class="w-full">add to cart <i class="fa-solid fa-cart-shopping"></i></baseButton>
                </div>
            </div>
        </div>
    </div>
    <div class="product-details px-8 md:px-16 mt-8">
        <div class="product-header flex justify-evenly border-b border-b-2">
            <button @click="productDetails = true" class="w-1/2 py-4 capitalize font-bold text-xl"
                :class="{ 'border-r border-r-2 border-b border-b-4 border-b-black': productDetails }">
                product details</button>
            <button @click="productDetails = false" class="w-1/2 py-4 capitalize font-bold text-xl"
                :class="{ 'border-l border-l-2 border-b border-b-4 border-b-black': !productDetails }">
                ratings & reviews</button>
        </div>
        <div>
            <div v-if="productDetails" class="bg-gray-50 rounded-b-xl p-4">
                <div class="product-description mt-6">
                    <h1 class="capitalize tracking-wide font-sans text-2xl font-bold text-black">
                        title : <span class="text-gray-700">{{ product.title }}</span>
                    </h1>
                    <h1 class="capitalize tracking-wide font-sans text-2xl font-bold text-black text-2xl">
                        description :</h1>
                    <div class="leading-8 text-gray-700">
                        <ul>

                            <li v-for="item in product.highlights" :key="index" class="font-bold">
                                - {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-else class="rounded-b-xl p-4">
                <div class="product-reviews mt-6">
                    <div class="mb-5 flex items-center justify-between">
                        <p class="text-2xl font-bold capitalize">all reviews <span class="text-gray-500 text-sm">
                                ({{ allReviews }})</span></p>
                        <div class="flex gap-2">
                            <button
                                class="px-5 py-3 w-20 bg-gray-100 text-black rounded-full hover:bg-[#000] hover:text-gray-200 transition duration-300">
                                <i class="fa-solid fa-filter-list"></i>
                            </button>
                            <div class="relative">
                                <i class="fa-solid fa-sort-down text-black absolute z-30 top-3 right-4"></i>
                                <select id="reviewFilter" class="pr-10 pl-4 py-3 relative capitalize font-bold 
                                border-none bg-gray-100 text-black rounded-full cursor-pointer
                                appearance-none" v-model="reviewsFilter">
                                    <option value="latest" class="text-md font-bold " selected>latest
                                    </option>
                                    <option value="earliest" class="text-md font-bold">earliest</option>
                                </select>
                            </div>
                            <baseButton @click="navigateAndToggleReview" class="review-btn py-4">
                                write <span class="lowercase">a</span> review <i class="fa-solid fa-pen-line"></i>
                            </baseButton>
                        </div>
                    </div>
                    <!-- FEEDBACK -->
                    <div>
                        <div class="w-full flex flex-wrap justify-between">
                            <div v-for="feedback in product.feedbacks" :key="feedback"
                                class="feedback-card bg-white p-4 mb-4 sm:p-8 border-2 border-solid rounded-xl">
                                <div class="flex justify-between">
                                    <div class="card-rate flex gap-1">
                                        <i v-for="i in 5" class="fa-solid fa-star text-[#FFD43B]"></i>
                                    </div>
                                    <button class="hover:bg-gray-200 px-2 rounded-full transition duration-300">
                                        <i class="fa-solid fa-ellipsis hover:text-gray-600 text-gray-400 text-xl"></i>
                                    </button>
                                </div>
                                <div class="card-author flex w-32 pb-2 items-center gap-2">
                                    <p class="capitalize font-bold">nathan aki</p>
                                    <i class="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>
                                <div class="card-content h-28">
                                    <p class="text-wrap	text-sm md:text-md font-bold text-gray-500">
                                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                                        facere distinctio saepe itaque error, quisquam quis et ipsa,
                                        unde dignissimos delectus ad neque exercitationem magni
                                        assumenda hic quia rerum nobis?exercitationem magni assumenda hic
                                        quia rerum nobis? exercitationem magni. assumenda hic quia rerum
                                        nobis? exercitationem magni. "
                                    </p>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-500">Posted on August 15, 2023 </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="product.feedbacks.length > 6" class="flex justify-center">
                            <button @click="showMoreReviews" class="py-3 px-4 capitalize font-bold text-md rounded-full border-2 bg-white hover:text-white 
                                hover:bg-[#2f2f2f]">
                                load more reviews</button>
                        </div>
                        <span id="write-review"></span>
                        <hr class="my-8">
                        <div class="w-full font-bold flex flex-col flex-wrap gap-3 p-6 rounded-xl border-2">
                            <div class="flex items-center gap-4 ">
                                <label for="review" class="text-xl">Write your review
                                    <i class="fa-solid fa-pen-line"></i>
                                </label>
                                <div class="w-2/12 relative">
                                    <div @click="dropdownOpen = !dropdownOpen"
                                        class="capitalize font-bold bg-gray-100 border-2 p-2 rounded-xl cursor-pointer">
                                        {{ selectedRating || 'Choose rate' }}
                                        <i class="fa-solid fa-sort-down text-black absolute z-30 top-2 right-4"></i>
                                    </div>
                                    <ul v-if="dropdownOpen"
                                        class="w-full absolute bg-white border mt-1 rounded-xl shadow-lg z-10">
                                        <li v-for="item in 5" :key="item" @click="selectRating(item)"
                                            class="p-2 cursor-pointer hover:bg-gray-100 flex items-center">
                                            <i v-for="i in item" :key="i" class="fa-solid fa-star text-yellow-500"></i>
                                            <p class="pl-3">{{ item }}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-2 w-full">
                                <input v-model="review" id="review" type="text" placeholder="Write feedback here..."
                                    class="w-10/12 py-3 px-4 bg-[#f2f2f2] outline-none rounded-2xl focus:bg-white focus:border-2">
                                <baseButton class="w-52">submit</baseButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <baseFooter></baseFooter>
</template>
<script>
import baseNavbar from '../../../components/baseNavbar.vue';
import baseButton from '../../../components/baseButton.vue';
import baseFooter from '../../../components/baseFooter.vue';
import { mapActions, mapGetters, } from 'vuex';
export default {
    components: { baseNavbar, baseButton, baseFooter },
    data() {
        return {
            product: {},
            selectedImg: null,
            selectedImageIndex: null, // Tracks the clicked image
            images: [],
            color: '',
            size: '',
            productDetails: false,
            quantity: 1,
            allReviews: 451,
            colorList:
                [
                    { color: '', value: '', },
                    { color: 'green', value: '00C12B', },
                    { color: 'red', value: 'F50606', },
                    { color: 'yellow', value: 'F5DD06', },
                    { color: 'orange', value: 'F57906', },
                    { color: 'babyblue', value: '06CAF5', },
                    { color: 'blue', value: '063AF5', },
                    { color: 'purple', value: '7D06F5', },
                    { color: 'pink', value: 'F506A4', },
                    { color: 'white', value: 'c8c8c8', },
                    { color: 'black', value: '000000', }
                    , { color: 'gray', value: '808080', }
                ],
            reviewsFilter: 'latest',
            reviewFilters: ['latest', 'newest'],
            writeReview: false,
            review: "",
            selectedRating: null,
            dropdownOpen: false,
        }
    },
    computed: {
        ...mapGetters(['Get_Products']),
        colortype() {
            return this.colorList.find((v) => this.color == v.color);
        },
        selectedColor() {
            var selectedColor = '';
            this.colorList.forEach((v) => {
                if (this.color === v.color) {
                    selectedColor = v;
                }
            });
            return selectedColor;
        },
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
        },
        navigateAndToggleReview() {
            this.scrollToSection();
        },
        scrollToSection() {
            const section = document.getElementById('write-review');
            section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
        },
        selectRating(rating) {
            this.selectedRating = rating;
            this.dropdownOpen = false;
        },
        showMoreReviews() {

        },
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
    background-color: rgba(255, 0, 0, 0.148);
    padding: 0px 12px;
    margin-left: 10px;
    border-radius: 35px;
}

.candal-regular {
    font-family: "Candal", sans-serif;
    font-style: normal;
}

.colors input[value='']:first-child {
    position: relative;
}

.colors input[value='']:first-child::before {
    content: "";
    position: absolute;
    background-color: red;
    width: 5px;
    height: 100%;
    transform: rotateZ(-45deg);
    left: 43%;
    border: 1px solid rgba(0, 0, 0, 0.497);
}

.fa-check {
    right: 9%;
    bottom: -8%;
}

.feedback-card {
    width: 49%;
}

.review-btn,
.review-edit {
    padding: 8px 28px;
    border-radius: 50px;
}

@media (max-width:656px) {
    .product-price p:not(.product-price-discount) {
        font-weight: bold;
        font-size: 100%;
    }
}
</style>
