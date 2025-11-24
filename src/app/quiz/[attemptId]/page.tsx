"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function QuizAttemptPage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">クイズ中: {attemptId}</h1>
      <p className="mt-2">（問題表示のプレースホルダ）</p>
      <Link
        href={`/quiz/${attemptId}/results`}
        className="text-blue-600 mt-4 block"
      >
        結果へ
      </Link>
    </div>
  );
}
