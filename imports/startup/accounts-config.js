import { Accounts } from 'meteor/accounts-base';

// make the login template use username instead of email field
Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY',
});
