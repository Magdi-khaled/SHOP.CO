<template>
    <div class="pagination mt-12 mb-4 flex justify-center items-center gap-2">
        <!-- Prev Button -->
        <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="prev-btn">
            <i class="fa-solid fa-angle-left text-gray-600 font-normal px-3 py-2 border-[1px] hover:border-gray-500 
            transition duration-150 rounded-md text-xl sm:text-2xl"
                :class="{ 'cursor-default text-gray-300 hover:border-gray-200': currentPage === 1 }"></i>
        </button>
        <!-- Page Numbers -->
        <div v-for="(page, index) in visiblePages" :key="index">
            <span v-if="page === '...'" class="mx-2 text-gray-500 text-md">
                {{ page }}
            </span>
            <button v-else @click="changePage(page)"
                :class="{ 'border-black bg-gray-100 border-[2.2px] ': currentPage === page }"
                class="cursor-pointer font-sans p-2 px-[10px] border-[1px] text-gray-900 text-xl font-bold rounded-md">
                {{ page }}
            </button>
        </div>

        <!-- Next Button -->
        <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages - 1" class="next-btn">
            <i class="fa-solid fa-angle-right text-gray-600 font-normal  px-3 py-2 border-[1px] hover:border-gray-500 
            transition duration-150 rounded-md text-xl sm:text-2xl"
                :class="{ 'cursor-default text-gray-300': currentPage === totalPages }"></i>
        </button>

    </div>
</template>
<script>
export default {
    name: 'pagination',
    props: {
        currentPage: { type: Number, required: true },
        totalPages: { type: Number, required: true },
    },
    data() {
        return {
            maxVisible: 3,
        }
    },
    computed: {
        visiblePages() {
            const pages = [];
            const { currentPage, totalPages, maxVisible } = this;
            pages.push(1);

            if (currentPage - maxVisible > 2) pages.push("...");

            for (let i = currentPage - maxVisible; i <= currentPage + maxVisible; i++) {
                if (i > 1 && i < totalPages) pages.push(i);
            }
            // Add ellipsis after the middle pages
            if (currentPage + maxVisible < totalPages - 1) pages.push("...");
            return pages;
        },
    },
    methods: {
        changePage(page) {
            if (page === '...' || page === 0 || page === this.totalPages) return;
            this.$emit('page-changed', page);
        },
    }

}
</script>
<style scoped>
button[disabled] {
    cursor: default;
    opacity: 0.5;
}
</style>