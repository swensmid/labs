---
title: "Daten von einem Server abrufen"
type: docs
linkTitle: "Daten von einem Server abrufen"
weight: 16
date: 2022-03-14
description: >
    In diesem Tutorial fügen Sie die folgenden Datenpersistenzfunktionen mit Hilfe von
    Angulars HttpClient hinzu.
---


# Daten von einem Server abrufen

* Der `HeroService` holt Heldendaten mit HTTP-Anfragen.
* Benutzer können Helden hinzufügen, bearbeiten und löschen und diese Änderungen über HTTP speichern.
* Benutzer können nach Helden anhand ihres Namens suchen.

> Die Beispielanwendung, die auf dieser Seite beschrieben wird, finden Sie unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt6/stackblitz.html).

## Aktivieren Sie HTTP-Dienste

[`HttpClient`](https://angular.io/api/common/http/HttpClient) ist Angulars Mechanismus, um mit einem entfernten Server über HTTP zu kommunizieren.

Machen Sie `HttpClient` überall in der Anwendung in zwei Schritten verfügbar. Erstens, fügen Sie es zum Root `AppModule` hinzu, indem Sie es importieren:

`src/app/app.module.ts (HttpClientModule import)`
```typescript
import { HttpClientModule } from '@angular/common/http';
```

Als Nächstes, immer noch im `AppModule`, fügen Sie `HttpClientModule` in das `imports` Array ein:

`src/app/app.module.ts (imports array excerpt)`
```typescript
@NgModule({
  imports: [
    HttpClientModule,
  ],
})
```


## Einen Datenserver simulieren

Dieses Tutorial-Beispiel imitiert die Kommunikation mit einem entfernten Datenserver, indem es die
[In-memory Web API](https://github.com/angular/angular/tree/master/packages/misc/angular-in-memory-web-api "In-memory Web API") Modul.

Nach der Installation des Moduls wird die Anwendung Anfragen an den `HttpClient` stellen und Antworten von diesem empfangen
ohne zu wissen, dass die *In-memory Web API* diese Anfragen abfängt,
sie auf einen In-Memory-Datenspeicher anwendet und simulierte Antworten zurückgibt.

Wenn Sie die In-Memory-Web-API verwenden, müssen Sie keinen Server einrichten, um etwas über den `HttpClient` zu erfahren.

Installieren Sie das In-memory Web API Paket von npm mit dem folgenden Befehl:

```shell
  npm install angular-in-memory-web-api --save
```

Im `AppModule` importieren Sie das `HttpClientInMemoryWebApiModule` und die Klasse `InMemoryDataService`,
die Sie in einem Moment erstellen werden.

`src/app/app.module.ts (In-memory Web API imports)`
```typescript
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
```

Nach dem `HttpClientModule` fügen Sie das `HttpClientInMemoryWebApiModule`
zum `AppModule` `imports` Array hinzu und konfigurieren es mit dem `InMemoryDataService`.

`src/app/app.module.ts (imports array excerpt)`
```typescript
HttpClientModule,

// Das Modul HttpClientInMemoryWebApiModule fängt HTTP-Anfragen ab
// und gibt simulierte Serverantworten zurück.
// Entfernen Sie es, wenn ein echter Server bereit ist, Anfragen zu empfangen.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
```

Die Konfigurationsmethode "forRoot()" nimmt eine "InMemoryDataService"-Klasse
die die In-Memory-Datenbank vorbereiten.

Erzeugen Sie die Klasse `src/app/in-memory-data.service.ts` mit dem folgenden Befehl:

```shell
  ng generate service InMemoryData
```

Ersetzen Sie den Standardinhalt von `in-memory-data.service.ts` durch den folgenden:

`src/app/in-memory-data.service.ts`
```typescript
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
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
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
```

Die Datei `in-memory-data.service.ts` wird die Funktion von `mock-heroes.ts` übernehmen.
Löschen Sie die Datei `mock-heroes.ts` jedoch noch nicht, da Sie sie noch für einige weitere Schritte dieses Tutorials benötigen.

Wenn der Server bereit ist, lösen Sie die In-Memory-Web-API, und die Anfragen der Anwendung werden an den Server weitergeleitet.


## Helden und HTTP

Im `HeroService` importieren Sie `HttpClient` und `HttpHeaders`:

`src/app/hero.service.ts (import HTTP symbols)`
```typescript
import { HttpClient, HttpHeaders } from '@angular/common/http';
```

Noch im `HeroService`, injizieren Sie `HttpClient` in den Konstruktor in einer privaten Eigenschaft namens `http`.

`src/app/hero.service.ts`
```typescript
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
```

Beachten Sie, dass Sie den `MessageService` weiterhin injizieren, aber da Sie ihn so häufig aufrufen werden, verpacken Sie ihn in eine private `log()` Methode:

`src/app/hero.service.ts`
```typescript
/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
```

Definieren Sie die `heroesUrl` der Form `:base/:collectionName` mit der Adresse der heroes-Ressource auf dem Server.
 Dabei ist `base` die Ressource, an die Anfragen gestellt werden,
 und `collectionName` ist das heroes-Datenobjekt in der `in-memory-data-service.ts`.

`src/app/hero.service.ts`
```typescript
private heroesUrl = 'api/heroes';  // URL to web api
```

### Abrufen von Helden mit `HttpClient`

Das aktuelle `HeroService.getHeroes()`
verwendet die RxJS-Funktion `of()`, um ein Array von Mock-Helden zurückzugeben
als `Observable<Hero[]>` zurückzugeben.

`src/app/hero.service.ts (getHeroes with RxJs 'of()')`
```typescript
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
```

Konvertieren Sie diese Methode zur Verwendung von `HttpClient` wie folgt:

`src/app/hero.service.ts`
```typescript
/** GET heroes from the server */
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
}
```

Aktualisieren Sie den Browser. Die Heldendaten sollten erfolgreich vom
Mock-Server geladen werden.

Sie haben `of()` gegen `http.get()` ausgetauscht und die Anwendung funktioniert ohne weitere Änderungen
weil beide Funktionen ein `Observable<Hero[]>` zurückgeben.

### [`HttpClient`](https://angular.io/api/common/http/HttpClient)-Methoden geben einen Wert zurück

Alle `HttpClient`-Methoden geben ein RxJS `Observable` von etwas zurück.

HTTP ist ein Anfrage/Antwort-Protokoll.
Man stellt eine Anfrage und erhält eine einzige Antwort zurück.

Im Allgemeinen _kann eine Observable mehrere Werte im Laufe der Zeit zurückgeben.
Eine Observable von `HttpClient` gibt immer einen einzigen Wert aus und beendet sich dann, um nie wieder einen Wert auszugeben.

Dieser spezielle `HttpClient.get()`-Aufruf gibt ein `Observable<Hero[]>` zurück; das heißt, "_ein Observable von Hero-Arrays_". In der Praxis wird nur ein einziges Helden-Array zurückgegeben.

### `HttpClient.get()` gibt Antwortdaten zurück

HttpClient.get()" gibt standardmäßig den Körper der Antwort als untypisiertes JSON-Objekt zurück.
Die Anwendung des optionalen Typ-Spezifizierers `<Hero[]>` fügt TypeScript-Fähigkeiten hinzu, die Fehler während der Kompilierungszeit reduzieren.

Die Daten-API des Servers bestimmt die Form der JSON-Daten.
Die Daten-API von _Tour of Heroes_ gibt die Heldendaten als Array zurück.

> Andere APIs verbergen die gewünschten Daten möglicherweise in einem Objekt.
Sie müssen diese Daten möglicherweise durch Verarbeitung des `Observable`-Ergebnisses
mit dem RxJS-Operator "map()" verarbeiten.

Obwohl hier nicht besprochen, gibt es ein Beispiel für `map()` in der `getHeroNo404()`
Methode, die im Quellcode des Beispiels enthalten ist.


### Fehlerbehandlung/Error handling

Dinge gehen schief, besonders wenn man Daten von einem entfernten Server erhält.
Die Methode `HeroService.getHeroes()` sollte Fehler abfangen und etwas Passendes tun.

Um Fehler abzufangen, **"pipen" Sie das Observable** Ergebnis von `http.get()` durch einen RxJS `catchError()` Operator.

Importieren Sie das Symbol `catchError` aus `rxjs/operators`, zusammen mit einigen anderen Operatoren, die Sie später benötigen werden.

`src/app/hero.service.ts`
```typescript
import { catchError, map, tap } from 'rxjs/operators';
```

Erweitern Sie nun das Observable Ergebnis mit der Methode `pipe()` und
geben Sie ihm einen `catchError()` Operator.

`src/app/hero.service.ts`
```typescript
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

Der Operator `catchError()` fängt ein **`Observable` ab, das fehlgeschlagen ist**.
Der Operator übergibt dann den Fehler an die Fehlerbehandlungsfunktion.

Die folgende Methode `handleError()` meldet den Fehler und gibt dann ein
unschädliches Ergebnis zurück, so dass die Anwendung weiter funktioniert.

#### `handleError`

Die folgende `handleError()`-Methode wird von vielen `HeroService`-Methoden verwendet
geteilt, also ist sie verallgemeinert, um ihren unterschiedlichen Bedürfnissen gerecht zu werden.

Anstatt den Fehler direkt zu behandeln, gibt sie eine Fehlerbehandlungsfunktion an `catchError` zurück, die sie
mit dem Namen der fehlgeschlagenen Operation und einem sicheren Rückgabewert konfiguriert hat.

`src/app/hero.service.ts`
```typescript
/**
 * Behandelt eine fehlgeschlagene Http-Operation.
 * Lässt die App weiterlaufen.
 * @param operation - Name des fehlgeschlagenen Vorgangs
 * @param result - optionaler Wert, der als beobachtbares Ergebnis zurückgegeben wird
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: den Fehler an die entfernte Logging-Infrastruktur senden
    console.error(error); // stattdessen auf der Konsole protokollieren

    // TODO: Fehler besser für den Benutzer aufbereiten
    this.log(`${operation} failed: ${error.message}`);

    // Lassen Sie die Anwendung weiterlaufen, indem Sie ein leeres Ergebnis zurückgeben.
    return of(result as T);
  };
}
```

Nachdem der Fehler an die Konsole gemeldet wurde, konstruiert der Handler
eine benutzerfreundliche Meldung und gibt einen sicheren Wert an die Anwendung zurück, damit diese weiterarbeiten kann.

Weil jede Dienstmethode eine andere Art von `Observable`-Ergebnis zurückgibt,
handleError()` einen Typ-Parameter, um den sicheren Wert als den von der Anwendung erwarteten Typ zurückgeben zu können.

### Tippen Sie auf das Observable

Die `HeroService`-Methoden **zapfen** den Fluss der Observable Werte an
und senden mit der Methode `log()` eine Nachricht an den Nachrichtenbereich am unteren Rand der Seite.

Sie tun dies mit dem RxJS-Operator "tap()",
der sich die Observable Werte ansieht, etwas mit diesen Werten macht
und sie weitergibt.
Der `tap()` Rückruf berührt die Werte selbst nicht.

Hier ist die endgültige Version von "getHeroes()" mit dem "tap()", der die Operation protokolliert.

`src/app/hero.service.ts`
```typescript
/** GET heroes from the server */
getHeroes(): Observable<Hero[]> {
  return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
}
```

### Held nach ID abrufen

Die meisten Web APIs unterstützen eine _get by id_ Anfrage in der Form `:baseURL/:id`.

Hier ist die _Basis-URL_ die `heroesURL`, die im Abschnitt Heroes und HTTP definiert ist (`api/heroes`) und _id_ ist
die Nummer des Helden, den Sie abrufen wollen. Zum Beispiel, `api/heroes/11`.

Aktualisieren Sie die `HeroService` `getHero()` Methode mit dem Folgenden, um diese Anfrage zu stellen:

`src/app/hero.service.ts`
```typescript
/** GET hero by id. Will 404 if id not found */
getHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get<Hero>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Hero>(`getHero id=${id}`))
  );
}
```

Es gibt drei wesentliche Unterschiede zu `getHeroes()`:

* `getHero()` konstruiert eine Anfrage-URL mit der Id des gewünschten Helden.
* Der Server sollte mit einem einzelnen Helden antworten und nicht mit einem Array von Helden.
* `getHero()` gibt ein `Observable<Hero>` ("_an observable of Hero objects_")
 und nicht ein Observable von Helden _Arrays_ zurück.

## Helden aktualisieren

Bearbeiten Sie den Namen eines Helden in der Helden-Detailansicht.
Während Sie tippen, wird der Name des Helden in der Überschrift oben auf der Seite aktualisiert.
Wenn Sie jedoch auf die Schaltfläche "Zurück" klicken, gehen die Änderungen verloren.

Wenn Sie möchten, dass die Änderungen erhalten bleiben, müssen Sie sie zurück auf den
den Server zurückschreiben.

Fügen Sie am Ende der Vorlage für die Heldendetails eine Schaltfläche zum Speichern mit einem "Klick"-Ereignis
Bindung, die eine neue Komponentenmethode namens `save()` aufruft.

`src/app/hero-detail/hero-detail.component.html (save)`
```html
<button (click)="save()">save</button>
```

Fügen Sie in der Komponentenklasse `HeroDetail` die folgende `save()`-Methode hinzu, die Änderungen des Heldennamens mithilfe des Heldendienstes speichert
`updateHero()` Methode und navigiert dann zurück zur vorherigen Ansicht.

`src/app/hero-detail/hero-detail.component.ts (save)`
```typescript
save(): void {
  if (this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
```

#### Hinzufügen von `HeroService.updateHero()`

Die allgemeine Struktur der `updateHero()` Methode ist ähnlich wie die von
`getHeroes()`, aber sie verwendet `http.put()` um den geänderten Helden
auf dem Server. Fügen Sie das Folgende zum `HeroService` hinzu.

`src/app/hero.service.ts (update)`
```typescript
/** PUT: update the hero on the server */
updateHero(hero: Hero): Observable<any> {
  return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${hero.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
```

Die Methode `HttpClient.put()` benötigt drei Parameter:
* die URL
* die zu aktualisierenden Daten (in diesem Fall der geänderte Held)
* Optionen

Die URL ist unverändert. Die Web-API von heroes weiß, welcher Held zu aktualisieren ist, indem sie sich die `id` des Helden ansieht.

Die heroes-Web-API erwartet eine spezielle Kopfzeile in HTTP-Speicheranforderungen.
Dieser Header ist in der Konstante `httpOptions` im `HeroService` definiert. Fügen Sie Folgendes zur Klasse `HeroService` hinzu.

`src/app/hero.service.ts`
```typescript
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
```

Aktualisieren Sie den Browser, ändern Sie einen Heldennamen und speichern Sie Ihre Änderung. Die `save()`
Methode in `HeroDetailComponent` navigiert zur vorherigen Ansicht.
Der Held erscheint nun in der Liste mit dem geänderten Namen.


## Hinzufügen eines neuen Helden

Um einen Helden hinzuzufügen, benötigt diese Anwendung nur den Namen des Helden. Man kann ein `<input>`
Element gepaart mit einer Hinzufügen-Schaltfläche.

Fügen Sie das Folgende in die `HeroesComponent`-Vorlage ein, nach
der Überschrift ein:

`src/app/heroes/heroes.component.html (add)`
```html
<div>
  <label for="new-hero">Hero name: </label>
  <input id="new-hero" #heroName />

  <!-- (click) übergibt Eingabewert an add() und löscht dann die Eingabe -->
  <button class="add-button" (click)="add(heroName.value); heroName.value=''">
    Add hero
  </button>
</div>
```

Rufen Sie als Reaktion auf ein Klick-Ereignis den Click-Handler der Komponente, `add()`, auf und löschen Sie dann
löschen Sie das Eingabefeld, damit es für einen anderen Namen bereit ist. Fügen Sie das Folgende zu der
Klasse `HeroesComponent` hinzu:

`src/app/heroes/heroes.component.ts (add)`
```typescript
add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
```

Wenn der angegebene Name kein Leerzeichen ist, erstellt der Handler ein `Hero`-ähnliches Objekt
aus dem Namen (es fehlt nur die `id`) und übergibt es an die Methode `addHero()` des Dienstes.

Wenn `addHero()` erfolgreich speichert, erhält der `subscribe()` Callback
den neuen Helden und schiebt ihn zur Anzeige in die `Heldenliste`.

Fügen Sie die folgende Methode `addHero()` zur Klasse `HeroService` hinzu.

`src/app/hero.service.ts (addHero)`
```typescript
/** POST: Füge einen neuen Hero dem Server hinzu */
addHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    catchError(this.handleError<Hero>('addHero'))
  );
}
```

Die Funktion `addHero()` unterscheidet sich von `updateHero()` in zweierlei Hinsicht:

* Es ruft `HttpClient.post()` anstelle von `put()` auf.
* Es erwartet, dass der Server eine ID für den neuen Helden erzeugt,
die er in `Observable<Hero>` an den Aufrufer zurückgibt.

Aktualisieren Sie den Browser und fügen Sie einige Helden hinzu.

## Einen Helden löschen

Jeder Held in der Heldenliste sollte einen Löschknopf haben.

Fügen Sie das folgende Schaltflächenelement in die `HeroesComponent`-Vorlage ein, nach dem Helden
Namen in dem wiederholten `<li>` Element.

`src/app/heroes/heroes.component.html`
```html
<button class="delete" title="delete hero"
  (click)="delete(hero)">x</button>
```

Der HTML-Code für die Liste der Helden sollte wie folgt aussehen:

`src/app/heroes/heroes.component.html (list of heroes)`
```html
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <a routerLink="/detail/{{hero.id}}">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </a>
    <button class="delete" title="delete hero"
      (click)="delete(hero)">x</button>
  </li>
</ul>
```

So positionieren Sie die Schaltfläche zum Löschen ganz rechts im Heldeneintrag,
fügen Sie der Datei `heroes.component.css` etwas CSS hinzu. Sie finden dieses CSS
im Überprüfungscode unten.

Fügen Sie der Komponentenklasse den Handler `delete()` hinzu.

`src/app/heroes/heroes.component.ts (delete)`
```typescript
delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
```

Obwohl die Komponente das Löschen von Helden an den `HeroService` delegiert,
bleibt sie für die Aktualisierung ihrer eigenen Liste von Helden verantwortlich.
Die Methode `delete()` der Komponente entfernt den zu löschenden _Helden_ sofort aus dieser Liste,
in der Erwartung, dass der `HeroService` auf dem Server erfolgreich sein wird.

Es gibt wirklich nichts, was die Komponente mit dem `Observable` tun könnte, das von
`heroService.delete()` zurückgegeben wird **aber sie muss sich trotzdem anmelden**.

![asset](/images/hint.png)
    
    Wenn Sie es versäumen, `subscribe()` zu abonnieren, wird der Dienst die Löschanfrage nicht an den Server senden.
    In der Regel tut ein `Observable` _nichts_, bis sich etwas anmeldet.

    Bestätigen Sie dies selbst, indem Sie `subscribe()` vorübergehend entfernen,
    auf "Dashboard" und dann auf "Heroes" klicken.
    Sie werden wieder die vollständige Liste der Helden sehen.

Als nächstes fügen Sie eine Methode `deleteHero()` zu `HeroService` wie folgt hinzu.

`src/app/hero.service.ts (delete)`
```typescript
/** DELETE: lösche der Hero vom Server */
deleteHero(id: number): Observable<Hero> {
  const url = `${this.heroesUrl}/${id}`;

  return this.http.delete<Hero>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Hero>('deleteHero'))
  );
}
```

Beachten Sie die folgenden wichtigen Punkte:

* `deleteHero()` ruft `HttpClient.delete()` auf.
* Die URL ist die Ressourcen-URL des Helden plus die `id` des zu löschenden Helden.
* Man sendet keine Daten wie bei `put()` und `post()`.
* Sie senden immer noch die `httpOptions`.

Aktualisieren Sie den Browser und probieren Sie die neue Löschfunktion aus.

## Suche nach Namen

In dieser letzten Übung lernen Sie, wie man `Observable`-Operatoren miteinander verkettet
so dass Sie die Anzahl ähnlicher HTTP-Anfragen minimieren können
und die Netzwerkbandbreite sparsam zu nutzen.

Sie werden dem Dashboard eine Helden-Suchfunktion hinzufügen.
Wenn der Benutzer einen Namen in ein Suchfeld eingibt,
werden Sie wiederholte HTTP-Anfragen für nach diesem Namen gefilterte Helden stellen.
Ihr Ziel ist es, nur so viele Anfragen wie nötig zu stellen.

#### `HeroService.searchHeroes()`

Beginnen Sie mit dem Hinzufügen einer Methode `searchHeroes()` zum `HeroService`.

`src/app/hero.service.ts`
```typescript
/* GET Heros welche der Name dem term entspechen */
searchHeroes(term: string): Observable<Hero[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError<Hero[]>('searchHeroes', []))
  );
}
```

Die Methode kehrt sofort mit einem leeren Array zurück, wenn es keinen Suchbegriff gibt.
Der Rest der Methode ähnelt stark `getHeroes()`, der einzige signifikante Unterschied ist
die URL, die einen Abfrage-String mit dem Suchbegriff enthält.

### Suche zum Dashboard hinzufügen

Öffnen Sie die Vorlage `DashboardComponent` und
fügen Sie das Hero-Such-Element, `<app-hero-search>`, am unteren Ende des Markups hinzu.

`src/app/dashboard/dashboard.component.html`
```html
<h2>Top Heroes</h2>
<div class="heroes-menu">
  <a *ngFor="let hero of heroes"
      routerLink="/detail/{{hero.id}}">
      {{hero.name}}
  </a>
