import { newE2EPage } from '@stencil/core/testing';

describe('p2-hero', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p2-hero></p2-hero>');

    const element = await page.find('p2-hero');
    expect(element).toHaveClass('hydrated');
  });
});
