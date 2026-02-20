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
- Static assets in `public/`
- Astro components (`.astro`) are preferred; use framework components (React/Svelte/etc.) only when client-side interactivity is needed
- Content collections (if used) go in `src/content/` with schemas defined in `src/content/config.ts`

## Conventions

- Use Astro's built-in `<style>` blocks with Tailwind `@apply` or inline Tailwind utility classes
- Prefer static rendering (no `client:*` directives) unless interactivity is required
- Images should use Astro's `<Image />` component for optimization
