(function() {
  "use strict";

  const renderingModel = {"name":"mt-kinportal","html":"<div class=\"designportal designportal-advanced\">\n    <div class=\"advanced-container\">\n      <div id=\"tabs\" class=\"advanced-tab-container\">\n        <button id=\"tab1\" role=\"tab\" class=\"advanced-tab advanced-tab--active\" type=\"button\" aria-expanded=\"true\">Standard</button>\n        <button id=\"tab2\" role=\"tab\" class=\"advanced-tab\" type=\"button\" aria-expanded=\"true\">Links</button>\n        <button id=\"tab3\" role=\"tab\" class=\"advanced-tab\" type=\"button\" aria-expanded=\"true\">Yourself</button>\n      </div>\n      <div class=\"advanced-panel-container\">\n        <div class=\"advanced-panel-contents mt-contents advanced-panel-contents--active\">\n          <div class=\"st-left\"></div>\n          <div class=\"st-right\"></div>\n        </div>\n        <div class=\"advanced-panel-contents mt-contents\">\n          <div class=\"gird-container\" id=\"gird-container\"></div>\n          <p style=\"line-height:800px;\">&nbsp;</p>\n        </div>\n        <div class=\"advanced-panel-contents mt-contents\">\n          <h3 class=\"advanced-heading1\">At this opportunity, try customizing your own portal.</h3>\n          <p style=\"line-height:800px;\">&nbsp;</p>\n        </div>\n      </div>\n    </div>\n  </div>","css":".designportal h1,\n.designportal h2, .designportal h3, .designportal h4,\n.designportal p,\n.designportal td,\n.designportal th,\n.designportal ul, .designportal dl, .designportal dd, .designportal dt, .designportal ol, .designportal button {\n  margin: 0;\n  padding: 0;\n}\n\n.designportal ul {\n  list-style: disc;\n}\n\n.designportal ol {\n  list-style: decimal;\n}\n\n.designportal button {\n  border: none;\n}\n\n.designportal-advanced {\n  display: block;\n  position: relative;\n  padding: 20px 0 5px;\n  background: #d8d8d8;\n}\n\n.designportal-advanced .advanced-list-item {\n  font-size: 1rem;\n  margin-bottom: 5px;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-list-item {\n    font-size: 1.6rem;\n    margin-bottom: 10px;\n  }\n}\n\n.designportal-advanced .advanced-panel--active {\n  background-color: #ffffff;\n  color: #333333;\n  z-index: 2;\n}\n\n.designportal-advanced .advanced-container {\n  margin: 0 auto;\n  max-width: 1800px;\n  width: 100%;\n}\n\n.designportal-advanced .advanced-tab-container {\n  display: flex;\n  list-style-type: none;\n  text-align: center;\n  margin: 0 10px 0 10px;\n  color: #333333;\n}\n\n@media screen and (max-width: 576px) {\n  .designportal-advanced .advanced-tab-container {\n    margin: 0 10px;\n  }\n}\n\n.designportal-advanced .advanced-tab {\n  display: block;\n  flex: 1;\n  width: 100%;\n  margin-right: 20px;\n  align-content: stretch;\n  padding: 15px 10px;\n  position: relative;\n  font-size: 1.2rem;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: #333333;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.designportal-advanced .advanced-tab:last-child {\n  margin-right: 0;\n}\n\n.designportal-advanced .advanced-tab:hover {\n  background-color: #666666;\n  color: #ffffff;\n}\n\n.designportal-advanced .advanced-tab:focus {\n  background-color: #ffffff;\n  color: #333333;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-tab {\n    font-size: 1.2rem;\n  }\n}\n\n@media screen and (max-width: 576px) {\n  .designportal-advanced .advanced-tab {\n    margin-right: 10px;\n  }\n}\n\n.designportal-advanced .advanced-tab--active {\n  background-color: #ffffff;\n  color: #333333;\n}\n\n.designportal-advanced .advanced-panel-container {\n  display: block;\n  position: relative;\n  margin: 0 10px 10px;\n  background-color: #ffffff;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.designportal-advanced .advanced-list-container {\n  display: flex;\n}\n\n@media screen and (max-width: 576px) {\n  .designportal-advanced .advanced-list-container {\n    display: block;\n  }\n}\n\n.designportal-advanced .advanced-list {\n  flex: 1;\n  padding: 0 0 18px 30px;\n  margin: 0 15px;\n}\n\n.designportal-advanced .advanced-list:first-child {\n  margin-left: 0;\n}\n\n.designportal-advanced .advanced-list:last-child {\n  margin-right: 0;\n}\n\n@media screen and (max-width: 576px) {\n  .designportal-advanced .advanced-list {\n    margin: 0;\n  }\n}\n\n.designportal-advanced .advanced-panel-contents {\n  display: none;\n  padding: 10px 0 0 0;\n  clear: both;\n  overflow: hidden;\n  color: #333333;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-panel-contents {\n    padding: 10px 0 0 0;\n  }\n}\n\n.designportal-advanced .advanced-panel-contents--active {\n  overflow: hidden;\n  display: block;\n}\n\n.designportal-advanced .advanced-panel-contents-group {\n  display: flex;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-panel-contents-group {\n    flex-direction: column;\n  }\n}\n\n.designportal-advanced .advanced-data {\n  display: block;\n}\n\n.designportal-advanced .advanced-img {\n  width: 100%;\n}\n\n.designportal-advanced .advanced-data--graph {\n  width: 100%;\n}\n\n.designportal-advanced .advanced-heading1 {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-heading1 {\n    font-size: 2.6rem;\n  }\n}\n\n.designportal-advanced .advanced-heading2 {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-heading2 {\n    font-size: 2rem;\n  }\n}\n\n.designportal-advanced .advanced-text {\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 1000px) {\n  .designportal-advanced .advanced-text {\n    font-size: 1.2rem;\n  }\n}\n\n.designportal-advanced .advanced-panel-contents-unit {\n  flex: 1;\n  margin: 0 30px 30px 0;\n}\n\n.designportal-advanced .advanced-panel-contents-unit:last-child {\n  margin-right: 0;\n}\n\n/* Standard portal weget */\n.gaia-argoui-widget {\n  border: 1px solid #eee;\n}\n\n/* Map image */\n.mt-contents {\n  background: url('https://raw.githubusercontent.com/maptomo/mt-kinportal/master/img/mt3.jpg');\n  background-size: cover;\n}\n\n/* Grid css */\n.gird-container {\n  margin: 0 auto;\n  padding: 0px;\n  width: 100%;\n  columns: auto 13em;\n  column-gap: 0;\n}\n\n.grid-item {\n  margin: 0 5px 5px 10px;\n  width: 85%;\n  height: 100%;\n  padding: 8px;\n  background-color: #fff;\n  border: 1px solid #eee;\n  opacity: 0.8;\n}\n\n.grid-item img {\n  width: 100%;\n}\n\n/*iframe css*/\n.map-container {\n  margin: 0 10px 5px 10px;\n}\n\n.map-iframe {\n  width: 100%;\n  height: 500px;\n  -webkit-filter: hue-rotate(100deg);\n  filter: hue-rotate(100deg);\n\tdisplay: block;\n\tpointer-events: auto; /* or none auto */\n\tposition: relative; /* IE needs a position other than static */\n}","js":"/*-------------------------------------------------------------------\nMaptomo Sample kintone portal csutomize.\n@maptomo 2019\nhttps://github.com/ushiront/maptomo-kinportal\n-------------------------------------------------------------------*/\n\n(function() {\n\n  \"use strict\";\n  \n  /*\n  Tab action is template.\n  https://github.com/kintone\n  portal-design-templates\n  */\n\n  var buttonEls = document.querySelectorAll('.advanced-tab');\n  var tabPanelEls = document.querySelectorAll('.advanced-panel-contents ');\n  \n  var removeAllButtonActive = function() {\n    buttonEls.forEach(function(buttonEl) {\n      buttonEl.classList.remove('advanced-tab--active');\n    });\n  };\n  \n  var removeAllButtonExpanded = function() {\n    buttonEls.forEach(function(buttonEl) {\n     buttonEl.setAttribute('aria-expanded', 'false');\n    });\n  };\n  \n  var removeAllTabPanelActive = function() {\n    tabPanelEls.forEach(function(tabPanelEl) {\n      tabPanelEl.classList.remove('advanced-panel-contents--active');\n    });\n  };\n  \n  var getTabNumber = function(buttonEl) {\n    var number = 0;\n    for (; number < buttonEls.length; number++) {\n      if (buttonEls[number] === buttonEl) {\n        break;\n      }\n    }\n    return number;\n  };\n  \n  \n  var handleClick = function(evt) {\n    removeAllButtonActive();\n    evt.target.classList.add('advanced-tab--active');\n  \n    removeAllButtonExpanded();\n    evt.target.setAttribute('aria-expanded', 'true');\n  \n    var tabNumber = getTabNumber(evt.target);\n  \n    removeAllTabPanelActive();\n    tabPanelEls[tabNumber].classList.add('advanced-panel-contents--active');\n  };\n  \n  buttonEls.forEach(function(buttonEl) {\n    buttonEl.addEventListener('click', handleClick);\n  });\n\n  /*\n  Original code.\n  */\n\n  /*\n  Load MagicGrid min.js\n  https://github.com/e-oj/Magic-Grid\n  */\n  var script_magic_grid = document.createElement('script');\n  script_magic_grid.src = 'https://unpkg.com/magic-grid/dist/magic-grid.min.js';\n  document.body.appendChild(script_magic_grid);\n  \n  /*\n  Draw standard tab to kintone css\n  ** It may stop working if the CSS specification changes.\n  */\n  console.log(location.href);\n  var drawStandardVeiw = function(viewType) {\n    var st_left = document.getElementsByClassName('st-left');\n    var st_right = document.getElementsByClassName('st-right');\n\n    switch(viewType){\n      case 'portal.show':\n        st_left[0].appendChild(document.getElementsByClassName('ocean-portal-body-left')[0]);\n        st_right[0].appendChild(document.getElementsByClassName('ocean-portal-body-right')[0]);\n        break;\n\n      case 'mobile.portal.show': \n        st_left[0].appendChild(document.getElementsByClassName('gaia-mobile-v2-portal-announcement')[0]);\n        st_left[0].appendChild(document.getElementsByClassName('gaia-mobile-v2-portal-appwidget')[0]);\n        st_left[0].appendChild(document.getElementsByClassName('gaia-mobile-v2-portal-spacewidget')[0]);\n        break;\n      \n      default:\n        break;\n    }\n  }\n\n  /*\n  Draw MagicGrid by event type.\n  */\n  var drawGrid = function(type) {\n\n    var maxColumns = 6;\n    (type === 'mobile.portal.show')? maxColumns = 3 : maxColumns = 6;\n    if (type === 'mobile.portal.show'){\n      var container = document.getElementsByClassName('gird-container');\n      container.setAttribute('column', '3 11em');\n    }\n\n    var magicGrid = new MagicGrid({\n      container: '#gird-container',\n      static: false,\n      items: 100,\n      animate: true,\n      gutter: 30,\n      maxColumns: maxColumns,\n      useMin: true\n    });\n    magicGrid.listen();\n  };\n\n  /*\n  Get viewer type. pc type or mobile type.\n  */\n  var getViewType = function() {\n\n    var vw_type = 'portal.show';\n    var pathname = window.location.pathname;\n    if (pathname.indexOf('/k/m') !== -1) {\n      vw_type = 'mobile.portal.show'; \n    }\n    console.log(vw_type);\n    return vw_type;\n  }\n\n  // Get view type return portal.show|mobile.portal.show\n  var viewType = getViewType();\n\n  // Tab2 --------------------------------------------\n  var query = {\n    'app': 20, //appID\n    'query': 'order by Update_day desc',\n    'size': 100 //max 500\n  };\n\n  var elem_main = document.getElementById('gird-container');\n  var local_domain = location.hostname;\n\n  // Post kintone cursor api\n  kintone.api(kintone.api.url('/k/v1/records/cursor', true), 'POST', query, function(resp1) {\n    // Get records by cursor id\n    return kintone.api(kintone.api.url('/k/v1/records/cursor', true), 'GET', {'id':resp1.id}, function(resp) {\n      \n      var records = resp.records;\n      var i = 0;\n      for (; i < records.length; i++) {\n\n        // -- Link element\n        var elem_link = document.createElement('a');\n        var link = records[i]['Link']['value'];\n\n        // Check the value is numeric\n        if (isFinite(link)){\n          link =  location.origin + \"/k/\" + records[i]['Link']['value'];\n        }\n\n        if (link.indexOf(local_domain) === -1){ \n          elem_link.setAttribute('target', '_blank'); \n        }\n        elem_link.setAttribute('href', link);\n\n        // -- Image element\n        var elem_img = document.createElement('img');\n        elem_img.setAttribute('src', records[i]['Image']['value']);\n\n        // -- Item element\n        var elem_item = document.createElement('div');\n        elem_item.setAttribute('class', 'grid-item');\n\n        // -- Apend\n        elem_link.appendChild(elem_img);\n        elem_link.appendChild(document.createTextNode(records[i]['Name']['value']));\n        elem_item.appendChild(elem_link);\n        elem_main.appendChild(elem_item);\n\n      }\n      drawGrid(viewType);\n\n    }, function(error) {\n      // error\n      console.log(error);\n      elem_main.appendChild(document.createTextNode(error.message))\n    });  \n  });\n\n  // Tab1 --------------------------------------------\n  drawStandardVeiw(viewType);\n\n})();\n","headerColor":"","toolbarColor":"","hiddenPortalHeader":true,"portalHeaderColor":"","customize_version":1};

  const KINTONE_PORTAL_DESIGNER_HTML = "kintone-portal-designer-html";
  const KINTONE_PORTAL_DESIGNER_CSS = "kintone-portal-designer-css";
  const KINTONE_PORTAL_DESIGNER_JS = "kintone-portal-designer-js";

  function addCustomizedContentTo(model, entryPointEl) {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = model.css;
    styleEl.classList.add(KINTONE_PORTAL_DESIGNER_CSS);
    entryPointEl.appendChild(styleEl);

    const innerEl = document.createElement("div");
    innerEl.innerHTML = model.html;
    innerEl.classList.add(KINTONE_PORTAL_DESIGNER_HTML);
    entryPointEl.appendChild(innerEl);

    const scriptEl = document.createElement("script");
    scriptEl.innerHTML = model.js;
    scriptEl.classList.add(KINTONE_PORTAL_DESIGNER_JS);

    entryPointEl.appendChild(scriptEl);
  }

  function removeCustomizedContent() {
    const customizedEls = [
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_JS)[0],
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_HTML)[0],
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_CSS)[0]
    ];
    customizedEls
      .filter(function(el) {
        return !!el;
      })
      .forEach(function(el) {
        el.parentNode.removeChild(el);
      });
  }

  function addImportantCssRule(selector, property, value) {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `${selector} { ${property}: ${value} !important; }`;
    const headEl = document.querySelector("head");
    headEl.appendChild(styleEl);
  }

  function updateHeaderColor() {
    const headerColor = renderingModel.headerColor;
    if (!headerColor) {
      return;
    }
    addImportantCssRule(".gaia-header-header", "background", headerColor);
  }

  function updateToolbarColor() {
    const toolbarColor = renderingModel.toolbarColor;
    if (!toolbarColor) {
      return;
    }
    addImportantCssRule(".gaia-header-toolbar", "background", toolbarColor);
  }

  function hiddenPortalHeader() {
    if (!renderingModel.hiddenPortalHeader) {
      return;
    }
    addImportantCssRule(".ocean-portal-index-header", "display", "none");
  }

  function updatePortalHeaderColor() {
    const portalHeaderColor = renderingModel.portalHeaderColor;
    if (!portalHeaderColor) {
      return;
    }
    addImportantCssRule(
      ".ocean-portal-index-header-img",
      "background",
      portalHeaderColor
    );
  }

  kintone.events.on("portal.show", function() {
    removeCustomizedContent();
    addCustomizedContentTo(
      renderingModel,
      kintone.portal.getContentSpaceElement()
    );
  });

  updateHeaderColor();
  updateToolbarColor();
  hiddenPortalHeader();
  updatePortalHeaderColor();
})();