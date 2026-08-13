---
description: Use Bun instead of Node.js, npm, pnpm, or vite.
globs: "*.ts, *.tsx, *.html, *.css, *.js, *.jsx, package.json"
alwaysApply: false
---

Default to using Bun instead of Node.js.

- Use `bun <file>` instead of `node <file>` or `ts-node <file>`
- Use `bun test` instead of `jest` or `vitest`
- Use `bun build <file.html|file.ts|file.css>` instead of `webpack` or `esbuild`
- Use `bun install` instead of `npm install` or `yarn install` or `pnpm install`
- Use `bun run <script>` instead of `npm run <script>` or `yarn run <script>` or `pnpm run <script>`
- Use `bunx <package> <command>` instead of `npx <package> <command>`
- Bun automatically loads .env, so don't use dotenv.

## APIs

- `Bun.serve()` supports WebSockets, HTTPS, and routes. Don't use `express`.
- `bun:sqlite` for SQLite. Don't use `better-sqlite3`.
- `Bun.redis` for Redis. Don't use `ioredis`.
- `Bun.sql` for Postgres. Don't use `pg` or `postgres.js`.
- `WebSocket` is built-in. Don't use `ws`.
- Prefer `Bun.file` over `node:fs`'s readFile/writeFile
- Bun.$`ls` instead of execa.

## Testing

Use `bun test` to run tests.

```ts#index.test.ts
import { test, expect } from "bun:test";

test("hello world", () => {
  expect(1).toBe(1);
});
```

## Frontend

Use HTML imports with `Bun.serve()`. Don't use `vite`. HTML imports fully support React, CSS, Tailwind.

Server:

```ts#index.ts
import index from "./index.html"

Bun.serve({
  routes: {
    "/": index,
    "/api/users/:id": {
      GET: (req) => {
        return new Response(JSON.stringify({ id: req.params.id }));
      },
    },
  },
  // optional websocket support
  websocket: {
    open: (ws) => {
      ws.send("Hello, world!");
    },
    message: (ws, message) => {
      ws.send(message);
    },
    close: (ws) => {
      // handle close
    }
  },
  development: {
    hmr: true,
    console: true,
  }
})
```

HTML files can import .tsx, .jsx or .js files directly and Bun's bundler will transpile & bundle automatically. `<link>` tags can point to stylesheets and Bun's CSS bundler will bundle.

```html#index.html
<html>
  <body>
    <h1>Hello, world!</h1>
    <script type="module" src="./frontend.tsx"></script>
  </body>
</html>
```

With the following `frontend.tsx`:

```tsx#frontend.tsx
import React from "react";
import { createRoot } from "react-dom/client";

// import .css files directly and it works
import './index.css';

const root = createRoot(document.body);

export default function Frontend() {
  return <h1>Hello, world!</h1>;
}

root.render(<Frontend />);
```

Then, run index.ts

```sh
bun --hot ./index.ts
```

For more information, read the Bun API docs in `node_modules/bun-types/docs/**.mdx`.

You are an expert frontend engineer specializing in pixel-perfect Figma-to-code implementation.

Your task is to build an exact replica of the Figma design below:

Figma design:
Eunisell Production Web Project Copy

Primary Objective

Recreate the design spec-for-spec and as close to pixel-perfect as technically possible.

Do NOT interpret the design creatively. Do NOT redesign, simplify, modernize, or substitute components based on your own preferences.

The Figma design is the source of truth.

Before writing implementation code, inspect the Figma design thoroughly and identify:

Page structure

Layout hierarchy

Frames and sections

Exact spacing

Widths and heights

Typography

Font sizes

Font weights

Line heights

Letter spacing

Colors

Borders

Border radii

Shadows

Backgrounds

Icons

Images

Responsive behavior

Alignment

Component states

Repeated components

Grid structures

Content hierarchy

If something can be determined from Figma, use the Figma value rather than guessing.

1. Pixel-Perfect Layout

The implementation should match the Figma design as closely as possible.

Pay particular attention to:

Container widths

Maximum widths

Section heights

Horizontal and vertical spacing

Padding

Margins

Gaps

Alignment

Text positioning

Image dimensions

Card dimensions

Border radii

Shadows

Element proportions

Do not approximate values when the exact value can be determined from Figma.

For example, if Figma specifies 24px spacing, use 24px rather than something visually similar such as 20px or 1.5rem.

2. Prefer CSS Grid Over Flexbox Where Appropriate

Use CSS Grid as the default layout mechanism when the design represents a two-dimensional layout.

Prefer Grid for:

Multi-column sections

Card layouts

Feature grids

Dashboard-like structures

Content/image split layouts

Sections where both rows and columns matter

Layouts where explicit column sizing is apparent in Figma

Use Flexbox for:

Navigation bars

Horizontal button groups

Icon + text combinations

Simple vertical stacks

Small one-dimensional alignment problems

Do not force everything into Flexbox.

The implementation should reflect the actual layout structure represented by the Figma design.

3. Tailwind CSS

Use Tailwind CSS for styling wherever possible.

Important dimension rule:

If Tailwind already has an equivalent utility/value, use the existing Tailwind class.

For example:

text-sm instead of text-[14px]

text-base instead of text-[16px]

p-6 instead of p-[24px]

gap-4 instead of gap-[16px]

rounded-lg instead of rounded-[8px]

w-full instead of w-[100%]

Only use arbitrary/custom values when Tailwind does not provide an appropriate equivalent.

