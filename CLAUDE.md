# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LEGC website — an organization/club website built with Astro and Tailwind CSS.

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Package Manager:** bun
- **Language:** TypeScript

## Commands

- `bun install` — install dependencies
- `bun run dev` — start dev server
- `bun run build` — production build
- `bun run preview` — preview production build locally

## Architecture

- Astro file-based routing: pages live in `src/pages/`
- Reusable components in `src/components/`
- Layouts in `src/layouts/`
- Static assets in `public/` (served as-is: favicons, `og-image.jpg`, `robots.txt`)
- Photos and the logo live in `src/assets/images/` and are rendered with `<Image />` from `astro:assets` so they get resized and converted to WebP at build time
- Astro components (`.astro`) are preferred; use framework components (React/Svelte/etc.) only when client-side interactivity is needed
- Content collections (if used) go in `src/content/` with schemas defined in `src/content/config.ts`

## Conventions

- Use Astro's built-in `<style>` blocks with Tailwind `@apply` or inline Tailwind utility classes
- Prefer static rendering (no `client:*` directives) unless interactivity is required
- Images should use Astro's `<Image />` component for optimization
- `@astrojs/sitemap` is pinned to `~3.2.1`: newer versions require Astro 5 and break the build
