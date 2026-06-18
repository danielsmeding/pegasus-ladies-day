"use strict";

const STORAGE_KEY = "pegasus.ladies-day.black.v1";
const TRACKER_KEY = "pegasus.ladies-day.tracker.v1";
const LUCKY_KEY = "pegasus.ladies-day.lucky.v1";
const SMART_ALLOCATIONS = [5, 25, 30, 45, 40, 25, 5];
const DEFAULT_LAST_CHECKED = "2026-06-18";
const DEFAULT_EACH_WAY = {
  fraction: 0.2,
  places: null,
  note: "Verify bookmaker place terms before betting"
};
const LUCKY_CODE = "EW";
const LUCKY_EACH_WAY = DEFAULT_EACH_WAY;

const races = [
  {
    time: "14:30",
    title: "Chesham Stakes",
    meta: "Listed - 7f - 2yo - Good to Firm",
    risk: "2yo",
    main: "Sea Venture",
    cover: "Aix La Chapelle",
    split: [3, 2],
    odds: ["11/2", "13/8"],
    codes: ["EW", "W"],
    bet: "Sea Venture each-way; Aix La Chapelle win saver only if price holds.",
    rationale: "Joe Norris/GYTO and Guardian both moved the value angle to Sea Venture, while Aix La Chapelle remains the obvious short-price Aidan O'Brien danger.",
    insight: "Juvenile opener, so do not over-stake. Sea Venture is the better price/value play; Aix is cover against the favourite simply being too good.",
    tipSignal: "Current morning alignment: GYTO and Guardian select Sea Venture. Matt Chapman sides with Aix La Chapelle; Times prefers Nola Soul, so keep stake small.",
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "low",
    variance: "high",
    sourceQuality: "medium",
    reasonToAvoid: "Juvenile form is thin and market hype can be unreliable.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "Sea Venture each-way at 11/2" },
      { label: "Guardian / Sun / Times", checkedAt: DEFAULT_LAST_CHECKED, note: "Sea Venture, Aix La Chapelle and Nola Soul cross-check" }
    ]
  },
  {
    time: "15:05",
    title: "King George V Stakes",
    meta: "Heritage Handicap - 1m4f - 3yo - Good to Firm",
    risk: "handicap",
    main: "Enceladus",
    cover: "Heyzoom",
    extra: "Into The Light",
    split: [3, 2],
    odds: ["23/2", "10/1", "8/1"],
    codes: ["EW", "EW", "EW"],
    bet: "Each-way Enceladus; Heyzoom cover. Add Into The Light only in Smart 175.",
    rationale: "GYTO keeps Enceladus as the price play, while Guardian and Matt Chapman flag Heyzoom. Times adds Into The Light, so it is the optional third only.",
    insight: "This is still a messy 3yo staying handicap. Use extra places and BOG; do not take a short price in a race where several progressive profiles overlap.",
    tipSignal: "Best current signal is split but useful: GYTO Enceladus, Guardian/Sun Heyzoom, Times Into The Light. That supports each-way spread, not a single win-only bet.",
    eachWay: DEFAULT_EACH_WAY,
    allowExtra: true,
    fieldType: "big-field handicap",
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "medium",
    variance: "high",
    sourceQuality: "medium",
    reasonToAvoid: "Large-field handicap; use the extra horse only if each-way terms are good.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "Enceladus each-way at 23/2" },
      { label: "Guardian / Sun / Times", checkedAt: DEFAULT_LAST_CHECKED, note: "Heyzoom and Into The Light counter-signals" }
    ]
  },
  {
    time: "15:40",
    title: "Ribblesdale Stakes",
    meta: "Group 2 - 1m4f - 3yo fillies - Good to Firm",
    risk: "fillies",
    main: "Earth Shot",
    cover: "Johanna Walsh",
    split: [3, 2],
    odds: ["11/2", "10/1"],
    codes: ["EW", "EW"],
    bet: "Each-way Earth Shot; Johanna Walsh saver if extra places are fair.",
    rationale: "GYTO and Guardian both like Earth Shot as the value alternative to Legacy Link. Sun/Times make Johanna Walsh the secondary improving filly.",
    insight: "Legacy Link is respected but the quick Oaks turnaround is a fair reason to oppose at short odds. Keep this value-led rather than favourite-led.",
    tipSignal: "Strongest alignment away from the favourite: GYTO + Guardian Earth Shot, Sun + Times Johanna Walsh. That is better than relying on social chatter.",
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "medium",
    variance: "medium",
    sourceQuality: "medium",
    reasonToAvoid: "Still a fillies' Group race; recheck going, jockeys, and market strength.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "Earth Shot each-way at 11/2" },
      { label: "Guardian / Sun / Times", checkedAt: DEFAULT_LAST_CHECKED, note: "Earth Shot and Johanna Walsh value angles" }
    ]
  },
  {
    time: "16:15",
    title: "Gold Cup",
    meta: "Group 1 - 2m4f - Good to Firm",
    risk: "feature",
    main: "Scandinavia",
    cover: "Rahiebb",
    split: [3, 2],
    odds: ["13/8", "5/1"],
    codes: ["W", "W"],
    bet: "Scandinavia win; Rahiebb win saver. Miss Alpilles is the wild outsider only.",
    rationale: "Scandinavia is the strongest consensus horse: GYTO, Sun and Times all point his way. Rahiebb is the common danger angle after the Leger/Yorkshire Cup form.",
    insight: "Trawlerman is respected as last year's winner but the long layoff/fitness concern keeps him below Rahiebb for the normal saver. Keep any huge-price outsider outside the cap.",
    tipSignal: "Morning consensus is unusually clear for the feature: Scandinavia top, Rahiebb danger. Guardian goes contrarian with Carmers; Matt Chapman suggests Miss Alpilles at 100/1 for fun money only.",
    eachWay: DEFAULT_EACH_WAY,
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "high",
    variance: "medium",
    sourceQuality: "medium",
    reasonToAvoid: "Feature-race prices can move sharply; verify going and final market.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "Scandinavia win at 13/8; Rahiebb danger" },
      { label: "Guardian / Sun / Times", checkedAt: DEFAULT_LAST_CHECKED, note: "Scandinavia consensus with Carmers/Miss Alpilles outsider noise" }
    ]
  },
  {
    time: "16:50",
    title: "Britannia Stakes",
    meta: "Heritage Handicap - 1m - 3yo colts/geldings - Good to Firm",
    risk: "chaos",
    main: "Moonfall",
    cover: "Jamestown",
    extra: "Outback Heat",
    split: [3, 2],
    odds: ["10/1", "14/1", "11/1"],
    codes: ["EW", "EW", "EW"],
    bet: "Each-way only. Prioritise books with extra places.",
    rationale: "GYTO puts up Moonfall; Guardian and Times both flag Jamestown; Sun's preview gives Outback Heat as the course-and-distance outsider.",
    insight: "This remains the most fragile race on the card. The app now spreads named press angles, but bookmaker extra-place terms matter more than tiny price differences.",
    tipSignal: "Named press is useful but not unified: Moonfall, Jamestown, Outback Heat, Exclusive Code and Wechaad all appear. Treat it as an extra-place each-way race only.",
    eachWay: DEFAULT_EACH_WAY,
    allowExtra: true,
    fieldType: "big-field handicap",
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "medium",
    variance: "high",
    sourceQuality: "medium",
    reasonToAvoid: "Huge-field handicap; only use three each-way lines with suitable extra-place terms.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "Moonfall each-way at 10/1" },
      { label: "Guardian / Sun / Times", checkedAt: DEFAULT_LAST_CHECKED, note: "Jamestown and Outback Heat alternatives" }
    ]
  },
  {
    time: "17:35",
    title: "Hampton Court Stakes",
    meta: "Group 3 - 1m2f - 3yo - Good to Firm",
    risk: "cleaner",
    main: "Endorsement",
    cover: "Generic",
    split: [4, 1],
    odds: ["9/4", "7/1"],
    codes: ["W", "W"],
    bet: "Endorsement win; small Generic saver only if price is still fair.",
    rationale: "GYTO and Sun both back Endorsement, and Joe's top double includes him with Scandinavia. Guardian/Times both make Generic a serious alternative.",
    insight: "This is one of the cleaner win-bet races, but the favourite is not bombproof. If Endorsement shortens hard, reduce or skip the saver rather than force it.",
    tipSignal: "Strongest late-card anchor is Endorsement. Generic is the best counter-signal from Guardian/Times; Morshdi is the Matt Chapman rebound angle.",
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "medium",
    variance: "medium",
    sourceQuality: "medium",
    reasonToAvoid: "Cleaner race, but saver can dilute the main pick if the cover price shortens.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "Endorsement win at 9/4" },
      { label: "Guardian / Times / Sun", checkedAt: DEFAULT_LAST_CHECKED, note: "Generic and Morshdi counter-signals" }
    ]
  },
  {
    time: "18:10",
    title: "Buckingham Palace Stakes",
    meta: "Handicap - 7f - Good to Firm",
    risk: "final trap",
    main: "The Wizard Of Eye",
    cover: "Blue Brother",
    extra: "Apiarist",
    split: [3, 2],
    odds: ["12/1", "10/1", "20/1"],
    codes: ["EW", "EW", "EW"],
    bet: "Each-way only. Stop after this race.",
    rationale: "GYTO puts up The Wizard Of Eye, Guardian likes Blue Brother, and Matt Chapman makes Apiarist his big handicap swing.",
    insight: "Late big-field handicap: only play if you still want action and can get extra places. Do not chase earlier misses here.",
    tipSignal: "Best named angles are split three ways: Wizard Of Eye, Blue Brother, Apiarist. Anonymous social tips still get no upgrade unless they match live market strength.",
    eachWay: DEFAULT_EACH_WAY,
    fieldType: "big-field handicap",
    lastChecked: DEFAULT_LAST_CHECKED,
    confidence: "low",
    variance: "high",
    sourceQuality: "medium",
    reasonToAvoid: "Late big-field handicap; Smart 175 deliberately keeps this low if you leave early.",
    sources: [
      { label: "GYTO / TalkSport", checkedAt: DEFAULT_LAST_CHECKED, note: "The Wizard Of Eye each-way at 12/1" },
      { label: "Guardian / Sun / Times", checkedAt: DEFAULT_LAST_CHECKED, note: "Blue Brother, Apiarist and Cosi Bello alternatives" }
    ]
  }
];

