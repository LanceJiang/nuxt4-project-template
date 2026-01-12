import { defineStore } from "pinia";
import piniaPersistConfig from "@/utils/piniaPersist";
import { isMobileCheck } from "@/utils";

export const useGlobalStore = defineStore(
  "globalStore",
  () => {
    // state
    const userInfo = ref("");
    const isMobile = ref(false);
    const themeMode = useCookie("theme-mode", {
      default: () => "light",
    });

    // getters
    const isLight = computed(() => themeMode.value === "light");

    // actions
    function updateDevice() {
      isMobile.value = isMobileCheck();
    }

    function setUserInfo(userInfo: any) {
      userInfo.value = userInfo;
    }

    function setThemeConfig(theme: "light" | "dark") {
      themeMode.value = theme;
    }

    return {
      // 暴露响应式状态和方法
      userInfo,
      isMobile,
      themeMode,

      isLight,
      updateDevice,
      setUserInfo,
      setThemeConfig,
    };
  },
  {
    persist: piniaPersistConfig("GlobalStore"),
  }
);