For example:

text-[13px]
w-[347px]
gap-[18px]


is acceptable when the design genuinely requires those exact values and there is no suitable Tailwind utility.

Do not unnecessarily fill the codebase with arbitrary Tailwind values.

4. Theme All Colors Through index.css

Do NOT scatter raw colors throughout the components.

First inspect the existing index.css.

Create/use CSS variables for the design's color system in index.css.

For example:

:root {
  --color-primary: ...;
  --color-secondary: ...;
  --color-background: ...;
  --color-foreground: ...;
  --color-muted: ...;
  --color-border: ...;
}


Use the actual colors extracted from Figma.

Then expose/use those variables through Tailwind so components consume the theme rather than hardcoded colors.

For example, prefer:

bg-primary
text-foreground
border-border


or the project's existing equivalent theme utilities.

Avoid:

bg-[#123456]
text-[#ffffff]
border-[#e5e5e5]


unless the color is genuinely a one-off value that does not belong in the theme.

Color requirements

Identify and theme:

Primary colors

Secondary colors

Accent colors

Background colors

Surface/card colors

Text colors

Muted text colors

Border colors

Hover colors

Active colors

Disabled colors

Success/warning/error colors where applicable

Any recurring brand colors

If the project already has a theme/token system, extend it instead of creating a competing system.

5. Typography

Typography must match Figma exactly.

Inspect:

Font family

Font size

Font weight

Line height

Letter spacing

Text transform

Text alignment

Use existing Tailwind typography utilities wherever they match.

Only use arbitrary values where necessary.

Do not substitute a different font unless the required font is genuinely unavailable.

If the font needs to be imported or configured, do so properly.

6. Images and Assets

Use the exact assets from the project/Figma where available.

Do not replace an existing asset with:

An emoji

A random icon

A placeholder

A similar-looking image

An arbitrary icon library equivalent

If an icon is available as an SVG or project asset, use it.

If an image exists in the repository, reuse it rather than creating a duplicate.

Pay attention to:

Aspect ratio

Object-fit

Object-position

Image cropping

Border radius

Dimensions

7. Component Architecture

Create reusable components where the Figma design clearly contains repeated UI patterns.

Examples:

Header

Navigation

Footer

Buttons

Cards

Feature sections

Product/category cards

Form elements

Section headers

Repeated content blocks

However, do not over-engineer the implementation.

Do not create abstractions merely for the sake of abstraction.

A component should be reusable because the design actually contains a repeated pattern or because the component represents a meaningful UI boundary.

8. Responsive Design

Do not only reproduce the desktop screenshot.

Analyze the Figma structure and implement sensible responsive behavior based on the design.

Pay particular attention to:

Desktop → tablet transitions

Tablet → mobile transitions

Grid column changes

Navigation behavior

Typography scaling

Image resizing

Content stacking

Section spacing

Container widths

Mobile padding

Do not introduce arbitrary responsive behavior that contradicts the design.

If multiple Figma frames/pages exist for different breakpoints, use them as the source of truth.

9. Existing Project

Before implementing anything:

Inspect the existing project structure.

Identify the framework and build setup.

Inspect index.css.

Inspect the Tailwind configuration.

Inspect existing components.

Inspect existing assets.

Identify existing design tokens/theme variables.

Reuse existing infrastructure wherever possible.

Do not unnecessarily rewrite or replace existing project configuration.

Do not introduce a new UI framework if the project already has an established approach.

10. Figma Inspection Process

Before coding, inspect the Figma design systematically.

For each major section, determine:

Section
├── Container
├── Layout
├── Width / Height
├── Padding
├── Gap
├── Typography
├── Colors
├── Borders
├── Radius
├── Shadows
├── Assets
└── Responsive behavior


Pay special attention to nested frames because their dimensions and spacing often determine the final pixel-perfect result.

Do not simply look at the overall screenshot and approximate the implementation.

11. Validation

After implementation, visually compare the result against the Figma design.

Check systematically:

Layout

 Overall page width

 Container positioning

 Section heights

 Grid columns

 Element alignment

 Padding

 Margins

 Gaps

Typography

 Font family

 Font size

 Font weight

 Line height

 Letter spacing

 Text wrapping

Visuals

 Colors

 Images

 Icons

 Borders

 Border radius

 Shadows

 Backgrounds

Responsive

 Desktop

 Tablet

 Mobile

Fix discrepancies rather than accepting "close enough".

12. Important Rules

Follow these rules strictly:

Figma is the source of truth.

Build spec-for-spec, not approximately.

Prefer CSS Grid for two-dimensional layouts.

Use Flexbox for one-dimensional layouts.

Use Tailwind CSS.

If Tailwind has an existing utility, use it.

Only use arbitrary Tailwind values when an appropriate utility does not exist.

Centralize recurring colors in index.css.

Use the theme variables through Tailwind.

Avoid hardcoded recurring colors inside components.

Reuse existing assets.

Reuse existing project infrastructure.

Do not redesign the UI.

Do not simplify the Figma design.

Do not substitute fonts, icons, colors, spacing, or dimensions without a technical reason.

Do not use arbitrary values when an equivalent Tailwind class exists.

Do not use Flexbox everywhere when Grid is more appropriate.

Do not finish until you have visually validated the implementation against Figma.

Most important

Do not make design decisions based on what you think looks better. Reproduce what Figma actually specifies.

When there is a conflict between your implementation preference and the Figma design, Figma wins.