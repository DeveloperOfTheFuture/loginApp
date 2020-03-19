  /**
   * 
   * @param {String} msg 
   */

  function inputErrTemplate(msg) {
    return `
      <div class="invalid-feedback">${msg}</div>
    `;
  }

  /**
   * Функция добавления сообщения об ошибке в input
   * @param {HTMLInputElement} el 
   */

  export function showInputErr(el) {
    const parent = el.parentElement;
    const msg = el.dataset.invalidMessage || 'Invalid input';
    const template = inputErrTemplate(msg);
    el.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeend', template);
  }

  /**
   * function removeInputErr - удаляет сообщение об ошибке 
   * @param {HTMLInputElement} el 
   */

  export function removeInputErr(el) {
    const parent = el.parentElement;
    const err = parent.querySelector('.invalid-feedback');
    if (!err) return;

    el.classList.remove('is-invalid');
    parent.removeChild(err);
  }