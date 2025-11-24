"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function SharePage() {
  const params = useParams();
  const attemptId = params?.attemptId ?? "unknown";
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">共有: {attemptId}</h1>
      <p className="mt-2">（共有リンク生成のプレースホルダ）</p>
      <Link
        href={`/quiz/${attemptId}/results`}
        className="text-blue-600 mt-4 block"
      >
        結果へ戻る
      </Link>
      <Link href="/" className="text-blue-600 mt-2 block">
        ホームへ戻る
      </Link>
    </div>
  );
}
