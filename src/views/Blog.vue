<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">技術ブログ</h1>
        <p class="text-xl text-gray-600">開発記録と技術Tips</p>
      </div>

      <!-- Blog Posts -->
      <div class="space-y-8">
        <!-- Blog Post 1 -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=300&fit=crop" 
            alt="Vue.js 3の新機能" 
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
              <span class="text-gray-500 text-sm">2024年7月15日</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Vue.js 3の新機能とComposition APIの活用法</h2>
            <p class="text-gray-600 mb-4">
              Vue.js 3で導入されたComposition APIの基本的な使い方から実践的な活用法まで、
              実際のプロジェクトでの経験を基に詳しく解説します。従来のOptions APIとの比較も含めて...
            </p>
            <div class="flex justify-between items-center">
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">続きを読む →</a>
              <div class="flex gap-2">
                <span class="text-gray-400 text-sm">5分で読める</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Blog Post 2 -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=300&fit=crop" 
            alt="TypeScript" 
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span class="text-gray-500 text-sm">2024年7月8日</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">TypeScriptで型安全なVueアプリケーションを構築する</h2>
            <p class="text-gray-600 mb-4">
              TypeScriptをVue.jsプロジェクトに導入する際のベストプラクティスと、
              型定義の効果的な活用方法について実例を交えて説明します。開発効率の向上と...
            </p>
            <div class="flex justify-between items-center">
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">続きを読む →</a>
              <div class="flex gap-2">
                <span class="text-gray-400 text-sm">8分で読める</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Blog Post 3 -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=300&fit=crop" 
            alt="パフォーマンス最適化" 
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">パフォーマンス</span>
              <span class="text-gray-500 text-sm">2024年7月1日</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Webアプリケーションのパフォーマンス最適化テクニック</h2>
            <p class="text-gray-600 mb-4">
              実際のプロジェクトで実践したパフォーマンス最適化の手法を紹介します。
              バンドルサイズの削減、レンダリング最適化、キャッシュ戦略など、具体的な改善事例を...
            </p>
            <div class="flex justify-between items-center">
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">続きを読む →</a>
              <div class="flex gap-2">
                <span class="text-gray-400 text-sm">12分で読める</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Blog Post 4 -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=300&fit=crop" 
            alt="テスト駆動開発" 
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">テスト</span>
              <span class="text-gray-500 text-sm">2024年6月24日</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">Vue.jsアプリケーションのテスト戦略</h2>
            <p class="text-gray-600 mb-4">
              Vue Test UtilsとJestを使用したコンポーネントテストの書き方から、
              E2Eテストの実装まで、包括的なテスト戦略について解説します。品質の高い...
            </p>
            <div class="flex justify-between items-center">
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">続きを読む →</a>
              <div class="flex gap-2">
                <span class="text-gray-400 text-sm">10分で読める</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Blog Post 5 -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=300&fit=crop" 
            alt="API設計" 
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">API</span>
              <span class="text-gray-500 text-sm">2024年6月17日</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">RESTful APIの設計原則とベストプラクティス</h2>
            <p class="text-gray-600 mb-4">
              スケーラブルで保守性の高いAPIを設計するための原則と、
              実際の開発現場で役立つベストプラクティスを実例とともに紹介します。エラーハンドリングや...
            </p>
            <div class="flex justify-between items-center">
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">続きを読む →</a>
              <div class="flex gap-2">
                <span class="text-gray-400 text-sm">15分で読める</span>
              </div>
            </div>
          </div>
        </article>

        <!-- Blog Post 6 -->
        <article class="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=300&fit=crop" 
            alt="開発環境" 
            class="w-full h-48 object-cover"
          >
          <div class="p-6">
            <div class="flex items-center gap-4 mb-4">
              <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">開発環境</span>
              <span class="text-gray-500 text-sm">2024年6月10日</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-800 mb-3">効率的な開発環境の構築とツール選定</h2>
            <p class="text-gray-600 mb-4">
              生産性を向上させる開発環境の構築方法と、おすすめのツールやエクステンションを紹介します。
              VSCodeの設定からGitワークフローまで、実際に使用している設定を...
            </p>
            <div class="flex justify-between items-center">
              <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">続きを読む →</a>
              <div class="flex gap-2">
                <span class="text-gray-400 text-sm">7分で読める</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Categories -->
      <section class="mt-12 bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">カテゴリー</h2>
        <div class="flex flex-wrap gap-4">
          <a href="#" class="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors">
            Vue.js (8)
          </a>
          <a href="#" class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
            TypeScript (6)
          </a>
          <a href="#" class="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg hover:bg-yellow-200 transition-colors">
            パフォーマンス (4)
          </a>
          <a href="#" class="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors">
            テスト (5)
          </a>
          <a href="#" class="bg-red-100 text-red-800 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors">
            API (3)
          </a>
          <a href="#" class="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            開発環境 (7)
          </a>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="mt-8 bg-indigo-600 rounded-lg p-8 text-white text-center">
        <h2 class="text-2xl font-bold mb-4">最新記事をお届け</h2>
        <p class="mb-6">新しい技術記事が公開されたときにお知らせします</p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="メールアドレス" 
            class="flex-1 px-4 py-2 rounded-lg text-gray-800"
          >
          <button class="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            購読する
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Blog page component
</script>
