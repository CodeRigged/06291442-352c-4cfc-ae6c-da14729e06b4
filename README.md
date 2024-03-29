# Blinkist Coding Challenge - AB-Testing

This app was created during a coding challenge for  Blinkist. It features client-side AB-Testing.

## Used technologies

- Vue
- VueUse 
- Vuetify
- Nuxt
- Typescript

> Also uses ESLint

## Limitations

This is only a client-side application, thus it comes with limitations.

1. **Security**: Vulnerable to code exposure and attacks like XSS.
2. **Performance**: Relies on user's device and browser capabilities.
3. **SEO**: Challenges with search engine indexing of JavaScript-rendered content.
4. **State Management**: Complexity increases with application size.
5. **Data Privacy**: Risks associated with storing sensitive data client-side.

## Solutions

Using a state-management library like Vuex or Pinia and connecting the app to an API to handle data would already enable major improvements.

Since the purpose of the challenge was to do AB-Testing, hooking it up with a tool to analyse the data, like posthog or google-analytics, would be practical.

An argument could be made to make the components from every variation more modular. Moving types and interfaces to separate files can also benefit the overall structure.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Notes

Some of the comments in the code were generated by Codeium.
