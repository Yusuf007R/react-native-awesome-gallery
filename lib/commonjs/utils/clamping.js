"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRubberBandClamp = exports.rubberBandClamp = exports.clamp = void 0;

const clamp = (value, min, max) => {
  'worklet';

  return Math.max(Math.min(value, max), min);
};

exports.clamp = clamp;

const rubberBandClamp = (x, coeff, dim) => {
  'worklet';

  return (1.0 - 1.0 / (x * coeff / dim + 1.0)) * dim;
};

exports.rubberBandClamp = rubberBandClamp;

const withRubberBandClamp = (x, coeff, dim, limits) => {
  'worklet';

  let clampedX = clamp(x, limits[0], limits[1]);
  let diff = Math.abs(x - clampedX);
  let sign = clampedX > x ? -1 : 1;
  return clampedX + sign * rubberBandClamp(diff, coeff, dim);
};

exports.withRubberBandClamp = withRubberBandClamp;
//# sourceMappingURL=clamping.js.map