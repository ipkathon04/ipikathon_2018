// Empty JS for your own code to be here
$(document).ready(function () {
    $("#vis").hide();
    $("#cdpform").click(function () {
        $("#titleform").html("DIGITALENTS : EXPERT EN INGÉNIERIE LOGICIELLE");
        $("#contenuform").html("Parcours évolutifs permettant d’acquérir une méthodologie solide pour prendre en charge le développement d’applications informatiques suite à l’expression des exigences fournies par un client ou un chef de projet");
        $("#vis").show();
    });
    $("#devweb").click(function () {
        $("#titleform").html("UDEV");
        $("#contenuform").html("Le cursus UDEV, Ecole du développeur CGI a été créé par CGI en partenariat avec l’IPI pour répondre à un fort besoin de recrutement de développeurs informatiques.");
        $("#vis").show();
    });
    $("#devfs").click(function () {
        $("#titleform").html("CONCEPTEUR DEVELOPPEUR FULLSTACK");
        $("#contenuform").html("Le cursus « Concepteur Développeur Full-Stack » permet d’acquérir une méthodologie solide pour prendre en charge le développement d’applications informatiques suite à l’expression des exigences fournies par un client et/ou un chef de projet.");
        $("#vis").show();
    });
    $("#adminr").click(function () {
        $("#titleform").html("ADMINISTRATEUR SYSTÈMES ET RÉSEAUX");
        $("#contenuform").html("L’administrateur système/réseaux est un spécialiste possédant des compétences pointues sur son domaine d'activité. Il gère au quotidien l’existant, optimise et fait évoluer le réseau et les systèmes de l’entreprise. Il assure généralement des fonctions de conseil, de formation, et pratique une veille technologique permanente.");
        $("#vis").show();
    });
    $("#cdpr").click(function () {
        $("#titleform").html("CHEF DE PROJET RÉSEAUX ET SÉCURITÉ");
        $("#contenuform").html("Le Chef de Projet Informatique recouvre une gamme de métiers différents, de la conception à la maintenance en passant par la réalisation et le déploiement. Il est capable de mener seul ou en équipe, la réalisation d ’une application informatique depuis l’analyse des besoins jusqu’aux tests, la mise en route et la formation des utilisateurs");
        $("#vis").show();
    });
    $("#techr").click(function () {
        $("#titleform").html("TECHNICIEN SUPÉRIEUR EN TECHNOLOGIES NUMÉRIQUES");
        $("#contenuform").html("Le (la) technicien(ne) supérieur(e) en technologies numériques assure, non seulement, des tâches de diagnostic, d’entretien préventif, de maintenance corrective des matériels informatiques ou logiciels (micro, moyens ou gros systèmes, Smartphones, tablettes, …), mais aussi des fonctions d’expertise élevée sur des produits (matériel ou logiciel réseaux) spécifiques ( sécurité, sauvegarde, …)");
        $("#vis").show();
    });
});