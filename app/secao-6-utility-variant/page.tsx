import "../v4.css";

// Teste da seção 6 do artigo: @utility, @custom-variant e @variant.
// O CSS está em app/v4.css.

export default function UtilityVariantTeste() {
  return (
    <main className="min-h-screen bg-white p-10 text-zinc-900">
      <h1 className="text-2xl font-bold">Teste: @utility e variantes próprias</h1>

      <div className="mt-6 flex flex-col gap-8">
        <section>
          <h2 className="font-semibold">@utility tab-* com --value()</h2>
          <p className="text-xs text-zinc-600">
            Três blocos com tab-size diferente: tab-github (8), tab-4 (4) e
            tab-[12] (12). O texto depois do TAB deve ficar cada vez mais à direita.
          </p>
          <pre className="mt-2 whitespace-pre bg-zinc-100 p-2 tab-github">{"A\tdepois do tab (tab-github = 8)"}</pre>
          <pre className="mt-2 whitespace-pre bg-zinc-100 p-2 tab-4">{"A\tdepois do tab (tab-4 = 4)"}</pre>
          <pre className="mt-2 whitespace-pre bg-zinc-100 p-2 tab-[12]">{"A\tdepois do tab (tab-[12] = 12)"}</pre>
        </section>

        <section>
          <h2 className="font-semibold">@utility aceita variantes</h2>
          <p className="text-xs text-zinc-600">
            content-auto aceita variantes (hover: e md:). O efeito não é visível;
            a prova está no CSS compilado, onde aparecem .hover\:content-auto e .md\:content-auto.
          </p>
          <div className="mt-2 hover:content-auto md:content-auto bg-zinc-100 p-2">hover:content-auto md:content-auto</div>
        </section>

        <section>
          <h2 className="font-semibold">@apply com @utility (t6-btn)</h2>
          <p className="text-xs text-zinc-600">
            Botão azul-marca, texto branco, negrito. O t6-cta usa @apply t6-btn,
            o que só funciona porque t6-btn foi criada com @utility.
          </p>
          <button className="t6-cta mt-2">Botão</button>
        </section>

        <section>
          <h2 className="font-semibold">@custom-variant tema-cinema</h2>
          <p className="text-xs text-zinc-600">
            O título de dentro do container fica âmbar; o de fora continua branco sobre fundo escuro de teste.
          </p>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-4">
              <h3 className="text-white tema-cinema:text-amber-300">Fora do tema</h3>
            </div>
            <div data-tema="cinema" className="bg-zinc-900 p-4">
              <h3 className="text-white tema-cinema:text-amber-300">Dentro de data-tema=cinema</h3>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-semibold">@variant dentro do CSS</h2>
          <p className="text-xs text-zinc-600">Passe o mouse: o cartão inverte as cores.</p>
          <div className="t6-cartao mt-2 border p-3">Cartão</div>
        </section>
      </div>
    </main>
  );
}
