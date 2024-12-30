<template>
    <div class="filter hidden md:block w-3/12 bg-white h-fit  rounded-md "
        :style="(showFilter && !hideFitler) ? FilterStyle : {}">
        <div v-if="!hideFitler" class="filter-header flex justify-between pb-4 text-xl md:text-2xl">
            <h1 class="capitalize font-bold">filters</h1>
            <button @click="$emit('closeFilter')">
                <i class="fa-solid fa-xmark text-2xl hover:text-gray-500"></i>
            </button>
        </div>
        <hr v-if="!hideFitler">
        <div v-for="item in clothes" class="clothes mt-4 text-gray-600">
            <div class="flex flex-wrap justify-between items-center">
                <button @click="item.show = !item.show" :class="{ 'text-blue-500': item.show }"
                    class="capitalize flex justify-start items-center gap-2">
                    <i v-if="item.show" class="fa-duotone fa-solid fa-minus text-sm text-blue-600"></i>
                    <i v-else class="fa-duotone fa-solid fa-plus text-sm text-gray-900"></i>
                    {{ item.type }}
                </button>
                <div v-if="item.show" class="pl-4 text-black w-full">
                    <hr class="my-2">
                    <ul v-for="item in item.looks">
                        <label :for="item">
                            <input type="checkbox" :value="item" :id="item" class="cursor-pointer">
                            <label :for="item" class="text-md capitalize pl-2">{{ item }}</label>
                        </label>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div>
            <h1 class="capitalize font-bold py-2 text-lg flex justify-between w-full outline-none">
                price
                <button @click="pricing = !pricing">
                    <i v-if="pricing"
                        class="fa-sharp-duotone fa-regular fa-angle-up text-md  text-gray-400 font-bold"></i>
                    <i v-else class="fa-regular fa-chevron-down text-md text-gray-400 font-bold"></i>
                </button>
            </h1>
            <div :class="{ active: !pricing }" class="priceRange mb-12">
                <!-- Slider Container -->
                <div ref="slider" class="my-2 "></div>
            </div>
        </div>
        <!-- <hr class="my-4"> -->
        <div>
            <h1 class="capitalize font-bold py-4 text-lg flex justify-between w-full outline-none">
                colour
                <button @click="coloring = !coloring">
                    <i v-if="coloring"
                        class="fa-sharp-duotone fa-regular fa-angle-up text-md text-gray-400 font-bold"></i>
                    <i v-else class="fa-regular fa-chevron-down text-md text-gray-400 font-bold"></i>
                </button>
            </h1>
            <div :class="{ active: !coloring }" class="colors w-full mb-4">
                <label v-for="colorItem in colorList" class="relative">
                    <input type="radio" v-model="color" :value="colorItem.color"
                        class="appearance-none w-8 h-8 m-1 border-2 border-gray-400 cursor-pointer rounded-full "
                        :class="{ 'outline outline-2 outline-black': color == colorItem.color }"
                        :style="{ 'background-color': `#${colorItem.value}` }">
                    <i v-if="color" class="fa-solid fa-check text-white absolute z-30 py-3 px-4 text-xl"
                        :class="{ 'hidden': color != colorItem.color }"></i>
                </label>
                <p class="font-bold capitalize">
                    ( <i class="fa-regular fa-palette"></i> ) selected colour:
                    <span v-if="color" :style="{ 'color': `#${selectedColor.value}` }">
                        [{{ selectedColor.color }}]</span>
                    <span class="text-gray-400 font-normal" v-if="!color">[ all ]</span>
                </p>
            </div>
        </div>
        <!-- <hr class="my-4"> -->
        <div>
            <h1 class="capitalize font-bold py-4 text-lg flex justify-between w-full outline-none">
                size
                <button @click="sizing = !sizing">
                    <i v-if="sizing"
                        class="fa-sharp-duotone fa-regular fa-angle-up text-md text-gray-400 font-bold"></i>
                    <i v-else class="fa-regular fa-chevron-down text-md text-gray-400 font-bold"></i>
                </button>
            </h1>
            <div :class="{ active: !sizing }" class="sizing flex flex-wrap">
                <div class="colors flex flex-wrap gap-2 mb-4">
                    <label v-for="item in sizeList" :key="item" class="flex items-center cursor-pointer">
                        <input type="radio" v-model="selectedSize" :value="item" :id="item"
                            class="appearance-none hidden">
                        <span class="p-1 border-2 bg-gray-100 text-gray-900 rounded-md whitespace-nowrap 
                            capitalize transition-all" :class="{ 'bg-gray-800 text-white': selectedSize === item }">
                            {{ item }}
                        </span>
                    </label>
                </div>
                <p class="mt-2 w-full font-bold capitalize">
                    ( <i class="fa-solid fa-text-size text-gray-400"></i> ) selected size:
                    <span v-if="selectedSize" :style="{ 'color': `#${selectedSize.value}` }" class="text-gray-500 ">
                        [{{ selectedSize }}]</span>
                    <!-- <div v-if="sizchoosenArr.length">
                    <ul v-for="size in sizchoosenArr" :key="size" class="flex w-full">
                        <li class="w-5/12"><i class="fa-solid fa-minus"></i> [{{ size }}]</li>
                    </ul>
                </div> -->
                    <span v-else class="text-gray-400 font-normal">[ all ]</span>
                </p>
            </div>
        </div>
        <!-- <hr class="my-4"> -->
        <div>
            <h1 class="capitalize font-bold py-4 text-lg flex justify-between w-full outline-none ">
                dress style
                <button @click="styling = !styling">
                    <i v-if="!styling"
                        class="fa-sharp-duotone fa-regular fa-angle-up text-md text-gray-400 font-bold"></i>
                    <i v-else class="fa-regular fa-chevron-down text-md text-gray-400 font-bold"></i>
                </button>
            </h1>
            <div :class="{ active: styling }" v-for="item in styles" class="styling mt-4 text-gray-500">
                <div class="flex flex-wrap justify-between items-center">
                    <button @click="item.show = !item.show" :class="{ 'text-blue-500': item.show }"
                        class="capitalize flex justify-start items-center gap-2">
                        <i v-if="item.show" class="fa-duotone fa-solid fa-minus text-sm text-blue-600"></i>
                        <i v-else class="fa-duotone fa-solid fa-plus text-sm text-gray-900"></i>
                        {{ item.type }}
                    </button>
                    <!-- <button @click="item.show = !item.show" :class="{ 'text-black': item.show }"
                        class="capitalize font-bold flex justify-between w-full outline-none">
                        {{ item.type }}
                        <i class="fa-regular fa-chevron-right"></i>
                    </button> -->
                    <div v-if="item.show" class="pl-4 text-black w-full">
                        <ul v-for="item in item.looks">
                            <input type="radio" v-model="clothesType" :value="item" :id="item">
                            <label :for="item" class="text-md font-bold capitalize pl-2">{{ item }}</label>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div>
            <baseButton @click="applyFilters" class="w-full">
                apply filters
            </baseButton>
        </div>
    </div>
