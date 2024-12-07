<template>
  <div class="bg-primary-50 p-6 md:rounded-[60px] rounded-[40px] mt-12">
    <TopHeading class="mt-2 mb-10"> اشتغال زایی</TopHeading>
    <div class="flex md:flex-row md:gap-0 gap-10 flex-col justify-center items-center">
      <div class="md:w-6/12 w-10/12 md:flex hidden justify-center -mt-6 items-center">
        <img class="" width="50%" src="@/assets/images/vector1.svg" />
      </div>
      <div class="md:w-6/12 w-full">
        <h1 class="lg:text-6xl md:text-4xl text-2xl font-extrabold text-primary">
          دنبال کار میگردی؟
        </h1>
        <p class="text-primary-700 md:text-xl mt-6 w-10/12">
          اگر دنبال شغل جدید و پردرآمد هستی همین حالا به یکی از نمایندگی های شهرتون مراجعه
          کن و مشغول به کار شو.
        </p>
        <Button
          class="mt-6"
          severity="primary"
          icon="pi pi-map"
          iconPos="right"
          label="نزدیک ترین نمایندگی"
        ></Button>
      </div>
    </div>
  </div>
</template>
