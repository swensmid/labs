---
title: "Projekt aufsetzen"
type: docs
linkTitle: "Projekt aufsetzen"
weight: 10
date: 2022-03-14
description: >
    Sie beginnen mit der Erstellung einer ersten Anwendung mithilfe der Angular CLI. Im Laufe dieses Tutorials werden Sie diese Startanwendung modifizieren und erweitern, um die Anwendung Tour of Heroes zu erstellen.
---

# Ein neues Projekt erstellen

Du beginnst mit der Erstellung einer ersten Anwendung mithilfe der Angular CLI. Im Laufe dieses Tutorials wirst du diese Startanwendung modifizieren und erweitern, um die Anwendung Tour of Heroes zu erstellen.

In diesem Teil des Tutorials wirst du Folgendes tun:

1. Richte deine Umgebung ein.
2. Erstelle einen neuen Arbeitsbereich und ein erstes Anwendungsprojekt.
3. Stelle die Anwendung bereit.
4. Nimm Änderungen an der Anwendung vor.


> Die Beispielanwendung, die auf dieser Seite beschrieben wird, findest du unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt0/stackblitz.html).

## Richten deine Umgebung ein

Um Ihre Entwicklungsumgebung einzurichten, folge den Anweisungen in [Local Environment Setup](https://angular.io/guide/setup-local).


## Erstelle einen neuen Arbeitsbereich und eine erste Anwendung

Du entwickelst Anwendungen im Kontext eines Angular-[Workspace](https://angular.io/guide/glossary#workspace). Ein Arbeitsbereich enthält die Dateien für ein oder mehrere [Projekte](https://angular.io/guide/glossary#project). Ein Projekt ist eine Gruppe von Dateien, die eine Anwendung oder eine Bibliothek bilden. Für dieses Tutorial wirst du einen neuen Arbeitsbereich erstellen.

So erstellst du einen neuen Arbeitsbereich und ein erstes Anwendungsprojekt:

  1. Stelle sicher, dass du dich nicht bereits in einem Angular-Arbeitsbereich-Ordner befindest. Wenn du beispielsweise zuvor den Arbeitsbereich Erste Schritte erstellt hast, wechsle in den übergeordneten Ordner dieses Ordners.
  2. Führe den CLI-Befehl `ng new` aus und gib den Namen `angular-tour-of-heroes` ein, wie hier gezeigt:

```
ng new angular-tour-of-heroes
```

  3. Der Befehl "ng new" fordert dich auf, Informationen zu den Funktionen einzugeben, die in das ursprüngliche Anwendungsprojekt aufgenommen werden sollen. Akzeptiere die Standardeinstellungen, indem du die Enter- oder Return-Taste drückst.

Die Angular-CLI installiert die notwendigen Angular-"npm"-Pakete und andere Abhängigkeiten. Dies kann ein paar Minuten dauern.

Außerdem werden die folgenden Dateien für den Arbeitsbereich und das Starterprojekt erstellt:

  * Einen neuen Arbeitsbereich mit einem Stammordner namens "angular-tour-of-heroes".
  * Ein erstes Skelettprojekt im Unterordner `src/app`.
  * Zugehörige Konfigurationsdateien.

Das anfängliche App-Projekt enthält eine einfache Willkommensanwendung, die sofort ausgeführt werden kann.

## Serve the application

Wechsle in das Verzeichnis workspace und starte die Anwendung.

```
  cd angular-tour-of-heroes
  ng serve --open
```

![asset](/images/hint.png)

> Der Befehl `ng serve` baut die App, startet den Entwicklungsserver,
überwacht die Quelldateien und baut die Anwendung neu auf, wenn du Änderungen an diesen Dateien vornimmst.\
Das `--open` Flag öffnet einen Browser auf `http://localhost:4200/`.


Sie sollten die Anwendung in Ihrem Browser laufen sehen.

## Angular-Komponenten

Die Seite, die du siehst, ist die _Anwendungsshell_.
Die Shell wird von einer Angular **Komponente** namens `AppComponent` gesteuert.

_Komponenten_ sind die grundlegenden Bausteine von Angular-Anwendungen.
Sie zeigen Daten auf dem Bildschirm an, warten auf Benutzereingaben und führen Aktionen basierend auf diesen Eingaben aus.

## Änderungen an der Anwendung vornehmen

Öffne das Projekt in deinem bevorzugten Editor oder IDE und navigiere zum Ordner `src/app`, um einige Änderungen vorzunehmen.

Du wirst die Implementierung der Shell `AppComponent` über drei Dateien verteilt finden:

1. `app.component.ts` der Code der Komponentenklasse, geschrieben in TypeScript.
1. `app.component.html` das Komponententemplate, geschrieben in HTML.
1. `app.component.css` die privaten CSS-Stile der Komponente.

### Ändern Sie den Titel der Anwendung

Öffne die Klassendatei der Komponente (`app.component.ts`) und ändere den Wert der Eigenschaft `title` in 'Tour of Heroes'.

```typescript
title = 'Tour of Heroes';
```

Öffne die Komponententemplatendatei (`app.component.html`) und
lösche die von der Angular CLI generierte Standardtemplate.
Ersetze es durch die folgende HTML-Zeile.

```html
<h1>{{title}}</h1>
```

Die doppelten geschweiften Klammern sind Angulars Syntax für die *Interpolationsbindung*.
Diese Interpolationsbindung stellt den Eigenschaftswert `title` der Komponente
innerhalb des HTML-Header-Tags.

Der Browser aktualisiert sich und zeigt den neuen Anwendungstitel an.

### Hinzufügen von Anwendungsstilen

Die meisten Anwendungen streben ein einheitliches Aussehen in der gesamten Anwendung an.
Das CLI generiert zu diesem Zweck eine leere `styles.css`.
Lege dort deine anwendungsweiten Stile ab.

Öffne `src/styles.css` und füge den folgenden Code in die Datei ein.

```css
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[type="text"], button {
  color: #333;
  font-family: Cambria, Georgia, serif;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```

## Abschliessende Überprüfung des Codes

Hier sind die auf dieser Seite besprochenen Codedateien.

1. src/app/app.components.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
```
2. src/app/app.components.html
```html
<h1>{{title}}</h1>
```
3. src/styles.css
```css
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[type="text"], button {
  color: #333;
  font-family: Cambria, Georgia, serif;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```
## Zusammenfassung

* Du hast die erste Anwendungsstruktur mit dem Angular CLI erstellt.
* Du hast gelernt, dass Angular-Komponenten Daten anzeigen.
* Du hast die doppelten geschweiften Klammern der Interpolation verwendet, um den Titel der Anwendung anzuzeigen.
