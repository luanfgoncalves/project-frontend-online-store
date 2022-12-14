const URL = (endpoint) => `https://api.mercadolibre.com/sites/MLB/${endpoint}`;

export async function getCategories() {
  // const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  // const response = await fetch(URL);
  const response = await fetch(URL('categories'));
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId) {
    // const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const response = await fetch(URL(`search?category=${categoryId}`));
    const data = await response.json();
    return data;
  }
  if (query) {
    // const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(URL(`search?q=${query}`));
    // const response = await fetch(urlQuery);
    const data = await response.json();
    return data;
  }
  if (categoryId && query) {
    // const request = fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    const request = await fetch(URL(`search?category=${categoryId}&q=${query}`));
    const data = await request.json();
    return data;
  }
}
