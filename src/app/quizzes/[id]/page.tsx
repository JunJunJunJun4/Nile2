"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function QuizDetailPage() {
  const params = useParams();
  const id = params?.id ?? "unknown";

  // モックデータ（後で API に差し替え）
  const quiz = {
    id,
    title: `サンプルクイズ (${id})`,
    description: "このクイズはワイヤーフレームを参考にしたモックです。",
    category: "一般知識",
    question_count: 10,
    createdBy: "system",
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">クイズ詳細</h1>
        <nav>
          <Link href="/quizzes" className="text-sm text-blue-600">
            一覧へ戻る
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <article className="p-6 bg-white dark:bg-zinc-900 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
          <p className="text-sm text-zinc-500 mb-4">
            カテゴリ: {quiz.category} — {quiz.question_count}問
          </p>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            {quiz.description}
          </p>

          <div className="flex gap-2">
            <Link
              href={`/quizzes/${id}/start`}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              クイズ開始
            </Link>
            <Link href="/" className="px-4 py-2 border rounded text-sm">
              ホームへ
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
