<?php

$date = date("Y-m-d-H-i-s");
$nom_fichier = $date . ".txt";

$form['form'] = array(
    array(
        "nom" => "NA",
        "prénom" => "NA",
        "email" => "NA",
        "numéro" => "NA",
        "demande" => "NA"
    )
);


array_push($form['form'], array(
    "nom" => $_REQUEST['nom'],
    "prénom" => $_REQUEST['prenom'],
    "email" => $_REQUEST['email'],
    "numéro" => $_REQUEST['numero'],
    "demande" => $_REQUEST['demande']
)
);


$nom = $form['form'][1]['nom'];
$prenom = $form['form'][1]['prénom'];
$email = $form['form'][1]['email'];
$numero = $form['form'][1]['numéro'];
$demande = $form['form'][1]['demande'];

$formulaire = "Nom: " . $nom . " Prénom: " . $prenom . " Email: " . $email . " Numéro: " . $numero . " Demande: " . $demande;

$fp = fopen($nom_fichier, "x+");
fputs($fp, $formulaire);
fclose($fp);
echo "Information envoyé avec succés";
echo ' <input type="button" value="back" onclick="history.go(-1)">';
?>