/* eslint-disable no-undef */
/* eslint-disable unicorn/prefer-module */
const { JSDOM } = require("jsdom");

const dom = new JSDOM("<!doctype html><html><body></body></html>", {});

global.document = dom.window.document;
global.window = dom.window;
global.navigator = {
  userAgent: "node.js",
};
