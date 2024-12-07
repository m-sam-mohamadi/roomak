<script setup>
import "leaflet/dist/leaflet.css";
import { latLngBounds } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
const zoom = ref(6);
const bounds = ref([
  [39.08, 44.6],
  [25.503, 61.718],
]);
const maxBounds = ref([
  [39.08, 44.6],
  [25.503, 61.718],
]);

const data = await useFetch("/api/branchs");
console.log(data.data.value.branchs);
const add = async () => {
  const data = await useFetch("/api/branchs", {
    method: "post",
  });
  console.log(data.data.value.keys);
  
};
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">شعبه مورد نظرتو رو پیدا کن</h1>
    <div style="height: 400px; width: 100%" class="overflow-hidden rounded-3xl">
      <l-map
        ref="map"
        :use-global-leaflet="false"
        :bounds="bounds"
        :max-bounds="maxBounds"
        :zoom="zoom"
        :center="[32.4279, 53.688]"
        z-index="-1"
      >
        <l-tile-layer
          url="http://mts1.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>

        <l-marker
          v-for="branch in data.data.value.branchs"
          :key="branch.id"
          :lat-lng="branch.latlong"
        >
          <l-popup class="text-start" style="font-family: samim">
            <div>
              <b>{{ branch.name }}</b>
              <p>
                {{ branch.address }}
              </p>
              <b>{{ branch.phone }}</b>
            </div>
            <Button
              severity="primary"
              icon="pi pi-map"
              iconPos="right"
              label="آدرس"
              class="mt-2"
              @click="add()"
            ></Button>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<style>
.leaflet-control-attribution {
  display: none !important;
}
</style>
