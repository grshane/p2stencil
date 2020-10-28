import { newSpecPage } from '@stencil/core/testing';
import { P2Hero } from '../p2-hero';

describe('p2-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [P2Hero],
      html: `<p2-hero></p2-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <p2-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p2-hero>
    `);
  });
});
