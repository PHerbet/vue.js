const app = Vue.createApp({
    data() {
        return { 
        name_user: '', 
        user_name: '',
        };
    },
    methods: {
        afficher_name_user(event) {
            this.name_user = event.target.value;
        },
    },
    });
    
    app.mount('#monApp');