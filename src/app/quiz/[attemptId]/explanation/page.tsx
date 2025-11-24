"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ExplanationPage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";

  // モックの解説データ（後で API に差し替え）
  const explanations = [
    { q: 1, body: "この問題の解説：正しい選択肢は〜です。理由は〜。" },
    { q: 2, body: "この問題の解説：ポイントは〜。" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">解説</h1>
        <p className="text-sm text-zinc-500">試行 ID: {attemptId}</p>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-4">
        {explanations.map((ex) => (
          <section
            key={ex.q}
            className="p-4 bg-white dark:bg-zinc-900 rounded shadow-sm"
          >
            <h2 className="font-semibold mb-2">問題 {ex.q}</h2>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {ex.body}
            </p>
          </section>
        ))}

        <div className="flex gap-2">
          <Link
            href={`/quiz/${attemptId}/results`}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            結果へ戻る
          </Link>

          <Link href="/" className="px-4 py-2 border rounded text-blue-600">
            ホームへ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
