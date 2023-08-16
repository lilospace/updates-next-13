import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        home
      </h1>
      <Link href="/about">Ir para a about</Link>
    </main>
  )
}
