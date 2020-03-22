import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import {
  validate
} from './helpers/validate';
import {
  showInputErr,
  removeInputErr
} from './views/form';
import {
  login
} from './services/auth.service';
import {
  notify
} from './views/notifications';
import {
  getNews
} from './services/news.service';

const {
  form,
  inputEmail,
  inputPassword
} = UI;
const inputs = [inputEmail, inputPassword];

// login - denis.m.pcspace@gmail.com
// password - dmgame12345

//Events
form.addEventListener('submit', e => {
  e.preventDefault();
  onSubmit();
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputErr(el)));

async function onSubmit() {
  const isValidForm = inputs.every(el => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputErr(el);
    }

    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    form.reset();
    notify({
      msg: 'Login success',
      className: 'alert-success'
    });
  } catch (err) {
    notify({
      msg: 'Login failed',
      className: 'alert-danger'
    });
  }
}