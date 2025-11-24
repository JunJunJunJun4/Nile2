import Link from "next/link";

export default function QuizzesPage() {
  const samples = [
    {
      id: "quiz-1",
      title: "サンプルクイズ 1",
      category: "一般知識",
      count: 10,
    },
    { id: "quiz-2", title: "サンプルクイズ 2", category: "技術", count: 8 },
    { id: "quiz-3", title: "サンプルクイズ 3", category: "歴史", count: 12 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="max-w-4xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">クイズ一覧</h1>
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-blue-600">
            ホーム
          </Link>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="mb-4">
          <input
            type="search"
            placeholder="クイズを検索"
            className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-900"
            aria-label="クイズ検索"
          />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {samples.map((q) => (
            <li
              key={q.id}
              className="p-4 bg-white dark:bg-zinc-900 rounded shadow-sm"
            >
              <Link href={`/quizzes/${q.id}`} className="block">
                <h3 className="font-medium">{q.title}</h3>
                <p className="text-sm text-zinc-500">
                  カテゴリ: {q.category} — {q.count}問
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
