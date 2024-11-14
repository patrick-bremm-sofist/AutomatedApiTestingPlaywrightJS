import { test, expect } from '@playwright/test';

test.describe('Login API Tests', () => {
  test('Verify login with invalid user', async ({ request }) => {
    // Realiza a chamada para a API utilizando o Playwright
    
    const formData = new FormData();
    formData.append('email', 'patrick.bremm@sofist.co');
    formData.append('password', '12345678');

    const response = await request.post('https://automationexercise.com/api/verifyLogin', {
      multipart: {
        email: 'patrick.bremm@netlex.com.br',
        password: '123456789'
      }
    });

    console.log("PATRICK");
    console.log(await response.json());
    // Asserções
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(404);
    expect(responseBody.message).toBe('User not found!');
  });
});
