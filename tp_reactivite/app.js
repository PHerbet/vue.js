const app = Vue.createApp({
    data() {
        return { 
        le_nombre:0
    };
    },
    methods: {
        
    },
    computed:{
            afficher_resultat() {
        if(this.le_nombre == 7){
            return '7 ... Bingo!';
        }
        if (this.le_nombre > 7){
            return 'Tu as dépassé le nombre !';
        }
        else{
            return 'essaie encore!!';
        }
        },
    },
    watch: {
        le_nombre(val) {setTimeout(() => {
            this.le_nombre = 0;
        }, 5000)
        }
    }}
    );
    app.mount('#monApp');