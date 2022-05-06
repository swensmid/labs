---
title: "Navigation mit Routing hinzufügen"
type: docs
linkTitle: "Navigation mit Routing"
weight: 15
date: 2022-03-14
description: >
---

# Navigation mit Routing hinzufügen

Es gibt neue Anforderungen für die Tour of Heroes-App:

* Hinzufügen einer *Dashboard*-Ansicht.
* Hinzufügen der Möglichkeit, zwischen den Ansichten *Helden* und *Dashboard* zu navigieren.
* Wenn Benutzer auf einen Heldennamen in einer der beiden Ansichten klicken, navigiere zu einer Detailansicht des ausgewählten Helden.
* Wenn Benutzer auf einen *tiefen Link* in einer E-Mail klicken, wird die Detailansicht für einen bestimmten Helden geöffnet.

> Die Beispielanwendung, die auf dieser Seite beschrieben wird, findest du unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt5/stackblitz.html).

Wenn du fertig bist, können die Benutzer wie folgt durch die Anwendung navigieren:

![Navigation](/images/angular/nav-diagram.png)

## Hinzufügen des `AppRoutingModule`

In Angular ist es die beste Praxis, den Router in einem separaten Modul auf oberster Ebene zu laden und zu konfigurieren
zu laden und zu konfigurieren, das dem Routing gewidmet ist und von der Wurzel `AppModule` importiert wird.

Konventionell heißt die Modulklasse `AppRoutingModule` und gehört in die `app-routing.module.ts` im Ordner `src/app`.

Verwende die CLI, um es zu erzeugen.

```shell
  ng generate module app-routing --flat --module=app
```

> `--flat` legt die Datei in `src/app` statt in ihrem eigenen Ordner ab.<br>
`--module=app` weist die CLI an, sie im `imports`-Array des `AppModule` zu registrieren.


Die generierte Datei sieht wie folgt aus:

`src/app/app-routing.module.ts (generated)`
```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
```

Ersetze es durch das folgende:

`src/app/app-routing.module.ts (updated)`
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Zunächst importiert die Datei "app-routing.module.ts" die Module [RouterModule](https://angular.io/api/router/RouterModule) und [Routes](https://angular.io/api/router/Routes), damit die Anwendung über Routing-Funktionen verfügt. Der nächste Import, `HeroesComponent`, gibt dem Router einen Platz, wo er hingehen kann, sobald du die Routen konfiguriert hast.

Beachte, dass die `CommonModule` Referenzen und das `declarations` Array unnötig sind, also nicht mehr Teil von
nicht mehr Teil des `AppRoutingModule` sind. Die folgenden Abschnitte erklären den Rest des `AppRoutingModule` im Detail.


### Routes

Im nächsten Teil der Datei konfigurierst du deine Routen.
*Routen* teilen dem Router mit, welche Ansicht angezeigt werden soll, wenn ein Benutzer auf einen Link klickt oder
eine URL in die Adresszeile des Browsers einfügt.

Da `app-routing.module.ts` bereits `HeroesComponent` importiert, kannst du es im Array `routes` verwenden:

`src/app/app-routing.module.ts`
```typescript
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];
```

Eine typische Angular `Route` hat zwei Eigenschaften:

* `path`: ein String, der mit der URL in der Adressleiste des Browsers übereinstimmt.
* Komponente": die Komponente, die der Router erstellen soll, wenn er zu dieser Route navigiert.

Dies weist den Router an, diese URL mit "path: 'heroes'" abzugleichen
und die `HeroesComponent` anzuzeigen, wenn die URL etwa `localhost:4200/heroes` lautet.

### [`RouterModule.forRoot()`](https://angular.io/api/router/RouterModule#forRoot)

Die `@NgModule`-Metadaten initialisieren den Router und lassen ihn auf Standortänderungen des Browsers warten.

Die folgende Zeile fügt das `RouterModule` zum `AppRoutingModule` `imports` Array hinzu und
konfiguriert es mit den `Routen` in einem Schritt durch den Aufruf
`RouterModule.forRoot()`:

`src/app/app-routing.module.ts`
```typescript
imports: [ RouterModule.forRoot(routes) ],
```

> Die Methode heißt `forRoot()`, weil du den Router auf der Root-Ebene der Anwendung konfigurierst.
  Die Methode `forRoot()` liefert die für das Routing benötigten Service Provider und Direktiven,
  und führt die anfängliche Navigation auf der Grundlage der aktuellen Browser-URL durch.

Als nächstes exportiert `AppRoutingModule` das `RouterModule`, damit es in der gesamten Anwendung verfügbar ist.

`src/app/app-routing.module.ts`
```typescript
exports: [ RouterModule ]
```

## Hinzufügen von `RouterOutlet`

Öffne das Template `AppComponent` und ersetze das Element `<app-heroes>` durch ein Element `<router-outlet>`.

`src/app/app.component.html (router-outlet)`
```html
<h1>{{title}}</h1>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

Das Template "AppComponent" benötigt kein `<app-heroes>` mehr, da die Anwendung die "HeroComponent" nur anzeigt, wenn der Benutzer zu ihr navigiert.

Das `<router-outlet>` teilt dem Router mit, wo die gerouteten Ansichten angezeigt werden sollen.

> Das `RouterOutlet` ist eine der Router-Direktiven, die für die `AppComponent` verfügbar wurden
weil `AppModule` `AppRoutingModule` importiert, das `RouterModule` exportiert hat. Der Befehl `ng generate`, den du zu Beginn dieses Tutorials ausgeführt hast, fügte diesen Import aufgrund des `--module=app` Flags hinzu. Wenn du `app-routing.module.ts` manuell erstellt hast oder ein anderes Werkzeug als das CLI dafür verwendet hast, musst du `AppRoutingModule` in `app.module.ts` importieren und es zum `imports`-Array des `NgModule` hinzufügen.

#### Probiere es aus.

Mit diesem CLI-Befehl solltest du immer noch arbeiten.

```shell
  ng serve
```

Der Browser sollte aktualisiert werden und den Titel der Anwendung anzeigen, aber nicht die Liste der Helden.

Schau dir die Adressleiste des Browsers an.
Die URL endet auf `/`.
Der Routenpfad zu `HeroesComponent` ist `/heroes`.

Hänge `/heroes` an die URL in der Adressleiste des Browsers an.
Du solltest die bekannte Master-/Detailansicht von Helden sehen.

Entferne "heroes" aus der URL in der Adressleiste des Browsers.
Der Browser sollte aktualisiert werden und den Titel der Anwendung anzeigen, aber nicht die Liste der Helden.


## <a id="routerlink"></a>Hinzufügen eines Navigationslinks [(`routerLink`)](https://angular.io/api/router/RouterLink)

Idealerweise sollten die Benutzer auf einen Link klicken können, um zu navigieren, anstatt
als eine Routen-URL in die Adressleiste einzufügen.

Füge ein `<nav>`-Element und darin ein Ankerelement ein, das, wenn es angeklickt wird,
die Navigation zur `HeroesComponent` auslöst.
Das überarbeitete "AppComponent"-Template sieht wie folgt aus:

`src/app/app.component.html (heroes RouterLink)`
```html
<h1>{{title}}</h1>
<nav>
  <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

Ein `routerLink`-Attribut wird auf `"/heroes"` gesetzt,
die Zeichenkette, die der Router mit der Route zu `HeroesComponent` verbindet.
Der `routerLink` ist der Selektor für die `RouterLink` Direktive
die Benutzerklicks in Routernavigationen umwandelt.
Es ist eine weitere der öffentlichen Direktiven im `RouterModule`.

Der Browser aktualisiert sich und zeigt den Titel der Anwendung und den Link zu den Helden an,
aber nicht die Heldenliste.

Klicke auf den Link.
Die Adressleiste wird auf `/heroes` aktualisiert und die Liste der Helden erscheint.

> Verbessere das Aussehen dieses und zukünftiger Navigationslinks, indem du private CSS-Stile in `app.component.css` hinzufügst
wie in der endgültigen Codeüberprüfung unten aufgeführt.


## Hinzufügen einer Dashboard-Ansicht

Das Routing macht mehr Sinn, wenn es mehrere Ansichten gibt.
Bis jetzt gibt es nur die Heldenansicht.

Füge eine `DashboardComponent` mit Hilfe der CLI hinzu:

```shell
  ng generate component dashboard
```

Die CLI generiert die Dateien für die `DashboardComponent` und deklariert sie in `AppModule`.

Ersetze den Inhalt der Standarddateien in diesen drei Dateien wie folgt:

1. `src/app/dashboard/dashboard.component.html`
```html
<h2>Top Heroes</h2>
<div class="heroes-menu">
  <a *ngFor="let hero of heroes">
    {{hero.name}}
  </a>
</div>
```
2. `src/app/dashboard/dashboard.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
```
3. `src/app/dashboard/dashboard.component.css`
```css
/* DashboardComponent's private CSS styles */

h2 {
  text-align: center;
}

.heroes-menu {
  padding: 0;
  margin: auto;
  max-width: 1000px;

  /* flexbox */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
}

a {
  background-color: #3f525c;
  border-radius: 2px;
  padding: 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  text-align: center;
  width: 100%;
  min-width: 70px;
  margin: .5rem auto;
  box-sizing: border-box;

  /* flexbox */
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
}

@media (min-width: 600px) {
  a {
    width: 18%;
    box-sizing: content-box;
  }
}

a:hover {
  background-color: #000;
}
```

Das _Template_ zeigt ein Raster von Heldennamen-Links.

* Der `*ngFor` Repeater erstellt so viele Links wie im `heroes` Array der Komponente enthalten sind.
* Die Links sind als farbige Blöcke in der `dashboard.component.css` gestylt.
* Die Links gehen noch nirgendwo hin, aber [sie werden in Kürze...](#hero-details).

Die _Klasse_ ist ähnlich wie die Klasse `HeroesComponent`.
* Sie definiert eine Array-Eigenschaft `Helden`.
* Der Konstruktor erwartet, dass Angular den `HeroService` in eine private `heroService` Eigenschaft injiziert.
* Der `ngOnInit()` Lebenszyklus-Hook ruft `getHeroes()` auf.

Die Methode `getHeroes()` gibt die aufgeschnittene Liste der Helden an den Positionen 1 und 5 zurück, wobei nur vier der Top-Helden (2, 3, 4 und 5) zurückgegeben werden.

`src/app/dashboard/dashboard.component.ts`
```typescript
getHeroes(): void {
  this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1, 5));
}
```

### Hinzufügen der Dashboard-Route

Um zum Dashboard zu navigieren, benötigt der Router eine entsprechende Route.

Importiere die `DashboardComponent` in die Datei `app-routing-module.ts`.

`src/app/app-routing.module.ts (import DashboardComponent)`
```typescript
import { DashboardComponent } from './dashboard/dashboard.component';
```

Füge dem Array `routes` eine Route hinzu, die einem Pfad zur `DashboardComponent` entspricht.

`src/app/app-routing.module.ts`
```typescript
{ path: 'dashboard', component: DashboardComponent },
```

### Hinzufügen einer Standard-Route

Wenn die Anwendung gestartet wird, zeigt die Adressleiste des Browsers auf das Stammverzeichnis der Website.
Das passt zu keiner bestehenden Route, so dass der Router nirgendwo hin navigiert.
Der Platz unter dem `<router-outlet>` ist leer.

Um die Anwendung automatisch zum Dashboard navigieren zu lassen, füge die folgende
Route in das Array `routes` ein.

`src/app/app-routing.module.ts`
```typescript
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
```

Diese Route leitet eine URL, die vollständig mit dem leeren Pfad übereinstimmt, an die Route um, deren Pfad "/dashboard" lautet.

Nachdem der Browser aktualisiert wurde, lädt der Router die `DashboardComponent`
und die Adressleiste des Browsers zeigt die URL `/dashboard` an.

### Dashboard-Link zur Shell hinzufügen

Der Benutzer sollte in der Lage sein, zwischen der
`DashboardComponent` und der `HeroesComponent` hin und her navigieren können, indem er auf Links im
Navigationsbereich am oberen Rand der Seite klicken.

Füge einen Dashboard-Navigationslink zum Shell-Template `AppComponent` hinzu, direkt über dem Link *Heroes*.

`src/app/app.component.html`
```html
<h1>{{title}}</h1>
<nav>
  <a routerLink="/dashboard">Dashboard</a>
  <a routerLink="/heroes">Heroes</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

Nach dem Aktualisieren des Browsers kannst du frei zwischen den beiden Ansichten navigieren, indem du auf die Links klickst.

## <a id="#hero-details"></a>Zu den Heldendetails navigieren

Die `HeroDetailComponent` zeigt Details zu einem ausgewählten Helden an.
Im Moment ist die `HeroDetailComponent` nur am unteren Rand der `HeroesComponent` sichtbar.

Der Benutzer sollte in der Lage sein, diese Details auf drei Arten zu erreichen.

1. Durch Anklicken eines Helden im Dashboard.
1. Durch Anklicken eines Helden in der Heldenliste.
1. Durch Einfügen einer "Deep Link"-URL in die Adressleiste des Browsers, die den anzuzeigenden Helden identifiziert.

In diesem Abschnitt wirst du die Navigation zur `HeroDetailComponent` aktivieren
und befreist sie von der `HeroesComponent`.

### Löschen der _Helden-Details_ aus der `HeroesComponent`.

Wenn der Benutzer auf ein Heldenelement in der `HeroesComponent` klickt,
sollte die Anwendung zur `HeroDetailComponent` navigieren,
und die Helden-Listenansicht durch die Helden-Detailansicht ersetzen.
Die Ansicht der Heldenliste sollte keine Heldendetails mehr anzeigen, wie es jetzt der Fall ist.

Öffne Das Template `HeroesComponent` (`heroes/heroes.component.html`) und
lösche das Element `<app-hero-detail>` von unten.

Das Anklicken eines Heldenelements bewirkt jetzt nichts.
Du wirst [das in Kürze beheben](#heroes-component-links), nachdem du das Routing zur `HeroDetailComponent` aktiviert hast.

### Hinzufügen einer _Heldendetail_-Route

Eine URL wie `~/detail/11` wäre eine gute URL, um zur *Helden-Detail*-Ansicht des Helden zu navigieren, dessen `id` `11` ist.

Öffne `app-routing.module.ts` und importiere `HeroDetailComponent`.

`src/app/app-routing.module.ts (import HeroDetailComponent)`
```typescript
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
```

Füge dann eine _parametrisierte_ Route zum Array `routes` hinzu, die dem Pfadmuster zur Ansicht _hero detail_ entspricht.

`src/app/app-routing.module.ts`
```typescript
{ path: 'detail/:id', component: HeroDetailComponent },
```
Der Doppelpunkt (:) im "Pfad" zeigt an, dass ":id" ein Platzhalter für eine bestimmte "id" des Helden ist.

Zu diesem Zeitpunkt sind alle Anwendungsrouten vorhanden.

`src/app/app-routing.module.ts (all routes)`
```typescript
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];
```

### `DashboardComponent` Heldenlinks

Die `DashboardComponent`-Heldenlinks machen im Moment noch nichts.

Jetzt, wo der Router eine Route zu `HeroDetailComponent` hat,
fixiere die Dashboard-Heldenlinks so, dass sie über die _parametrisierte_ Dashboard-Route navigieren.

`src/app/dashboard/dashboard.component.html (hero links)`
```html
<a *ngFor="let hero of heroes"
  routerLink="/detail/{{hero.id}}">
  {{hero.name}}
</a>
```

Du verwendest Angular [interpolation binding](https://angular.io/guide/interpolation) innerhalb des `*ngFor` Repeaters
um die `hero.id` der aktuellen Iteration in jeden
[`routerLink`](#routerlink) anzuzeigen.

### <a id="heroes-component-links"></a>`HeroesComponent` Helden-Links

Die Heldenelemente in der `HeroesComponent` sind `<li>` Elemente, deren Klick-Ereignisse
an die Methode `onSelect()` der Komponente gebunden sind.

`src/app/heroes/heroes.component.html (list with onSelect)`
```html
<ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
```

Entferne das `<li>` auf sein `*ngFor` zurück,
verpacke das Abzeichen und den Namen in ein Ankerelement (`<a>`),
und füge ein `routerLink`-Attribut zu dem Anker hinzu, das
dasselbe ist wie im Dashboard-Template.

`src/app/heroes/heroes.component.html (list with links)`
```html
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <a routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>
  </li>
</ul>
```

Du musst das private Stylesheet (`heroes.component.css`) anpassen, damit die Liste wie vorher aussieht.
Die überarbeiteten Styles sind im [final code review](#final-code-review) am Ende dieser Anleitung zu finden.

#### Entferne toten Code (optional)

Während die `HeroesComponent` Klasse noch funktioniert,
werden die Methode `onSelect()` und die Eigenschaft `selectedHero` nicht mehr verwendet.

Es ist schön, aufzuräumen, und du wirst dich später selbst dafür dankbar sein.
Hier ist die Klasse, nachdem der tote Code entfernt wurde.

`src/app/heroes/heroes.component.ts (cleaned up)`
```typescript
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
```

## Routable `HeroDetailComponent`

Zuvor setzte die übergeordnete `HeroesComponent` die Eigenschaft `HeroDetailComponent.hero`
Eigenschaft und die `HeroDetailComponent` zeigte den Helden an.

Die `HeroesComponent` macht das nicht mehr.
Jetzt erstellt der Router die `HeroDetailComponent` als Antwort auf eine URL wie `~/detail/11`.

Die `HeroDetailComponent` braucht einen neuen Weg, um den anzuzeigenden Helden zu erhalten.
Dieser Abschnitt erklärt das Folgende:

* Abrufen der Route, die sie erstellt hat
* Extrahieren der "ID" aus der Route
* Erwerbe den Helden mit dieser "ID" vom Server mit Hilfe des "HeroService".

Füge die folgenden Importe hinzu:

`src/app/hero-detail/hero-detail.component.ts`
```typescript
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
```

Injiziere die Dienste `ActivatedRoute`, `HeroService` und `Location`
in den Konstruktor und speichert ihre Werte in privaten Feldern:

`src/app/hero-detail/hero-detail.component.ts`
```typescript
constructor(
  private route: ActivatedRoute,
  private heroService: HeroService,
  private location: Location
) {}
```

Das [`ActivatedRoute`](https://angular.io/api/router/ActivatedRoute) enthält Informationen über die Route zu dieser Instanz von `HeroDetailComponent`.
Diese Komponente ist an den Parametern der Route interessiert, die aus der URL extrahiert wurden.
Der "id" Parameter ist die "id" des anzuzeigenden Helden.

Der [`HeroService`](05_5_Services_hinzufügen.md) erhält Heldendaten vom entfernten Server
und diese Komponente wird sie verwenden, um den anzuzeigenden Helden zu erhalten.

Die [`location`](https://angular.io/api/common/Location) ist ein Angular-Dienst für die Interaktion mit dem Browser.
Du wirst ihn [später](#goback) verwenden, um zurück zu der Ansicht zu navigieren, die hierher navigiert hat.

### Extrahiere den `id`-Routenparameter

In dem `ngOnInit()` [Lebenszyklus-Haken](https://angular.io/guide/lifecycle-hooks#oninit)
Rufe `getHero()` auf und definiere es wie folgt.

`src/app/hero-detail/hero-detail.component.ts`
```typescript
ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}
```

Der `route.snapshot` ist ein statisches Abbild der Routeninformationen kurz nach der Erstellung der Komponente.

Die `paramMap` ist ein Wörterbuch mit Routenparameterwerten, die aus der URL extrahiert wurden.
Der "id"-Schlüssel gibt die "id" des abzurufenden Helden zurück.

Routenparameter sind immer Zeichenketten.
Die JavaScript-Funktion `Number` wandelt die Zeichenkette in eine Zahl um,
was die "id" eines Helden sein sollte.

Der Browser wird aktualisiert und die Anwendung stürzt mit einem Compilerfehler ab.
`HeroService` hat keine `getHero()` Methode.
Füge sie jetzt hinzu.

### Hinzufügen von `HeroService.getHero()`

Öffne `HeroService` und füge die folgende `getHero()` Methode mit der `id` nach der `getHeroes()` Methode hinzu:

`src/app/hero.service.ts (getHero)`
```typescript
getHero(id: number): Observable<Hero> {
  // Im Moment wird davon ausgegangen, dass ein Held mit der angegebenen `id` immer existiert.
  // Die Fehlerbehandlung wird im nächsten Schritt des Tutorials hinzugefügt.
  const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(hero);
}
```

Wie [`getHeroes()`](05_5:Services_hinzufügen.md),
hat `getHero()` eine asynchrone Signatur.
Es gibt einen _mock hero_ als `Observable` zurück, unter Verwendung der RxJS `of()` Funktion.

Du kannst `getHero()` als echte `Http`-Anfrage neu implementieren
ohne die `HeroDetailComponent` zu ändern, die sie aufruft.

#### Versuche es

Der Browser aktualisiert sich und die Anwendung funktioniert wieder.
Du kannst auf einen Helden im Dashboard oder in der Heldenliste klicken und zur Detailansicht dieses Helden navigieren.

Wenn du `localhost:4200/detail/11` in die Adressleiste des Browsers einfügst,
navigiert der Router zur Detailansicht für den Helden mit der `id: 11`, "Dr. Nice".

### Finde den Weg zurück

Mit einem Klick auf den Zurück-Button des Browsers,
kannst du zur Heldenliste oder zur Dashboard-Ansicht zurückkehren,
je nachdem, von wo aus du zur Detailansicht gelangt bist.

Es wäre schön, eine Schaltfläche in der `HeroDetail`-Ansicht zu haben, die das kann.

Füge eine *Zurück*-Schaltfläche am unteren Ende des Komponententemplate hinzu und binde sie
an die Methode `goBack()` der Komponente.

`src/app/hero-detail/hero-detail.component.html (back button)`
```html
<button (click)="goBack()">go back</button>
```

Füge der Komponentenklasse eine "goBack()-Methode" hinzu, die einen Schritt zurückgeht
im Verlaufsstapel des Browsers
unter Verwendung des `Location`-Dienstes, den du zuvor injiziert hast.

`src/app/hero-detail/hero-detail.component.ts (goBack)`
```typescript
goBack(): void {
  this.location.back();
}
```

Aktualisiere den Browser und beginne zu klicken.
Benutzer können in der App navigieren, vom Dashboard zu den Heldendetails und zurück,
von der Heldenliste zu den Minidetails, zu den Heldendetails und wieder zurück zu den Helden.

Die Details sehen besser aus, wenn du die privaten CSS-Stile zu `hero-detail.component.css` hinzufügst
wie in einem der ["final code review"](#final-code-review) Tabs unten aufgeführt.

## <a id="final-code-review"></a>Final code review

<a href="../assets/files/05_6.zip" download>Hier</a> oder [hier](../assets/files/05_6) 
sind die auf dieser Seite besprochenen Codedateien.

## Zusammenfassung

* Du hast den Angular-Router hinzugefügt, um zwischen verschiedenen Komponenten zu navigieren.
* Du hast die `AppComponent` in eine Navigations-Shell mit `<a>`-Links und einem `<router-outlet>` verwandelt.
* Du hast den Router in einem "AppRoutingModule" konfiguriert.
* Du hast Routen, eine Redirect-Route und eine parametrisierte Route definiert.
* Du hast die `routerLink`-Direktive in Ankerelementen verwendet.
* Du hast eine eng gekoppelte Master/Detail-Ansicht in eine geroutete Detail-Ansicht umgewandelt.
* Du hast Router-Link-Parameter verwendet, um zur Detailansicht eines vom Benutzer ausgewählten Helden zu navigieren.
* Du hast den `HeroService` auf mehrere Komponenten verteilt.