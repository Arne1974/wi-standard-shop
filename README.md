# Wizard Shop Standard (Shop Branch)

Hinzufügen/Entfernen und Versionupdate von Abhänigkeiten (dependencies), sowie Änderungen an Dateien.

Nur Änderungen, die Funktionsweise des Shop betreffen!

# Vorgehensweise 
Grundsätzlich gilt, nur mit <b>Branches</b> arbeiten! Der Master-Branch kann dabei unangetastet bleiben. 

    |
    |-- Shop        (hier nur shop files)
    |-- Mandant     (hier shop und template files)

Zum <b>Starten und Bearbeiten</b> eines Shop muss auf entsprechenden Branch gewechselt werden (siehe unten: Commands).

    git checkout <mandant>

<b>Änderungen an Shop</b> werden nach Möglichkeit nur auf Branch ´shop´ vollzogen! Anschliessend sollte in den Mandanten-Auftritt ge-merged werden.

    git checkout <mandant>
    git merge shop

<b>Änderungen an einem Auftritt eines Mandanten werden nur auf Branch `MandantÂ´ durchgeführt</b>, commitet und ge-pusht! Ggf. können einzelne Commits, die auf dem Mandant-Branch gemacht und dem Shop gelten, per cherry-pick von Mandant-Branch auf Shop-Branch geholt werden. Es wäre ratsam solche Commits klein zu halten, damit sich diese für solche Fälle nahtlos integrieren lassen.

Erzeugen eines <b>neuen Mandant-Branch</b>, erfolgt immer als Kopie des aktuellen Shop-Branches.

    git checkout shop
    git branch <neuer-mandant>
    git checkout <neuer-mandant>


# Git commands
Alle Branches anzeigen:

    git branch -a

Branch wechseln (Beispiel: mandant):

    git checkout <mandant>

Upstream für Branch (Beispiel: shop):

    git push --set-upstream origin shop


# Angular commands
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