let strategy = readStrategy();
let tracker = readJson(TRACKER_KEY, {});
let lucky = readJson(LUCKY_KEY, { stake: 0, odds: "100/1", result: "pending" });
const raceRoot = document.getElementById("races");
const template = document.getElementById("raceTemplate");
const buttons = Array.from(document.querySelectorAll(".stake"));
const capLabel = document.getElementById("capLabel");
const strategyNote = document.getElementById("strategyNote");
const normalStake = document.getElementById("normalStake");
const expectedReturn = document.getElementById("expectedReturn");
const achievedReturn = document.getElementById("achievedReturn");
const netReturn = document.getElementById("netReturn");
const luckyStake = document.getElementById("luckyStake");
const luckyOdds = document.getElementById("luckyOdds");
const luckyResult = document.getElementById("luckyResult");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    strategy = button.dataset.plan;
    localStorage.setItem(STORAGE_KEY, strategy);
    render();
  });
});

wireLuckyInputs();
render();

function render() {
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.plan === strategy);
  });
  capLabel.textContent = isSmartPlan() ? "max GBP 175 / day" : `max GBP ${strategy} / race`;
  strategyNote.textContent = strategySummary();

  const nodes = races.map((race, index) => {
    const [mainStake, coverStake, extraStake] = splitStakes(raceStake(index), race);
    const state = trackerState(index, race);
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".time").textContent = race.time;
    node.querySelector(".risk").textContent = race.risk;
    node.querySelector("h2").textContent = race.title;
    node.querySelector(".meta").textContent = race.meta;
    node.querySelector(".checked").textContent = `Checked ${shortDate(race.lastChecked)}`;
    node.querySelector(".confidence").textContent = `${capitalize(race.confidence)} confidence`;
    node.querySelector(".variance").textContent = `${capitalize(race.variance)} variance`;
    node.querySelector(".main-horse").textContent = horseWithOdds(race.main, state.mainOdds, race.codes[0]);
    node.querySelector(".cover-horse").textContent = coverStake ? horseWithOdds(race.cover, state.coverOdds, race.codes[1]) : "No cover";
    node.querySelector(".extra-horse").textContent = extraStake ? horseWithOdds(race.extra, state.extraOdds, race.codes[2]) : "No extra";
    node.querySelector(".main-stake").textContent = stakeLabel(mainStake, race.codes[0]);
    node.querySelector(".cover-stake").textContent = coverStake ? stakeLabel(coverStake, race.codes[1]) : "GBP 0";
    node.querySelector(".extra-stake").textContent = extraStake ? stakeLabel(extraStake, race.codes[2]) : "GBP 0";
    node.querySelector(".bet-type").textContent = betInstruction(race, coverStake);
    node.querySelector(".rationale").textContent = race.rationale;
    node.querySelector(".insight-text").textContent = race.insight;
    node.querySelector(".tip-signal-text").textContent = race.tipSignal;
    node.querySelector(".insight-source").textContent = sourceSummary(race);
    wireRaceTracker(node, index, state, coverStake, extraStake);
    return node;
  });

  raceRoot.replaceChildren(...nodes);
  updateSummary();
}

