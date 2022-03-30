---
title: "IDE und Tools"
linkTitle: "IDE und Tools"
weight: 1
date: 2022-02-16
description: >
    In diesem Kapitel werden die IDE und genutzte Tools in der Theorie beschrieben, Anleitungen platziert oder auch vereinzelte Aufgaben gestellt.
---

## IDE
Während des Moduls wirst du mit Visual Studio Code arbeiten. Visual Studio Code ist ein kostenloser Codierungseditor, mit dem du schnell mit dem Coden beginnen kanst. Du kannst Visual Studio Code verwenden, um in jeder Programmiersprache zu programmieren, ohne den Editor zu wechseln. Es unterstützt viele Sprachen, darunter sind JavaScript, Angular, Vue und viele mehr. Bei Lernenden von anderen Institutionen musst du deine/n üK-Leiter:in fragen, welche IDE ihr benutzen werdet. 
https://code.visualstudio.com/

![task1](/images/task.png) 15' - Einzelarbeit

    Installiere die IDE und richte sie entsprechend deiner Präferenz ein.
    Folgende Extensions sind praktisch für die Entwicklung von Webapps:
    - Bracket Pair Colorizer
    - Code Spell Checker
    - ESLint
    - GitLens
    - Material Iconm Theme
    - Path Intellisense
    - Prettier – Code formatter

### Git
Git ist dir bereits bekannt ein Codeversionierungssystem, welches bei diesem Modul genutzt wird.

![task2](/images/task.png) 5' - Einzelarbeit
    
    Installiere git unter folgendem Link: https://git-scm.com/. Bei der Installation sind keine Anpassungen notwendig. Du kannst dich einfach durchklicken.

#### Default Shell ändern
Damit git ordentlich ausgeführt und genutzt werden kann, muss in VS-Code die "Default Shell" geändert werden.

![task1](/images/task.png) 2' - Einzelarbeit
    
    -Öffne VS-Code und drücke F1.
    -"Default Shell" eingeben
    -"Terminal: Select Default Shell" auswählen
    -"Git Bash" auswählen


![asset](/images/hint.png) Sofern Git Bash nicht gewählt werden kann, könnte es daran liegen, dass du die IDE neustarten musst. 

## Tools
### Node.js
Node.js ist eine plattformübergreifende Opensource JavaScript runtime, damit du den nötigen Webserver betreiben kannst, die für die Webentwicklung notwendig ist.
Mit Node können wir später diverse Packages installieren und in unserer Webapplikation brauchen.

![task3](/images/task.png) 5' - Einzelarbeit
    
    Installiere Node.js unter folgendem Link: https://nodejs.org/en/. Verwende die LTS Version, diese werden für die meisten Nutzer empfohlen.
    Bei der Installation sind keine Anpassungen notwendig. Du kannst dich einfach durchklicken. 

### Postman
Postman ist eine API Platform um die API des Backends zu testen. Dies hilft dir dabei beispielsweise zu prüfen, ob deine Nutzer die du erstellt hast, auch in der Datenbankdatei korrekt gespeichert wurde.

![task4](/images/task.png) 10' - Einzelarbeit
    
    Installiere Postman unter folgendem Link:https://www.postman.com/downloads/.
    Bei der Installation sind keine Anpassungen notwendig. Du kannst dich einfach durchklicken.
    Erstell dir ein Account und merke dir dein Passwort. Nach der Anmeldung musst du noch das SSL Zertifikat ausschalten.
    File > Settings > General

### Überprüfen
Nun hoffen wir das alle nötigen Installationen erfolgreich ausgeführt wurden.

![task5](/images/task.png) 5' - Einzelarbeit
    
    - Öffne VS-Code
    - Öffne ein neues Terminal
    - git --version
    - npm -v

    Sofern alle Versionen angezeigt werden, war die Installation erfolgreich. Anderweitig musst du mit deinem üK-Leiter besprechen wo der Fehler liegen könnte.