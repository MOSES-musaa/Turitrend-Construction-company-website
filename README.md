Turiend Construction Limited Website

Professional website for Turiend Construction Limited, a Kenya-based construction company delivering building, renovation, infrastructure, property management, fencing, gates, car shades, and biodigester works.

The website provides a clean, professional digital presence focused on communicating Turiend's capabilities, presenting projects and insights, and making it easy for prospective clients to contact the company or request a quote.

Overview

This project is built as a modern full-stack web application using TanStack Start, TanStack Router, React, TypeScript, Vite, and Tailwind CSS.

The application combines an architectural/editorial visual language with practical lead-generation functionality.

Visitors can:

Explore Turiend's services.

Browse project categories and individual project galleries.

Read construction-related insights.

Contact Turiend through a website form.

Submit a structured six-step quote request.

Call the company directly.

Start a WhatsApp conversation.

Navigate the website across desktop, tablet, and mobile devices.

Technology Stack

Technology

Purpose

React 19

User interface

TypeScript

Type-safe development

TanStack Start

Full-stack React framework

TanStack Router

File-based routing

Vite

Development and build tooling

Tailwind CSS v4

Styling and responsive design

Lucide React

Interface icons

Zod

Server-side enquiry validation

Resend

Transactional email delivery

Nitro

Server/runtime layer

Cloudflare

Deployment/runtime target

Git

Version control

Core Features

Responsive Design

The interface is designed for:

Desktop

Tablet

Mobile

The responsive system covers the header, navigation, content grids, project galleries, forms, calls to action, and page layouts.

Mobile users also have a fixed action bar providing quick access to:

Call

WhatsApp

Get a Quote

Homepage

The homepage includes:

Hero image carousel.

Company introduction.

Who We Are section.

Services overview.

Project highlights.

Insights/content.

Calls to action.

The hero carousel supports:

Multiple slides.

Slow image zoom.

Fade transitions.

Previous/next controls.

Progress indicators.

Pause-on-hover behavior.

Reduced-motion support.

Services

Services are maintained through a data-driven architecture.

Current service areas:

Home Improvements & Renovations

Building Works

Fences, Gates & Car Shades

Biodigester Works

Road, Electrical & Water Works

Project & Property Management

Individual services can contain:

Summary

Introduction

Scope/inclusions

Typical client needs

Delivery approach

FAQs

Related services

Supporting imagery

Projects

Projects use structured metadata and separate image mappings.

Current project categories include:

Biodigester

Building

Car Shades & Gates

Fences

Home Renovations

Infrastructure

Individual project pages support:

Project information.

Category information.

Multiple project images.

Responsive galleries.

Project navigation.

Project images are stored under:

public/images/projects/

Project metadata is maintained in:

src/lib/projects.ts

Project image mappings are maintained in:

src/lib/project-image.ts

Insights

The Insights section provides construction-related editorial content.

Current topics include:

Kenya's changing construction landscape.

Why proper planning matters before construction begins.

Sustainable residential construction.

Insight data is maintained in:

src/lib/insights.ts

Insight images are stored under:

public/images/insights/

The architecture uses dynamic routes, allowing additional insights to be added without rebuilding the page structure.

Contact & Quote System

The website has two verified enquiry channels:

/contact
/quote

Both use a shared server-side submission pipeline.

Contact Form

The contact form collects:

Name

Phone

Optional email

Project/message details

Submission flow:

Contact Form
     ↓
TanStack Server Function
     ↓
Zod Validation
     ↓
Resend API
     ↓
Configured Email Inbox

The interface provides:

Sending state.

Success state.

Error state.

WhatsApp follow-up.

The visitor does not need an email application installed.

Request Quote

The quote experience uses a six-step guided workflow:

01  Service
02  Location
03  Details
04  Stage
05  Contact
06  Review

The form collects:

Service

Project location

Project details

Project stage

Client name

Phone number

Email address

The submission pipeline is:

Quote Form
     ↓
TanStack Server Function
     ↓
Zod Validation
     ↓
Resend API
     ↓
Configured Email Inbox

The quote form includes:

Step validation.

Progress indication.

Back/Continue navigation.

Review summary.

Sending state.

Error handling.

