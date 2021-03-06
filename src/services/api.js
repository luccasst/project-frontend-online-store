export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export async function getProductsId(id) {
  const URL = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
