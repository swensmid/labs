---
title: "IDE und Tools"
linkTitle: "IDE und Tools"
weight: 1
date: 2022-02-16
description: >
    In diesem Kapitel werden die IDE und genutzte Tools in der Theorie beschrieben, Anleitungen platziert oder auch vereinzelte Aufgaben gestellt.
---

## IDE
Die Beispiele in diesem Modul werden mit Visual Studio Code erklärt. Visual Studio Code ist ein kostenloser Codierungseditor, mit welchem du schnell mit dem Coden beginnen kannst. Du kannst Visual Studio Code verwenden, um in jeder Programmiersprache zu programmieren, ohne den Editor zu wechseln. Es unterstützt viele Sprachen, darunter sind JavaScript, Angular, Vue und viele mehr.
https://code.visualstudio.com/

![task1](/images/task.png) 15' - Einzelarbeit

    Installiere die IDE und richte sie entsprechend deiner Präferenz ein.
    Folgende VS Code-Extensions sind praktisch für die Entwicklung von Webapps:
    - Code Spell Checker
    - ESLint
    - GitLens
    - Material Icon Theme
    - Path Intellisense
    - Prettier – Code formatter

### Git
Git ist dir bereits bekannt ein Codeversionierungssystem, welches bei diesem Modul genutzt wird.

![task2](/images/task.png) 5' - Einzelarbeit
    
    Installiere Git. Hierfür gibt es zwei Möglichkeiten:
    
    1. Vielleicht klappt es unter Windows direkt mit diesem Kommandozeilenbefehl:
        
        winget install --id Git.Git -e --source winget

    2. Ansonsten lade es unter folgendem Link herunter: https://git-scm.com/.
    
        Bei der Installation sind keine Anpassungen zwingend. Vielleicht helfen dir in Zukunft die "Components" "Windows Explorer integration - Git Bash Here" und "Add a Git Bash Profile to Windows Terminal". Ansonsten kannst du dich einfach durchklicken.


## Tools
### Node.js
Node.js ist eine plattformübergreifende Opensource-JavaScript-Runtime, damit du den nötigen Webserver betreiben kannst, die für die Webentwicklung notwendig ist.
Mit Node können wir später diverse Packages installieren und in unserer Webapplikation brauchen.

![task3](/images/task.png) 5' - Einzelarbeit
    
    Installiere Node.js unter folgendem Link: https://nodejs.org/en/. Verwende die LTS Version, diese werden für die meisten Nutzer empfohlen.
    Bei der Installation sind keine Anpassungen notwendig. Du kannst dich einfach durchklicken. 

### Postman
Postman ist eine API Platform, um die API des Backends zu testen. Dies hilft dir dabei beispielsweise zu prüfen, ob deine Nutzer die du erstellt hast, auch in der Datenbankdatei korrekt gespeichert wurde.

![task4](/images/task.png) 10' - Einzelarbeit
    
    Installiere Postman unter folgendem Link:https://www.postman.com/downloads/.
    Bei der Installation sind keine Anpassungen notwendig. Du kannst dich einfach durchklicken.
    Du kannst Postman ohne Account benutzen.

### Überprüfen
Nun hoffen wir, dass alle nötigen Installationen erfolgreich ausgeführt wurden.

![task5](/images/task.png) 5' - Einzelarbeit
    
    - Öffne VS-Code
    - Öffne ein neues Terminal
    - git --version
    - npm -v

    Sofern alle Versionen angezeigt werden, war die Installation erfolgreich. Anderweitig solltest du einen Coach konsultieren.