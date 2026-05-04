# Order The Food

A mobile-styled burger ordering app. Browse a menu of items, add what you want to your order, see a running total, and check out with a payment modal. Built as a vanilla JavaScript exercise focused on DOM manipulation, event delegation, and managing app state without a framework.

![Order The Food demo](./docs/mobileorderapp)

## Why I built it

I wanted to practice managing application state in a real-world flow — cart, totals, transitions between states (browsing → ordering → paying → confirmation) — without reaching for React. Doing it with vanilla JS forced me to think clearly about how data and the DOM stay in sync, since nothing happens automatically.

## Features

- Menu rendered dynamically from a JavaScript data array
- Add items to your order with a single tap
- Remove individual items from the order
- Running total updates automatically as items are added or removed
- Payment modal collects name and card details before completing the order
- Personalized thank-you message after order submission
- Mobile-first layout

## Tech stack

- **Vanilla JavaScript** (ES modules — `import`/`export`)
- **HTML / CSS** for layout and mobile styling
- **DOM event delegation** — a single document-level click listener handles all dynamic buttons

## Running locally

```bash
git clone https://github.com/Clevert3ch/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

Open `index.html` in a browser. No build step required.

For best results — especially since this uses ES modules — serve it through a local web server rather than opening the file directly:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## What I learned

- **Event delegation** is genuinely useful: instead of attaching click listeners to every "+" and "remove" button (which would need re-binding every time the order updates), one listener on `document` handles all of them via `e.target.closest()`. Much less code, no leak risk from forgotten listeners.
- **`innerHTML` rewrites are destructive** — every time I re-render the order, the button references inside it are gone. Event delegation sidesteps that problem by listening at a level that survives re-renders.
- **Why frameworks exist** — building this made me appreciate what React's reconciler does for free. With vanilla JS, every state change means rebuilding HTML strings and replacing DOM subtrees by hand.
- **ES modules in the browser** require either a build step or a real server (the `file://` protocol blocks them with CORS errors). Worth knowing before you try to demo it from a double-clicked HTML file.
