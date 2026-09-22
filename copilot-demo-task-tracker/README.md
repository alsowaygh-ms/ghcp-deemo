# Copilot Demo: Task Tracker

A small vanilla JavaScript app for demonstrating the GitHub Copilot developer workflow. No framework, dependencies, build step, or backend.

## Run

Open [index.html](index.html) in your browser. No installation or server required.

Add a task, mark it complete with its checkbox, or delete it. Blank tasks are rejected. **Tasks are stored in memory and reset when the page is refreshed.**

## Files

```text
copilot-demo-task-tracker/
├── README.md
├── index.html
├── styles.css
└── app.js
```

- [index.html](index.html): accessible form and task list.
- [styles.css](styles.css): responsive layout and task styling.
- [app.js](app.js): task state, actions, and safe DOM rendering.

## GitHub Copilot Demo

Running the app needs only a modern browser. The collaboration demo needs a GitHub repository, repository access, and GitHub Copilot enabled in VS Code. Copilot review availability depends on your plan and organization settings.

1. **Create an Issue.** Title: "Keep tasks after a page refresh." Acceptance criteria: task text and completion survive refresh; deletions stay deleted; missing or invalid saved data does not break the app.
2. **Create a feature branch.** For example, `feature/persist-tasks`. In Copilot Chat, select Agent Mode and provide the Issue's description and acceptance criteria.
3. **Generate code.** Try: "Implement this Issue using localStorage. Keep the app dependency-free, handle unavailable storage gracefully, and update the README. Explain the changes and how to test them." Inspect the generated changes before accepting them.
4. **Verify and commit.** Exercise the acceptance criteria and the checks below. Ask Copilot to explain unfamiliar code or suggest edge cases, then commit the reviewed changes and push the branch.
5. **Open a Pull Request.** Summarize the change and test results. Include `Closes #<issue-number>` with the real Issue number to link the work.
6. **Review together.** Request Copilot code review where available and a teammate's review. Discuss suggestions in PR comments, verify proposed fixes, and push follow-up commits. Copilot review does not replace human approval.
7. **Merge.** Resolve feedback, obtain required approvals, merge the PR, and confirm the linked Issue closes when merged into the default branch.

### Future Demo Issues

These features are intentionally not implemented in this starter:

- Persist tasks with localStorage.
- Filter tasks by All, Active, and Completed.
- Edit an existing task's title.
- Add automated tests for task actions.

## Quick Checks

- Add using both Enter and the Add task button; input clears and regains focus.
- Reject empty or whitespace-only input; trim surrounding spaces.
- Complete and reopen a task; check the remaining count.
- Add duplicate names; complete or delete one without changing the other.
- Delete the last task; the empty state returns.
- Enter `<img src=x onerror=alert(1)>`; it displays as text, not HTML.
- Test long task names, a narrow mobile viewport, and keyboard-only navigation.
- Refresh; tasks reset in this starter.

With Node.js installed, check JavaScript syntax from this directory:

```sh
node --check app.js
```