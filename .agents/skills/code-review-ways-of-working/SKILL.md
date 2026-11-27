# Skill: Our Ways of Working - Raising Code Review

Use this skill when preparing a change for review or writing a review request. In the demo, this represents team-specific process guidance that helps the AI produce review notes in the team's house style.

## Review Request Shape

Keep review requests short and specific. We prefer review notes that make the reviewer's first five minutes obvious:

- What changed.
- Why it changed.
- How to try it locally.
- What you deliberately did not change.
- Any risk or uncertainty the reviewer should look at first.

## Putty-Specific Expectations

- Include the browser path or localhost command when the UI changed.
- Mention whether the change works by opening `index.html` directly.
- Call out any state behavior, especially if scores are cleared, retained, or recalculated.
- Say when a change is intentionally a teaching simplification.
- Name the one or two flows the reviewer should try, rather than listing every feature.

## Non-Obvious Rules

- Do not ask reviewers to "check everything." Name the edge cases you care about.
- Do not hide uncertainty in vague language. If you guessed, say what you guessed.
- A screenshot is useful only if it shows the grid at a realistic mobile or narrow width.
- If a change adds indirection, explain what complexity it removes for participants.
- If the change follows one of our checked-in skills, mention that briefly so reviewers can see the AI used local context.

## Example Review Note

Changed the scorecard rendering so player totals update as each input changes. Try it by opening `index.html`, starting a 9-hole round, and entering scores for two players. I followed the design-language skill by keeping the grid as the main surface. I did not add persistence; scores still reset on refresh because this exercise is focused on DOM state.
