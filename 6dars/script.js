const app = Vue.createApp({
    data() {
        return {
            x: 0,
            y: 0,
            z: 0

        }
    },
    methods: {
        result() {
            console.log('hello');

        }
    },
    // newName(e) {
    //     this.x = e.offsetX,
    //         this.y = e.offsetY

    // }
})
app.mount('#main')