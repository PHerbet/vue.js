//! Avec plusieurs methods qui doivent réagir à des évènements on rencontre un
//! "problème", Ici notre fonction afficheNameUser est déclenchée même si on utilise les boutons
//! du système de compteur.

//? Pour des gains de rapidité / performances, VUE ne va pas analyser en détails chaque fonction
//? Du coup dès qu'il ya un changement dans le DOM VUE execute toutes les methods
// const app = Vue.createApp({
// data() {
//     return { 
//     leNombre:0,nameUser: ''};
// },

// methods: {
//     afficherNameUser() {
//     console.log('fonction exécutée');
//     if(this.nameUser ===''){
//         return 'test'
//     }
//     else{
//         return 'autre Test';        
//     }
//     },
//     augmenter(num){
//     this.leNombre += num;
//     },
//     reduire(num){
//         this.leNombre -= num;
//     },
// }
// });
// app.mount('#monApp');

//! Pour solutionner ce problème VUE nous met à dispositions des computed Properties
//! Côté template on fera juste référence à notre fonction afficherNameUser
//! Avec les computed properties, déormais VUE va analyser en détail nos fonctions et il ne les execute
//! uniquement si il y a un changement sur une ou plusieurs variables utilisée dans la dite fonction
const app = Vue.createApp({
    data() {
        return { 
        leNombre:0,nameUser: ''};
    },
    methods: {
        augmenter(num){
        this.leNombre += num;
    },
    reduire(num){
        this.leNombre -= num;
    },
    },
    computed:{
            afficherNameUser() {
        console.log('fonction executée');
        if(this.nameUser ===''){
            return 'test'
        }
        else{
            return 'autre Test';
        }
        },
    }
    });
    app.mount('#monApp');