</template>
<script>
import baseButton from '../../components/baseButton.vue';
import noUiSlider from 'nouislider';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    name: 'filterShopComponent',
    props: {
        showFilter: {
            type: Boolean,
            required: true
        }
    },
    components: { baseButton },
    data() {
        return {
            color: '',
            clothesType: '',
            selectedSize: null,
            sizchoosenArr: [],
            clothes: [
                { type: 't-shirts', looks: ['polo', 'oversize', 'carow'], show: false },
                { type: 'shorts', looks: ['jeans', 'likra'], show: false },
                { type: 'shirts', looks: ['striped', 'formal'], show: false },
                { type: 'hoodies', looks: ['paints', 'no-paints'], show: false },
                { type: 'jeans', looks: ['slimfit', 'boy friend', 'chino', 'pants'], show: false },
            ],
            colorList: [
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
            ],
            sizeList: ['xX-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xX-large', '3X-large', '4X-large'],
            styles: [
                { type: 'casual', looks: ['c-men', 'c-women'], show: false },
                { type: 'formal', looks: ['f-men', 'f-women'], show: false },
                { type: 'party', looks: ['p-men', 'p-women'], show: false },
                { type: 'gym', looks: ['g-men', 'g-women'], show: false },
            ],
            FilterStyle: {
                display: 'block',
                position: "fixed",
                marginTop: "5.5rem",
                zIndex: "30",
                background: "white",
                width: "100%",
                left: "0",
                top: "0",
                borderRadius: "20px",
                height: "calc(100vh - 5rem)",
                overflowY: "auto"
            }
        }
    },
    created() { },
    computed: {
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
        }
    },
    setup() {
        const pricing = ref(false);
        const coloring = ref(false);
        const sizing = ref(false);
        const styling = ref(false);
        const FiltersOn = ref(false);
        const hideFitler = ref(window.innerWidth > 766);
        const slider = ref(null);
        const priceRange = ref([850, 2400]);

        const updateShow = () => {
            hideFitler.value = window.innerWidth > 766;

        }
        onBeforeUnmount(() => {
            addEventListener('resize', updateShow);
        })
        onMounted(() => {
            addEventListener('resize', updateShow);
            noUiSlider.create(slider.value, {
                start: priceRange.value,
                connect: true,
                range: {
                    min: 0,
                    max: 3000,
                },
                step: 10,
                tooltips: [true, true],
                format: {
                    to: (value) => `<h1 class='font-bold text-sm'>
                        <span class='text-gray-600 text-xs'>EGP</span> ${Math.round(value)} </h1> `,
                    from: (value) => Number(value),
                },
            });
            slider.value.noUiSlider.on('update', (values) => {
                priceRange.value = values.map(Number);
            });
        });
        return { pricing, coloring, sizing, styling, priceRange, slider, FiltersOn, hideFitler };
    },
    methods: {
        applyFilters() { this.FiltersOn = true; },
    }
};
</script>
<style scoped>
@import url('../../assets/stylesheets/shop/shop-filter.css');
</style>