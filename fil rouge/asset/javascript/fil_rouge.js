document.addEventListener('DOMContentLoaded', function () {
    // Sélection du formulaire
    const formulaire = document.getElementById('coordonnées');

    // Sélection des champs du formulaire
    const nomChamp = document.getElementById('nom');
    const prenomChamp = document.getElementById('prenom');
    const emailChamp = document.getElementById('email');
    const numeroChamp = document.getElementById('numero');

    // Sélection des zones d'erreur
    const nomError = document.getElementById('nomError');
    const prenomError = document.getElementById('prenomError');
    const emailError = document.getElementById('mailError');
    const numeroError = document.getElementById('numeroError');

    // Fonction de validation du nom
    function validateNom() {
        const nom = nomChamp.value.trim();
        const regexLettres = /^[a-zA-Z]+$/;

        if (nom === '') {
            nomError.textContent = 'Veuillez saisir votre nom.';
            nomError.style.color = 'red';
            nomError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false;
        }
        else if (!regexLettres.test(nom)) {
            nomError.textContent = 'Veuillez saisir un nom valide.';
            nomError.style.color = 'red';
            nomError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false; 
        }
         else {
            nomError.textContent = ''; // Effacer le message d'erreur
            return true;
        }
    }

    // Fonction de validation du prénom
    function validatePrenom() {
        const prenom = prenomChamp.value.trim();
        const regexLettres = /^[a-zA-Z]+$/;
        if (prenom === '') {
            prenomError.textContent = 'Veuillez saisir votre prénom.';
            prenomError.style.color = 'red';
            prenomError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false;
        } 
        else if (!regexLettres.test(prenom)) {
            prenomError.textContent = 'Veuillez saisir un prénom valide.';
            prenomError.style.color = 'red';
            prenomError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false; 
        }
        else {
            prenomError.textContent = ''; // Effacer le message d'erreur
            return true;
        }
        
    }

    // Fonction de validation de l'email
    function validateEmail() {
        const email = emailChamp.value.trim();
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email === '') {
            emailError.textContent = 'Veuillez saisir votre adresse e-mail.';
            emailError.style.color = 'red';
            emailError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false;
        } 
        else if (!regexEmail.test(email)) {
            emailError.textContent = 'Veuillez saisir une adresse e-mail valide.';
            emailError.style.color = 'red';
            emailError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false;
        } 
        else {
            emailError.textContent = ''; // Effacer le message d'erreur
            return true;
        }
    }

    // Fonction de validation du numéro de téléphone
    function validateNumero() {
        const numero = numeroChamp.value.trim();

        if (numero === '') {
            numeroError.textContent = 'Veuillez saisir votre numéro de téléphone.';
            numeroError.style.color = 'red';
            numeroError.style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
            return false;
        } 
        else {
            numeroError.textContent = ''; // Effacer le message d'erreur
            return true;
        }
    }

    // Écouteur d'événement pour soumettre le formulaire
    formulaire.addEventListener('submit', function (e) {
        // Valider chaque champ
        const isNomValid = validateNom();
        const isPrenomValid = validatePrenom();
        const isEmailValid = validateEmail();
        const isNumeroValid = validateNumero();

        // Empêcher l'envoie du formulaire si l'un des champs est invalide
        if (!isNomValid || !isPrenomValid || !isEmailValid || !isNumeroValid) {
            e.preventDefault();
        }
    });
});


