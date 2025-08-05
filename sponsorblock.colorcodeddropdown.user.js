// ==UserScript==
// @name         SponsorBlock Colored Category Dropdown
// @version      1.3.2
// @description  Styles the dropdown list in the submission menu with each categories respective color.
// @homepageURL  https://github.com/jiraph/SponsorBlock-UI/
// @author       jiraph
// @match        https://www.youtube.com/*
// @icon         https://sponsor.ajay.app/LogoSponsorBlockSimple256px.png
// @grant        GM_addStyle
// @updateURL    https://github.com/jiraph/SponsorBlock-UI/raw/refs/heads/main/sponsorblock.colorcodeddropdown.user.js
// @downloadURL  https://github.com/jiraph/SponsorBlock-UI/raw/refs/heads/main/sponsorblock.colorcodeddropdown.user.js
// ==/UserScript==

const css=`

/* EDIT CHAPTER COLOR */
    option[value="chapter"] {
        --chapterColor: #e93b3b;
        --chapterText:  #ffffff;
    }

/* TEXT OUTLINE (FIREFOX ONLY) (UN-COMMENT TO ENABLE) */
/*
    select[class="sponsorTimeEditSelector sponsorTimeCategories"] > option, select[class="sponsorTimeCategories sponsorTimeEditSelector"] > option {
        color: white !important;
        text-shadow: -1px 1px 0 black, 1px 1px 0 black,1px -1px 0 black,-1px -1px 0 black !important;
    }
*/

/* BOLD ALL TEXT (UN-COMMENT TO ENABLE) */
/*
    select[class="sponsorTimeEditSelector sponsorTimeCategories"] > option, select[class="sponsorTimeCategories sponsorTimeEditSelector"] > option {
        font-weight: bold !important;
    }
*/

/* BOLD LOCKED CATEGORIES (VIP ONLY) */
    body option[class="sponsorBlockLockedColor"] {
        color: #ffc83d !important;
        font-weight: bold !important;
    }

/* ~ CHOOSE COLORED BACKGROUND OR COLORED TEXT ~ */

/* COLORED BACKGROUND (COMMENT TO DISABLE) */
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
    option[value="hook"] {
        background-color: var(--sb-category-hook) !important;
        color: var(--sb-category-text-hook) !important;
        }
    option[value="filler"] {
        background-color: var(--sb-category-filler) !important;
        color: var(--sb-category-text-filler) !important;
        }
    option[value="chapter"] {
        background-color: var(--chapterColor) !important;
        color: var(--chapterText) !important;
        }
    option[value="music_offtopic"] {
        background-color: var(--sb-category-music_offtopic) !important;
        color: var(--sb-category-text-music_offtopic) !important;
        }

/* COLORED TEXT (UN-COMMENT TO ENABLE) */
    /*
    option[value="sponsor"] {
        color: var(--sb-category-sponsor) !important;
        }
    option[value="selfpromo"] {
        color: var(--sb-category-selfpromo) !important;
        }
    option[value="exclusive_access"] {
        color: var(--sb-category-exclusive_access) !important;
        }
    option[value="interaction"] {
        color: var(--sb-category-interaction) !important;
        }
    option[value="poi_highlight"] {
        color: var(--sb-category-poi_highlight) !important;
        }
    option[value="intro"] {
        color: var(--sb-category-intro) !important;
        }
    option[value="outro"] {
        color: var(--sb-category-outro) !important;
        }
    option[value="preview"] {
        color: var(--sb-category-preview) !important;
        }
    option[value="hook"] {
        color: var(--sb-category-hook) !important;
        }
    option[value="filler"] {
        color: var(--sb-category-filler) !important;
        }
    option[value="chapter"] {
        color: var(--chapterColor) !important;
        }
    option[value="music_offtopic"] {
        color: var(--sb-category-music_offtopic) !important;
        }
    */
`
GM_addStyle(css);
