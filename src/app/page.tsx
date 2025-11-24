import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl p-8 bg-white dark:bg-black">
        <h1 className="text-2xl font-bold mb-4">ホーム</h1>
        <nav className="flex flex-col gap-2">
          <Link href="/login" className="text-blue-600">
            ログイン
          </Link>
          <Link href="/register" className="text-blue-600">
            新規登録
          </Link>
          <Link href="/profile" className="text-blue-600">
            プロフィール
          </Link>
          <Link href="/quizzes" className="text-blue-600">
            クイズ一覧
          </Link>
        </nav>
      </main>
    </div>
  );
}
