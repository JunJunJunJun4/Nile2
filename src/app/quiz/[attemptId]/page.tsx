"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function QuizAttemptPage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";
  const router = useRouter();

  // モックの問題データ（後で API に差し替え）
  const question = {
    id: "q1",
    body: "次のうち、正しいものはどれですか？",
    options: ["選択肢 A", "選択肢 B", "選択肢 C", "選択肢 D"],
  };

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  function handleSubmit() {
    // 実装では回答保存 → 次問 or 結果へ
    router.push(`/quiz/${attemptId}/results`);
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">クイズ中</h1>
        <p className="text-sm text-zinc-500">試行 ID: {attemptId}</p>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <article className="p-6 bg-white dark:bg-zinc-900 rounded shadow-sm">
          <h2 className="text-lg font-semibold mb-4">問題</h2>
          <p className="mb-4">{question.body}</p>

          <ul className="flex flex-col gap-2 mb-4">
            {question.options.map((opt, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-4 py-2 rounded border ${
                    selectedIndex === idx
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-zinc-800"
                  }`}
                >
                  {opt}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              disabled={selectedIndex === null}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              回答して結果へ
            </button>

            <Link
              href={`/quiz/${attemptId}/results`}
              className="px-4 py-2 border rounded"
            >
              強制的に結果へ
            </Link>

            <Link href="/" className="px-4 py-2 text-sm text-blue-600">
              ホームへ
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