</div>

<app-hero-search></app-hero-search>
```

Diese Vorlage sieht dem `*ngFor`-Repeater in der Vorlage `HeroesComponent` sehr ähnlich.

Damit dies funktioniert, muss im nächsten Schritt eine Komponente mit einem Selektor hinzugefügt werden, der auf `<app-hero-search>` passt.


### `HeroSearchComponent` erstellen

Erstellen Sie eine `HeroSearchComponent` mit der CLI.

```shell
  ng generate component hero-search
```

Das CLI generiert die drei `HeroSearchComponent` Dateien und fügt die Komponente zu den `AppModule` Deklarationen hinzu.

Ersetzen Sie die generierte `HeroSearchComponent` Vorlage mit einem `<input>` und einer Liste von passenden Suchergebnissen, wie folgt.

`src/app/hero-search/hero-search.component.html`
```html
<div id="search-component">
  <label for="search-box">Hero Search</label>
  <input #searchBox id="search-box" (input)="search(searchBox.value)" />

  <ul class="search-result">
    <li *ngFor="let hero of heroes$ | async" >
      <a routerLink="/detail/{{hero.id}}">
        {{hero.name}}
      </a>
    </li>
  </ul>
</div>
```

Fügen Sie private CSS-Stile zu `hero-search.component.css` hinzu
wie in der Code-Überprüfung unten aufgeführt.

Wenn der Benutzer in das Suchfeld eingibt, ruft eine Eingabe-Ereignisbindung die
Komponente die Methode `search()` mit dem neuen Wert des Suchfeldes auf.

### [`AsyncPipe`](https://angular.io/api/common/AsyncPipe)

Der `*ngFor` wiederholt Heldenobjekte. Beachten Sie, dass `*ngFor` über eine Liste namens `heroes$` iteriert, nicht `heroes`. Das `$` ist eine Konvention, die anzeigt, dass `heroes$` ein `Observable` ist, nicht ein Array.


`src/app/hero-search/hero-search.component.html`
```html
<li *ngFor="let hero of heroes$ | async" >
```

Da `*ngFor` nichts mit einem `Observable` machen kann, verwenden Sie das
Pipe-Zeichen (`|`) gefolgt von `async`. Dies identifiziert Angulars `AsyncPipe` und abonniert automatisch ein `Observable`, so dass Sie dies nicht
in der Komponentenklasse zu tun.

### Bearbeiten Sie die Klasse `HeroSearchComponent`.

Ersetzen Sie die generierte `HeroSearchComponent` Klasse und die Metadaten wie folgt.

`src/app/hero-search/hero-search.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
```

Beachten Sie die Deklaration von `heroes$` als `Observable`:

`src/app/hero-search/hero-search.component.ts`
```typescript
heroes$!: Observable<Hero[]>;
```

Sie werden es in `ngOnInit()` einstellen.
Bevor Sie das tun, konzentrieren Sie sich auf die Definition von `searchTerms`.

### Das RxJS-Subjekt `searchTerms`

Bei der Eigenschaft `searchTerms` handelt es sich um ein RxJS `Subject`.

`src/app/hero-search/hero-search.component.ts`
```typescript
private searchTerms = new Subject<string>();

