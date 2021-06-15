const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: ''
    };
  },
  methods: {

    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, name) {
      this.name = event.target.value + ' ' + name;
    },
    noSubmit(event) {
      // event.preventDefault();
      alert(event.target.value);
    },
    confirmEvent(event) {
      this.confirmName = event.target.value;
    }
  }
});

app.mount('#events');
