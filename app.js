const app = Vue.createApp({
    data() {
        return {
            firstName: 'Wenzhang',
            lastName: 'Ge',
            email: 'wenzhangge20@gmail.com',
            gender: 'male',
            state: 'Shanghai',
            country: 'China', 
            picture: 'https://avatars.githubusercontent.com/u/84969535?v=4'
        }
    }, 
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.state = results[0].location.state
            this.country = results[0].location.country
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')