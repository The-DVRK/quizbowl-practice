// Quizbowl Practice — Google Apps Script wrapper.
// Serves the app from GitHub through Google's servers, so the browser only talks to google.com.
const BASE = 'https://raw.githubusercontent.com/The-DVRK/quizbowl-practice/main/';

function doGet() {
  const html = UrlFetchApp.fetch(BASE + 'index.html').getContentText();
  return HtmlService.createHtmlOutput(html)
    .setTitle('Quizbowl Practice')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Called from the page to load question files (e.g. "data/t2019.json").
function getData(path) {
  if (!/^data\/[a-z0-9]+\.json$/.test(path)) throw new Error('bad path');
  return UrlFetchApp.fetch(BASE + path).getContentText();
}
