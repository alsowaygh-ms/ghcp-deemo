# GitHub Copilot Demo: Task Tracker

A small, dependency-free task tracker for demonstrating a GitHub Copilot
development workflow. The app uses vanilla HTML, CSS, and JavaScript, with no
framework, build step, or backend.

## Quick start

Open [`copilot-demo-task-tracker/index.html`](copilot-demo-task-tracker/index.html)
in a modern browser. No installation or local server is required.

You can add tasks, mark them complete, and delete them. Tasks are stored only
in memory, so they reset when the page is refreshed.

## Project structure

```text
.
├── .github/
│   └── copilot-instructions.md
└── copilot-demo-task-tracker/
    ├── README.md
    ├── app.js
    ├── index.html
    └── styles.css
```

- `index.html` contains the accessible task form and task list.
- `styles.css` provides the responsive layout and visual styling.
- `app.js` manages task state, actions, validation, and safe DOM rendering.
- `copilot-demo-task-tracker/README.md` contains the detailed Copilot demo
  workflow and suggested follow-up issues.

## Development

With Node.js installed, check the JavaScript syntax from the app directory:

```sh
cd copilot-demo-task-tracker
node --check app.js
```

## Future improvements

The starter intentionally leaves these features for future demo issues:

- Persist tasks with `localStorage`.
- Filter tasks by all, active, and completed status.
- Edit existing task titles.
- Add automated tests for task actions.
