# Wizard Shop Standard (wizard-shop-standard)

## Vorgehensweise 
Grundsätzlich gilt, nur mit <b>Branches</b> arbeiten! Der Master-Branch kann dabei unangetastet bleiben. 

    |
    |-- Shop        (hier nur shop files)
    |-- Mandant     (hier shop und template files)

Zum <b>Starten und Bearbeiten</b> eines Shop muss auf entsprechenden Branch gewechselt werden (siehe unten: Commands).

    git checkout <mandant>

<b>Änderungen an Shop</b> werden nach Möglichkeit nur auf Branch ´shop´ vollzogen! Anschliessend sollte in den Mandanten-Auftritt ge-merged werden.

    git checkout <mandant>
    git merge shop

<b>Änderungen an einem Auftritt eines Mandanten werden nur auf Branch `Mandant´ durchgeführt</b>, commitet und ge-pusht! Ggf. können einzelne Commits, die auf dem Mandant-Branch gemacht und dem Shop gelten, per cherry-pick von Mandant-Branch auf Shop-Branch geholt werden. Es wäre ratsam solche Commits klein zu halten, damit sich diese für solche Fälle nahtlos integrieren lassen.

Erzeugen eines <b>neuen Mandant-Branch</b>, erfolgt immer als Kopie des aktuellen Shop-Branches.

    git checkout shop
    git branch <neuer-mandant>
    git checkout <neuer-mandant>


## Commands
Alle Branches anzeigen:

    git branch -a

Branch wechseln (Beispiel: shop):

    git checkout shop

Upstream für Branch (Beispiel: ´mandant´):

    git push --set-upstream origin <mandant>

#

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.
