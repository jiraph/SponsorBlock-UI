// ==UserScript==
// @name         SponsorBlock Colored Category Dropdown
// @version      1.1.0
// @description  Colors the dropdown in the submission menu.
// @homepageURL  https://gist.github.com/jiraph/
// @author       jiraph & ChatGPT
// @match        https://www.youtube.com/*
// @icon         https://sponsor.ajay.app/LogoSponsorBlockSimple256px.png
// @grant        GM_addStyle
// @updateURL    https://gist.github.com/jiraph/e60d0a7ae7071f1f4ef060948d50a9a1/raw/sponsorblock.colorcodeddropdown.user.js
// @downloadURL  https://gist.github.com/jiraph/e60d0a7ae7071f1f4ef060948d50a9a1/raw/sponsorblock.colorcodeddropdown.user.js
// ==/UserScript==

const COLORS = {
    sponsor: 'var(--sb-category-sponsor)',
    selfpromo: 'var(--sb-category-selfpromo)',
    exclusive_access: 'var(--sb-category-exclusive_access)',
    interaction: 'var(--sb-category-interaction)',
    poi_highlight: 'var(--sb-category-poi_highlight)',
    intro: 'var(--sb-category-intro)',
    outro: 'var(--sb-category-outro)',
    preview: 'var(--sb-category-preview)',
    filler: 'var(--sb-category-filler)',
    music_offtopic: 'var(--sb-category-music_offtopic)',
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