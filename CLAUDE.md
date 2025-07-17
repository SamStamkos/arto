# Arto - French Arts Cooperative Platform

## Project Overview
Arto is a comprehensive French arts cooperative management platform built as a modern Turborepo monorepo. The platform facilitates artist management, event programming, and community building within a cooperative structure.

## Architecture
- **Monorepo**: Turborepo v2.5.5 with pnpm workspace management
- **Frontend**: Next.js 15 with App Router and React 19
- **CMS**: Headless Sanity Studio for content management
- **Language**: TypeScript throughout the stack
- **Testing**: Vitest with jsdom for UI testing
- **Package Manager**: pnpm v9.0.0

## Applications

### coop-arto (Sanity CMS Studio)
Content management system for the arts cooperative with sophisticated schemas:
- Artist profiles with biography, discography, media kit, social links
- Event management with venue and artist associations
- Categories and color management systems
- SEO optimization fields
- Singleton pages (home, about, contact, services, programming)

**Tech Stack**: Sanity Studio v4, React 18, TypeScript, Styled Components
**Configuration**: Project ID `ffgvn1lx`, production dataset, French interface

### web (Main Next.js Application)
Primary website consuming Sanity CMS content:
- Sanity integration with custom queries and image optimization
- API routes for content revalidation via webhooks
- Testing setup with Vitest
- Uses shared UI components from @repo/ui
- Runs on port 3000 with Turbopack for development

### docs (Documentation Site)
Standard Next.js documentation application (template setup)
- Runs on port 3001
- Shares UI components with main web app

## Shared Packages

### @repo/ui
Reusable React components (Button, Card, Code) shared across applications

### @repo/eslint-config
Consistent ESLint configuration with TypeScript support, Prettier integration, and Turbo plugin

### @repo/typescript-config
Shared TypeScript configurations for base, Next.js, and React library setups

## Key Features
- **Headless Architecture**: Content managed in Sanity, consumed by Next.js
- **Real-time Updates**: Webhook-based revalidation system
- **Artist Management**: Comprehensive artist profiles with multimedia content
- **Event Programming**: Event scheduling and venue management
- **Content Publishing**: Multi-page website with CMS backend
- **Community Management**: Member profiles and services showcase

## Development Commands
- `pnpm dev`: Start all applications in development mode
- `pnpm build`: Build all applications and packages
- `pnpm lint`: Run linting across the monorepo
- `pnpm check-types`: TypeScript type checking
- `pnpm format`: Format code with Prettier

## Content Types
The Sanity schema includes:
- Artists with detailed profiles and media management
- Events with scheduling and artist associations
- Home, About, Contact, Services pages
- Programming and member management
- Categories and color systems for organization

This platform serves both as a public-facing website for the arts cooperative and an administrative tool for managing artistic content, events, and community relationships.