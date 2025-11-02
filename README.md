# UI Userstyles for SponsorBlock
Customizations for the [SponsorBlock](https://github.com/ajayyy/SponsorBlock/) extension. Install with [Stylus](https://github.com/openstyles/stylus/).
## **Better Submission Menu**  

### **Customization Examples:** 
| Coloured background, bold text, outlined text |  Flat UI, coloured text, icons, coloured segment box |
| :-: | :-: |
|<img width="390" height="534" alt="Screenshot (92)" src="https://github.com/user-attachments/assets/e8343ad6-3d93-4d18-82ab-1b577640e8b9" />|<img width="390" height="537" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/4611e0ad-fc9e-48e8-b5e1-9f4667f366af" />|

[![Install with Stylus](https://custom-icon-badges.demolab.com/badge/Install%20with_Stylus-00adad.svg?logo=stylususercss)](https://github.com/jiraph/SponsorBlock-UI/raw/refs/heads/main/sponsorblock.colorcodeddropdown.user.css)  

Revamps the submission menu with extra features.

Includes a settings menu if installed with Stylus:
  - Cleaner flat UI.
  - Replace text buttons with icons.
  - Full width Chapter input box.
  - Colour the segment box w/ the colour of the selected category
    - Outline, Left bar, or Right bar.
  - Coloured segment dropdown menu: Colours will follow what you choose in SponsorBlock settings, and text colour will adapt to contrast with background colour. 
    - Choose between colouring the background, or colouring the text.
    - More readable bold text, or extra-readable white text with black outline (outline does not work on Chrome).
    - Edit chapter colour, since it does not have a colour in the SponsorBlock settings.
    - Option to use unsubmitted category colours.

<details>

<summary>Changelog</summary>

### 1.4.3 ###
<sup> (2025-08-08) </sup>
- Fixes and improvements:
  - Fix save icon showing on all segments instead of just the one being edited

### 1.4.2 ###
<sup> (2025-08-06) </sup>
- New features:
  - Full width chapter input box option
  - Dynamically selected Edit/Save icon
- Fixes and improvements: 
  - Highlight inspect button now uses preview icon
  - Edited 'Set start' and 'Set end' icons
  - Segment box border colour for 'Select a category' is no longer pure white

### 1.4.1 ###
<sup> (2025-08-04) </sup>
- New features:
  - Option to remove rounded corners
  - 'Bar' style category box color style
- Fixes and improvements:
  - More efficient selectors
  - Labelled code
  - Rearranged settings
  - 'Off' option for dropdown menu

### 1.4.0 ###
<sup> (2025-08-02) </sup>
- New features:
  - Compatibility with Hook category
  - Redone flat UI
  - Replace text buttons with icons
  - Outline segment category box with category colour
  - Swap highlight segment & text colours (useful for very dark customized highlight colours)

### 1.3.0 ###
<sup> (2023-11-03) </sup>
- New features:
  - 'Coloured text' dropdown style

### 1.2.0 ###
<sup> (2023-05-22) </sup>
- New features:
  - Dynamically selected text colour in dropdown
  - Set Chapter text colour (SB does not have a text colour for Chapter)
  - Added @UpdateURL
- Fixes and improvements:
  - Removed text colour option

### 1.1.0 ###
 <sup> (2023-04-27) </sup>
- New features:
  - Bold text option
  - Flat style UI (WIP)

</details>



## **Simple Thumbnail Label**

![simple-label-1](https://user-images.githubusercontent.com/19298861/240079610-85643aa4-a7f7-4132-b16d-79f005dfd25c.jpg)
![simple-label-2](https://user-images.githubusercontent.com/19298861/240079614-019c0ab6-542d-4fef-87fd-7974ec8dffc2.jpg)

[![Install with Stylus](https://custom-icon-badges.demolab.com/badge/Install%20with_Stylus-00adad.svg?logo=stylususercss)](https://github.com/jiraph/SponsorBlock-UI/raw/refs/heads/main/sponsorblock.simplethumbnaillabels.user.css)
 
Styles the SponsorBlock thumbnail label to match YouTube's existing thumbnail badges. 
- Colours will follow what you choose in SponsorBlock settings, and text will adapt to contrast with background colour. 
- Includes a settings menu if installed with Stylus: 
  - Options for top left or bottom left corner, coloured text/white text/coloured background, all caps text, and show/hide logo.

Thanks to @virginviolet for fixing compatibility with *Thumbnail Rating Bar for YouTube*.

## **Colour-coded Dropdown Menu**
[![Static Badge](https://img.shields.io/badge/Install_Userscript-444?logo=tampermonkey)](https://github.com/jiraph/SponsorBlock-UI/raw/refs/heads/main/sponsorblock.colorcodeddropdown.user.js)

A userscript version of Better Submission Menu with less features.


