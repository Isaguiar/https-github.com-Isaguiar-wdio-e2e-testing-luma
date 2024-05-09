import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogOutPage extends Page {
    
    get logoutLink () {
        return $('a[href=href="https://magento.softwaretestingboard.com/customer/account/logout/"]');
    }

    async log0ut () {
        await this.inputUsername.logoutLink;
        await this.logoutLink.click();
    }

}

export default new LogOutPage();
