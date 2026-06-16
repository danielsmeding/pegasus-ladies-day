# Pegasus Ladies Day

A local iPhone-friendly betting card for Royal Ascot Ladies Day, Thursday 18 June 2026.

It is intentionally simple and compact for checking on an iPhone at Ascot:

- one screen for the seven Thursday races,
- black low-glare layout,
- three flat per-race stake modes: GBP 5, GBP 15, or GBP 25,
- one Smart 175 mode that keeps a GBP 175 event cap with at least GBP 5 per race,
- Smart 175 keeps the final race at GBP 5 in case you leave before the end,
- every individual bet is at least GBP 5,
- each horse line shows the current win odds in fractional format plus `W` for win or `EW` for each-way,
- each-way stakes are shown as total stake, split half win and half place,
- selected big-field handicaps can show a third `Extra` horse when the strategy stake is at least GBP 25,
- one top-line event summary and one optional outsider tip outside the normal race cap,
- an editable winnings tracker for potential return, achieved return, and net result,
- each card says the horse or horses, bet type, stake split, rationale, and a compact tip angle,
- picks can be edited in `app.js` if final prices, non-runners, or going change, then re-inline into `index.html`.

The winnings tracker uses fractional odds entered as `x/y`, for example `10/1` or `7/2`. Update odds before betting and mark each leg as won, placed, or lost after the race.

`Potential return` means possible returned-stake-included payout if the selected pending bets win. It is not expected value, not a prediction, and does not include a probability model.

Win-only return is calculated as:

```text
stake * (1 + numerator / denominator)
```

Each-way planned stake is treated as total stake. For example, `GBP 20 total EW` is calculated as `GBP 10 win + GBP 10 place`, not `GBP 20 each way`. The app uses a default place fraction of `1/5` for simple planning, but bookmaker place fractions and number of places must be checked before betting.

This is a recreational stake planner, not betting advice. Use only fun amounts, check final declarations, odds, going, jockeys, non-runners, and each-way terms before betting, and do not chase losses.

## Open On iPhone

`index.html` is self-contained. To use it without a local server, AirDrop, iCloud Drive, or message that single file to the iPhone, then open it from the Files app or Safari.

No server connection to the Mac is required. Progress and edited odds are stored locally in that browser on the iPhone.

If `app.js` or `styles.css` changes, refresh the standalone file with:

```sh
node scripts/build-standalone-index.mjs
```

## Open On Mac

Open `index.html` in a browser, or serve the folder locally for testing:

```sh
python3 -m http.server 8765
```

Then open `http://127.0.0.1:8765/index.html`.

## Sources Used For Current Notes

- Ascot official Royal Ascot dates and race context.
- Racing Post Ascot 18 June 2026 racecard, declared runners, good-to-firm going, forecasts, and staff verdicts.
- Current Gold Cup reporting and social/forum scan around Scandinavia, Trawlerman, Rahiebb, Caballo De Mar, and Sweet William.
- Race pattern notes for big-field Ascot straight-course handicaps.
- Kicktipp repository API review: The Odds API was useful there, but its current published sports list does not include horse racing.

## Odds API Check

If you want to verify The Odds API coverage with your existing key:

```sh
THE_ODDS_API_KEY=... node scripts/check-the-odds-api-sports.mjs
```
