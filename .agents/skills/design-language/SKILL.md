# Skill: Our Design Language

Use this skill when changing Putty's layout, UI copy, controls, or visual styling. In the demo, this represents the kind of house style a company would check in so the AI stops producing generic UI.

## Principles

- Putty should feel like a clean paper scorecard that happens to be interactive.
- The app should look like a useful course exercise, not a startup landing page.
- The grid is the product. Do not bury it inside decorative panels or marketing sections.
- Color should support scanning: quiet greens for structure, warm yellow for primary action, red only for destructive actions.
- Keep corners modest. Use `6px` to `8px` radii for controls and panels.
- Prefer obvious labels over icons unless the icon is universally understood.

## Non-Obvious Rules

- Do not use course imagery unless it helps the scorekeeping task. A scenic golf background makes the grid harder to read.
- Do not make player columns visually compete with the hole column. The hole number is the row anchor.
- Keep score inputs large enough for thumbs, but do not let them resize the table when values change.
- Use uppercase only for compact metadata like table headers and eyebrow labels.
- Avoid fake precision. If Putty does not know par or course details, the UI should not imply that it does.
- Do not add empty brand polish just because the app has a name. "Putty" should appear as product identity, not decoration.

## Checklist

- Can a player update a score outdoors on a phone without zooming?
- Does the table still read clearly with six players?
- Does the primary action describe the next real step?
- Does any text explain the UI instead of simply labeling it?
- Would this still feel like our app if the logo and name were hidden?