Successful submission confirmation.

WhatsApp follow-up.

Both enquiry workflows have been tested end-to-end during development.

Project Structure

A simplified project structure is:

Turitrend_website/
│
├── public/
│   └── images/
│       ├── projects/
│       └── insights/
│
├── src/
│   ├── components/
│   │   └── site/
│   │       ├── cta.tsx
│   │       ├── header.tsx
│   │       ├── page-hero.tsx
│   │       ├── project-gallery.tsx
│   │       ├── reveal.tsx
│   │       ├── section-heading.tsx
│   │       └── whatsapp-button.tsx
│   │
│   ├── lib/
│   │   ├── analytics.ts
│   │   ├── company.ts
│   │   ├── email.server.ts
│   │   ├── enquiry.functions.ts
│   │   ├── enquiry-schema.ts
│   │   ├── insights.ts
│   │   ├── project-image.ts
│   │   ├── projects.ts
│   │   ├── placeholders.ts
│   │   └── utils.ts
│   │
│   ├── routes/
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── quote.tsx
│   │   ├── services.tsx
│   │   ├── services.index.tsx
│   │   ├── services.$slug.tsx
│   │   ├── projects.tsx
│   │   ├── projects.index.tsx
│   │   ├── projects.$slug.tsx
│   │   ├── insights.tsx
│   │   ├── insights.index.tsx
│   │   └── insights.$slug.tsx
│   │
│   ├── styles.css
│   ├── routeTree.gen.ts
│   ├── server.ts
│   └── start.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md

src/routeTree.gen.ts is generated by TanStack Router and should not be manually edited.

Application Architecture

The project follows a separation-of-concerns approach.

Routes

Routes are responsible for:

Page composition.

Route-specific metadata.

User interaction.

Connecting UI to shared application logic.

Components

Reusable site components are located under:

src/components/site/

Examples include:

Header

CTA buttons

Page heroes

Section headings

Project galleries

WhatsApp CTAs

Reveal/motion components

Data

Reusable company and content information is kept separate from page components.

Examples:

src/lib/company.ts
src/lib/projects.ts
src/lib/insights.ts

This allows content updates without rewriting page presentation logic.

Server Functions

Server-side operations are separated from client presentation.

src/lib/enquiry.functions.ts

handles enquiry submission, while:

src/lib/email.server.ts

contains email delivery logic.

Validation is defined in:

src/lib/enquiry-schema.ts

This keeps email credentials and server-only logic out of client-facing UI code.

Environment Configuration

Environment-specific secrets are stored in a local .env file.

Example:

RESEND_API_KEY=re_your_resend_api_key
EMAIL_FROM=Turiend Website <onboarding@resend.dev>
EMAIL_TO=your-recipient@example.com

Security

Never commit .env or expose the Resend API key publicly.

The repository ignores environment files using:

.env
.env.*
!.env.example

For development/testing, Resend's testing sender can be used:

onboarding@resend.dev

For production, the sender should be changed to an address on a domain verified in Resend.

Local Development

Prerequisites

Install:

Node.js

npm

Git

Install dependencies

npm install

Configure environment variables

Create:

.env

in the project root and add the required Resend configuration.

Start the development server

npm run dev

Use the local URL displayed by Vite in the terminal.

Available Commands

Development

npm run dev

Starts the development server.

Development build

npm run build:dev

Runs the development-oriented build.

Production build

npm run build

Creates the deployment build.

Lint

npm run lint

Checks the project for linting and code-quality issues.

Formatting

npm run format

Runs the project's formatting workflow.

Preview

npm run preview

Previews the built application locally.

Content Management

The current project uses a code-driven content architecture rather than a CMS.

Company Information

Update:

src/lib/company.ts

This contains core information such as:

Company name

Phone

WhatsApp number

Email

Location

Postal address

Services

Project stages

Quote service options

Projects

Update project metadata in:

src/lib/projects.ts

Add project images under:

public/images/projects/

Maintain the corresponding image mapping in:

src/lib/project-image.ts

Insights

Update:

src/lib/insights.ts

and add supporting images under:

public/images/insights/

Services

Service definitions are maintained in:

src/lib/company.ts

Service imagery is resolved separately through the site's image configuration.

