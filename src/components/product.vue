<template>
    <img :src="product.src" alt="product" loading="lazy" class="rounded-md border-2 border-gray-300">

    <div class="px-1 pb-1 flex flex-col items-between">
        <p class="product-title py-2">{{ product.title }}</p>
        <!-- product-price -->
        <div class="product-price text-md tracking-normal">
            <p>
                <span class="text-xs text-gray-700">EGP </span>
                {{ calcSale(product.price, product.sale) }}
            </p>
            <div v-if="product.sale != 0.0" class="product-price-discount">
                <div class="flex items-center relative text-sm">
                    <p class="text-gray-400">
                        <span class="text-xs text-gray-500"></span> {{ product.price }}
                    </p>
                    <span class="w-full h-[2.2px] bg-gray-500 rounded-full absolute left-0 top-[45%]"></span>
                </div>
                <span class="text-xs font-sans font-bold text-green-600 pl-2 mt-0.5">{{ product.sale * 100 }}%
                    OFF</span>
            </div>
        </div>
        <div class="product-rate">
            <div class="stars-rate flex items-center">
                <div v-for="item in Math.floor(product.rate)">
                    <i class="fa-solid fa-star text-[#FFD43B]"></i>
                </div>
                <i v-if="isHalf(product.rate)" class="fa-duotone fa-solid fa-star-half"
                    style="--fa-primary-color: #FFD43B; --fa-secondary-color: #cdcdcd"></i>
                <div v-for="item in clacStars(product.rate)">
                    <i class="fa-duotone fa-solid fa-star empty-star"></i>
                </div>
                <p class="pl-1 font-semibold text-sm">
                    {{ product.rate }}<span class="text-gray-400">/5</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: ['product'],
    computed: {},
    methods: {
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
img {
    width: 100%;
}

.product-title {
    text-transform: capitalize;
    font-weight: bold;
}

.empty-star {
    color: rgb(186, 186, 186);
}

.fa-star,
.fa-star-half {
    padding: 2px;
}

.product-price {
    font-family: sans-serif;
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