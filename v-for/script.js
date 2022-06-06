const app = Vue.createApp({
data() {
    return {
        
        users: [
            {name: 'Normatjon', job: 'Nodejs developer'},
            {name: 'Jamshid', job: 'Vuejs developer'},
            {name: 'Oybek', job: 'Django developer'}
        ]
    }
},
})

app.mount('#main')