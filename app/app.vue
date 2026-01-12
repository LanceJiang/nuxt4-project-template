<script lang="ts" setup>
import { useGlobalStore } from "~/stores";

const globalStore = useGlobalStore();
onMounted(() => {
  globalStore.updateDevice();
  window.addEventListener("resize", globalStore.updateDevice);
});
onUnmounted(() => {
  window.removeEventListener("resize", globalStore.updateDevice);
});
</script>
<template>
  <div
    :class="`app-wrap ${globalStore.isMobile ? 'app-mobile' : 'app-pc'} ${globalStore.isLight ? 'light' : 'dark'}`"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
