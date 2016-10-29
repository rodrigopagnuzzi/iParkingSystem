import { IParkingSystemPage } from './app.po';

describe('i-parking-system App', function() {
  let page: IParkingSystemPage;

  beforeEach(() => {
    page = new IParkingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
