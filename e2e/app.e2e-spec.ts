import { OperatorInterfacePage } from './app.po';

describe('operator-interface App', () => {
  let page: OperatorInterfacePage;

  beforeEach(() => {
    page = new OperatorInterfacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
