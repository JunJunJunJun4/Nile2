"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ResultsPage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";

  // モックの結果データ（後で API に差し替え）
  const result = {
    score: 78,
    correct: 7,
    total: 10,
    duration: "2分34秒",
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">結果</h1>
        <p className="text-sm text-zinc-500">試行 ID: {attemptId}</p>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <section className="p-6 bg-white dark:bg-zinc-900 rounded shadow-sm mb-4">
          <h2 className="text-xl font-semibold mb-2">
            スコア: {result.score}%
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
            正答: {result.correct} / {result.total}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            所要時間: {result.duration}
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            href={`/quiz/${attemptId}/explanation`}
            className="px-4 py-2 bg-blue-600 text-white rounded text-center"
          >
            解説を見る
          </Link>

          <Link
            href={`/quiz/${attemptId}/share`}
            className="px-4 py-2 border rounded text-center"
          >
            結果を共有
          </Link>

          <Link href="/" className="px-4 py-2 text-blue-600 text-center">
            ホームへ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
