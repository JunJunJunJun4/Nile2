"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function SharePage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/quiz/${attemptId}/results`
      : `/quiz/${attemptId}/results`;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function handleNativeShare() {
    if ((navigator as any).share) {
      try {
        await (navigator as any).share({
          title: "Quiz結果",
          text: `結果を共有します（試行ID: ${attemptId}）`,
          url: shareUrl,
        });
      } catch {
        // ユーザーがキャンセルした場合などは無視
      }
    } else {
      handleCopy();
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold">結果の共有</h1>
        <p className="text-sm text-zinc-500">試行 ID: {attemptId}</p>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-4">
        <section className="p-4 bg-white dark:bg-zinc-900 rounded shadow-sm">
          <p className="text-sm mb-2">以下のリンクを共有できます。</p>
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={shareUrl}
              className="flex-1 px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-sm"
            />
            <button
              onClick={handleCopy}
              className="px-3 py-2 bg-blue-600 text-white rounded text-sm"
            >
              {copied ? "コピー済み" : "コピー"}
            </button>
            <button
              onClick={handleNativeShare}
              className="px-3 py-2 border rounded text-sm"
            >
              共有
            </button>
          </div>
        </section>

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
