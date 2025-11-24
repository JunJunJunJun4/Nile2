"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("パスワードが一致しません");
      return;
    }
    setLoading(true);
    try {
      // モック登録処理（実装時に Firebase/Auth 等へ置換）
      await new Promise((r) => setTimeout(r, 800));
      // 登録後はログイン画面へ遷移
      router.push("/login");
    } catch {
      setError("登録に失敗しました");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center p-6">
      <main className="w-full max-w-md bg-white dark:bg-zinc-900 p-6 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-4">新規登録</h1>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm block mb-1">表示名</label>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-sm"
              placeholder="表示名"
              aria-label="表示名"
            />
          </div>

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

          <div>
            <label className="text-sm block mb-1">パスワード（確認）</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded bg-white dark:bg-zinc-800 text-sm"
              placeholder="パスワード（確認）"
              aria-label="パスワード確認"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            {loading ? "登録中..." : "登録する"}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            既にアカウントをお持ちですか？{" "}
            <Link href="/login" className="text-blue-600">
              ログイン
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