Design System

The visual direction is intentionally restrained, professional, and architectural.

The interface uses:

Architectural/editorial layouts.

Strong typography.

Generous spacing.

Structured grids.

Technical labels and numbering.

Subtle motion.

Project-focused imagery.

Clear calls to action.

Motion is used to reinforce hierarchy rather than distract from content.

Reduced-motion preferences are respected where animation is used.

Navigation

The site includes:

Desktop navigation.

Mobile navigation.

Sticky header behavior.

Scroll-aware header sizing.

Mobile bottom action bar.

The mobile navigation is positioned directly below the header to maintain predictable interaction and prevent content overlap.

Analytics

A lightweight tracking layer is located at:

src/lib/analytics.ts

Tracked interactions include:

Quote started.

Quote step completed.

Quote submitted.

Contact submitted.

Phone clicked.

Email clicked.

WhatsApp clicked.

Keeping tracking separate from presentation allows analytics implementation to evolve without tightly coupling it to page components.

Security Considerations

Current security measures include:

Server-side validation using Zod.

Server-only email implementation.

Environment variables for secrets.

.env excluded from version control.

HTML escaping of user-submitted email content.

Generic public-facing submission errors.

No API credentials embedded in client-side components.

Production hardening

Before or during production deployment, the public enquiry endpoints should receive anti-spam and rate-limiting protection.

Cloudflare Turnstile is a suitable option for the current deployment environment.

Production Readiness

The core website and enquiry workflow have been locally tested.

Verified areas include:

Contact form submission.

Quote form submission.

Resend email delivery.

Success states.

Error handling.

Linting.

Production build.

Local development server.

Primary navigation and site routes.

The following remain production-finalization tasks:

Verify a Turiend-owned domain in Resend.

Replace onboarding@resend.dev with the verified production sender.

Configure production secrets through the deployment environment.

Confirm Resend/runtime compatibility in the production Cloudflare environment.

Add anti-spam/rate limiting.

Perform final production smoke testing.

Verify the production domain, HTTPS, redirects, metadata, and social sharing.

Replace any remaining placeholder or illustrative imagery with final approved company imagery where applicable.

Deployment

The project is configured around a Vite/TanStack Start/Nitro deployment workflow targeting Cloudflare.

Before deployment:

npm run lint
npm run build

Both commands should complete successfully.

Production secrets should be configured through the hosting/deployment environment rather than committed to the repository.

The local .env file is intended for development only.

Development Principles

Separation of concerns

Keep:

UI

Content/data

Server functions

Validation

Email delivery

Analytics

in their respective layers.

Reusable components

Common interface patterns should be implemented once and reused rather than duplicated.

Data-driven content

Projects, services, and insights should be updated through their data sources wherever possible.

Minimal unnecessary changes

Existing working functionality should not be rewritten without a clear reason.

Validate before deployment

Before committing or deploying:

npm run lint
npm run build

Then perform a focused browser test of any feature that has changed.

Recommended Git Workflow

Before committing:

git status

Review changed files carefully.

Then run:

npm run lint
npm run build

After confirming the application works locally:

git add .
git commit -m "Prepare Turiend website for production"

Push to the configured remote repository when ready.

Never use git add .env.

Future Improvements

Potential future enhancements include:

Cloudflare Turnstile anti-spam protection.

Server-side rate limiting.

Verified Turiend email domain through Resend.

Reply-To handling for client enquiries.

Plain-text email fallback.

Production analytics integration.

CMS or admin-managed content if required.

Additional project case studies.

Image optimization and further performance tuning.

Expanded SEO and structured data.

Automated enquiry management or CRM integration.

Company

Turiend Construction Limited

From concept to creation

Location: Nairobi, Kenya

Phone: +254 727 233 041

Email: turiendconstruction@gmail.com

Project Status

Status: Core website and enquiry submission system implemented and locally verified.

The Contact and Request Quote email pipelines have been tested end-to-end using Resend.

Production deployment configuration and final hardening remain separate finalization steps.

License

This project is proprietary software developed for Turiend Construction Limited.

Unless explicitly authorized, the source code, design system, branding, imagery, content, and other project assets should not be redistributed, resold, or reused for unrelated commercial projects.
