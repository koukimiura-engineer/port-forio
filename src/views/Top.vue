<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Hero Section -->
    <section class="pt-20 pb-16 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
            alt="Profile" 
            class="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg"
          >
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            こんにちは、私は<span class="text-indigo-600">開発者</span>です
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
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">代表作品</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop" 
              alt="Project 1" 
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Eコマースプラットフォーム</h3>
              <p class="text-gray-600 mb-4">Vue.js + Node.jsで構築したモダンなECサイト</p>
              <router-link to="/works" class="text-indigo-600 hover:text-indigo-800">詳細を見る →</router-link>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" 
              alt="Project 2" 
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">データ分析ダッシュボード</h3>
              <p class="text-gray-600 mb-4">React + D3.jsによるインタラクティブな可視化</p>
              <router-link to="/works" class="text-indigo-600 hover:text-indigo-800">詳細を見る →</router-link>
            </div>
          </div>
          
          <div class="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img 
              src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=400&h=250&fit=crop" 
              alt="Project 3" 
              class="w-full h-48 object-cover"
            >
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">モバイルアプリ</h3>
              <p class="text-gray-600 mb-4">React Nativeで開発したクロスプラットフォームアプリ</p>
              <router-link to="/works" class="text-indigo-600 hover:text-indigo-800">詳細を見る →</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">技術スタック</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Vue.js</span>
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">React</span>
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">TypeScript</span>
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Node.js</span>
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">Python</span>
          <span class="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">AWS</span>
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
// Top page component
</script>
