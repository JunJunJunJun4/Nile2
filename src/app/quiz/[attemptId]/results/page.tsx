"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function ResultsPage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">結果: {attemptId}</h1>
      <p className="mt-2">（スコア等のプレースホルダ）</p>
      <Link
        href={`/quiz/${attemptId}/explanation`}
        className="text-blue-600 mt-4 block"
      >
        解説を見る
      </Link>
      <Link
        href={`/quiz/${attemptId}/share`}
        className="text-blue-600 mt-2 block"
      >
        結果を共有
      </Link>
      <a href="/" className="text-blue-600 mt-4 block">
        ホームへ戻る
      </a>
    </div>
  );
}
