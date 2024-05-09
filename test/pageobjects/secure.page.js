import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get errorMessage () {
        return $('div[data-ui-id="message-error"]');
    }

    get emailErrorMessage () {
        return $('div[id="email-error"]');
    }

    get passErrorMessage () {
        return $('div[id="email-error"]');
    }

    get pageUrl () {
        return browser.getUrl();
    }

    async checkUrl (path) {
        let completePath = await this.pageUrl
        return completePath.includes(path);
    }

}

export default new SecurePage();
