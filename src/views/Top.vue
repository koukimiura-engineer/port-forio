<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Hero Section -->
    <section class="head-section pt-20 pb-16 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-8">
          <img
            src="/my-image.png"
            alt="Profile"
            class="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
          />
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            こんにちは、私は<span class="text-indigo-700">開発者</span>です
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            フルスタック開発者として、モダンなWebアプリケーションの構築に情熱を注いでいます。
            Vue.js、React、Node.jsを使用して、ユーザー体験を重視したソリューションを提供します。
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <router-link
            to="/works"
            class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            作品を見る
          </router-link>
          <router-link
            to="/contact"
            class="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
          >
            お問い合わせ
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Works -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          代表作品
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.title"
            :project="project"
          />
        </div>
        <div class="text-center mt-12">
          <router-link
            to="/works"
            class="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            すべての作品を見る →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">技術スタック</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
            >Vue.js</span
          >
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
            >React</span
          >
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
            >TypeScript</span
          >
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
            >Node.js</span
          >
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
            >Python</span
          >
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm"
            >AWS</span
          >
        </div>
        <div class="mt-8">
          <router-link
            to="/profile"
            class="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            詳しいプロフィールを見る →
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "../components/ProjectCard.vue";

interface Technology {
  name: string;
  colorClass: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl?: string;
  demoUrl?: string;
}

// 代表作品として3つのプロジェクトを選択
const featuredProjects: Project[] = [
  {
    title: "試合結果・動画連動Webアプリ",
    description:
      "Vue.js + TailwindCSS + TypeScriptで開発した。野球の試合結果・一球ごとのデータを動画と連動して確認できるWebアプリ。",
    image: "/baseball-project.png",
    technologies: [
      { name: "Vue.js", colorClass: "bg-green-100 text-green-800" },
      { name: "TailwindCSS", colorClass: "bg-purple-100 text-purple-800" },
      { name: "TypeScript", colorClass: "bg-yellow-100 text-yellow-800" },
    ],
  },
  {
    title: "グループ会社横断型社員検索Webアプリ",
    description:
      "Vue.js + AWS で開発した、会社間の社員データベースを統合するグループ会社横断型社員検索アプリ。",
    image: "/employee-search.png",
    technologies: [
      { name: "React", colorClass: "bg-blue-100 text-blue-800" },
      { name: "AWS", colorClass: "bg-orange-100 text-orange-800" },
    ],
  },
  {
    title: "IoTデバイスと連携した、高齢者見守りスマホアプリ",
    description:
      "プラグ型センサーデバイスと連携した、高齢者見守りモバイルアプリ。バックエンド開発を担当",
    image: "/koumori.png",
    technologies: [
      { name: "Node.js", colorClass: "bg-green-100 text-green-800" },
      { name: "TypeScript", colorClass: "bg-yellow-100 text-yellow-800" },
      { name: "Python", colorClass: "bg-purple-100 text-purple-800" },
      { name: "AWS", colorClass: "bg-orange-100 text-orange-800" },
    ],
  },
];
</script>

<style scoped>
.head-section {
  background: linear-gradient(45deg, #fa8bff, #2bd2ff, #2bff88) 0 / 200% 100%;
  animation: bg-gradient 5s linear infinite alternate;
}

@keyframes bg-gradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>
