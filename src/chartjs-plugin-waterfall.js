
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
export default waterfallPlugin;