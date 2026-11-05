# Tailwind CSS v4 — test project

A small Next.js project used to test every example in my article about Tailwind CSS v4 before publishing it.

## Why this project exists

AI models often suggest Tailwind v3 code, or features that never existed in Tailwind, when you ask about v4. Some of these suggestions fail silently: the class compiles, there is no error, and the style is simply not applied.

I wrote the article from problems I hit while coding. This repository is where each example runs, so the article only shows code that actually works on a real project, not code that only looks right.

## What each route covers

The home page (`/`) is an index of the article. Each article section has its own route, named after the section, so every example runs in isolation.

| Route | Article section | What it shows |
| --- | --- | --- |
| `/secao-1-tema` | Configuration lives in CSS | `@theme` generates classes; a wrong prefix (`--primary-color`) generates nothing; `var()` and `--spacing()` replace `theme()` |
| `/secao-2-erros-ia` | What AI still suggests | Each row of the article's table, the AI version next to the v4 version |
| `/secao-3-dark-mode` | Dark mode with a toggle button | Without `@custom-variant dark`, the `dark:` classes ignore the `dark` class on `<html>` and follow the OS theme |
| `/secao-4-lista-map` | The `map` list and the last item | `last:mb-0`, `*:last:mb-0`, `gap` and `space-y-2`, including a hidden last item |
| `/secao-5-layers` | Cascade layers | Why a custom class in `@layer components` loses to utilities, why selector specificity doesn't matter between layers, and how a layer declared after `utilities` makes one style (or a whole layout) win over another |
| `/secao-6-utility-variant` | Custom utilities and variants | `@utility` with `--value()`, `@apply` with a custom utility, `@custom-variant` and `@variant` |

The `@theme`, `@utility` and `@custom-variant` examples for sections 1, 2, 4 and 6 live in `app/globals.css`. Section 5 keeps its own `layers.css`.

## Running it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Dark mode test

1. Set your OS theme to **light**, otherwise the `dark:` classes are active from the start.
2. Open `/secao-3-dark-mode` and click the button. The `<html>` gets the `dark` class, but the colors don't change.
3. Add this line right below `@import "tailwindcss";` in `app/globals.css`:

   ```css
   @custom-variant dark (&:where(.dark, .dark *));
   ```

4. Click again. Now the theme switches.

### Layers test

Open `/secao-5-layers`. A badge built only from utilities (blue and rounded by default) appears in five cases, each trying to make it red and square. The page describes the expected result for each case.

## Findings so far

Checked against the compiled CSS of Tailwind 4.3.4. What depends on seeing it on screen is not listed here.

- `bg-gradient-to-r` still generates CSS: it is a deprecated alias, not a removed class.
- `bg-[--minha-cor]` (v3 syntax) compiles to `background-color:--minha-cor`, an invalid value, so it paints nothing and raises no error.
- `first:*:` and `last:*:` (v3 order) are not ignored: they compile with a different meaning, applying to the children when the element itself is first or last.
- `disabled:(...)` and a `bg-primary` built from `--primary-color` generate nothing.

## Stack

- Next.js 16.4
- React 19.3
- Tailwind CSS 4
