import { RecieptAPPPage } from './app.po';

describe('reciept-app App', () => {
  let page: RecieptAPPPage;

  beforeEach(() => {
    page = new RecieptAPPPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
