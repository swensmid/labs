---
title: "Labs zu den TypeScript-Basics"
type: docs
linkTitle: "TypeScript-Basics"
weight: 1
date: 2021-11-01
description: >
    Einfache Aufgaben zu den Basics von TypeScript.
---
# Übungen

## Übung 1
Erstellen Sie eine neue TypeScript-Projektstruktur und richten eine tsconfig.json-Datei ein, um den TypeScript-Compiler für das Projekt zu konfigurieren.

1. Erstellen Sie ein neues Verzeichnis für Ihr TypeScript-Projekt. 
2. Navigieren Sie in das Verzeichnis und Initialisieren Sie das Projekt mid den Node Befehlen. Diese können [hier](../../../docs/web/ide/02_nodejs#npm-commands) nachgelesen werden. 
4. Installieren Sie TypeScript. 
5. Erstellen Sie eine `tsconfig.json`-Datei im Stammverzeichnis des Projekts. Und richten Sie diese anhand von folgenden Informationen korrekt ein:
   * ECMAScript-Version = es6
   * Modulsystem = commonjs
   * Ausgabeverzeichnis = dist
   * Typen-Check-Modus = true
6. Erstellen Sie im Projektverzeichnis ein Unterverzeichnis namens `src`. 
7. Erstellen Sie eine TypeScript-Datei mit dem Namen `index.ts` im Verzeichnis src und schreiben Sie darin eine Funktion, welche einen Parameter entgegennimmt und diesen ausgibt (Typisieren sie zuerst den Parameter nicht und prüfen sie, ob die tsconfig-Datei funktioniert. Wenn die tsconfig-Datei korrekt ist, wird die IDE folgendes anzeigen: `Parameter '' implicitly has an 'any' type.ts`). Rufen Sie danach in diesem File die Funktion mit dem Parameter `HelloWorld!` auf.
8. Transpilieren Sie die TypeScript-Datei.
9. Führen Sie die JS-Datei aus.

Resultat sollte `HelloWorld!` sein.


## Übung 2
![task2](/images/task.png) - Einzelarbeit

Lade die [Datei](/files/exams/angular/uebung2.ts) herunter und fülle wo nötig Quellcode ein.
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
![task4](/images/task.png) - Einzelarbeit

Laden Sie die [Datei](/files/exams/angular/uebung4.ts) herunter.
In dieser Aufgabe wollen wir Benutzereingabe in der Konsole verarbeiten.
Dazu verwenden wir in diesem Beispiel readline(https://nodejs.org/api/readline.html) von NodeJS.
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

Fülle in der Aufgabendatei den benötigten Code an den entsprechenden Stellen ein.

![asset](/images/hint.png) - Info zu readline.

Um readline benutzen zu können, musst du erst den entsprechenden npm-Befehl ausführen.
Achte darauf, dass du den Befehl im selben Verzeichnis ausführst, indem sich die .ts-Datei befindet!