function wireRaceTracker(node, index, state, coverStake, extraStake) {
  const mainOdds = node.querySelector(".main-odds");
  const mainResult = node.querySelector(".main-result");
  const coverOdds = node.querySelector(".cover-odds");
  const coverResult = node.querySelector(".cover-result");
  const extraOdds = node.querySelector(".extra-odds");
  const extraResult = node.querySelector(".extra-result");
  const mainHorse = node.querySelector(".main-horse");
  const coverHorse = node.querySelector(".cover-horse");
  const extraHorse = node.querySelector(".extra-horse");
  const race = races[index];

  mainOdds.value = formatOdds(state.mainOdds);
  coverOdds.value = formatOdds(state.coverOdds);
  extraOdds.value = formatOdds(state.extraOdds);
  setResultOptions(mainResult, race.codes[0], state.mainResult);
  setResultOptions(coverResult, race.codes[1], state.coverResult);
  setResultOptions(extraResult, race.codes[2], state.extraResult);

  node.querySelectorAll(".cover-track").forEach((element) => {
    element.classList.toggle("disabled", !coverStake);
  });
  node.querySelectorAll(".extra-track").forEach((element) => {
    element.classList.toggle("disabled", !extraStake);
  });

  mainOdds.addEventListener("input", () => {
    const nextOdds = normalizeOdds(mainOdds.value, state.mainOdds);
    mainHorse.textContent = horseWithOdds(race.main, nextOdds, race.codes[0]);
    updateRaceState(index, { mainOdds: nextOdds });
  });
  mainResult.addEventListener("change", () => updateRaceState(index, { mainResult: mainResult.value }));
  coverOdds.addEventListener("input", () => {
    const nextOdds = normalizeOdds(coverOdds.value, state.coverOdds);
    coverHorse.textContent = coverStake ? horseWithOdds(race.cover, nextOdds, race.codes[1]) : "No cover";
    updateRaceState(index, { coverOdds: nextOdds });
  });
  coverResult.addEventListener("change", () => updateRaceState(index, { coverResult: coverResult.value }));
  extraOdds.addEventListener("input", () => {
    const nextOdds = normalizeOdds(extraOdds.value, state.extraOdds);
    extraHorse.textContent = extraStake ? horseWithOdds(race.extra, nextOdds, race.codes[2]) : "No extra";
    updateRaceState(index, { extraOdds: nextOdds });
  });
  extraResult.addEventListener("change", () => updateRaceState(index, { extraResult: extraResult.value }));
}

