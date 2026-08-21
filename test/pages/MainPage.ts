export class MainPage {
    private url = 'https://www.shopgoodwill.com';

    private get searchBox() { return $('#txtGlobalSearch'); }
    private get searchButton() { return $('#button-addon2'); }
    private get searchDropdown() { return $('.drop-sort'); }
    private get priceItems() { return $$('.feat-item_price'); }

    public async loadPage() {
        browser.url(this.url);
    }

    public async searchFor(item: string) {
        await this.searchBox.click();
        await this.searchBox.setValue(item);
        await this.searchButton.click();
    }

    public async changeSortOrder(option: string) {
        await this.searchDropdown.click();
        await this.searchDropdown.setValue(option);
        const optionEl = await $(`//li[normalize-space()='${option}']`);
        await optionEl.click();

        const prices = await this.priceItems;
        const firstPrice = (await prices[0].getText()).replace('$', '').replace(',', '').trim();
        const lastPrice = (await prices[prices.length - 1].getText()).replace('$', '').replace(',', '').trim();
        return lastPrice < firstPrice;
    }
}