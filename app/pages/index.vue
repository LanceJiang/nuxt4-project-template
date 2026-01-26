<script lang="ts" setup>
useSeoMeta({
  title: "跨境独立站建站平台 - 一站式电商解决方案",
  description:
    "5分钟快速开店，一站式跨境电商解决方案，多渠道引流获客，全方位高效转化",
});

// 导航菜单数据
const navItems = [
  { name: "产品", href: "#products" },
  { name: "解决方案", href: "#solutions" },
  { name: "客户案例", href: "#cases" },
  { name: "定价", href: "#pricing" },
  { name: "博客", href: "#blog" },
];

// 功能特性数据
const features = [
  {
    icon: "⚡",
    title: "快速建站",
    description:
      "5分钟快速开店，无需技术背景，可视化拖拽设计，轻松搭建专业独立站",
  },
  {
    icon: "🎯",
    title: "多渠道引流",
    description:
      "整合社交媒体、搜索引擎、邮件营销等多渠道流量，全方位触达目标客户",
  },
  {
    icon: "🔄",
    title: "高效转化",
    description:
      "智能推荐、购物车优化、支付集成等功能，最大化提升转化率和复购率",
  },
  {
    icon: "📊",
    title: "数据分析",
    description: "实时监控店铺数据，深度分析用户行为，为决策提供有力支撑",
  },
  {
    icon: "🌍",
    title: "全球支持",
    description: "支持多语言、多货币、多物流，轻松拓展全球市场，实现跨境销售",
  },
  {
    icon: "🛡️",
    title: "安全可靠",
    description:
      "企业级安全保障，SSL加密、数据备份、防火墙防护，确保业务安全稳定",
  },
];

// 主题模板数据
const themes = [
  {
    name: "Nova",
    image: "https://via.placeholder.com/400x300/007bff/ffffff?text=Nova",
    category: "时尚",
  },
  {
    name: "Hero",
    image: "https://via.placeholder.com/400x300/28a745/ffffff?text=Hero",
    category: "数码",
  },
  {
    name: "Eva",
    image: "https://via.placeholder.com/400x300/17a2b8/ffffff?text=Eva",
    category: "家居",
  },
  {
    name: "Geek",
    image: "https://via.placeholder.com/400x300/6610f2/ffffff?text=Geek",
    category: "科技",
  },
  {
    name: "Luxury",
    image: "https://via.placeholder.com/400x300/ffc107/333333?text=Luxury",
    category: "奢华",
  },
  {
    name: "Minimal",
    image: "https://via.placeholder.com/400x300/6c757d/ffffff?text=Minimal",
    category: "简约",
  },
];

// 客户案例数据
const cases = [
  {
    name: "Real Silk Life",
    description:
      "通过我们的平台，Real Silk Life 实现了300%的销售增长，成功拓展欧美市场",
    growth: "300%",
    image: "https://via.placeholder.com/200x200/f8f9fa/333333?text=RSL",
  },
  {
    name: "Alloyworks",
    description:
      "借助多渠道营销工具，Alloyworks 品牌知名度大幅提升，订单量翻倍增长",
    growth: "200%",
    image: "https://via.placeholder.com/200x200/f8f9fa/333333?text=Alloy",
  },
  {
    name: "Creality",
    description: "通过个性化推荐和数据分析，Creality 提升了客户满意度和复购率",
    growth: "150%",
    image: "https://via.placeholder.com/200x200/f8f9fa/333333?text=Creality",
  },
];

// 解决方案数据
const solutions = [
  {
    title: "DTC出海",
    description: "为品牌提供从建站到运营的一站式服务，助力品牌成功出海",
    icon: "🚀",
  },
  {
    title: "POD定制",
    description: "灵活的按需打印功能，零库存风险，满足个性化定制需求",
    icon: "🎨",
  },
  {
    title: "亚马逊+独立站",
    description: "双轨运营模式，最大化利用平台流量，建立独立品牌",
    icon: "🛒",
  },
];
</script>

