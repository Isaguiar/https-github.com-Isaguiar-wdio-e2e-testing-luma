import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {

    
    get inputUsername () {
        return $('#email');
    }

    get inputPassword () {
        return $('#pass');
    }

    get btnSubmit () {
        return $('#send2');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

   
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
