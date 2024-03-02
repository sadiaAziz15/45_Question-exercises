"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, would ypu like to learn some python today?`);
}
else {
    alert('ypu have to fill your name !');
}
