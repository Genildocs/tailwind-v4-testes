# Tailwind CSS v4 — test project

A small Next.js project used to test every example in my article about Tailwind CSS v4 before publishing it.

## Why this project exists

AI models often suggest Tailwind v3 code, or features that never existed in Tailwind, when you ask about v4. Some of these suggestions fail silently: the class compiles, there is no error, and the style is simply not applied.

I wrote the article from problems I hit while coding. This repository is where each example runs, so the article only shows code that actually works on a real project, not code that only looks right.

## What each test covers

Each article section has its own route under `app/testes/`, so every test runs in isolation.

| Route | Article section | What it shows |
| --- | --- | --- |
| `/testes/dark-mode` | Dark mode with a toggle button | Without `@custom-variant dark`, the `dark:` classes ignore the `dark` class on `<html>` and follow the OS theme |
| `/testes/layers` | Cascade layers | Why a custom class in `@layer components` loses to utilities, why selector specificity doesn't matter between layers, and how a layer declared after `utilities` makes one style (or a whole layout) win over another |

More tests will be added as the remaining sections are validated.

## Running it

```bash
npm install
npm run dev
```

Then open the routes above at `http://localhost:3000`.

### Dark mode test

1. Set your OS theme to **light**, otherwise the `dark:` classes are active from the start.
2. Open `/testes/dark-mode` and click the button. The `<html>` gets the `dark` class, but the colors don't change.
3. Add this line right below `@import "tailwindcss";` in `app/globals.css`:

   ```css
   @custom-variant dark (&:where(.dark, .dark *));
   ```

4. Click again. Now the theme switches.

### Layers test

Open `/testes/layers`. A badge built only from utilities (blue and rounded by default) appears in five cases, each trying to make it red and square. The page describes the expected result for each case.

## Stack

- Next.js 16.4
- React 19.3
- Tailwind CSS 4