function wireLuckyInputs() {
  luckyStake.value = String(lucky.stake || 0);
  luckyOdds.value = formatOdds(lucky.odds || "100/1");
  setResultOptions(luckyResult, LUCKY_CODE, normalizeResult(lucky.result || "pending", LUCKY_CODE));

  luckyStake.addEventListener("input", () => updateLucky({ stake: numberOrDefault(luckyStake.value, 0) }));
  luckyOdds.addEventListener("input", () => updateLucky({ odds: normalizeOdds(luckyOdds.value, lucky.odds || "100/1") }));
  luckyResult.addEventListener("change", () => updateLucky({ result: luckyResult.value }));
}

function updateRaceState(index, patch) {
  const key = raceKey(index);
  tracker[key] = { ...trackerState(index, races[index]), ...patch };
  localStorage.setItem(TRACKER_KEY, JSON.stringify(tracker));
  updateSummary();
}

function updateLucky(patch) {
  lucky = { ...lucky, ...patch };
  localStorage.setItem(LUCKY_KEY, JSON.stringify(lucky));
  updateSummary();
}

function updateSummary() {
  const normal = races.reduce((sum, race, index) => {
    const [mainStake, coverStake, extraStake] = splitStakes(raceStake(index), race);
    return sum + mainStake + coverStake + extraStake;
  }, 0);

  const potential = races.reduce((sum, race, index) => {
    const [mainStake, coverStake, extraStake] = splitStakes(raceStake(index), race);
    const state = trackerState(index, race);
    return sum + potentialLeg(mainStake, state.mainOdds, race.codes[0], race.eachWay)
      + potentialLeg(coverStake, state.coverOdds, race.codes[1], race.eachWay)
      + potentialLeg(extraStake, state.extraOdds, race.codes[2], race.eachWay);
  }, 0);

  const achieved = races.reduce((sum, race, index) => {
    const [mainStake, coverStake, extraStake] = splitStakes(raceStake(index), race);
    const state = trackerState(index, race);
    return sum + achievedLeg(mainStake, state.mainOdds, state.mainResult, race.codes[0], race.eachWay)
      + achievedLeg(coverStake, state.coverOdds, state.coverResult, race.codes[1], race.eachWay)
      + achievedLeg(extraStake, state.extraOdds, state.extraResult, race.codes[2], race.eachWay);
  }, 0);

  const settledStake = races.reduce((sum, race, index) => {
    const [mainStake, coverStake, extraStake] = splitStakes(raceStake(index), race);
    const state = trackerState(index, race);
    return sum + settledLegStake(mainStake, state.mainResult) + settledLegStake(coverStake, state.coverResult) + settledLegStake(extraStake, state.extraResult);
  }, 0);

  const luckyStakeValue = Math.max(0, numberOrDefault(luckyStake.value, lucky.stake || 0));
  const luckyOddsValue = normalizeOdds(luckyOdds.value, lucky.odds || "100/1");
  const luckyPotential = potentialLeg(luckyStakeValue, luckyOddsValue, LUCKY_CODE, LUCKY_EACH_WAY);
  const luckyAchieved = achievedLeg(luckyStakeValue, luckyOddsValue, luckyResult.value, LUCKY_CODE, LUCKY_EACH_WAY);
  const luckySettledStake = settledLegStake(luckyStakeValue, luckyResult.value);
  const net = achieved + luckyAchieved - settledStake - luckySettledStake;

  normalStake.textContent = `${money(normal)} + lucky ${money(luckyStakeValue)}`;
  expectedReturn.textContent = money(potential + luckyPotential);
  achievedReturn.textContent = money(achieved + luckyAchieved);
  netReturn.textContent = money(net);
  netReturn.classList.toggle("loss", net < 0);
}

