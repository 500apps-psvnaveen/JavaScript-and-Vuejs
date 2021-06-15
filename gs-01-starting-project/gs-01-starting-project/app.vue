Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }

}).mount('#app');

// 'use strict';

// const inputEl = document.querySelector('#goal');
// const listEl = document.querySelector('ul');
// const buttonEl = document.querySelector('#btn1');

// buttonEl.addEventListener('click', function () {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// });

