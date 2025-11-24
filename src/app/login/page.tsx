"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // モック認証（実装時に Firebase/Auth API に置換）
      await new Promise((r) => setTimeout(r, 700));
      // 成功時はホームへ遷移
      router.push("/");
    } catch (err) {
      setError("ログインに失敗しました");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center p-6">
      <main className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">ログイン</h1>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm block mb-1">メールアドレス</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-sm"
              placeholder="you@example.com"
              aria-label="メールアドレス"
            />
          </div>

          <div>
            <label className="text-sm block mb-1">パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-sm"
              placeholder="パスワード"
              aria-label="パスワード"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {loading ? "ログイン中..." : "ログイン"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            アカウントがない場合は{" "}
            <Link href="/register" className="text-blue-600">
              新規登録
            </Link>
          </p>
          <p className="mt-2">
            <Link href="/" className="text-blue-600">
              ホームへ戻る
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
