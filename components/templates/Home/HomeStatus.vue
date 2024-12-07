<template>
  <div class="home-status">
    <TopHeading color="primary-400">آمارهای ما</TopHeading>
    <div class="flex md:flex-row flex-col gap-10 justify-evenly items-center mt-5">
      <StatusCard icon="pi-users" title="پرسنل" count="1850"></StatusCard>
      <StatusCard icon="pi-building" title="شعبه" count="63"></StatusCard>
      <StatusCard icon="pi-thumbs-up" title="رضایت مشتری" count="90%"></StatusCard>
    </div>
    <svg
      style="visibility: hidden; position: absolute"
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="round">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
</template>
