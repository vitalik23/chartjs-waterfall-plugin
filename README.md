# 📊 Chart.js Waterfall Plugin

A lightweight plugin for [Chart.js](https://www.chartjs.org/) that enables **waterfall chart** support using the native bar chart type.

## 🚀 Installation

You can include the plugin directly via **jsDelivr CDN**:

```html
<!-- Chart.js (required) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<!-- Waterfall plugin -->
<script src="https://cdn.jsdelivr.net/gh/vitalik23/chartjs-waterfall-plugin@v1.0.0/dist/chartjs-plugin-waterfall.min.js"></script>



## 🧪 Live Example / Code Tabs

<details>
  <summary>▶ Demo Preview</summary>

  ✅ Open the file in your browser to see the chart.

  <img src="https://user-images.githubusercontent.com/your-screenshot.png" alt="Waterfall chart preview" />

</details>

<details>
  <summary>💻 View Code</summary>

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/vitalik23/chartjs-waterfall-plugin@v1.0.0/dist/chartjs-plugin-waterfall.min.js"></script>
  </head>
  <body>
    <canvas id="waterfallChart"></canvas>
    <script>
      const config = {
        type: "bar",
        data: {
          labels: ['label 1', 'label 2', 'label 3', 'label 4', 'label 5'],
          datasets: [{
            label: 'Waterfall',
            data: [10, 23, -19, -10, 20],
            waterfall: true
          }]
        },
        plugins: [WaterfallPlugin],
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const val = ctx.raw;
                  if (Array.isArray(val)) {
                    return `Value: ${val[1] - val[0]}`;
                  }
                  return `Value: ${val}`;
                }
              }
            }
          }
        }
      };

      new Chart(document.getElementById("waterfallChart"), config);
    </script>
  </body>
</html>
