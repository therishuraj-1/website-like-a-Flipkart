import { products as localProducts, getProductById as getLocalProductById } from '../data/products'

const BASE_URL = ''; 

async function request(path, options = {}) {
  if (!BASE_URL) {
    
    throw new Error('No BASE_URL configured');
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => null);
    throw new Error(text || res.statusText || 'Request failed');
  }

  return res.json();
}

export async function getProducts() {
  if (!BASE_URL) return Promise.resolve(localProducts);
  return request('/products');
}

export async function getProduct(id) {
  if (!BASE_URL) return Promise.resolve(getLocalProductById(id));
  return request(`/products/${id}`);
}

export async function createOrder(payload) {
  if (!BASE_URL) {
    return Promise.resolve({ orderId: 'LOCAL-' + Date.now(), ...payload });
  }
  return request('/orders', { method: 'POST', body: JSON.stringify(payload) });
}
