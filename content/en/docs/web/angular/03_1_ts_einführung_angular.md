---
title: "Einführung in Angular"
type: docs
linkTitle: "Einführung in Angular"
weight: 3
date: 2023-05-04
description: >
  Angular ist ein Framework um SPA’s (Single Page Applications) mittels HTML und JavaScript zu erstellen und besteht aus verschiedenen core und optionalen JavaScript Bibliotheken
---

## Was ist Angular
Angular wird für Frontend-Applikationen verwendet. Oft wird ein Backend via HTTP(s) angebunden.
![Angular](../images/angular_einführung.png)  


### Vorteile von Angular

* **Umfangreiche Funktionalität**: Angular bietet eine Vielzahl von Funktionen und Features, die für die Entwicklung von komplexen Webanwendungen erforderlich sind. Es enthält ein leistungsfähiges Template-System, Datenbindung, Routing, Formularvalidierung, Dependency Injection und vieles mehr.

* **Strukturierte Architektur**: Angular basiert auf dem Konzept der Components-Based Architektur. Die Anwendung wird in unabhängige, wiederverwendbare Components strukturiert, was die Wartbarkeit und Testbarkeit erleichtert.

* **Produktivität**: Angular bietet viele Hilfsmittel, die die Entwicklungszeit verkürzen. Dazu gehören die Angular CLI (Command Line Interface) zur Projektgenerierung und automatisierten Aufgaben, ein reichhaltiges Ökosystem von Libraries und Extensions sowie eine umfangreiche Dokumentation.

* **TypeScript-Unterstützung**: Angular ist in TypeScript geschrieben, einer statisch typisierten Variante von JavaScript. TypeScript bietet statische Typisierung, verbesserte IDE-Unterstützung und ermöglicht eine bessere Fehlererkennung zur Entwicklungszeit.

### Nachteile von Angular

* **Lernkurve**: Angular ist ein umfangreiches Framework und erfordert eine gewisse Einarbeitungszeit. Die Konzepte wie Dependency Injection, TypeScript und das Componentmodel können für Entwickler mit wenig Erfahrung zunächst herausfordernd sein.

* **Grösse**: Angular ist ein umfangreiches Framework, was zu einer grösseren Dateigrösse der Anwendung führen kann. Dies kann die Ladezeit beeinflussen, insbesondere für mobile Geräte mit langsamer Internetverbindung.

* **Komplexität**: Aufgrund der vielen Funktionen und Konzepte kann die Komplexität von Angular zunehmen, insbesondere für kleinere Projekte, bei denen nicht alle Funktionen benötigt werden.

* **Abhängigkeit von Google**: Angular wurde von Google entwickelt und ist stark mit dem Unternehmen verbunden. Einige Entwickler haben Bedenken hinsichtlich der langfristigen Unterstützung und der Unabhängigkeit von Google.


## Angular Projekt aufsetzen
Um ein neues Angular-Projekt zu erstellen, kann man die Angular CLI (Command Line Interface) verwenden. Dazu muss sie aber zuerst installiert werden.

### Angular CLI installieren
Man muss als Vorarbeit sicherstellen, dass Node.js auf dem Computer installiert ist (`npm -v` im Terminal eingeben). Im Terminal muss man danach den folgenden Befehl ausführen, um die Angular CLI global zu installieren:
```shell
npm install -g @angular/cli
```

### Projekt erstellen
Nun muss man in das Verzeichnis wechseln, in dem man das Angular-Projekt erstellen möchten, und nun muss man den folgenden Befehl ausführen:
```shell
ng new new-angular-project
```

Als Nächstes in das Projektverzeichnis wechseln, indem man den folgenden Befehl ausführen:
```shell
cd new-angular-project
```

### Projekt starten
Mit dem folgenden Befehl, kann man den Entwicklungsserver starten und das Angular-Projekt im Browser anzuzeigen:
```shell
ng serve
```

Der Entwicklungsserver wird gestartet und die Anwendung wird auf http://localhost:4200 bereitgestellt. Man kann diese URL in einem Webbrowser öffnen, um die Angular-Anwendung zu sehen.


## Angular CLI
Die Angular CLI (Command Line Interface) ist ein Befehlszeilenwerkzeug, das von Angular bereitgestellt wird. Es ermöglicht Entwicklern, effizienter mit Angular zu arbeiten, indem es verschiedene Funktionen und Befehle zur Verfügung stellt, um die Erstellung, Entwicklung, Bereitstellung und Wartung von Angular-Projekten zu unterstützen.

### Commands
* ng new <projektname>: Erstellt ein neues Angular-Projekt mit der angegebenen Projektstruktur und Konfiguration.

* ng serve: Startet den Entwicklungsserver und stellt Ihre Angular-Anwendung auf http://localhost:4200 bereit. Änderungen werden in Echtzeit reflektiert.

* ng serve --open: Startet den Entwicklungsserver und öffnet automatisch Ihren Standardwebbrowser, um Ihre Anwendung anzuzeigen.

* ng generate <art> <name> (oder ng g <art> <name>): Generiert eine neue Datei oder Komponente basierend auf einer vorgegebenen Vorlage. 
  * **Component**: ng generate component <name> oder ng g c <name>
  Erzeugt eine neue Component mit einer Componentdatei, einer Template-Datei, einer Stylesheet-Datei und einem Testfile.

  * **Module**: ng generate module <name> oder ng g m <name>
  
  * **Service**: ng generate service <name> oder ng g s <name>
  
  * **Directive**: ng generate directive <name> oder ng g d <name>
  
  * **Klassen**: ng generate class <name> oder ng g cl <name>
  
  * **Enum**: ng generate enum <name> oder ng g e <name>
  
  * **Interface**: ng generate interface <name> oder ng g i <name>
  
  * **Pipe**: ng generate pipe <name> oder ng g p <name>

* ng build: Kompiliert und baut Ihre Angular-Anwendung für die Produktion. Erzeugt optimierten JavaScript-Code, der für die Bereitstellung auf einem Webserver verwendet werden kann.

* ng test: Führt Ihre Unit-Tests aus, um sicherzustellen, dass Ihre Anwendung ordnungsgemäß funktioniert.

* ng lint: Überprüft Ihren Code auf Einhaltung der definierten Linting-Regeln.

* ng update: Aktualisiert Ihre Angular-Abhängigkeiten und -Pakete auf die neuesten Versionen.

* ng add <paketname>: Fügt ein externes Paket oder eine Bibliothek zu Ihrem Angular-Projekt hinzu. Installiert und konfiguriert das Paket automatisch.

* ng help: Zeigt eine Liste der verfügbaren Befehle und Optionen der Angular CLI an.


