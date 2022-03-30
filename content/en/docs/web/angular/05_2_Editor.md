---
title: "Editor"
type: docs
linkTitle: "Editor"
weight: 11
date: 2022-03-14
description: >
    Die Anwendung hat jetzt einen einfachen Titel.
    Als Nächstes erstellen Sie eine neue Komponente zur Anzeige von Heldeninformationen
    und platzieren diese Komponente in der Anwendungsschale.
---

# Der Helden-Editor

> Die Beispielanwendung, die auf dieser Seite beschrieben wird, finden Sie unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt1/stackblitz.html).

## Erstellen Sie die Komponente heroes

Erzeugen Sie mit der Angular CLI eine neue Komponente mit dem Namen `heroes`.

```
  ng generate component heroes
```

Das CLI erstellt einen neuen Ordner, `src/app/heroes/`, und generiert
die drei Dateien der `HeroesComponent` zusammen mit einer Testdatei.

Die Klassendatei `HeroesComponent` sieht wie folgt aus:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

Man importiert immer das [Component](https://angular.io/api/core/Component)-Symbol aus der Angular-Kernbibliothek
und annotieren die Komponentenklasse mit [@Component](https://angular.io/api/core/Component).

[@Component](https://angular.io/api/core/Component) ist eine Decorator-Funktion, die die Angular-Metadaten für die Komponente spezifiziert.

Das CLI generiert drei Metadaten-Eigenschaften:

1. `selektor` der CSS-Elementselektor der Komponente
1. `templateUrl`&mdash; der Ort der Template-Datei der Komponente.
1. `styleUrls`&mdash; der Speicherort der privaten CSS-Stile der Komponente.

Der [CSS-Elementselektor](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors),
`'app-heroes'`, entspricht dem Namen des HTML-Elements, das diese Komponente im Template einer übergeordneten Komponente identifiziert.

Das `ngOnInit()` ist ein [lifecyle hook](https://angular.io/guide/lifecycle-hooks#oninit).
Angular ruft `ngOnInit()` kurz nach der Erstellung einer Komponente auf.
Es ist ein guter Ort, um die Initialisierungslogik zu platzieren.

Die Komponentenklasse immer `export`, damit man sie an anderer Stelle `import` kann ... wie im `AppModule`.

### Hinzufügen einer Hero-Eigenschaft

Fügen Sie der `HeroesComponent` eine `Helden`-Eigenschaft für einen Helden namens "Windstorm" hinzu.

`heroes.component.ts (hero property)`
```typescript
hero = 'Windstorm';
```

### Den Helden anzeigen

Öffnen Sie die Templatedatei "heroes.component.html".
Löschen Sie den von der Angular CLI generierten Standardtext und
ersetzen Sie ihn durch eine Datenbindung an die neue `hero` Eigenschaft.

```html
<h2>{{hero}}</h2>
```

## Die Ansicht `HeroesComponent` anzeigen

Um die `HeroesComponent` anzuzeigen, müssen Sie sie zum Template der Shell `AppComponent` hinzufügen.

Denken Sie daran, dass `app-heroes` der [Element-Selektor](#selector) für die `HeroesComponent` ist.
Fügen Sie also ein `<app-heroes>`-Element in die `AppComponent`-Templatdatei ein, direkt unter dem Titel.

`src/app/app.component.html`
```html
<h2><h1>{{title}}</h1>
<app-heroes></app-heroes></h2>
```

Unter der Annahme, dass der CLI-Befehl `ng serve` noch ausgeführt wird,
sollte der Browser aktualisiert werden und sowohl den Titel der Anwendung als auch den Namen des Helden anzeigen.

## Erstellen einer Hero-Interface

Ein echter Held ist mehr als nur ein Name.

Erstellen Sie eine `Hero`-Schnittstelle in einer eigenen Datei im Ordner `src/app`.
Gib ihr die Eigenschaften `id` und `name`.

`src/app/hero.ts`
```typescript
export interface Hero {
  id: number;
  name: string;
}
```


Kehren Sie zur Klasse `HeroesComponent` zurück und importieren Sie die Schnittstelle `Hero`.

Refaktorieren Sie die Eigenschaft `hero` der Komponente, so dass sie vom Typ `Hero` ist.
Initialisieren Sie sie mit einer `id` von `1` und dem Namen `Windstorm`.

Die überarbeitete Klassendatei `HeroesComponent` sollte wie folgt aussehen:

`src/app/heroes/heroes.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
```

Die Seite wird nicht mehr richtig angezeigt, weil Sie den Helden von einer Zeichenkette in ein Objekt geändert haben.

## Zeigen Sie das Hero-Objekt an

Aktualisieren Sie die Bindung im Template, um den Namen des Helden anzuzeigen
und zeigen Sie sowohl `id` als auch `name` in einem Detail-Layout wie diesem:

`heroes.component.html (HeroesComponent's template)`
```html
<h2>{{hero.name}} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```

Der Browser aktualisiert sich und zeigt die Informationen über den Helden an.

## Formatieren mit der _UppercasePipe_

Ändern Sie die Bindung `hero.name` wie folgt.

`src/app/heroes/heroes.component.html`
```html
<h2>{{hero.name | uppercase}} Details</h2>
```

Der Browser aktualisiert sich und der Name des Helden wird nun in Großbuchstaben angezeigt.

Das Wort [`uppercase`](https://angular.io/api/common/UpperCasePipe) in der Interpolationsbindung,
direkt nach dem Pipe-Operator ( | ),
aktiviert die eingebaute `UppercasePipe`.

[Pipes](https://angular.io/guide/pipes) sind ein guter Weg, um Strings, Währungsbeträge, Daten und andere Anzeigedaten zu formatieren.
Angular wird mit mehreren eingebauten Pipes ausgeliefert und Sie können Ihre eigenen erstellen.


## Den Helden bearbeiten

Die Benutzer sollten den Namen des Helden in einem Textfeld "<input>" bearbeiten können.

Das Textfeld sollte sowohl die Eigenschaft "Name" des Helden anzeigen
und diese Eigenschaft während der Eingabe des Benutzers aktualisieren.
Das heißt, die Daten fließen von der Komponentenklasse nach draußen auf den Bildschirm und
vom Bildschirm zurück zur Klasse.

Um diesen Datenfluss zu automatisieren, richten Sie eine zweiseitige Datenbindung zwischen dem Formularelement `<input>` und der Eigenschaft `hero.name` ein.

### Zwei-Wege-Bindung

Überarbeiten Sie den Detailbereich im Template `HeroesComponent` so, dass er wie folgt aussieht:

`src/app/heroes/heroes.component.html (HeroesComponent's template)`
```html
<div>
  <label for="name">Hero name: </label>
  <input id="name" [(ngModel)]="hero.name" placeholder="name">
</div>
```

**[(ngModel)]** ist Angulars Syntax für die Zwei-Wege-Datenbindung.

Hier bindet sie die Eigenschaft `hero.name` an die HTML-Textbox, so dass Daten in beide Richtungen fließen können: von der Eigenschaft `hero.name` zur Textbox und von der Textbox zurück zum `hero.name`.

### Das fehlende _FormsModule_

Beachten Sie, dass die Anwendung nicht mehr funktioniert, wenn Sie `[(ngModel)]` hinzufügen.

Um den Fehler zu sehen, öffnen Sie die Browser-Entwicklungswerkzeuge und suchen Sie in der Konsole
nach einer Meldung wie

```shell
Template parse errors:
Can't bind to 'ngModel' since it is not a known property of 'input'.
```

Obwohl [ngModel](https://angular.io/api/forms/NgModel) eine gültige Angular-Direktive ist, ist sie standardmäßig nicht verfügbar.

Sie gehört zum optionalen [FormsModule](https://angular.io/api/forms/FormsModule) und man muss sich _opt-in_, um sie zu verwenden.

## _AppModule_

Angular muss wissen, wie die Teile Ihrer Anwendung zusammenpassen
und welche anderen Dateien und Bibliotheken die Anwendung benötigt.
Diese Informationen werden _Metadaten_ genannt.

Einige der Metadaten befinden sich in den `@Component`-Dekoratoren, die Sie zu Ihren Komponentenklassen hinzugefügt haben.
Andere wichtige Metadaten befinden sich in [`@NgModule`](https://angular.io/guide/ngmodules) Dekoratoren.

Der wichtigste [`@NgModule`](https://angular.io/guide/ngmodules) Dekorator annotiert die Top-Level **AppModule** Klasse.

Das Angular CLI generierte eine `AppModule` Klasse in `src/app/app.module.ts` als es das Projekt erstellte.
Dies ist der Ort, an dem Sie das [FormsModule](https://angular.io/api/forms/FormsModule) einfügen.

### Importieren Sie _FormsModule

Öffnen Sie `AppModule` (`app.module.ts`) und importieren Sie das Symbol `FormsModule` aus der Bibliothek `@angular/forms`.

`app.module.ts (FormsModule symbol import)`
```typescript
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
```

Fügen Sie dann `FormsModule` zum `@NgModule`-Metadaten-Array `imports` hinzu, das eine Liste der externen Module enthält, die die Anwendung benötigt.

`app.module.ts (@NgModule imports)`
```typescript
imports: [
  BrowserModule,
  FormsModule
],
```
Wenn der Browser aktualisiert wird, sollte die Anwendung wieder funktionieren. Sie können den Namen des Helden bearbeiten und sehen, dass die Änderungen sofort in der `<h2>` oberhalb des Textfeldes angezeigt werden.

### Deklarieren Sie `HeroesComponent`

Jede Komponente muss in _exakt einem_ [NgModule](guide/ngmodules) deklariert werden.

_Du_ hast die `HeroesComponent` nicht deklariert.
Warum hat die Anwendung dann funktioniert?

Sie funktionierte, weil das Angular CLI `HeroesComponent` im `AppModule` deklarierte, als es diese Komponente generierte.

Öffnen Sie `src/app/app.module.ts` und finden Sie `HeroesComponent`, das ganz oben importiert wurde.

`src/app/app.module.ts`
```typescript
import { HeroesComponent } from './heroes/heroes.component';
```

Die `HeroesComponent` wird in dem Array `@NgModule.declarations` deklariert.
`src/app/app.module.ts`
```typescript
declarations: [
  AppComponent,
  HeroesComponent
],
```

Beachten Sie, dass `AppModule` beide Anwendungskomponenten, `AppComponent` und `HeroesComponent`, deklariert.


## Abschließende Überprüfung des Codes

Hier sind die auf dieser Seite besprochenen Codedateien.


1. `src/app/heroes/heroes.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
```
2. `src/app/heroes/heroes.component.html`
```html
<h2>{{hero.name | uppercase}} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div>
  <label for="name">Hero name: </label>
  <input id="name" [(ngModel)]="hero.name" placeholder="name">
</div>
```
3. `src/app/app.module.ts`
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
4. `src/app/app.component.ts`
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
5. `src/app/app.component.html`
```html
<h1>{{title}}</h1>
<app-heroes></app-heroes>
```
6. `src/app/hero.ts`
```typescript
export interface Hero {
  id: number;
  name: string;
}
```

## Zusammenfassung

* Sie haben die CLI verwendet, um eine zweite `HeroesComponent` zu erstellen.
* Sie haben die `HeroesComponent` angezeigt, indem Sie sie der `AppComponent`-Shell hinzugefügt haben.
* Sie haben die `UppercasePipe` angewendet, um den Namen zu formatieren.
* Du hast die Zwei-Wege-Datenbindung mit der `ngModel`-Direktive benutzt.
* Du hast etwas über das `AppModule` gelernt.
* Du hast das `FormsModule` in das `AppModule` importiert, so dass Angular die `ngModel`-Direktive erkennen und anwenden konnte.
* Du hast gelernt, wie wichtig es ist, Komponenten im `AppModule` zu deklarieren
und schätzt es, dass die CLI sie für dich deklariert.