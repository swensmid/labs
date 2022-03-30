---
title: "Komponenten"
type: docs
linkTitle: "Komponenten"
weight: 13
date: 2022-03-14
description: >
    Alle Funktionen in einer Komponente zu halten, während die Anwendung wächst, ist nicht wartbar.
    Sie werden große Komponenten in kleinere Unterkomponenten aufteilen wollen, die jeweils auf eine bestimmte Aufgabe oder einen bestimmten Arbeitsablauf ausgerichtet sind.
---

# Erstellen Sie eine Feature-Komponente

Im Moment zeigt die Komponente `HeroesComponent` sowohl die Liste der Helden als auch die Details des ausgewählten Helden an.

Auf dieser Seite werden Sie den ersten Schritt in diese Richtung machen, indem Sie die Heldendetails in eine separate, wiederverwendbare `HeroDetailComponent` verschieben.

Die `HeroesComponent` wird nur die Liste der Helden darstellen.
Die `HeroDetailComponent` wird die Details eines ausgewählten Helden anzeigen.

> Die Beispielanwendung, die auf dieser Seite beschrieben wird, finden Sie unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt3/stackblitz.html).


## Erstellen Sie die `HeroDetailComponent`

Verwenden Sie das Angular CLI, um eine neue Komponente mit dem Namen `hero-detail` zu erstellen.

```shell
  ng generate component hero-detail
```

Der Befehl führt die folgenden Schritte aus:

* Erzeugt ein Verzeichnis `src/app/hero-detail`.

Innerhalb dieses Verzeichnisses werden vier Dateien generiert:

* Eine CSS-Datei für die Stile der Komponente.
* Eine HTML-Datei für die Komponententemplate.
* Eine TypeScript-Datei mit einer Komponentenklasse namens `HeroDetailComponent`.
* Eine Testdatei für die Klasse `HeroDetailComponent`.

Der Befehl fügt auch die `HeroDetailComponent` als Deklaration in den `@NgModule` Dekorator der `src/app/app.module.ts` Datei ein.


### Schreiben Sie das Template

Schneiden Sie das HTML für das Heldendetail aus dem unteren Teil der `HeroesComponent`- aus und fügen Sie es über die generierte Boilerplate in das `HeroDetailComponent`-Template ein.

Das eingefügte HTML bezieht sich auf einen `selectedHero`.
Die neue `HeroDetailComponent` kann _jeden_ Helden darstellen, nicht nur einen ausgewählten Helden.
Ersetzen Sie also "selectedHero" durch "hero" überall im Template.

Wenn Sie fertig sind, sollte das `HeroDetailComponent`-Template wie folgt aussehen:

`src/app/hero-detail/hero-detail.component.html`
```html
<div *ngIf="hero">

  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
  </div>

</div>
```

### Hinzufügen der [`@Input()`](https://angular.io/api/core/Input) Hero-Eigenschaft

das Template `HeroDetailComponent` bindet sich an die Eigenschaft `Hero` der Komponente
die vom Typ `Hero` ist.

Öffnen Sie die Klassendatei `HeroDetailComponent` und importieren Sie das Symbol `Hero`.

`src/app/hero-detail/hero-detail.component.ts (import Hero)`
```typescript
import { Hero } from '../hero';
```

