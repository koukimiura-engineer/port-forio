<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">プロフィール</h1>
        <p class="text-xl text-gray-600">経歴とスキルセット</p>
      </div>

      <!-- About Me -->
      <section class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">自己紹介</h2>
        <div class="flex flex-col md:flex-row gap-8">
          <img
            src="/my-image.png"
            alt="Profile"
            class="w-48 h-48 rounded-lg mx-auto md:mx-0"
          />
          <div class="flex-1">
            <p class="text-gray-700 mb-4">
              フルスタック開発者として5年以上の経験を持ち、モダンなWebアプリケーションの設計・開発・運用に携わってきました。
              特にフロントエンド技術に強みを持ち、ユーザビリティを重視した開発を心がけています。
            </p>
            <p class="text-gray-700 mb-4">
              最新の技術トレンドを常にキャッチアップし、チーム開発においてはコードレビューや技術指導も積極的に行っています。
              アジャイル開発手法に精通し、プロジェクトマネジメントの経験もあります。
            </p>
            <div class="flex flex-wrap gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                class="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">職務経歴</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-indigo-500 pl-6">
            <h3 class="text-xl font-semibold text-gray-800">
              シニアフロントエンド開発者
            </h3>
            <p class="text-indigo-600 font-medium">
              株式会社テックイノベーション
            </p>
            <p class="text-gray-500 text-sm mb-2">2022年4月 - 現在</p>
            <ul class="text-gray-700 space-y-1">
              <li>• Vue.js/Reactを使用したSPAの設計・開発</li>
              <li>• TypeScriptによる型安全な開発環境の構築</li>
              <li>• チームリードとして5名のメンバーをマネジメント</li>
              <li>• CI/CDパイプラインの構築・運用</li>
            </ul>
          </div>

          <div class="border-l-4 border-blue-500 pl-6">
            <h3 class="text-xl font-semibold text-gray-800">
              フルスタック開発者
            </h3>
            <p class="text-blue-600 font-medium">
              株式会社ウェブソリューションズ
            </p>
            <p class="text-gray-500 text-sm mb-2">2020年1月 - 2022年3月</p>
            <ul class="text-gray-700 space-y-1">
              <li>• Node.js/Expressを使用したAPI開発</li>
              <li>• MongoDB/PostgreSQLを使用したデータベース設計</li>
              <li>• AWS環境でのインフラ構築・運用</li>
              <li>• アジャイル開発手法の導入・推進</li>
            </ul>
          </div>

          <div class="border-l-4 border-green-500 pl-6">
            <h3 class="text-xl font-semibold text-gray-800">ジュニア開発者</h3>
            <p class="text-green-600 font-medium">
              株式会社スタートアップテック
            </p>
            <p class="text-gray-500 text-sm mb-2">2019年4月 - 2019年12月</p>
            <ul class="text-gray-700 space-y-1">
              <li>• HTML/CSS/JavaScriptによるWebサイト制作</li>
              <li>• WordPressテーマの開発・カスタマイズ</li>
              <li>• レスポンシブデザインの実装</li>
              <li>• Git/GitHubを使用したバージョン管理</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">スキルセット</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              フロントエンド
            </h3>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Vue.js</span>
                  <span class="text-gray-500">90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-green-500 h-2 rounded-full"
                    style="width: 90%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">React</span>
                  <span class="text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-blue-500 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">TypeScript</span>
                  <span class="text-gray-500">80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-indigo-500 h-2 rounded-full"
                    style="width: 80%"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              バックエンド
            </h3>
            <div class="space-y-3">
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Node.js</span>
                  <span class="text-gray-500">85%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-yellow-500 h-2 rounded-full"
                    style="width: 85%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">Python</span>
                  <span class="text-gray-500">75%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-purple-500 h-2 rounded-full"
                    style="width: 75%"
                  ></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">AWS</span>
                  <span class="text-gray-500">70%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div
                    class="bg-orange-500 h-2 rounded-full"
                    style="width: 70%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Profile page component
</script>
