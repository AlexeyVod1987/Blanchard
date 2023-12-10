
const validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: 'dark red'
  }
});
validation
  .addField('#tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели телефон'
    }
  ])
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'required',
      value: true,
      errorMessage: 'Вы не ввели имя'
    }
  ]);


