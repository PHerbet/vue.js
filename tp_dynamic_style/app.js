const app = Vue.createApp({
    data() {
        return {
        nomClasse: '',
        laCouleur: '',
        visible: true,
        };
    },
    computed: {
        //Version optimisé en passant par une fonction
        //Computed pour pas avoir d'interférences avec la ƒ° toggle
        classDynamique() {
        // return{
        //   maClasseHello: this.nomClasse ==='hello',
        //   maClasseWorld: this.nomClasse ==='world',
        //   maClasseHidden: !this.visible,
        //   maClasseVisible: this.visible
        // }
        if (this.nomClasse === 'hello') {
            return 'maClasseHello';
        }
        if (this.nomClasse === 'world') {
            return 'maClasseWorld';
        }
        if (this.visible) {
            return 'maClasseVisible';
        }
        if (!this.visible) {
            return 'maClasseHidden';
        }
        },
    },
    methods: {
        affichage() {
        this.visible = !this.visible;
        },
    },
    });
    app.mount('#monApp');