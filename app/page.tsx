export default function Home() {
  return (
    <div className="bg-zinc-50 p-4 text-gray-100 dark:bg-zinc-950">
      <h1 className="font-mono text-3xl font-bold text-rose-300 sm:text-5xl">
        Hello Tailwind
      </h1>
      <button className="mt-4 rounded bg-brandColor px-4 py-2 font-medium enabled:hover:bg-brandColorShadow disabled:cursor-not-allowed disabled:opacity-60">
        Sign In
      </button>
    </div>
  )
}
