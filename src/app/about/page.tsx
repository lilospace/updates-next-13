import Link from "next/link";
import { Repo } from "@/components/Repo";
import { Suspense } from "react";
export default function About() {
    return (
        <div>
            <h1>
                hello word About
            </h1>
            <Link href={'/'} placeholder="voltar home" > Voltar</Link>
            <Suspense fallback={<p>carregando repo..</p>}>
                <Repo />
            </Suspense>
        </div>
    )
}