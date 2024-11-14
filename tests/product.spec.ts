import { test, expect } from '@playwright/test';

test.describe('Product Tests', () => {
  test('Verify list products with success', async ({ request }) => {
    const response = await request.get('https://automationexercise.com/api/productsList');

    console.log(await response.json());
    // Asserções
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    
    const productNames = responseBody.products.map((product: { name: string }) => product.name);
    expect(productNames).toContain("Blue Top");
    expect(productNames).toContain("Madame Top For Women");
  });
});
