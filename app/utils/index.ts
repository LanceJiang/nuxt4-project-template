export function isServer() {
  return typeof window === "undefined";
}

// 判断是否为小屏 同 theme.screens.max-m width
export const isMobileCheck = () => {
  if (isServer()) return false;
  const userAgent = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const screenCheck = window.matchMedia(
    "only screen and (max-width: 750px)"
  ).matches;
  // console.error(userAgent, 'userAgent, ', screenCheck)
  return userAgent || screenCheck;
};

export const jumpUrl = (url: string, target = "_blank") => {
  if (url) window.open(url, target);
};
