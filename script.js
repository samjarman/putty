const setupPanel = document.querySelector("#setupPanel");
const scorecardPanel = document.querySelector("#scorecardPanel");
const setupForm = document.querySelector("#setupForm");
const playerList = document.querySelector("#playerList");
const addPlayerButton = document.querySelector("#addPlayerButton");
const removePlayerButton = document.querySelector("#removePlayerButton");
const editSetupButton = document.querySelector("#editSetupButton");
const clearScoresButton = document.querySelector("#clearScoresButton");
const scorecardHead = document.querySelector("#scorecardHead");
const scorecardBody = document.querySelector("#scorecardBody");
const scorecardFoot = document.querySelector("#scorecardFoot");
const roundSummary = document.querySelector("#roundSummary");

const maxPlayers = 6;
const minPlayers = 1;

let round = {
  holeCount: 9,
  players: ["Player 1", "Player 2"],
  scores: {},
};

addPlayerButton.addEventListener("click", () => {
  const nextNumber = playerList.querySelectorAll("label").length + 1;

  if (nextNumber > maxPlayers) {
    return;
  }

  const label = document.createElement("label");
  label.innerHTML = `
    <span>Player ${nextNumber}</span>
    <input type="text" name="player" value="Player ${nextNumber}" autocomplete="off">
  `;
  playerList.append(label);
  updatePlayerButtons();
  label.querySelector("input").focus();
});

removePlayerButton.addEventListener("click", () => {
  const labels = playerList.querySelectorAll("label");

  if (labels.length <= minPlayers) {
    return;
  }

  labels[labels.length - 1].remove();
  updatePlayerButtons();
});

setupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(setupForm);
  const rawPlayers = formData.getAll("player");
  const players = rawPlayers
    .map((name, index) => name.trim() || `Player ${index + 1}`)
    .slice(0, maxPlayers);

  round = {
    holeCount: Number(formData.get("holeCount")),
    players,
    scores: {},
  };

  setupPanel.classList.add("hidden");
  scorecardPanel.classList.remove("hidden");
  renderScorecard();
});

editSetupButton.addEventListener("click", () => {
  scorecardPanel.classList.add("hidden");
  setupPanel.classList.remove("hidden");
});

clearScoresButton.addEventListener("click", () => {
  round.scores = {};
  renderScorecard();
});

function updatePlayerButtons() {
  const playerCount = playerList.querySelectorAll("label").length;
  addPlayerButton.disabled = playerCount >= maxPlayers;
  removePlayerButton.disabled = playerCount <= minPlayers;
}

function renderScorecard() {
  scorecardHead.innerHTML = "";
  scorecardBody.innerHTML = "";
  scorecardFoot.innerHTML = "";

  const headerRow = document.createElement("tr");
  headerRow.append(createHeaderCell("Hole"));

  round.players.forEach((playerName) => {
    headerRow.append(createHeaderCell(playerName));
  });

  scorecardHead.append(headerRow);

  for (let holeIndex = 0; holeIndex < round.holeCount; holeIndex += 1) {
    const holeNumber = holeIndex + 1;
    const row = document.createElement("tr");
    row.append(createCell(holeNumber, "hole-number"));

    round.players.forEach((playerName, playerIndex) => {
      const cell = document.createElement("td");
      const input = document.createElement("input");
      const scoreKey = getScoreKey(holeNumber, playerIndex);

      input.type = "number";
      input.min = "1";
      input.max = "20";
      input.inputMode = "numeric";
      input.value = round.scores[scoreKey] || "";
      input.setAttribute("aria-label", `${playerName}, hole ${holeNumber}`);
      input.addEventListener("input", () => {
        if (input.value === "") {
          delete round.scores[scoreKey];
        } else {
          round.scores[scoreKey] = Number(input.value);
        }

        renderTotals();
      });

      cell.append(input);
      row.append(cell);
    });

    scorecardBody.append(row);
  }

  const totalRow = document.createElement("tr");
  totalRow.append(createCell("Total", "total-label"));

  round.players.forEach(() => {
    totalRow.append(createCell("0", "total-value player-total"));
  });

  scorecardFoot.append(totalRow);
  renderTotals();
}

function renderTotals() {
  const totals = round.players.map((_, playerIndex) => {
    let total = 0;

    for (let holeNumber = 1; holeNumber <= round.holeCount; holeNumber += 1) {
      total += round.scores[getScoreKey(holeNumber, playerIndex)] || 0;
    }

    return total;
  });

  const lowestCompletedScore = Math.min(...totals.filter((score) => score > 0));

  document.querySelectorAll(".player-total").forEach((cell, index) => {
    const total = totals[index];
    cell.textContent = total;
    cell.classList.toggle("leader", total > 0 && total === lowestCompletedScore);
  });

  roundSummary.innerHTML = "";
  roundSummary.append(createSummaryPill(`${round.holeCount} holes`));
  roundSummary.append(createSummaryPill(`${round.players.length} players`));

  round.players.forEach((playerName, index) => {
    const suffix = totals[index] > 0 && totals[index] === lowestCompletedScore ? " - leading" : "";
    roundSummary.append(createSummaryPill(`${playerName}: ${totals[index]}${suffix}`));
  });
}

function getScoreKey(holeNumber, playerIndex) {
  return `${holeNumber}-${playerIndex}`;
}

function createHeaderCell(text) {
  const cell = document.createElement("th");
  cell.scope = "col";
  cell.textContent = text;
  return cell;
}

function createCell(text, className) {
  const cell = document.createElement("td");
  cell.textContent = text;

  if (className) {
    cell.className = className;
  }

  return cell;
}

function createSummaryPill(text) {
  const pill = document.createElement("span");
  pill.className = "summary-pill";
  pill.textContent = text;
  return pill;
}

updatePlayerButtons();
