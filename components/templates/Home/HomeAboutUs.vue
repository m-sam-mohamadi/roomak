<template>
  <div class="mt-16">
    <TopHeading>چرا باید ما را انتخاب کنید</TopHeading>

    <div
      class="w-full mt-8 bg-primary-950 rounded-3xl flex md:flex-row flex-col justify-center items-center p-4 gap-4 h-fit"
    >
      <div
        class="bg-primary-50 h-[20rem] rounded-2xl md:w-7/12 w-full flex flex-col justify-between p-4"
      >
        <div>
          <h1 class="text-3xl font-bold">چرا نانو روماک؟</h1>
          <p class="mt-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان. لورم
            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
            گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان.
          </p>
        </div>
        <Button
          severity="primary"
          icon="pi pi-building"
          iconPos="right"
          label="نزدیک ترین شعبه"
          class="mt-auto"
        ></Button>
      </div>

      <Carousel
        :value="ProductService"
        :numVisible="1"
        :numScroll="1"
        :showIndicators="false"
        orientation="vertical"
        verticalViewPortHeight="200px"
        containerClass="flex items-center py-4"
        class="md:w-5/12 w-full h-fit-content bg-primary-50 rounded-2xl"
      >
        <template #item="slotProps">
          <div>
            {{ slotProps.data.description }}
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
const ProductService = ref([
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "نظرات",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "نظرات ۲",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
]);

const products = ref();

const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warn";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>
