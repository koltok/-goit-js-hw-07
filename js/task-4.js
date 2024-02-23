//відправлення форми form.login-form повинна відбуватися за подією submit.
//Під час відправлення форми сторінка не повинна перезавантажуватися.
//Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'.
// Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
//Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
//При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const loginForm = document.querySelector(".login-form");
function formHandler(event) {
event.preventDefault ();
if (event.target.email.value === ""||event.target.password.value === "")
{alert ("All form fields must be filled in");
}
const data = {
    email:event.target.email.value,
    password:event.target.password.value,
};
console.log (data);
event.target.reset();};

loginForm.addEventListener ("submit", formHandler);

