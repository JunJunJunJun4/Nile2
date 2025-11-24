import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Nile</h1>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-blue-600">
            ログイン
          </Link>
          <Link href="/register" className="text-sm text-blue-600">
            新規登録
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="mb-6 p-4 bg-white dark:bg-zinc-900 rounded shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">ようこそ</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                ユーザー名
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-500">連続学習</p>
              <p className="text-xl font-bold">3 日</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Link
              href="/profile"
              className="px-3 py-2 bg-blue-600 text-white rounded text-sm"
            >
              プロフィール
            </Link>
            <Link href="/quizzes" className="px-3 py-2 border rounded text-sm">
              クイズ一覧
            </Link>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-semibold mb-3">おすすめクイズ</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow-sm">
              <Link href="/quizzes/quiz-1" className="block">
                <h4 className="font-medium">サンプルクイズ 1</h4>
                <p className="text-sm text-zinc-500">
                  カテゴリ: 一般知識 — 10問
                </p>
              </Link>
            </li>
            <li className="p-4 bg-white dark:bg-zinc-900 rounded shadow-sm">
              <Link href="/quizzes/quiz-2" className="block">
                <h4 className="font-medium">サンプルクイズ 2</h4>
                <p className="text-sm text-zinc-500">カテゴリ: 技術 — 8問</p>
              </Link>
            </li>
          </ul>
        </section>

        <section className="p-4 bg-white dark:bg-zinc-900 rounded shadow-sm">
          <h3 className="text-md font-semibold mb-2">最近の進行状況</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            現在進行中のクイズはありません
          </p>
        </section>
      </main>
    </div>
  );
}