<template>
  <div class="home-page">
    <!-- 顶部导航栏 -->
    <header
      class="navbar fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-sm backdrop-blur-md"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="/" class="text-brand-600 text-2xl font-bold">Shoplazza</a>
          </div>

          <!-- 桌面端导航 -->
          <nav class="hidden items-center space-x-8 md:flex">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="hover:text-brand-600 text-gray-700 transition-colors duration-200"
            >
              {{ item.name }}
            </a>
          </nav>

          <!-- 右侧按钮 -->
          <div class="hidden items-center space-x-4 md:flex">
            <button
              class="hover:text-brand-600 text-gray-700 transition-colors duration-200"
            >
              登录
            </button>
            <button
              class="bg-brand-600 hover:bg-brand-700 rounded-full px-4 py-2 text-white transition-colors duration-200"
            >
              免费试用
            </button>
          </div>

          <!-- 移动端菜单按钮 -->
          <button class="p-2 md:hidden">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Banner 区域 -->
    <section class="hero from-brand-50 bg-gradient-to-br to-white pt-24 pb-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h1
            class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
          >
            5分钟快速开店
            <br />
            <span class="text-brand-600">一站式跨境电商解决方案</span>
          </h1>
          <p class="mx-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl">
            无需技术背景，轻松搭建专业的独立站。提供多渠道引流、高效转化、全球支付、数据分析等全方位服务，助您成功出海。
          </p>
          <div
            class="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              class="bg-brand-600 hover:bg-brand-700 w-full rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl sm:w-auto"
            >
              开始建站
            </button>
            <button
              class="border-brand-600 text-brand-600 hover:bg-brand-50 w-full rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all duration-200 sm:w-auto"
            >
              预约演示
            </button>
          </div>
          <p class="mt-6 text-sm text-gray-500">
            ✓ 14天免费试用 ✓ 无需信用卡 ✓ 随时取消
          </p>
        </div>
      </div>
    </section>

    <!-- 功能特性展示区 -->
    <section id="products" class="bg-[#F8F4EC] py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            强大的功能特性
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            为您提供全方位的电商解决方案，从建站到运营，一站式服务
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="mb-4 text-4xl">{{ feature.icon }}</div>
            <h3 class="mb-3 text-xl font-bold text-gray-900">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 主题模板展示区 -->
    <section class="bg-[#FFA180] py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            精选主题模板
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            50+ 专业设计模板，覆盖各个行业，助您快速打造品牌形象
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(theme, index) in themes"
            :key="index"
            class="theme-card cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="aspect-[4/3] overflow-hidden bg-gray-200">
              <img
                :src="theme.image"
                :alt="theme.name"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="p-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold text-gray-900">
                  {{ theme.name }}
                </h3>
                <span
                  class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-500"
                >
                  {{ theme.category }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <button
            class="text-brand-600 hover:text-brand-700 font-semibold transition-colors duration-200"
          >
            查看所有模板 →
          </button>
        </div>
      </div>
    </section>

    <!-- 解决方案展示区 -->
    <section id="solutions" class="bg-white py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            定制化解决方案
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            根据不同业务需求，为您提供最适合的解决方案
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(solution, index) in solutions"
            :key="index"
            class="solution-card from-brand-50 border-brand-100 rounded-2xl border bg-gradient-to-br to-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="mb-4 text-5xl">{{ solution.icon }}</div>
            <h3 class="mb-3 text-2xl font-bold text-gray-900">
              {{ solution.title }}
            </h3>
            <p class="mb-4 text-gray-600">{{ solution.description }}</p>
            <button
              class="text-brand-600 hover:text-brand-700 font-semibold transition-colors duration-200"
            >
              了解更多 →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例区 -->
    <section id="cases" class="bg-[#DDEEFF] py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            成功客户案例
          </h2>
          <p class="mx-auto max-w-2xl text-lg text-gray-600">
            看看我们的客户如何通过平台实现业务增长
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(case_item, index) in cases"
            :key="index"
            class="case-card rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="mb-6 flex items-center">
              <img
                :src="case_item.image"
                :alt="case_item.name"
                class="h-16 w-16 rounded-full"
              />
              <div class="ml-4">
                <h3 class="text-xl font-bold text-gray-900">
                  {{ case_item.name }}
                </h3>
                <p class="text-brand-600 font-semibold">
                  增长 {{ case_item.growth }}
                </p>
              </div>
            </div>
            <p class="text-gray-600">{{ case_item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 区域 -->
    <section class="to-brand-700 bg-gradient-to-b from-[#DDEEFF] py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
            准备好开始您的电商之旅了吗？
          </h2>
          <p class="text-brand-100 mb-8 text-xl">
            立即免费试用，体验一站式跨境电商解决方案，14天无需信用卡
          </p>
          <div
            class="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              class="text-brand-600 w-full rounded-full bg-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-xl sm:w-auto"
            >
              免费开始
            </button>
            <button
              class="w-full rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-white/10 sm:w-auto"
            >
              联系我们
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gray-900 py-12 text-gray-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <!-- 品牌信息 -->
          <div>
            <h3 class="mb-4 text-2xl font-bold text-white">Shoplazza</h3>
            <p class="text-sm text-gray-400">
              一站式跨境电商解决方案，助力中国卖家成功出海
            </p>
            <div class="mt-4 flex space-x-4">
              <a
                href="#"
                class="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                微博
              </a>
              <a
                href="#"
                class="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                微信
              </a>
              <a
                href="#"
                class="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                知乎
              </a>
            </div>
          </div>

          <!-- 产品 -->
          <div>
            <h4 class="mb-4 font-semibold text-white">产品</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  主题模板
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  插件应用
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  营销工具
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  API文档
                </a>
              </li>
            </ul>
          </div>

          <!-- 支持 -->
          <div>
            <h4 class="mb-4 font-semibold text-white">支持</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  帮助中心
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  视频教程
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  联系我们
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  社区论坛
                </a>
              </li>
            </ul>
          </div>

          <!-- 公司 -->
          <div>
            <h4 class="mb-4 font-semibold text-white">公司</h4>
            <ul class="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  关于我们
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  新闻动态
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  加入我们
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="transition-colors duration-200 hover:text-white"
                >
                  合作伙伴
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400"
        >
          <p>© 2026 Shoplazza. All rights reserved. | 隐私政策 | 服务条款</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.home-page {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
}

.feature-card:hover,
.theme-card:hover,
.solution-card:hover,
.case-card:hover {
  transform: translateY(-8px);
}

.feature-card,
.theme-card,
.solution-card,
.case-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 768px) {
  .hero {
    padding-top: 6rem;
  }
}
</style>
