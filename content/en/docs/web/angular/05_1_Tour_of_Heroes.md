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

In diesem Teil des Tutorials werden Sie Folgendes tun:

1. Richten Sie Ihre Umgebung ein.
2. Erstellen Sie einen neuen Arbeitsbereich und ein erstes Anwendungsprojekt.
3. Stellen Sie die Anwendung bereit.
4. Nehmen Sie Änderungen an der Anwendung vor.


> Die Beispielanwendung, die auf dieser Seite beschrieben wird, finden Sie unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt0/stackblitz.html).

## Richten Sie Ihre Umgebung ein

Um Ihre Entwicklungsumgebung einzurichten, folgen Sie den Anweisungen in [Local Environment Setup](https://angular.io/guide/setup-local).


## Erstellen Sie einen neuen Arbeitsbereich und eine erste Anwendung

Sie entwickeln Anwendungen im Kontext eines Angular-[Workspace](https://angular.io/guide/glossary#workspace). Ein Arbeitsbereich enthält die Dateien für ein oder mehrere [Projekte](https://angular.io/guide/glossary#project). Ein Projekt ist eine Gruppe von Dateien, die eine Anwendung oder eine Bibliothek bilden. Für dieses Tutorial werden Sie einen neuen Arbeitsbereich erstellen.

So erstellen Sie einen neuen Arbeitsbereich und ein erstes Anwendungsprojekt:

  1. Stellen Sie sicher, dass Sie sich nicht bereits in einem Angular-Arbeitsbereich-Ordner befinden. Wenn Sie beispielsweise zuvor den Arbeitsbereich Erste Schritte erstellt haben, wechseln Sie in den übergeordneten Ordner dieses Ordners.
  2. Führen Sie den CLI-Befehl `ng new` aus und geben Sie den Namen `angular-tour-of-heroes` ein, wie hier gezeigt:

```
ng new angular-tour-of-heroes
```

  3. Der Befehl "ng new" fordert Sie auf, Informationen zu den Funktionen einzugeben, die in das ursprüngliche Anwendungsprojekt aufgenommen werden sollen. Akzeptieren Sie die Standardeinstellungen, indem Sie die Enter- oder Return-Taste drücken.

Die Angular-CLI installiert die notwendigen Angular-"npm"-Pakete und andere Abhängigkeiten. Dies kann ein paar Minuten dauern.

Außerdem werden die folgenden Dateien für den Arbeitsbereich und das Starterprojekt erstellt:

  * Einen neuen Arbeitsbereich mit einem Stammordner namens "angular-tour-of-heroes".
  * Ein erstes Skelettprojekt im Unterordner `src/app`.
  * Zugehörige Konfigurationsdateien.

Das anfängliche App-Projekt enthält eine einfache Willkommensanwendung, die sofort ausgeführt werden kann.

## Serve the application

Wechseln Sie in das Verzeichnis workspace und starten Sie die Anwendung.

```
  cd angular-tour-of-heroes
  ng serve --open
```

![asset](/images/hint.png)

> Der Befehl `ng serve` baut die App, startet den Entwicklungsserver,
überwacht die Quelldateien und baut die Anwendung neu auf, wenn Sie Änderungen an diesen Dateien vornehmen.\
Das `--open` Flag öffnet einen Browser auf `http://localhost:4200/`.


Sie sollten die Anwendung in Ihrem Browser laufen sehen.

## Angular-Komponenten

Die Seite, die Sie sehen, ist die _Anwendungsshell_.
Die Shell wird von einer Angular **Komponente** namens `AppComponent` gesteuert.

_Komponenten_ sind die grundlegenden Bausteine von Angular-Anwendungen.
Sie zeigen Daten auf dem Bildschirm an, warten auf Benutzereingaben und führen Aktionen basierend auf diesen Eingaben aus.

## Änderungen an der Anwendung vornehmen

Öffnen Sie das Projekt in Ihrem bevorzugten Editor oder IDE und navigieren Sie zum Ordner `src/app`, um einige Änderungen an der Starter-Anwendung vorzunehmen.

Sie werden die Implementierung der Shell `AppComponent` über drei Dateien verteilt finden:

1. `app.component.ts` der Code der Komponentenklasse, geschrieben in TypeScript.
1. `app.component.html` das Komponententemplate, geschrieben in HTML.
1. `app.component.css` die privaten CSS-Stile der Komponente.

### Ändern Sie den Titel der Anwendung

Öffnen Sie die Klassendatei der Komponente (`app.component.ts`) und ändern Sie den Wert der Eigenschaft `title` in 'Tour of Heroes'.

```typescript
title = 'Tour of Heroes';
```

Öffnen Sie die Komponententemplatendatei (`app.component.html`) und
löschen Sie die von der Angular CLI generierte Standardtemplate.
Ersetzen Sie es durch die folgende HTML-Zeile.

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
Legen Sie dort Ihre anwendungsweiten Stile ab.

Öffnen Sie `src/styles.css` und fügen Sie den folgenden Code in die Datei ein.

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

* Sie haben die erste Anwendungsstruktur mit dem Angular CLI erstellt.
* Sie haben gelernt, dass Angular-Komponenten Daten anzeigen.
* Sie haben die doppelten geschweiften Klammern der Interpolation verwendet, um den Titel der Anwendung anzuzeigen.
