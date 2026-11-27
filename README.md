# Putty

Putty is a small static mini golf scorecard app for a course exercise. It uses plain HTML, CSS, and JavaScript with no build step.

## Run it

Open `index.html` in a browser.

If you prefer localhost and have Python installed, run this from the project folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Features

- Add 1 to 6 players before the round starts.
- Choose a 9-hole or 18-hole scorecard.
- Enter each player's score in a grid-like table.
- Player totals update automatically.
- The lowest non-zero total is highlighted.
- Works on mobile by keeping the scorecard scrollable horizontally.