// Push a search term into the observable stream.
search(term: string): void {
  this.searchTerms.next(term);
}
```

Ein `Subject` ist sowohl eine Quelle von Observable Werten als auch ein `Observable` selbst.
Man kann ein `Subject` wie jedes `Observable` abonnieren.

Man kann auch Werte in dieses `Observable` schieben indem man seine `next(value)` Methode aufruft
aufruft, wie es die Methode `search()` tut.

Die Ereignisbindung an das Ereignis `input` des Textfeldes ruft die Methode `search()` auf.

`src/app/hero-search/hero-search.component.html`
```html
<input #searchBox id="search-box" (input)="search(searchBox.value)" />
```

Jedes Mal, wenn der Benutzer in das Textfeld eingibt, ruft die Bindung `search()` mit dem Wert des Textfeldes, einem "Suchbegriff", auf.
Der `searchTerms` wird zu einem `Observable`, das einen stetigen Strom von Suchbegriffen ausgibt.

### Verkettung von RxJS-Operatoren

Die direkte Übergabe eines neuen Suchbegriffs an `searchHeroes()` nach jedem Tastendruck des Benutzers würde eine übermäßige Anzahl von HTTP-Anfragen erzeugen,
die die Server-Ressourcen belasten und die Datentarife auslasten.

Stattdessen leitet die Methode `ngOnInit()` die Observable `searchTerms` durch eine Reihe von RxJS-Operatoren, die die Anzahl der Aufrufe von `searchHeroes()` reduzieren,
und schließlich eine Observable mit zeitnahen Helden-Suchergebnissen (jeweils ein `Hero[]`) zurückgibt.

Hier ist ein genauerer Blick auf den Code.

`src/app/hero-search/hero-search.component.ts`
```typescript
this.heroes$ = this.searchTerms.pipe(
  // wait 300ms after each keystroke before considering the term
  debounceTime(300),

  // ignore new term if same as previous term
  distinctUntilChanged(),

  // switch to new search observable each time the term changes
  switchMap((term: string) => this.heroService.searchHeroes(term)),
);
```

Jeder Operator funktioniert wie folgt:

* `debounceTime(300)` wartet, bis der Fluss neuer String-Ereignisse für 300 Millisekunden pausiert
bevor er die letzte Zeichenkette weitergibt. Sie werden nie häufiger als 300ms Anfragen stellen.

* `distinctUntilChanged()` stellt sicher, dass eine Anfrage nur gesendet wird, wenn sich der Filtertext geändert hat.

* `switchMap()` ruft den Suchdienst für jeden Suchbegriff auf, der es durch `debounce()` und `distinctUntilChanged()` schafft.
Es annulliert und verwirft vorherige Suchbeobachtungen und gibt nur die letzte Suchdienstbeobachtung zurück.


> Mit dem [switchMap-Operator](https://www.learnrxjs.io/learn-rxjs/operators/transformation/switchmap),
kann jedes qualifizierte Schlüsselereignis einen Aufruf der Methode `HttpClient.get()` auslösen.
Selbst bei einer Pause von 300 ms zwischen den Anfragen können mehrere HTTP-Anfragen im Umlauf sein
und diese kehren möglicherweise nicht in der gesendeten Reihenfolge zurück.\
`switchMap()` behält die ursprüngliche Reihenfolge der Anfragen bei und gibt nur die Observable des letzten HTTP-Methodenaufrufs zurück.
Ergebnisse von früheren Aufrufen werden abgebrochen und verworfen.\
Beachten Sie, dass das Abbrechen einer vorherigen `searchHeroes()` Observable
nicht wirklich eine anhängige HTTP-Anfrage abbricht.
Unerwünschte Ergebnisse werden verworfen, bevor sie Ihren Anwendungscode erreichen.


Denken Sie daran, dass die _Klasse_ der Komponente nicht die _Observable_ "heroes$" abonniert.
Das ist die Aufgabe der `AsyncPipe` in der Vorlage.

#### Versuchen Sie es

Starten Sie die Anwendung erneut. Geben Sie im *Dashboard* einen Text in das Suchfeld ein.
Wenn Sie Zeichen eingeben, die mit einem vorhandenen Heldennamen übereinstimmen, sehen Sie etwas wie das hier.

![Helden-Suchfeld mit den Buchstaben 'm' und 'a' sowie vier Suchergebnissen, die mit der Anfrage übereinstimmen und in einer Liste unterhalb der Sucheingabe angezeigt werden](/images/angular/toh-hero-search.png)

## Abschließende Überprüfung des Codes

<a href="../assets/files/05_7.zip" download>Hier</a> oder [hier](../assets/files/05_7) 
sind die auf dieser Seite besprochenen Codedateien.

## Zusammenfassung

Sie sind am Ende Ihrer Reise angelangt und haben eine Menge erreicht.
* Sie haben die notwendigen Abhängigkeiten hinzugefügt, um HTTP in der Anwendung zu verwenden.
* Sie haben `HeroService` umstrukturiert, um Helden von einer Web-API zu laden.
* Du hast `HeroService` erweitert, um die Methoden `post()`, `put()` und `delete()` zu unterstützen.
* Sie haben die Komponenten aktualisiert, um das Hinzufügen, Bearbeiten und Löschen von Helden zu ermöglichen.
* Sie haben eine speicherinterne Web-API konfiguriert.
* Sie haben gelernt, wie man Observables verwendet.

Dies ist der Abschluss des Tutorials "Tour of Heroes" herzlichen Glückwunsch.