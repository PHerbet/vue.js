const app = Vue.createApp({
    data() {
        return {
        select_card1 : false,
        select_card2 : false,
    };
    },
    methods: {
        selection_card(une_card){
            if (une_card === 1 ){
                this.select_card1 = !this.select_card1;
            }
            if (une_card === 2) {
                this.select_card2 = !this.select_card2;
            }

        }
    },
});
    app.mount('#monApp');