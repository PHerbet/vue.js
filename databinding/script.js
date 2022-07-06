//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
            limage :'https://www.francetvinfo.fr/pictures/rM0hNrV-7t6RGDbrTvLu2y4M6qQ/0x0:635x357/944x531/filters:format(webp)/2016/08/23/internet-troll.jpg',
            nom : 'Troll',
            age : 45,
        };
    },
    methods: {
        random() {
            return Math.random();
        },
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('.profil');