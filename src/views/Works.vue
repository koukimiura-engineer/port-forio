<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">作品集</h1>
        <p class="text-xl text-gray-600">
          これまでに手がけたプロジェクトをご紹介します
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>

      <!-- Development Background Section -->
      <section class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">制作背景</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-indigo-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              技術的な挑戦
            </h3>
            <p class="text-gray-700">
              各プロジェクトでは、最新の技術トレンドを積極的に取り入れながら、実用性とパフォーマンスのバランスを重視しています。
              特にユーザビリティとアクセシビリティの向上に注力し、すべてのユーザーが快適に利用できるアプリケーションの開発を心がけています。
            </p>
          </div>

          <div class="border-l-4 border-green-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              チーム開発での経験
            </h3>
            <p class="text-gray-700">
              多くのプロジェクトでチームリーダーとして参加し、アジャイル開発手法を用いた効率的な開発プロセスの構築に貢献しました。
              コードレビューや技術指導を通じて、チーム全体のスキル向上にも取り組んでいます。
            </p>
          </div>

          <div class="border-l-4 border-blue-500 pl-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">
              継続的な学習
            </h3>
            <p class="text-gray-700">
              技術の進歩に合わせて常に学習を続け、新しいフレームワークやツールを積極的に試しています。
              オープンソースプロジェクトへの貢献や技術ブログの執筆を通じて、コミュニティとの知識共有も行っています。
            </p>
          </div>
        </div>
      </section>
    </div>
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

const projects: Project[] = [
  {
    title: "Eコマースプラットフォーム",
    description:
      "Vue.js + Node.jsで構築したモダンなECサイト。決済機能、在庫管理、ユーザー管理を含む包括的なソリューション。",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    technologies: [
      { name: "Vue.js", colorClass: "bg-green-100 text-green-800" },
      { name: "Node.js", colorClass: "bg-blue-100 text-blue-800" },
      { name: "MongoDB", colorClass: "bg-purple-100 text-purple-800" },
      { name: "Stripe", colorClass: "bg-yellow-100 text-yellow-800" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "データ分析ダッシュボード",
    description:
      "React + D3.jsによるインタラクティブな可視化ツール。リアルタイムデータの監視と分析機能を提供。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    technologies: [
      { name: "React", colorClass: "bg-blue-100 text-blue-800" },
      { name: "D3.js", colorClass: "bg-green-100 text-green-800" },
      { name: "Python", colorClass: "bg-purple-100 text-purple-800" },
      { name: "Redis", colorClass: "bg-red-100 text-red-800" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "タスク管理モバイルアプリ",
    description:
      "React Nativeで開発したクロスプラットフォームアプリ。オフライン対応とリアルタイム同期機能を実装。",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop",
    technologies: [
      { name: "React Native", colorClass: "bg-blue-100 text-blue-800" },
      { name: "Firebase", colorClass: "bg-green-100 text-green-800" },
      { name: "Redux", colorClass: "bg-purple-100 text-purple-800" },
    ],
    githubUrl: "https://github.com",
  },
  {
    title: "ブログプラットフォーム",
    description:
      "Next.jsとHeadless CMSを組み合わせた高速なブログサイト。SEO最適化とMarkdown対応。",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
    technologies: [
      { name: "Next.js", colorClass: "bg-black text-white" },
      { name: "Contentful", colorClass: "bg-blue-100 text-blue-800" },
      { name: "Vercel", colorClass: "bg-green-100 text-green-800" },
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
  },
  {
    title: "API管理ツール",
    description:
      "GraphQLとREST APIの統合管理ツール。リアルタイム監視とドキュメント自動生成機能。",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
    technologies: [
      { name: "GraphQL", colorClass: "bg-pink-100 text-pink-800" },
      { name: "Apollo", colorClass: "bg-blue-100 text-blue-800" },
      { name: "Docker", colorClass: "bg-green-100 text-green-800" },
    ],
    githubUrl: "https://github.com",
  },
  {
    title: "IoTダッシュボード",
    description:
      "センサーデータの収集・可視化システム。MQTT通信とリアルタイムアラート機能を実装。",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    technologies: [
      { name: "Vue.js", colorClass: "bg-green-100 text-green-800" },
      { name: "MQTT", colorClass: "bg-orange-100 text-orange-800" },
      { name: "InfluxDB", colorClass: "bg-blue-100 text-blue-800" },
    ],
    githubUrl: "https://github.com",
  },
];
</script>
