const regExpDic = {
  email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
  password: /^[0-9a-zA-Z]{4,}$/
};

/**
 * Функция валидации. Чекает словарь regExpDic и сверяет ключ с дата-атрибутом "data-required"
 * @param {HTMLInputElement} el 
 * @returns {Boolean} - Если валидно или нет дата-атрибута "data-required", то вовзращает true; в остальных случаях возвращает false
 */

export function validate(el) {
  const regExpName = el.dataset.required;

  if (!regExpDic[regExpName]) return true;

  return (regExpDic[regExpName]).test(el.value);
}