function trackerState(index, race) {
  const saved = tracker[raceKey(index)] || {};
  return {
    mainOdds: normalizeOdds(saved.mainOdds, race.odds[0]),
    coverOdds: normalizeOdds(saved.coverOdds, race.odds[1] || "1/1"),
    extraOdds: normalizeOdds(saved.extraOdds, race.odds[2] || "1/1"),
    mainResult: normalizeResult(saved.mainResult || "pending", race.codes[0]),
    coverResult: normalizeResult(saved.coverResult || "pending", race.codes[1]),
    extraResult: normalizeResult(saved.extraResult || "pending", race.codes[2])
  };
}

function raceKey(index) {
  return `race-${index}`;
}

function raceStake(index) {
  return isSmartPlan() ? SMART_ALLOCATIONS[index] : Number(strategy);
}

function isSmartPlan() {
  return strategy === "smart";
}

function strategySummary() {
  if (!isSmartPlan()) {
    return `Flat plan: ${money(Number(strategy))} on every race. Select Smart 175 to move the same top budget into stronger/upside spots.`;
  }
  return "Smart 175: total cap GBP 175, minimum GBP 5 per race, last race kept low in case you leave early.";
}

function splitStake(total, ratio) {
  const capped = Math.max(5, total);
  if (ratio[1] === 0 || capped < 10) return [capped, 0];
  const units = ratio[0] + ratio[1];
  const targetCover = (capped * ratio[1]) / units;
  const cover = Math.min(capped - 5, Math.max(5, roundToFive(targetCover)));
  return [capped - cover, cover];
}