Die Eigenschaft `hero`
[muss eine _Input_-Eigenschaft sein](https://angular.io/guide/inputs-outputs),
annotiert mit dem `@Input()` Dekorator,
denn die _externe_ `HeroesComponent` [wird sich wie folgt daran binden](#heroes-component-template).

```html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

Ändern Sie die Importanweisung `@angular/core`, um das Symbol `Input` aufzunehmen.

`src/app/hero-detail/hero-detail.component.ts (import Input)`
```typescript
import { Component, OnInit, Input } from '@angular/core';
```

Fügen Sie eine Eigenschaft "hero" hinzu, der der Dekorator "@Input()" vorangestellt ist.

`src/app/hero-detail/hero-detail.component.ts`
```typescript
@Input() hero?: Hero;
```

Das ist die einzige Änderung, die Sie an der Klasse `HeroDetailComponent` vornehmen sollten.
Es gibt keine weiteren Eigenschaften. Es gibt keine Präsentationslogik.
Diese Komponente empfängt nur ein Heldenobjekt über die Eigenschaft `hero` und zeigt es an.

## Die `HeroDetailComponent` anzeigen

Die `HeroesComponent` hat die Heldendetails selbständig angezeigt, bevor Sie diesen Teil des Templates entfernt haben.
Dieser Abschnitt führt Sie durch die Delegierung von Logik an die `HeroDetailComponent`.

Die beiden Komponenten haben eine Eltern/Kind-Beziehung.
Die übergeordnete Komponente `HeroesComponent` steuert die untergeordnete Komponente `HeroDetailComponent`
indem sie ihr einen neuen Helden sendet, der angezeigt wird, wenn
der Benutzer einen Helden aus der Liste auswählt.

Sie ändern nicht die _Klasse_ von `HeroesComponent`, aber Sie ändern ihr _Template_.

### <a id="#heroes-component-template"></a>Aktualisieren Sie das `HeroesComponent`-Template

Der `HeroDetailComponent` Selektor ist `'app-hero-detail'`.
Fügen Sie ein `<app-hero-detail>` Element in der Nähe des unteren Endes des `HeroesComponent` Template hinzu, wo die Helden-Detailansicht vorher war.

Binden Sie die `HeroesComponent.selectedHero` an die Eigenschaft `hero` des Elements wie folgt.

`heroes.component.html (HeroDetail binding)`
```html
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

`[hero]="selectedHero"` ist eine Angular-[Eigenschaftsbindung(property binding)](https://angular.io/guide/property-binding).

Es ist eine _einfache_ Datenbindung von
der "selectedHero"-Eigenschaft der "HeroComponent" an die "hero"-Eigenschaft des Zielelements, die der "hero"-Eigenschaft der "HeroDetailComponent" zugeordnet ist.

Wenn der Benutzer nun auf einen Helden in der Liste klickt, ändert sich der `selectedHero`.
Wenn sich der `selectedHero` ändert, aktualisiert die _Eigenschaftsbindung_ `hero`
und die `HeroDetailComponent` zeigt den neuen Helden an.

Das überarbeitete `HeroesComponent`-Template sollte wie folgt aussehen:

`heroes.component.html`
```html
<h2>My Heroes</h2>

<ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

Der Browser wird aktualisiert und die Anwendung funktioniert wieder wie zuvor.

## Was hat sich geändert?

Wie [vorher](05_3_Selection_list.md), wenn ein Benutzer auf einen Heldennamen klickt,
erscheint das Heldendetail unterhalb der Heldenliste.
Jetzt zeigt die `HeroDetailComponent` diese Details anstelle der `HeroesComponent` an.

Das Refactoring der ursprünglichen `HeroesComponent` in zwei Komponenten bringt Vorteile, sowohl jetzt als auch in Zukunft:

1. Sie haben die Verantwortlichkeiten der `HeroesComponent` reduziert.
2. Sie können die `HeroDetailComponent` zu einem umfangreichen Helden-Editor weiterentwickeln
ohne die übergeordnete `HeroesComponent` zu berühren.
3. Sie können die `HeroesComponent` weiterentwickeln, ohne die Helden-Detailansicht zu berühren.
4. Sie können die `HeroDetailComponent` im Template einer zukünftigen Komponente wiederverwenden.

## Abschließende Code-Überprüfung

Hier sind die auf dieser Seite besprochenen Codedateien.
1. `src/app/hero-detail/hero-detail.component.ts`
```typescript
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit() {
  }

}
```
2. `src/app/hero-detail/hero-detail.component.html`
```html
<div *ngIf="hero">

  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
  </div>

</div>
```
3. `src/app/heroes/heroes.component.html`
```html
<h2>My Heroes</h2>

<ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>

<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```
4. `src/app/app.module.ts`
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
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

## Zusammenfassung

* Sie haben eine separate, wiederverwendbare `HeroDetailComponent` erstellt.


* Sie haben eine [Eigenschaftsbindung](https://angular.io/guide/property-binding) verwendet, um der übergeordneten `HeroesComponent` Kontrolle über die untergeordnete `HeroDetailComponent` zu geben.


* Sie haben den [`@Input` decorator](https://angular.io/guide/inputs-outputs)
um die `hero` Eigenschaft für die Bindung
durch die externe `HeroesComponent`.