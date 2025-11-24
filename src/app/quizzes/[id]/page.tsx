"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function QuizDetailPage() {
  const params = useParams();
  const id = params?.id ?? "unknown";
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">クイズ詳細: {id}</h1>
      <p className="mt-2">（プレースホルダ）</p>
      <Link href={`/quizzes/${id}/start`} className="text-blue-600 mt-4 block">
        クイズ開始
      </Link>
      <a href="/quizzes" className="text-blue-600 mt-2 block">
        一覧へ戻る
      </a>
    </div>
  );
}
