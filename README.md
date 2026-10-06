# Trauma Briefing & Zero Point poster

An A3 poster, live at https://wmebemtraumabriefing.netlify.app. This is a static site, and Netlify publishes the files exactly as they are in the repo. There is no build step on Netlify.

## Files

- `index.html` loads the page, the Tailwind setup, and the print and phone styles.
- `poster.jsx` is the poster content, written in JSX. **Edit this file.**
- `poster.js` is generated from `poster.jsx`, and it is the file the browser actually runs. Do not edit it by hand.

## After editing `poster.jsx`

Regenerate `poster.js` and commit both files:

```sh
./build.sh
```

This needs Node.js. It runs esbuild via `npx` to turn the JSX into plain JavaScript, so nothing has to be installed in the repo. If you forget this step, the live site keeps showing the old poster.

## Layouts

- Print, and screens 820px wide or wider, use the A3 portrait layout.
- Screens narrower than 820px (phones) stack the panels in a single column. These rules sit in a `@media screen` block in `index.html`, so printing from a phone still gives the A3 layout.
