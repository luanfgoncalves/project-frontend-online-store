export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  if (query) {
    const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(urlQuery);
    const data = await response.json();
    return data;
  }
}
