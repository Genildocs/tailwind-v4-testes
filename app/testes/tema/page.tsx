import "../v4.css";

// Teste da seção 1 do artigo: a configuração agora mora no CSS (@theme).
// O CSS está em app/testes/v4.css.

export default function TemaTeste() {
  return (
    <main className="min-h-screen bg-white p-10 text-zinc-900">
      <h1 className="text-2xl font-bold">Teste: @theme</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Esperado: os dois primeiros quadrados aparecem; o terceiro (prefixo
        errado) fica sem cor.
      </p>

      <div className="mt-6 flex flex-col gap-6">
        <section>
          <h2 className="font-semibold">1. --color-brand gera bg-brand</h2>
          <div className="mt-2 h-12 w-40 bg-brand" />
        </section>

        <section>
          <h2 className="font-semibold">2. --spacing-18 gera p-18 (4.5rem = 72px)</h2>
          <div className="mt-2 inline-block bg-zinc-200">
            <div className="bg-brand p-18 text-white">p-18</div>
          </div>
        </section>

        <section>
          <h2 className="font-semibold">3. --primary-color NÃO gera bg-primary</h2>
          <div className="mt-2 h-12 w-40 border bg-primary" />
          <p className="mt-1 text-sm text-zinc-600">
            Sem fundo = a classe não gerou CSS, e nenhum erro aparece.
          </p>
        </section>

        <section>
          <h2 className="font-semibold">4. var(--color-red-500) e --spacing(4) no CSS</h2>
          <p className="t1-caixa border">
            Texto vermelho, com margem de 16px (calc(var(--spacing) * 4)).
          </p>
        </section>
      </div>
    </main>
  );
}
