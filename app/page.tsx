import Link from "next/link";

// Este repositório é a prova do artigo "Tailwind CSS v4 na prática: o que
// mudou, o que a IA ainda erra e como vencer o shadcn com cascade layers".
// Cada seção do artigo que faz uma afirmação testável tem uma rota aqui.
//
// "achado" = o que a leitura do CSS compilado (Tailwind 4.3.4) já mostrou.
// O que depende de ver na tela está marcado como "falta ver no navegador".

const secoes = [
  {
    n: 1,
    href: "/secao-1-tema",
    titulo: "A configuração agora mora no CSS",
    afirmacao: "@theme gera as classes; prefixo errado não gera nada; theme() vira var().",
    achado: "Confirmado no CSS: bg-brand e p-18 geram; bg-primary (de --primary-color) não gera.",
  },
  {
    n: 2,
    href: "/secao-2-erros-ia",
    titulo: "O que a IA sugere e não funciona",
    afirmacao: "A tabela de classes e diretivas do v3 (ou inexistentes) que quebram no v4.",
    achado:
      "Ajustar o artigo: bg-gradient-to-r ainda funciona (alias obsoleto), e first:*: / last:*: compilam com outro sentido, não são ignorados.",
  },
  {
    n: 3,
    href: "/secao-3-dark-mode",
    titulo: "Dark mode com botão",
    afirmacao: "Sem @custom-variant, a classe dark no <html> não faz o dark: reagir.",
    achado: "Falta ver no navegador (antes e depois da linha no globals.css).",
  },
  {
    n: 4,
    href: "/secao-4-lista-map",
    titulo: "A lista com map e o último item",
    afirmacao: "last:mb-0, *:last:mb-0 e gap resolvem; space-y-2 muda com item oculto.",
    achado:
      "Falta ver no navegador. No CSS, a ordem do v3 (last:*:) compila com sentido diferente.",
  },
  {
    n: 5,
    href: "/secao-5-layers",
    titulo: "Sobrescrever o shadcn com cascade layers",
    afirmacao: "Estilo seu em components perde para utilities; uma layer depois delas vence.",
    achado: "Falta ver no navegador (a ordem das layers já foi conferida no CSS).",
  },
  {
    n: 6,
    href: "/secao-6-utility-variant",
    titulo: "Utilities e variantes próprias",
    afirmacao: "@utility, --value(), @apply com @utility, @custom-variant e @variant.",
    achado:
      "Confirmado no CSS: tab-*, hover:/md: com @utility, @apply e @custom-variant geram. Falta ver tab-size na tela.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl p-10">
      <h1 className="text-2xl font-bold">
        Tailwind CSS v4 na prática: a prova do artigo
      </h1>
      <p className="mt-2 text-sm opacity-70">
        Cada rota abaixo executa os exemplos de uma seção do artigo, para que
        nada seja publicado só porque &quot;a documentação diz&quot;. Tailwind
        4.3, Next 16.
      </p>

      <ol className="mt-8 flex flex-col gap-3">
        {secoes.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="block rounded-lg border p-4 hover:bg-black/5 dark:hover:bg-white/10"
            >
              <span className="text-xs opacity-60">Seção {s.n}</span>
              <span className="block font-semibold">{s.titulo}</span>
              <span className="block text-sm opacity-70">
                Afirmação: {s.afirmacao}
              </span>
              <span className="mt-1 block text-sm">Achado: {s.achado}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
