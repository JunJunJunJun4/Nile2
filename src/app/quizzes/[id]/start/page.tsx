"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function QuizStartPage() {
  const params = useParams();
  const id = params?.id ?? "unknown";
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">クイズ開始: {id}</h1>
      <p className="mt-2">準備ができたら開始してください。</p>
      <Link href={`/quiz/attempt-123`} className="text-blue-600 mt-4 block">
        開始する
      </Link>
      <a href={`/quizzes/${id}`} className="text-blue-600 mt-2 block">
        詳細へ戻る
      </a>
    </div>
  );
}
