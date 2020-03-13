import { CStoreApiTemplatePage } from './app.po';

describe('CStoreApi App', function() {
  let page: CStoreApiTemplatePage;

  beforeEach(() => {
    page = new CStoreApiTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
