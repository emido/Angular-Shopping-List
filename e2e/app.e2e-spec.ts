import { FinalProjectAppPage } from './app.po';

describe('final-project-app App', () => {
  let page: FinalProjectAppPage;

  beforeEach(() => {
    page = new FinalProjectAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
