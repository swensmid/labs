---
title: "Auswahlliste"
type: docs
linkTitle: "Auswahlliste"
weight: 12
date: 2022-03-14
description: >
    Auf dieser Seite erweiterst du die Anwendung Tour der Helden, um eine Liste von Helden anzuzeigen und
    den Benutzern die Möglichkeit geben, einen Helden auszuwählen und die Details des Helden anzuzeigen.
---


# Eine Auswahlliste anzeigen
> Die Beispielanwendung, die auf dieser Seite beschrieben wird, findest du unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt2/stackblitz.html).


## Mock Heroes erstellen

Du benötigst einige Helden, die angezeigt werden sollen.

Letztendlich wirst du diese von einem entfernten Datenserver erhalten.
Für den Moment wirst du einige _mock heroes_ erstellen und so tun, als kämen sie vom Server.

Erstelle eine Datei namens `mock-heroes.ts` im Ordner `src/app/`.
Definiere eine `HEROES` Konstante als Array von zehn Helden und exportiere sie.
Die Datei sollte wie folgt aussehen.

`src/app/mock-heroes.ts`
```typescript
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```

## Anzeige der Helden

Öffne die Klassendatei `HeroesComponent` und importiere das Mock `HEROES`.

`src/app/heroes/heroes.component.ts (import HEROES)`
```typescript
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```

Definiere in derselben Datei (Klasse `HeroesComponent`) eine Komponenteneigenschaft namens `heroes`, um das Array `HEROES` zur Bindung freizugeben.

`src/app/heroes/heroes.component.ts`
```typescript
export class HeroesComponent implements OnInit {

  heroes = HEROES;
}
```

### Auflisten von Helden mit [*ngFor](https://angular.io/api/common/NgForOf)

Öffne die Templatedatei `HeroesComponent` und nimm die folgenden Änderungen vor:

* Füge ein `<h2>` am Anfang ein,
* Darunter fügst du eine ungeordnete HTML-Liste (`<ul>`) ein.
* Füge ein `<li>` innerhalb des `<ul>` ein, das die Eigenschaften eines `Helden` anzeigt.
* Streue einige CSS-Klassen für die Gestaltung ein (Du wirst die CSS-Stile in Kürze hinzufügen).

Das Ganze soll so aussehen:

`heroes.component.html (heroes template)`
```html
<h2>My Heroes</h2>
<ul class="heroes">
  <li>
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```

Es wird ein Fehler angezeigt, da die Eigenschaft "hero" nicht existiert. Um Zugriff auf jeden einzelnen Helden zu haben und sie alle aufzulisten, füge ein `*ngFor` zum `<li>` hinzu, um die Liste der Helden zu durchlaufen:

```html
<li *ngFor="let hero of heroes">
```

Die `*ngFor` ist Angulars Direktive _repeater_.
Sie wiederholt das Host-Element für jedes Element in einer Liste.

Die Syntax in diesem Beispiel ist wie folgt:

* `<li>` ist das Host-Element.
* `heroes` enthält die Mock-Helden-Liste der Klasse `HeroesComponent`, die Mock-Helden-Liste.
* `hero` enthält das aktuelle Heldenobjekt für jede Iteration durch die Liste.

![asset](/images/hint.png) Vergiss nicht das Sternchen (*) vor `ngFor`. Es ist ein wichtiger Teil der Syntax.


Nachdem der Browser aktualisiert wurde, erscheint die Liste der Helden.

### <a id="styles"></a>Stil der Helden

Die Heldenliste sollte ansprechend sein und visuell reagieren, wenn der Benutzer
mit dem Mauszeiger einen Helden aus der Liste auswählen.

