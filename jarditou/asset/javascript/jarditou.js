const button = document.querySelector('button');
var mailVerif = RegExp('^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$');
var lettre = RegExp('^[a-zA-Zéè]+$');
var postalVerif = RegExp('^[0-9]{5}$');
let form = document.getElementById('coordonnées');
var nom = document.getElementById('nomError');
var prenom = document.getElementById('prenomError');
var genre = document.getElementById('genreError');
var postal = document.getElementById('postalError');
var email = document.getElementById('emailError');
var sujet = document.getElementById('sujetError');
var question = document.getElementById('questionError');
var accord = document.getElementById('accordError');
var date = document.getElementById('dateError');


button.addEventListener('click', (e) => {
    if (form.elements['nom'].value == '') {
        nom.innerHTML = "Veuillez saisir un nom <br>";
        e.preventDefault();
    }

    else if (lettre.test(form.elements['nom'].value) == false) {
        nom.innerHTML = 'Veuillez saisir un nom correct.<br>';
        e.preventDefault();

    }
    else {
        nom.innerHTML = "";
    }
    if (form.elements['prenom'].value == '') {
        prenom.innerHTML = '<br>Veuillez saisir le prenom<br>';
        e.preventDefault();

    }

    else if (lettre.test(form.elements['prenom'].value) == false) {
        prenom.innerHTML = '<br>Veuillez saisir un prenom correct.<br>';
        e.preventDefault();

    }
    else {
        prenom.innerHTML = '';
    }
    if (form.elements['genre'].value == false) {
        genre.innerHTML = 'Veuillez saisir votre genre<br>';
        e.preventDefault();

    }
    else {
        genre.innerHTML = '';
    }
    if (form.elements['postal'].value == '') {
        postal.innerHTML = 'Veuillez saisir votre code postal<br>';
        e.preventDefault();

    }
    else if (postalVerif.test(form.elements['postal'].value) == false) {
        postal.innerHTML = 'Veuillez saisir un code postal correct<br>';
        e.preventDefault();

    }
    else {
        postal.innerHTML = '';
    }
    if (form.elements['email'].value == '') {
        email.innerHTML = '<br>Veuillez saisir votre Email<br>';
        e.preventDefault();

    }
    else if (mailVerif.test(form.elements['email'].value) == false) {
        email.innerHTML = '<br>Veuillez saisir un Email correct.<br>';
        e.preventDefault();

    }
    
    else {
        email.innerHTML = '';
    }
    if (form.elements['sujet'].value == false) {
        sujet.innerHTML = 'Veuillez saisir un sujet.<br>';
        e.preventDefault();

    }
    else {
        sujet.innerHTML = '';
    }
    if (form.elements['question'].value == "") {
        question.innerHTML = '<br>Veuillez poser votre question dans le champ concerné.<br>';
        e.preventDefault();

    }
    else {
        question.innerHTML = '';
    }
    if (form.elements['accord'].checked == false) {
        accord.innerHTML = 'Veuillez cocher la case accord.<br>';
        e.preventDefault();
    }
    else {
        accord.innerHTML = '';
    }
    if (form.elements['date'].value == "") {
        date.innerHTML = 'veuillez saisir une date de naissance<br>';
        e.preventDefault();
    }
    else {
        date.innerHTML = '';
    }
});


