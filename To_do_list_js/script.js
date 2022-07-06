// définition des constantes 
const le_input = document.querySelector('.input');
const le_button = document.querySelector('.button');
const la_list = document.querySelector('.liste');
//fonction écoute du bouton et implémentation des tâches 
le_button.addEventListener('click', ajout_tache);

function ajout_tache ()
    {   // création de la <li></li>
        const li = document.createElement('li');
        //stockage de la valeur du input 
        const val = le_input.value;
        //complétion du texte du li
        li.textContent = val;
        //placement du li dans la ul
        la_list.append(li);
        //reboot de la valeur de l'input
        le_input.value = '';
    }