Im [ersten Tutorial](https://angular.io/tutorial/toh-pt0#app-wide-styles) hast du die grundlegenden Stile für die gesamte Anwendung in `styles.css` festgelegt.
Dieses Stylesheet enthielt keine Stile für diese Liste von Helden.

Du kannst weitere Stile zu `styles.css` hinzufügen und das Stylesheet mit dem Hinzufügen von Komponenten weiter ausbauen.

Vielleicht ziehst du es stattdessen vor, private Stile für eine bestimmte Komponente zu definieren und alles, was eine Komponente braucht, zu behalten&mdash; den Code, das HTML,
und das CSS &mdash;zusammen an einem Ort.

Dieser Ansatz macht es einfacher, die Komponente an anderer Stelle wiederzuverwenden
und das beabsichtigte Erscheinungsbild der Komponente zu erhalten, selbst wenn die globalen Stile unterschiedlich sind.

Du definierst private Stile entweder inline im Array `@Component.styles` oder
als Stylesheet-Datei(en), die im `@Component.styleUrls` Array identifiziert werden.

Als die CLI die `HeroesComponent` generierte, erstellte sie ein leeres `heroes.component.css` Stylesheet für die `HeroesComponent`
und verwies in `@Component.styleUrls` wie folgt darauf.

`src/app/heroes/heroes.component.ts (@Component)`
```typescript
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
```

Öffne die Datei `heroes.component.css` und füge die privaten CSS-Stile für die `HeroesComponent` ein.
Du findest sie in der [finalen Code-Übersicht](#final-code-review) am Ende dieser Anleitung.

![asset](/images/hint.png)
Stile und Stylesheets, die in `@Component`-Metadaten identifiziert werden, sind auf diese spezifische Komponente beschränkt.
Die `heroes.component.css`-Stile gelten nur für die `HeroesComponent` und haben keine Auswirkungen auf das äußere HTML oder das HTML in anderen Komponenten.


## Anzeigen von Details

Wenn der Benutzer auf einen Helden in der Liste klickt, sollte die Komponente die Details des ausgewählten Helden unten auf der Seite anzeigen.

In diesem Abschnitt wirst du auf das Klick-Ereignis für das Heldenelement warten
und aktualisieren die Heldendetails.

### Hinzufügen einer Klick-Ereignisbindung

Füge eine Klick-Ereignis-Bindung zu `<li>` wie folgt hinzu:

`heroes.component.html (template excerpt)`
```html
<li *ngFor="let hero of heroes" (click)="onSelect(hero)">
```

Dies ist ein Beispiel für die [Ereignisbindung](https://angular.io/guide/event-binding)-Syntax von Angular.

Die Klammern um `click` sagen Angular, dass es auf das `click`-Ereignis des `<li>`-Elements warten soll.
Wenn der Benutzer auf das Element `<li>` klickt, führt Angular den Ausdruck `onSelect(hero)` aus.


Im nächsten Abschnitt definierst du eine `onSelect()` Methode in `HeroesComponent` um
um den Helden anzuzeigen, der in der `*ngFor` Expression definiert wurde.


### Füge den Click-Event-Handler hinzu

Benenne die Eigenschaft `hero` der Komponente in `selectedHero` um, aber weise sie nicht zu.
Es gibt keinen _selected hero_, wenn die Anwendung startet.

Füge die folgende Methode `onSelect()` hinzu, die den angeklickten Helden aus dem Template
dem `selectedHero` der Komponente zuweist.

`src/app/heroes/heroes.component.ts (onSelect)`
```typescript
selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
```

### Hinzufügen eines Detailbereichs

Derzeit hast du eine Liste in dem Komponententemplate. Um auf einen Helden in der Liste zu klicken
 und Details über diesen Helden anzuzeigen, benötigst du einen Abschnitt für die Details, der im
Template zu finden ist. Füge folgendes zu `heroes.component.html` unter dem Listenabschnitt hinzu:

`heroes.component.html (selected hero details)`
```html
<h2>{{selectedHero.name | uppercase}} Details</h2>
<div><span>id: </span>{{selectedHero.id}}</div>
<div>
  <label for="hero-name">Hero name: </label>
  <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
</div>
```

Nach dem Aktualisieren des Browsers ist die Anwendung fehlerhaft.

Öffne die Entwicklerwerkzeuge des Browsers und suche in der Konsole nach einer Fehlermeldung wie dieser:

```shell
HeroesComponent.html:3 ERROR TypeError: Cannot read property 'name' of undefined
```

#### Was ist passiert?

Wenn die Anwendung startet, ist die Eigenschaft `selectedHero` "undefiniert" _durch Design_.

Bindungsausdrücke im Template, die sich auf Eigenschaften von `selectedHero` beziehen&mdash;Ausdrücke wie `{{selectedHero.name}}`&mdash;_müssen fehlschlagen_, weil es keinen ausgewählten Helden gibt.


#### Die Lösung - leere Details mit _*ngIf_ ausblenden


Die Komponente sollte die ausgewählten Heldendetails nur anzeigen, wenn der `selectedHero` existiert.

Wickle das HTML der Heldendetails in ein `<div>` ein.
Füge die `*ngIf`-Direktive von Angular in das `<div>` ein und setze es auf `selectedHero`.


![asset](/images/hint.png) Vergiss nicht, das Sternchen (*) vor `ngIf` zu setzen. Das ist ein wichtiger Teil der Syntax.


`src/app/heroes/heroes.component.html (*ngIf)`
```html
<div *ngIf="selectedHero">

  <h2>{{selectedHero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{selectedHero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
  </div>

</div>
```

Nach dem Aktualisieren des Browsers wird die Liste der Namen wieder angezeigt.
Der Detailbereich ist leer.
Klicke auf einen Helden in der Liste der Helden und seine Details erscheinen.
Die Anwendung scheint wieder zu funktionieren.
Die Helden werden in einer Liste angezeigt und die Details zu dem angeklickten Helden erscheinen unten auf der Seite.


#### Warum es funktioniert

Wenn `selectedHero` undefiniert ist, entfernt das `ngIf` die Heldendetails aus dem DOM. Es gibt keine `selectedHero` Bindungen zu berücksichtigen.

Wenn der Benutzer einen Helden auswählt, hat `selectedHero` einen Wert und
ngIf" setzt das Heldendetail in das DOM.

### Den ausgewählten Helden gestalten

Um den ausgewählten Helden zu identifizieren, kannst die CSS-Klasse `.selected` in den [Stilen, die du zuvor hinzugefügt hast](#styles) verwenden.
Um die Klasse `.selected` auf das `<li>` anzuwenden (wenn der Benutzer darauf klickt), verwende die Klassenbindung.

![Ausgewählter Held mit dunklem Hintergrund und hellem Text, der ihn von nicht ausgewählten Listenelementen unterscheidet](/images/angular/heroes-list-selected.png)

Angulars [class-binding](https://angular.io/guide/attribute-binding#class-binding) kann eine CSS-Klasse bedingt hinzufügen und entfernen.
Füge `[class.some-css-class]="some-condition"` zu dem Element hinzu, das du gestalten möchtest.

Füge die folgende `[class.selected]` Bindung zum `<li>` im `HeroesComponent` Template hinzu:

`heroes.component.html (toggle the 'selected' CSS class)`
```typescript
[class.selected]="hero === selectedHero"
```

Wenn der aktuelle Zeilenheld derselbe ist wie der `selectedHero`, fügt Angular die CSS-Klasse `selected` hinzu. Wenn die beiden Helden unterschiedlich sind, entfernt Angular die Klasse.

Das fertige `<li>` sieht wie folgt aus:

`heroes.component.html (list item hero)`
```html
<li *ngFor="let hero of heroes"
  [class.selected]="hero === selectedHero"
  (click)="onSelect(hero)">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
```

## <div id="final-code-review"></div>Abschließende Code-Überprüfung

Hier sind die auf dieser Seite besprochenen Codedateien, einschließlich der `HeroesComponent`-Stile.

1. `src/app/mock-heroes.ts`
```typescript
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```
2. `src/app/heroes/heroes.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
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

<div *ngIf="selectedHero">

  <h2>{{selectedHero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{selectedHero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
  </div>

</div>
```
4. `src/app/heroes/heroes.component.css`
```css
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  cursor: pointer;
  position: relative;
  left: 0;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
.heroes li:hover {
  color: #2c3a41;
  background-color: #e6e6e6;
  left: .1em;
}
.heroes li.selected {
  background-color: black;
  color: white;
}
.heroes li.selected:hover {
  background-color: #505050;
  color: white;
}
.heroes li.selected:active {
  background-color: black;
  color: white;
}
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}

input {
  padding: .5rem;
}
```

## Zusammenfassung

* Die Anwendung "Tour of Heroes" zeigt eine Liste von Helden mit einer Detailansicht an.
* Der Benutzer kann einen Helden auswählen und dessen Details sehen.
* Du hast `*ngFor` verwendet, um eine Liste anzuzeigen.
* Du hast `*ngIf` verwendet, um einen HTML-Block bedingt ein- oder auszuschließen.
* Du kannst eine CSS-Stilklasse mit einer `class`-Bindung umschalten.