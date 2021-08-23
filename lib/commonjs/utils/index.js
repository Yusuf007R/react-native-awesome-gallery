"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clamping = require("./clamping");

Object.keys(_clamping).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _clamping[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _clamping[key];
    }
  });
});

var _withDecaySpring = require("./withDecaySpring");

Object.keys(_withDecaySpring).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _withDecaySpring[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withDecaySpring[key];
    }
  });
});
//# sourceMappingURL=index.js.map