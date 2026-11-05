import "./layers.css";

// Um "componente de terceiro" feito só de utilities, como os do shadcn.
// O estilo padrão dele é: azul e arredondado.
function Badge({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      data-slot="badge"
      className={`inline-block rounded-full bg-blue-600 px-3 py-1 text-sm text-white ${className}`}
    >
      {children}
    </span>
  );
}

// Cada caso tenta deixar o badge vermelho e quadrado.
export default function LayersTeste() {
  return (
    <main className="min-h-screen bg-white p-10 text-zinc-900">
      <h1 className="text-2xl font-bold">Teste: cascade layers</h1>
      <p className="mt-2 text-zinc-600">
        Padrão do Badge: azul e arredondado. Vermelho e quadrado = o meu estilo venceu.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <section className="rounded-lg border p-6">
          <h2 className="font-semibold">1. Classe em @layer components</h2>
          <p className="mb-4 text-sm text-zinc-600">Esperado: perde (continua azul).</p>
          <Badge className="badge-components">Badge</Badge>
        </section>

        <section id="caso-especifico" className="rounded-lg border p-6">
          <h2 className="font-semibold">2. Seletor com #id, ainda em components</h2>
          <p className="mb-4 text-sm text-zinc-600">Esperado: perde também.</p>
          <Badge className="badge-especifico">Badge</Badge>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="font-semibold">3. Classe em @layer overrides</h2>
          <p className="mb-4 text-sm text-zinc-600">Esperado: vence (vermelho e quadrado).</p>
          <Badge className="badge-overrides">Badge</Badge>
        </section>

        <section className="rounded-lg border p-6">
          <h2 className="font-semibold">4. Classe do Tailwind via className</h2>
          <p className="mb-4 text-sm text-zinc-600">
            Esperado: depende da ordem das classes no CSS gerado, não da ordem no HTML.
          </p>
          <Badge className="rounded-none bg-red-600">Badge</Badge>
        </section>
      </div>

      <section
        data-tema="cinema"
        className="mt-8 rounded-lg border bg-white p-6 text-zinc-900"
      >
        <h2 className="font-semibold">5. Layout inteiro em [data-tema=&quot;cinema&quot;]</h2>
        <p className="mb-4 text-sm">
          O container tem bg-white e text-zinc-900, mas a layer overrides vence: fundo preto, texto âmbar.
        </p>
        <Badge>Badge</Badge>
      </section>
    </main>
  );
}