function splitStakes(total, race) {
  const [mainStake, coverStake] = splitStake(total, race.split);
  if (!race.allowExtra || race.variance !== "high" || total < 25 || !coverStake) return [mainStake, coverStake, 0];

  const extraStake = total >= 35 ? 10 : 5;
  if (mainStake - extraStake >= 5) {
    return [mainStake - extraStake, coverStake, extraStake];
  }
  if (coverStake - extraStake >= 5) {
    return [mainStake, coverStake - extraStake, extraStake];
  }
  return [mainStake, coverStake, 0];
}

function betInstruction(race, coverStake) {
  if (!coverStake && race.split[1] > 0) {
    return "GBP 5 mode: main only. Add cover at GBP 15 or GBP 25.";
  }
  return race.bet;
}

function roundToFive(value) {
  return Math.round(value / 5) * 5;
}

function potentialLeg(stakeValue, oddsValue, code, eachWay) {
  if (!stakeValue) return 0;
  if (code === "EW") return eachWayReturn(stakeValue, oddsValue, "won", eachWay);
  return winReturn(stakeValue, oddsValue);
}

function winReturn(stakeValue, oddsValue) {
  const decimalOdds = oddsToDecimal(oddsValue);
  if (!stakeValue || !decimalOdds) return 0;
  return stakeValue * decimalOdds;
}

function achievedLeg(stakeValue, oddsValue, result, code, eachWay) {
  const normalized = normalizeResult(result, code);
  if (code === "EW") return eachWayReturn(stakeValue, oddsValue, normalized, eachWay);
  return normalized === "won" ? winReturn(stakeValue, oddsValue) : 0;
}

