//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        tasks: [],
        valeurDeInput: '',
        };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        random() {
            const i = Math.random(10);
            if (i>0.5) {
                return("fini");
            }
            else {
                return("terminé");
            }
        },
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('.random');