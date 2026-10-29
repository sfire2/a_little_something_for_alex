# NINJAGO: Birthday Quest

A self-contained, original pixel-art browser platformer made as a personal fan adventure for Alex. It is not an official LEGO, NINJAGO, or The Fold product. The game uses original Canvas artwork and procedural sound effects. The two optional MP3 files in `public/` provide the menu and gameplay music.

## Run locally

Requires Node.js 18 or newer. The project has no npm dependencies to install.

```sh
npm run dev
```

Open the local URL printed by the built-in static server. Create the production bundle with `npm run build`; preview it with `npm run preview`.

## Personalize the birthday

Edit `src/birthday.js` to change the recipient name, sender name, birthday message, or optional personal references. The names appear throughout the opening and celebration, and the message is shown on the reward letter. Add up to three short personal references to place collectible memory tokens in the fortress; collecting one shows the note, and every reference is also included in the reward letter. Keep these details to things you want included in the gift.

## Music files

Place the menu track at `public/homemusic.mp3` and the gameplay track at `public/gamemusic.mp3`. Music starts after the first interaction, loops while its screen is active, and pauses while the game is paused. The title screen's MUSIC toggle controls both tracks; sound effects have their own toggle. The production build copies `public/` into `dist/public/`.

## Font

The interface and Canvas labels use the Kunoichi typeface from `public/fonts/Kunoichi.otf`, loaded locally with `@font-face` so it also works offline.

## Controls

- Move: Left/Right arrows or A/D
- Jump: Space, Up, or W
- Attack: Z or J
- Elemental power: X or K
- Spinjitzu: C (or the SPIN button on mobile)
- Pause: Escape or P
- On mobile, use the on-screen buttons below the game

Collect studs and optional memory tokens, reach the checkpoint, and defeat Lord Garmadon. The checkpoint restores full health. The four ninjas have distinct elemental powers and can each unleash an element-colored Spinjitzu attack. Music and sound effects can be toggled on the title screen.

## Included

- Responsive, nearest-neighbor Canvas game with title, menu, help, and four-ninja selection
- Side-scrolling fortress route, platforms, patrol guards, studs, checkpoint, health, respawn, and boss arena
- Four cooldown-based elemental abilities and four Spinjitzu styles; Garmadon melee, purple energy volleys, and telegraphed slam attacks with a second phase
- Birthday celebration, confetti, configurable reward letter, retry, replay, and character reselection
- Original procedural Web Audio effects/music and mobile touch controls

Optional: authorized audio can be added later. The project needs no external accounts or API keys and does not depend on a network connection.
