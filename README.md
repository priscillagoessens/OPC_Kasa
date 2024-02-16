Contexte :
Kasa souhaite sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

Objectif : 
Developper l'application en React, en utilisant des composants modulaires et reutilisables, du scss pour la partie style et respectant les contraintes fonctionnelles suivantes :
- Pour le carousel :
    Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", le carousel affiche la dernière image. 
    Inversement, quand l'image affichée est la dernière, si l'utilisateur clique sur "Image suivante", le carousel affiche la première image. 
    S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
    La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
-Dropdown (Collapse): 
    Par défaut, les Collapses sont fermés à l'initialisation de la page. 
    Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
- Page erreur:
    La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées.


Run :
Dans le projet lancer la commande suivante:
    npm start
Ouvrir dans un navigateur l'url :
    http://localhost:3000


https://github.com/facebook/create-react-app


