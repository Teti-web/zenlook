# zenlook

A minimalist wellness/beauty landing page with a calm, distraction-free UX and typography-led visual design. Built as a fully CMS-driven, animated marketing site — practicing the same architecture pattern used for production multi-region brand sites: a headless CMS feeding a block-based page builder over GraphQL.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- - **Apollo Client** + **GraphQL** — content fetched from a headless CMS as a dynamic list of typed content blocks
  - - **Framer Motion** + **smooth-scrollbar** — scroll-driven animation and smooth-scroll behavior
    - - **Tailwind CSS v4**
      - - **Storybook** with the **a11y addon** — component-level accessibility checks during development
        - - **Vitest** + **Playwright** — unit and browser testing
          - - **Husky** + **ESLint** + **Prettier** (with import/attribute-sorting plugins) — enforced code quality and consistent formatting on commit
           
            - ## Architecture
           
            - Components follow atomic design — `atoms/`, `molecules/`, `organisms/`, `blocks/`, and `templates/` — so page sections map directly to CMS content blocks rather than being hardcoded.
           
            - The home page is rendered from a single GraphQL query (`GetHomePage`) that returns a typed union of content blocks — features, an auto-rotating image slider, an appointment/booking section with stylist profiles and ratings, a service tabs section, and a reviews section — so the page layout and content are fully editor-controlled rather than hardcoded in the frontend.
           
            - ## What this project practices
           
            - - Consuming a headless CMS's dynamic-zone content model on the frontend without hardcoding page structure
              - - Building an atomic, reusable component library driven by typed GraphQL fragments
                - - Layering animation and smooth-scroll on top of a performance-conscious Next.js build
                  - - Treating accessibility and testing as first-class — Storybook a11y checks and Playwright/Vitest coverage from the start, not bolted on later
                   
                    - ## Local development
                   
                    - ```bash
                      npm install
                      npm run dev            # local dev server (Turbopack)
                      npm run storybook      # component explorer
                      npm run lint            # prettier + eslint --fix
                      ```
                      
