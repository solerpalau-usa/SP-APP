document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".product-list-container");

  // Function to extract URL parameters
  function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Extract product, series, and model parameters from the URL
  const selectedProduct = getUrlParameter("product");
  const selectedSeries = getUrlParameter("series");
  const selectedModel = getUrlParameter("model");

  // Display Product, Series, and Model Info
  function displayInfo() {
    fetch("../data/products.json")
      .then((response) => response.json())
      .then((products) => {
        const product = products.find(p => p.name === selectedProduct);
        if (product) {
          displayProductDetails(product);
          const series = product.series.find(s => s.name === selectedSeries);
          if (series) {
            displaySeriesDetails(series);
            if (selectedModel) {
              const model = series.models.find(m => m.name === selectedModel);
              if (model) {
                displayModelDetails(model);
              }
            }
          }
        }
      })
      .catch((error) => console.error("Error fetching product data:", error));
  }

  // Display product details
  function displayProductDetails(product) {
    const productInfoContainer = document.createElement("div");
    productInfoContainer.className = "product-info";
    productInfoContainer.innerHTML = `<h2>${product.name}</h2>`;
    productContainer.appendChild(productInfoContainer);
  }

  // Display series details
  function displaySeriesDetails(series) {
    const seriesInfoContainer = document.createElement("div");
    seriesInfoContainer.className = "series-info";
    seriesInfoContainer.innerHTML = `<h3>${series.name}</h3><p>${series.description}</p>`;
    productContainer.appendChild(seriesInfoContainer);
  }

  // Display model details
  function displayModelDetails(model) {
    const modelInfoContainer = document.createElement("div");
    modelInfoContainer.className = "model-info";
    modelInfoContainer.innerHTML = `<h4>${model.name}</h4><p>Price: ${model.price}</p>`;
    productContainer.appendChild(modelInfoContainer);
  }

  displayInfo();

  // Listen for changes in the history state to update the content dynamically
  window.addEventListener("popstate", () => {
    productContainer.innerHTML = ""; // Clear existing content
    displayInfo(); // Redisplay information based on the new URL state
  });
});
