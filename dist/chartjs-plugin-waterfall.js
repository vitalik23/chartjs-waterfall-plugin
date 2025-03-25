(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.WaterfallPlugin = factory());
})(this, (function () { 'use strict';

  const waterfallPlugin = {
    id: "waterfallPluginId",
    beforeUpdate(chart) {
      if (chart.config.type !== 'bar') return;
      chart.data.datasets.forEach((dataset) => {
        if (!dataset.waterfall) return;
        let prevValue = 0;
        let data = [];
        dataset.data.forEach((value) => {
          const endValue = prevValue + value;
          data.push([prevValue, endValue]);
          prevValue = endValue;
        });
        dataset.data = data;
        dataset.borderSkipped = data.map((value) => {
          const start = value[0];
          const end = value[1];
          return Math.abs(start) >= Math.abs(end) ? "top" : "bottom";
        });
      });
    },
  };

  return waterfallPlugin;

}));
