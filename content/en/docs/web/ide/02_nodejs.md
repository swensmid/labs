---
title: "Node.js"
linkTitle: "Node.js"
weight: 1
date: 2023-05-12
description: >
    In diesem Kapitel wird Node.js genauer erläutert.
---

## Node.js
Node.js ist eine plattformübergreifende Opensource-JavaScript-Runtime, damit du den nötigen Webserver betreiben kannst, die für die Webentwicklung notwendig ist.
Mit Node können wir später diverse Packages installieren und in unserer Webapplikation brauchen.
Node.js ermöglicht den Entwicklern, JavaScript-Code außerhalb des Browsers auszuführen.

### npm
Node.js enthält einem integrierten Package manager namens npm (Node Package Manager). npm ermöglicht es Entwicklern, Libraries und Module von anderen Entwicklern zu installieren und in ihren eigenen Projekten zu verwenden. Es bietet Zugriff auf eine riesige Sammlung von Open-Source-Packages, die Funktionalität und Effizienz bei der Entwicklung von Anwendungen bieten.

npm ermöglicht es auch, die eigenen Packages zu erstellen und zu veröffentlichen, sodass andere Entwickler sie verwenden können. Durch das Veröffentlichen der Packages auf npm kann man es für die gesamte Community zugänglich machen und Updates und Verbesserungen bereitstellen.


### npm Commands
Hier sind einige wichtige npm-Befehle, die beim Arbeiten mit Node.js Projekten und dem Node Package Manager (npm) hilfreich sind:
* `npm init`: Erstellt eine neue package.json-Datei, um ein neues Projekt zu initialisieren.
* `npm install`: Installiert alle Dependencies, die in der package.json-Datei aufgeführt sind. Der einfachheit halber kann man auch einfach `npm i` schreiben.
* `npm install <packagename>`: Installiert ein bestimmtes Package und fügt es zur package.json-Datei hinzu.
* `npm uninstall <packagename>`: Deinstalliert ein Package und entfernt es aus der package.json-Datei.
* `npm update`: Aktualisiert alle Dependencies auf die neuesten Versionen, gemäss den in der package.json-Datei angegebenen Versionsbeschränkungen.
* `npm run <scriptname>`: Führt ein in der scripts-Sektion der package.json-Datei definiertes Skript aus. Zum Beispiel: `npm run build` oder `npm run start`.

### packages.json
npm verwendet eine Datei namens `package.json`, um Informationen über das Projekt und seine Dependencies zu speichern. Diese Datei enthält Metadaten wie den Namen des Projekts, die Version, die Autorinformationen und die Liste der Dependencies. Man kann das `package.json` manuell erstellen oder den Befehl `npm init` verwenden, um einen interaktiven Assistenten zu starten, der einem hilft, die Informationen einzugeben.

In der `package.json` Datei werden die Dependencies des Projekts aufgelistet. Es gibt zwei Arten von Dependencies: "dependencies" und "devDependencies". "dependencies" sind Packages, die für die Ausführung der Anwendung erforderlich sind, während "devDependencies" Packages sind, die nur für die Entwicklung, Tests und den Build-Prozess verwendet werden. Wenn man ein Packages mit `npm install` installieren, wird es automatisch zur richtigen Kategorie hinzugefügt.

Zudem kann man auch benutzerdefinierte Skripte definieren, die bestimmte Aufgaben ausführen. Diese Skripte können verwendet werden, um Tests durchzuführen, den Code zu kompilieren, den Server zu starten und andere Entwicklungs- oder Build-Aufgaben zu automatisieren. Man kann die Skripte mit dem Befehl `npm run <scriptname>` ausführen.

### packages-lock.json

Die `package-lock.json`-Datei ist eine Datei, die von npm automatisch generiert wird, sobald man das erste Mal `npm install` im Projektverzeichnis ausgeführt hat. Sie dient dazu, die genauen Versionen der heruntergeladenen Pakete und deren Dependencies festzuhalten.
Das `package-lock.json` ermöglicht eine deterministische Wiederholbarkeit von Paketinstallationen in einem Projekt, was bedeutet, dass jeder Entwickler oder jede Build-Umgebung die gleichen Versionen der Pakete erhält.

Es ist wichtig, die `package-lock.json`-Datei nicht manuell zu bearbeiten, da dies zu Inkonsistenzen und Problemen führen kann. npm soll die Datei automatisch generieren.

### npm i vs npm ci
Die Befehle `npm i` und `npm ci` werden beide verwendet, um die Dependencies eines Node.js-Projekts zu installieren. Es gibt jedoch einen wichtigen Unterschied zwischen den beiden Befehlen.

`npm i` installiert die neuste Version der Dependencies, auch wenn im `packages.json` eine ältere Version angegeben ist. Jedoch ist dies aber nur bei denjenigen die mit `^` beginnen der Fall, also z.B. `^12.2.12` und sich nur die hinterste Zahl ändert. Denn die hinterste Zahl bei einer Version bedeutet das nur fixes gemacht wurden. Wenn man nun so neue Versionen holt, wird die neue Version automatisch ins `packages-lock.json` geschrieben.

`npm ci` holt die Dependencies dann vom `packages-lock.json` bedeutet es holt die Dependencies direkt vom «resolved» und nicht wie `npm i`, welches beim lokalen Register holt. Zudem holt es mit der Version, welche je nachdem vom `npm i` erneuert wurde.

### node_modules
Um ein Package zu installieren, kann man den Befehl `npm install <packagename>` verwenden. npm lädt das Package und alle seine Dependencies (Dependency) herunter und installiert sie in einem Verzeichnis namens `node_modules` im Projektordner. Wenn man dann den Code schreibt, kann man das installierte Package in den JavaScript-Dateien verwenden.

![task3](/images/task.png) 5' - Einzelarbeit

    Installiere Node.js unter folgendem Link: https://nodejs.org/en/. Verwende die LTS Version, diese werden für die meisten Nutzer empfohlen.
    Bei der Installation sind keine Anpassungen notwendig. Du kannst dich einfach durchklicken. 


