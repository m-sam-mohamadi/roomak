<template>
  <div class="w-full md:ps-10">
    <div class="w-full flex md:flex-row flex-col gap-8">
      <div class="flex flex-col align-center justify-center">
        <span class="text-2xl text-indigo-500">دوستدار محیط زیست</span>
        <h1 class="mt-2 text-6xl lg:w-10/12 font-extrabold">
          “با نانو روماک، متفاوت زندگی کنید.”
        </h1>
        <div class="flex gap-2 mt-6">
          <Button
            iconPos="right"
            label="مشاهده محصولات"
            icon="pi pi-th-large"
            severity="secondary"
          >
          </Button>
          <Button
            severity="primary"
            icon="pi pi-building"
            iconPos="right"
            label="نمایندگی ها"
          ></Button>
        </div>
        <div class="w-full flex align-center justify-center mt-16">
          <div class="w-8 h-14 rounded-full border-4 border-black relative">
            <span
              class="w-2 h-2 bg-primary absolute top-1 dot rounded-full left-1/2 -translate-x-1/2"
            ></span>
          </div>
        </div>
      </div>

      <div class="p-0 lg:w-6/12 md:w-7/12 rounded-3xl overflow-hidden">
        <Image imageStyle="height:100%; width:fit-content" src="/sample3.png"></Image>
      </div>
    </div>
  </div>
</template>
