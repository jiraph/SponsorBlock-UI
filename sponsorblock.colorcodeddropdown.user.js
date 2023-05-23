// ==UserScript==
// @name         SponsorBlock Colored Category Dropdown
// @version      1.2.0
// @description  Styles the dropdown list in the submission menu with each categories respective color.
// @homepageURL  https://gist.github.com/jiraph/
// @author       jiraph
// @match        https://www.youtube.com/*
// @icon         https://sponsor.ajay.app/LogoSponsorBlockSimple256px.png
// @grant        GM_addStyle
// @updateURL    https://gist.github.com/jiraph/e60d0a7ae7071f1f4ef060948d50a9a1/raw/sponsorblock.colorcodeddropdown.user.js
// @downloadURL  https://gist.github.com/jiraph/e60d0a7ae7071f1f4ef060948d50a9a1/raw/sponsorblock.colorcodeddropdown.user.js
// ==/UserScript==

const css=`
/* TEXT OUTLINE (FIREFOX ONLY) (UN-COMMENT TO ENABLE) */
    /*
    select[class="sponsorTimeEditSelector sponsorTimeCategories"] > option, select[class="sponsorTimeCategories sponsorTimeEditSelector"] > option {
        color: #fff !important;
        text-shadow: -1px 1px 0 black, 1px 1px 0 black,1px -1px 0 black,-1px -1px 0 black !important;
    }
    */
/* BOLD LOCKED CATEGORIES (VIP ONLY) */
    body option[class="sponsorBlockLockedColor"] {
        color: #ffc83d !important;
        font-weight: bold !important;
    }
/* CATEGORY COLORS */
    option[value="sponsor"] {
        background-color: var(--sb-category-sponsor) !important;
        color: var(--sb-category-text-sponsor) !important;
        }
    option[value="selfpromo"] {
        background-color: var(--sb-category-selfpromo) !important;
        color: var(--sb-category-text-selfpromo) !important;
        }
    option[value="exclusive_access"] {
        background-color: var(--sb-category-exclusive_access) !important;
        color: var(--sb-category-text-exclusive_access) !important;
        }
    option[value="interaction"] {
        background-color: var(--sb-category-interaction) !important;
        color: var(--sb-category-text-interaction) !important;
        }
    option[value="poi_highlight"] {
        background-color: var(--sb-category-poi_highlight) !important;
        color: var(--sb-category-text-poi_highlight) !important;
        }
    option[value="intro"] {
        background-color: var(--sb-category-intro) !important;
        color: var(--sb-category-text-intro) !important;
        }
    option[value="outro"] {
        background-color: var(--sb-category-outro) !important;
        color: var(--sb-category-text-outro) !important;
        }
    option[value="preview"] {
        background-color: var(--sb-category-preview) !important;
        color: var(--sb-category-text-preview) !important;
        }
    option[value="filler"] {
        background-color: var(--sb-category-filler) !important;
        color: var(--sb-category-text-filler) !important;
        }
    option[value="chapter"] {
        background-color: #e93b3b !important;
        color: white !important;
        }
    option[value="music_offtopic"] {
        background-color: var(--sb-category-music_offtopic) !important;
        color: var(--sb-category-text-music_offtopic) !important;
        }`
GM_addStyle(css);