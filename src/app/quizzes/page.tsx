import Link from "next/link";
export default function QuizzesPage() {
  // サンプルクイズIDを複数用意
  const samples = ["quiz-1", "quiz-2"];
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">クイズ一覧</h1>
      <ul className="mt-4 flex flex-col gap-2">
        {samples.map((id) => (
          <li key={id}>
            <Link href={`/quizzes/${id}`} className="text-blue-600">
              {id}
            </Link>
          </li>
        ))}
      </ul>
      <a href="/" className="text-blue-600 mt-4 block">ホームへ戻る</a>
    </div>
  );
}