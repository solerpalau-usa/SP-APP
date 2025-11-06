  // Function to handle search result clicks
  function handleSearchResultClick(product, series, model) {
    const url = `../pages/products.html?product=${encodeURIComponent(product)}&series=${encodeURIComponent(series)}&model=${encodeURIComponent(model)}`;
    // Redirect the user to the product list page with the selected parameters
    window.location.href = url;
  }

