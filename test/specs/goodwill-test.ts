import { MainPage } from '../pages/MainPage';

describe('ShopGoodwill Tests', () => {
    const mainPage = new MainPage();

    beforeEach(async () => {
        await mainPage.loadPage();
    });

    it('should navigate to main page', async () => {
        const title = await browser.getTitle();
        expect(title).toContain('ShopGoodwill.com');
    });

    it('should search for item', async () => {
        await mainPage.searchFor('sony');
    });

    it('should change sort order', async () => {
        expect(await mainPage.changeSortOrder('Price: Lowest First')).toBe(true);
    });
});