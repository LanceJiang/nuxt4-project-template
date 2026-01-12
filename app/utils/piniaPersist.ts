import type { PersistenceOptions } from "pinia-plugin-persistedstate";

/**
 * @description: - pinia持久化参数配置
 * @param {string} key - 存储持久化的 name
 * @param {Object} opts - 需要持久化的 state
 * @return {*} - persist 对象
 */
const piniaPersistConfig = (key: string, opts?: Record<string, any>) => {
  // persist只在客户端生效
  if (!import.meta.client) return;
  const persist: PersistenceOptions = {
    key,
    storage: opts?.storage || localStorage,
    ...opts,
  };
  return persist;
};
export default piniaPersistConfig;
