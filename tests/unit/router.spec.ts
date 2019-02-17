import router from '@/router';
describe('router', () => {
  it('should be object with routes', () => {
    expect(router).toBeTruthy();
    expect(Array.isArray((router as any).options.routes)).toBeTruthy();
  });
});
