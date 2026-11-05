
// Teste da seção 4 do artigo: lista com map e o último item sem margem.
// Cada lista mostra uma saída. O quadro cinza é a lista; a barra vermelha
// mostra onde a margem do último item deixaria um espaço sobrando.

const itens = ["Um", "Dois", "Três", "Quatro"];

function Caixa({ titulo, nota, children }: { titulo: string; nota: string; children: React.ReactNode }) {
  return (
    <section className="rounded border p-4">
      <h2 className="font-semibold">
        <code>{titulo}</code>
      </h2>
      <p className="mb-3 text-xs text-zinc-600">{nota}</p>
      {/* Fundo cinza + borda vermelha embaixo: se o último item ficar com
          margem, aparece uma faixa cinza entre o texto e a borda. */}
      <div className="border-b-2 border-red-500 bg-zinc-200">{children}</div>
    </section>
  );
}

const item = "bg-white px-2 py-1";

export default function ListaMapTeste() {
  return (
    <main className="min-h-screen bg-white p-10 text-zinc-900">
      <h1 className="text-2xl font-bold">Teste: lista com map e o último item</h1>
      <p className="mt-2 text-sm text-zinc-600">
        Esperado: em todas, os itens têm 8px entre si e o último encosta na
        borda vermelha. Exceção: a lista &quot;ERRADO&quot;.
      </p>

      <div className="mt-6 grid max-w-xl gap-6">
        <Caixa titulo='mb-2 (sem tratamento)' nota="ERRADO de propósito: o último item deixa 8px de sobra.">
          <ul>
            {itens.map((n) => (
              <li key={n} className={`${item} mb-2`}>{n}</li>
            ))}
          </ul>
        </Caixa>

        <Caixa titulo='mb-2 last:mb-0' nota="Saída 1: variante last: no próprio item.">
          <ul>
            {itens.map((n) => (
              <li key={n} className={`${item} mb-2 last:mb-0`}>{n}</li>
            ))}
          </ul>
        </Caixa>

        <Caixa titulo='*:mb-2 *:last:mb-0' nota="Saída 2: estilizar a partir do pai (ordem do v4).">
          <ul className="*:mb-2 *:last:mb-0">
            {itens.map((n) => (
              <li key={n} className={item}>{n}</li>
            ))}
          </ul>
        </Caixa>

        <Caixa titulo='*:mb-2 last:*:mb-0' nota="Ordem do v3 (last:*:). Compila no v4, mas com outro sentido: 'se o ul é o último filho, zera a margem de TODOS os itens'. Esperado: sem os 8px entre os itens.">
          <ul className="*:mb-2 last:*:mb-0">
            {itens.map((n) => (
              <li key={n} className={item}>{n}</li>
            ))}
          </ul>
        </Caixa>

        <Caixa titulo='flex flex-col gap-2' nota="Saída 3: gap, sem margem nenhuma.">
          <ul className="flex flex-col gap-2">
            {itens.map((n) => (
              <li key={n} className={item}>{n}</li>
            ))}
          </ul>
        </Caixa>

        <Caixa titulo='space-y-2' nota="Funciona, mas aplica margin-bottom em todo filho que não é o último.">
          <ul className="space-y-2">
            {itens.map((n) => (
              <li key={n} className={item}>{n}</li>
            ))}
          </ul>
        </Caixa>

        <Caixa titulo='space-y-2 com item oculto por último' nota="O último item está hidden: o espaçamento pode sair estranho.">
          <ul className="space-y-2">
            {itens.map((n) => (
              <li key={n} className={item}>{n}</li>
            ))}
            <li className={`${item} hidden`}>Oculto</li>
          </ul>
        </Caixa>

        <Caixa titulo='first: / odd: / nth-3:' nota="Primeiro verde, ímpares em negrito, terceiro azul (nth-3).">
          <ul className="flex flex-col gap-2">
            {itens.map((n) => (
              <li key={n} className={`${item} first:bg-green-300 odd:font-bold nth-3:bg-blue-300`}>{n}</li>
            ))}
          </ul>
        </Caixa>
      </div>
    </main>
  );
}
