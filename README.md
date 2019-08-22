# mt-kinportal

**This sample features three tabs the user can switch between to show multiple kintone portals.**

<img src="img/pt1.png" alt="Standard portal" title="" width="90%">

|Link collection|Map (Screenshot only)|
|---|---|
|![](img/pt3.png)|![](img/pt2.png)|



## Features
- Tab 1: Displays the standard kintone widgets
- Tab 2: A link collection can be displayed with images from kintone Apps
    - Required: Link name, URL, Image link
- Tab 3: Challenge yourself to create your own page!


## Requirements
- kintone
    - [Trial JP](https://kintone.cybozu.co.jp/trial/) or [Developer license JP](https://developer.cybozu.io/) 
    - [Trial EN](https://www.kintone.com/trial/) or [Developer license EN](https://developer.kintone.io/) 
- Chrome
- Kintone Portal Designer Chrome Extension
    - [Kintone Portal Designer](https://chrome.google.com/webstore/detail/kintone-portal-designer/kmedncknheiegbelfmcfdlpcpfbnklmo)


## Quick Start part 1
1. Upload and save the following files to kintone administration > JS / CSS customization
- [mt-kinportal_desktop.js](mt-kinportal_desktop.js)
- [mt-kinportal_mobile.js](mt-kinportal_mobile.js)

## Quick Start part 2

1. Load the following template into kintone to create an app
- [portal_link.zip](app/portal_link.zip) 
- Note the App ID in the URL  
~~~sh
ex. https://{subdomain}.kintone.com/k/{appId}
ex. https://{subdomain}.cybozu.com/k/{appId}
~~~

2. Open Kintone Portal Designer and import the following JSON file
- [mt-kinportal.json](mt-kinportal.json) 

3. Change the source code in the JavaScript tab
~~~JavaScript
  // Tab2 --------------------------------------------
  var query = {
    'app': 20, //appID <<< Change to appId
    'query': 'order by Update_day desc',
    'size': 100 //max 500
  };
~~~

## Reference
Japanese
- [kintone portal API (portal.show|mobile.portal.show)](https://developer.cybozu.io/hc/ja/articles/360028785452) 
- [Maptomo Blog - mt-kinportal](https://maptomo.com/mt-kinportal)

English
- [Kintone Portal API (portal.show|mobile.portal.show)](https://developer.kintone.io/hc/en-us/articles/360000315382)

## Licensing
Licensed under the [MIT License](/LICENCE).

In this sample, kintone class names are obtained and customized, and future specification changes may cause it to become inoperable. Use at your own risk.

## Author

[Maptomo](https://maptomo.com/)

