// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

const {reloadApp} = require('./reload');

describe('Example', () => {
  // beforeAll(async () => {
  //   await reloadApp();
  // });

  it('should have the splash screen first and go to login screen', async () => {
    await element(by.id('goto-login')).tap();
  });

  it('should go to home screen after logging in', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
    await element(by.id('login-button')).tap();
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should welcome to home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
