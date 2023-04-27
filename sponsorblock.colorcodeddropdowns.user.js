// ==UserScript==
// @name         SponsorBlock Colored Category Dropdown
// @version      1.0.0
// @description  Colors the dropdowns in the submission menu.
// @homepageURL  https://gist.github.com/jiraph/
// @author       jiraph & ChatGPT
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @updateURL    https://gist.github.com/jiraph/e60d0a7ae7071f1f4ef060948d50a9a1/raw/sponsorblock.colorcodeddropdowns.user.js
// @downloadURL  https://gist.github.com/jiraph/e60d0a7ae7071f1f4ef060948d50a9a1/raw/sponsorblock.colorcodeddropdowns.user.js
// ==/UserScript==

const COLORS = {
    sponsor: '#00d400',
    selfpromo: '#ffff00',
    exclusive_access: '#008a5c',
    interaction: '#cc00ff',
    poi_highlight: '#ff1684',
    intro: '#00ffff',
    outro: '#0202ed',
    preview: '#008fd6',
    filler: '#7300FF',
    music_offtopic: '#ff9900',
};
const css = Object.entries(COLORS).map(([category, color]) =>
    `option[value="${category}"] {background-color: ${color} !important;}`)
    .join('');
GM_addStyle(`
    :root {
        --text: white;
        --outline: black;
        --locked: #ffc83d;
    }
    select[class*="Categories"] > option {
        color: var(--text);
        text-shadow: -1px 1px 0 var(--outline), 1px 1px 0 var(--outline),1px -1px 0 var(--outline),-1px -1px 0 var(--outline) !important;
    }
    .sponsorBlockLockedColor {
        font-weight: bold;
        color: var(--locked) !important;
    }
    ${css}
`);