# 📊 Chart.js Waterfall Plugin

A lightweight plugin for [Chart.js](https://www.chartjs.org/) that enables **waterfall chart** support using the native bar chart type.

## 🚀 Installation

You can include the plugin directly via **jsDelivr CDN**:

```html
<!-- Chart.js (required) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Waterfall plugin -->
<script src="https://cdn.jsdelivr.net/gh/vitalik23/chartjs-waterfall-plugin@v1.0.0/dist/chartjs-plugin-waterfall.min.js"></script>
```

## 🔧 Usage Notes

To enable the waterfall functionality, you need to do two things:

1. **Register the plugin** by adding `WaterfallPlugin` to the `plugins` array in your chart configuration.
2. **Mark the dataset** with `waterfall: true` to activate waterfall behavior for that dataset.

### ✅ Example configuration:

```js
const config = {
  type: "bar",
  data: {
    labels: ['label 1', 'label 2', 'label 3', 'label 4', 'label 5'], // Your labels
    datasets: [
      {
        data: [10, 23, -19, -10, 20],  // Your data
        waterfall: true // IMPORTANT
      }
    ]
  },
  plugins: [WaterfallPlugin], // IMPORTANT
  options: {
    // optional configuration
  }
};
```
---

## 🧪 Demo

You can try a full working example here:

🔗 [View Full Example (basic.html)](https://github.com/vitalik23/chartjs-waterfall-plugin/tree/main/examples/basic.html)

> 💡 Open this file in your browser to see the waterfall chart in action.

---

