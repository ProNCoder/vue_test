const app = Vue.createApp({
    data() {
        return {
            nameBool: true,
            name: 'salom hammaga'
        }
    },
    methods: {
        tekshir() {
            this.nameBool = !this.nameBool
        }
    },

})

app.mount('#app')

//4 dars bu inkrement amali va tashqaridan uzgaruvchi berish
// data() {
//     return {
//         age: 22,
//         name: 'salom n'
//     }
// },
// methods: {
//     oshir() {
//         this.age = this.age + 1
//     },
//     qushish(name) {
//         this.name = name
//     }
// },