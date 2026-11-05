"use client";

import { useState } from "react";

// Teste da seção 3 do artigo: dark mode com botão.
// O botão só coloca/tira a classe "dark" no <html>.
// Sem o @custom-variant no globals.css, as classes dark: ignoram essa classe
// e seguem o tema do sistema operacional.

export default function DarkModeTeste() {
  const [escuro, setEscuro] = useState(false);

  function alternarTema() {
    const novo = !escuro;
    document.documentElement.classList.toggle("dark", novo);
    setEscuro(novo);
  }

  return (
    <main className="min-h-screen p-10 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
      <h1 className="text-2xl font-bold">Teste: dark mode com botão</h1>

      <p className="mt-2">
        Classe no &lt;html&gt;: <code>{escuro ? "dark" : "(nenhuma)"}</code>
      </p>

      <button
        onClick={alternarTema}
        className="mt-6 rounded-md border px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
      >
        Alternar tema
      </button>

      <div className="mt-8 rounded-lg border p-6 bg-amber-100 dark:bg-indigo-900">
        Esta caixa fica amarela no tema claro e azul no escuro.
      </div>
    </main>
  );
}
