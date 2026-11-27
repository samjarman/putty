# Putty AI Onboarding Instructions

This is mock company-specific context for the "how to onboard your AI" demo. Treat it as the team's standing guidance for Putty work.

Putty is a tiny course app, not a production platform. Keep the code approachable enough that a participant can read the whole thing in one sitting.

## Product Intent

- Optimize for "score a casual round quickly" over account systems, persistence, or course management.
- Keep the first screen focused on round setup: player names and 9 or 18 holes.
- Treat unknown course data as unknown. Do not invent par, hole names, difficulty, distances, or venue metadata.
- Prefer visible, direct interactions over clever hidden behavior.

## Technical Boundaries

- Use plain `index.html`, `styles.css`, and `script.js`.
- Do not add a build step, package manager, framework, bundler, or generated assets for routine changes.
- Keep state in browser memory unless the task explicitly asks for storage.
- Avoid abstractions that hide the basic DOM, event, and rendering concepts the course is meant to teach.

## Review Bias

- Small, boring code is a feature here.
- A change should be easy to explain to a beginner without apologizing for complexity.
- Accessibility and mobile usability still matter, even for a course exercise.

## Demo Framing

- These instructions are deliberately opinionated so participants can see the AI adapt to local taste.
- If generic web-app advice conflicts with these instructions, prefer the Putty-specific guidance.
- When explaining a change, point to the relevant local rule rather than presenting the choice as arbitrary preference.
