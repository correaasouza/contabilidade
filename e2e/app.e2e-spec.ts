import { ContabilidadePage } from './app.po';

describe('contabilidade App', () => {
  let page: ContabilidadePage;

  beforeEach(() => {
    page = new ContabilidadePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
