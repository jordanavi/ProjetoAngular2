import { ProjetoNovoPage } from './app.po';

describe('projeto-novo App', function() {
  let page: ProjetoNovoPage;

  beforeEach(() => {
    page = new ProjetoNovoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