function eachWayReturn(stakeValue, oddsValue, result, eachWay = DEFAULT_EACH_WAY) {
  if (!stakeValue || result === "pending" || result === "lost") return 0;
  const fractionalOdds = oddsToFractional(oddsValue);
  if (!fractionalOdds) return 0;
  const winPart = stakeValue / 2;
  const placePart = stakeValue / 2;
  const placeFraction = eachWay?.fraction || DEFAULT_EACH_WAY.fraction;
  const winReturnValue = winPart * (1 + fractionalOdds);
  const placeReturnValue = placePart * (1 + fractionalOdds * placeFraction);
  return result === "won" ? winReturnValue + placeReturnValue : placeReturnValue;
}

function settledLegStake(stakeValue, result) {
  return result === "won" || result === "placed" || result === "lost" || result === "paid" ? stakeValue : 0;
}

function numberOrDefault(value, fallback) {
  if (value === "") return fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function formatOdds(value) {
  return normalizeOdds(value, "1/1");
}

function horseWithOdds(horse, odds, code) {
  return `${horse} · ${formatOdds(odds)} · ${code}`;
}

function stakeLabel(stakeValue, code) {
  if (!stakeValue) return "GBP 0";
  if (code === "EW") {
    const half = stakeValue / 2;
    return `${money(stakeValue)} EW total - ${money(half)} W / ${money(half)} P`;
  }
  return `${money(stakeValue)} W`;
}

function setResultOptions(select, code, value) {
  const options = resultOptions(code);
  select.replaceChildren(...options.map((option) => {
    const element = document.createElement("option");
    element.value = option.value;
    element.textContent = option.label;
    return element;
  }));
  select.value = normalizeResult(value, code);
}

function resultOptions(code) {
  if (code === "EW") {
    return [
      { value: "pending", label: "Pending" },
      { value: "won", label: "Won" },
      { value: "placed", label: "Placed" },
      { value: "lost", label: "Lost" }
    ];
  }
  return [
    { value: "pending", label: "Pending" },
    { value: "won", label: "Won" },
    { value: "lost", label: "Lost" }
  ];
}

function normalizeResult(value, code) {
  if (value === "paid") return "won";
  if (code === "EW" && ["pending", "won", "placed", "lost"].includes(value)) return value;
  if (["pending", "won", "lost"].includes(value)) return value;
  return "pending";
}

function sourceSummary(race) {
  const sources = race.sources || [];
  const labels = sources.slice(0, 2).map((source) => `${source.label} (${source.note})`);
  return labels.join("; ");
}

function shortDate(value) {
  if (!value) return "unverified";
  const [year, month, day] = value.split("-");
  return `${Number(day)} ${monthName(month)} ${year.slice(2)}`;
}

function monthName(month) {
  return {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
  }[month] || "";
}

function capitalize(value) {
  return value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "Unknown";
}

function normalizeOdds(value, fallback) {
  if (value === undefined || value === null || value === "") return fallback;
  const text = String(value).trim().replace(/\s+/g, "");
  if (/^\d+(\.\d+)?\/\d+(\.\d+)?$/.test(text)) return text;
  const decimal = Number(text);
  if (Number.isFinite(decimal) && decimal > 1) return decimalToFraction(decimal - 1);
  return fallback;
}

function oddsToDecimal(value) {
  const fractionalOdds = oddsToFractional(value);
  return fractionalOdds ? fractionalOdds + 1 : 0;
}

function oddsToFractional(value) {
  const text = normalizeOdds(value, "1/1");
  const [numerator, denominator] = text.split("/").map(Number);
  if (!denominator) return 0;
  return numerator / denominator;
}

function decimalToFraction(value) {
  const denominator = 100;
  const numerator = Math.round(value * denominator);
  const divisor = gcd(numerator, denominator);
  return `${numerator / divisor}/${denominator / divisor}`;
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x || 1;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function readStrategy() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return ["5", "15", "25", "smart"].includes(saved) ? saved : "5";
}

function money(value) {
  const rounded = Math.round(value * 100) / 100;
  return `GBP ${rounded.toLocaleString("en-GB", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}
