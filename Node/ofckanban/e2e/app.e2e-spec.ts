import { KanbanboardPage } from './app.po';

describe('kanbanboard App', () => {
  let page: KanbanboardPage;

  beforeEach(() => {
    page = new KanbanboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
