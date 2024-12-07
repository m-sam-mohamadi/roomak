<template>
  <Toolbar class="rounded-2xl fixed toolbar border-0">
    <template #end>
      <Button icon="pi pi-bars" text severity="primary" />
    </template>

    <template #center>
      <logo width="90" class="ml-8 md:flex hidden" />
    </template>

    <template #start>
      <span class="md:flex hidden">
        <url primary v-for="link in links" :key="link.id" :to="link.url">
          {{ link.text }}
        </url>
      </span>
      <logo width="90" class="ml-8 md:hidden block" />
    </template>
  </Toolbar>
</template>

<script setup>
import {Urls} from '@/services/urls'
const links = Urls
</script>
