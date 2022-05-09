---
title: "Exam zu den TypeScript-Basics"
type: docs
linkTitle: "TypeScript-Basics"
weight: 2
date: 2021-11-01
description: >
    Einfache Aufgaben zu den Basics von TypeScript.
---

# Übungen
## Übung 1
![task1](/images/task.png) - Einzelarbeit [Übung 1](/files/exams/angular/uebung1.html)
    
    Erstelle eine Website, welche anhand von Observables eine Browsernotification ausgibt.
    Dazu soll sich auf der Website ein Button befinden, welcher das Event auslöst, um die Notification im Browser anzuzeigen.

    Vorgehen:
    Lade die Datei im Titel herunter und öffne sie in VS Code. 
    Die Datei enthält lediglich das Grundgerüst der Übung, füge an den auskommentierten Stellen den entsprechenden Code ein.
    Am Grundgerüst der Datei soll nichts verändert werden.

![asset](/images/hint.png)    
    Damit die Notifications fehlerfrei funktionieren, muss die Extenstion "Live Server" in VS Code hinzugefügt und angewendet werden.
<br>

## Übung 2
### Einrichtung
Da du Node.js bereits installiert hast, kannst du nun anhand des Node Package Manager mühelos typescript installieren.
Dazu öffnest du eine Konsole und gibst diesen Befehl ein: <br>
    ```npm install -g typescript```

Sobald die Installation abgeschlossen ist, erstellst du eine Datei und nennst diese `hello-world.ts`.
Öffne die Datei mit VS Code und schreib die erste Codezeile: <br>
    ```console.log("Hello World");```

Nun hast du unser erstes Typescript "Projekt" erstellt. Um dies auszuführen, müsst du den Quellcode zu JS transpilieren.
Dazu öffnest du eine Konsole und begibst dich in das Verzeichnis indem sich die Datei befindet. 

Danach gibst du folgenden Befehl in der Konsole ein: <br>
    ```tsc hello-world.ts```

Wie du nun sehen kannst, befindet sich im Verzeichnis eine gleichnamige JS Datei.

Diese kannst du nun anhand von Node ausführen: <br>
    ```node hello-word.js```

Falls alles funktioniert hat, gibt die Konsole `Hello World` aus.

### Übung
![task2](/images/task.png) - Einzelarbeit [Übung 2](/files/exams/angular/uebung2.ts)
    
    Lade die Datei im Titel herunter und fülle wo nötig Quellcode ein.
    Die Person soll sich folgendermassen vorstellen: "Hallo, mein Name ist  [Name]"
    Die Grundstruktur, sowie die letzten 2 Codezeilen dürfen nicht verändert werden.

## Übung 3
![task3](/images/task.png) - Einzelarbeit

    In dieser Übung wollen wir die Vererbung in einem Fallbeispiel anwenden.
    Wir erweitern in dieser Aufgabe den Quellcode von Übung 2.
    Erstelle dazu am Besten gleich eine neue Datei und kopiere den Quellcode von Aufgabe 2.
    Lösche die letzten 2 Zeilen, sodass nur noch die Klasse "Person" übrig ist.
    Erstelle anschliessend die Klasse "Friend", welche die Klasse "Person" erbt.
    Diese Klasse soll die Methode "timeKnown()", sowie "introduceSelf()" der Parent-Klasse zur Verfügung stellen.
    Die Methode "timeKnown()" soll folgendes ausgeben können: "Wir sind Freunde seit [AnzahlJahre] Jahren"
    Achte also darauf, welche zusätzlichen Eigenschaften "Friend" besitzen muss.
    Erstelle am Schluss (wie bei Übung 2) eine neue Instanz von "Friend". Verwende als Parameter "Peter" und "5".
    Führe dann "introduceSelf()" und "timeKnown()" aus.

In der Konsole sollte Dir nun folgendes angezeigt werden.<br>
*Hallo, mein Name ist Peter* <br>
*Wir sind Freunde seit 5 Jahren*
<br>

## Übung 4
![task4](/images/task.png) - Einzelarbeit [Übung 4](/files/exams/angular/uebung4.ts), https://nodejs.org/api/readline.html
    
    In dieser Aufgabe wollen wir Benutzereingabe in der Konsole verarbeiten.
    Dazu verwenden wir in diesem Beispiel readline von NodeJS.
    Wir wollen nun ein kleines Programm schreiben, welches wie folgt aussieht.


```console
Wie ist dein name? Hansli
hallo Hansli
War diese Aufgabe lehrreich für dich= [j / n]j
Super!
```
```console
Wie ist dein name? Hansli
hallo Hansli
War diese Aufgabe lehrreich für dich= [j / n]n
Schade! :(
```
Zuerst wird der Anwender nach seinem Namen gefragt. 
Danach wird er begrüsst.
Und anschliessend wird gefragt ob diese Aufgabe lehrreich für ihn war.

Fülle in der Aufgabendatei den benötigten Code an den enstprechenden Stellen ein.

![asset](/images/hint.png)    
    Um readline benutzen zu können, musst du erst den entsprechenden npm-Befehl ausführen. Achte darauf, dass du den Befehl im selben Verzeichnis ausführst, indem sich die .ts-Datei befindet!

# Zurück zur Theorie
[Hier](../../../../docs/web/angular/03_1_intro_typescript) gelangst du zurück zur Theorie.


# Eventuell noch eine kleiner Exam (ToDo!!!!!)