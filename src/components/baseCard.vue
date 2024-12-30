<template>
    <div class="p-4 sm:p-8 border-2 border-solid rounded-2xl">
        <div class="card-rate flex gap-1">
            <i v-for="i in 5" class="fa-solid fa-star text-[#FFD43B]"></i>
        </div>
        <div class="card-author flex w-32 py-2 items-center gap-2">
            <p class="capitalize font-bold">magdi khaled</p>
            <i class="fa-solid fa-circle-check text-[#01AB31]"></i>
        </div>
        <div class="card-content h-24">
            <p class="overflow-hidden text-ellipsis text-sm md:text-md h-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                facere distinctio saepe itaque error, quisquam quis et ipsa,
                unde dignissimos delectus ad neque exercitationem magni
                assumenda hic quia rerum nobis?</p>
        </div>
        <div>
            <p class="font-medium text-sm text-gray-700">Posted on August 15, 2023 </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'baseCard',
    props: ['card']
}
</script>
<style scoped></style>