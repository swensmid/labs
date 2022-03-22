---
title: "Services"
type: docs
linkTitle: "Services"
weight: 14
date: 2022-03-14
description: >
---

# Dienste hinzufügen

Die Tour of Heroes `HeroesComponent` holt sich derzeit falsche Daten und zeigt sie an.

Nach dem Refactoring in diesem Tutorial wird `HeroesComponent` schlank sein und sich auf die Unterstützung der Ansicht konzentrieren.
Es wird auch einfacher sein, Unit-Tests mit einem Mock-Service durchzuführen.

> Die Beispielanwendung, die auf dieser Seite beschrieben wird, finden Sie unter [dieser Seite](https://angular.io/generated/live-examples/toh-pt4/stackblitz.html).


## Warum Dienste

Komponenten sollten keine Daten direkt abrufen oder speichern und schon gar nicht wissentlich gefälschte Daten präsentieren.
Sie sollten sich auf die Darstellung von Daten konzentrieren und den Datenzugriff an einen Dienst delegieren.

In diesem Tutorial werden Sie einen `HeroService` erstellen, den alle Anwendungsklassen verwenden können, um Helden zu erhalten.
Anstatt diesen Dienst mit dem [Schlüsselwort `New`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) zu erstellen,
werden Sie sich auf Angular [*dependency injection*](https://angular.io/guide/dependency-injection)
um ihn in den `HeroesComponent`-Konstruktor zu injizieren.

Dienste sind eine großartige Möglichkeit, Informationen zwischen Klassen auszutauschen, die sich _nicht kennen_.
Sie erstellen einen `MessageService` und injizieren ihn an zwei Stellen.

1. Injektion in HeroService, der den Dienst verwendet, um eine Nachricht zu senden.
2. Injizieren in MessagesComponent, das diese Nachricht anzeigt und auch die ID anzeigt
anzeigt, wenn der Benutzer auf einen Helden klickt.


## Erstellen Sie den `HeroService`

Erstellen Sie mit dem Angular CLI einen Dienst namens `Hero`.

```shell
  ng generate service hero
```

Der Befehl erzeugt eine Skelettklasse `HeroService` in `src/app/hero.service.ts` wie folgt:

`src/app/hero.service.ts (new service)`
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

}
```

### [`@Injectable()`](https://angular.io/api/core/Injectable) Dienste

Beachten Sie, dass der neue Dienst das Angular `Injectable` Symbol importiert und die Klasse mit dem
die Klasse mit dem Dekorator `@Injectable()` annotiert. Dies kennzeichnet die Klasse als eine, die am _dependency injection system_ teilnimmt. Die Klasse `HeroService` wird einen injizierbaren Dienst bereitstellen, und sie kann auch ihre eigenen injizierten Abhängigkeiten haben.
Sie hat noch keine Abhängigkeiten, aber [sie wird bald eine haben](#inject-message-service).

Der `@Injectable()` Dekorator akzeptiert ein Metadaten Objekt für den Dienst, auf die gleiche Weise wie der `@Component()` Dekorator es für Ihre Komponentenklassen tat.

### Heldendaten erhalten

Der `HeroService` kann Hero-Daten von überall her bekommen&mdash;ein Web-Service, lokaler Speicher oder eine Mock-Datenquelle.

Wenn Sie den Datenzugriff aus den Komponenten entfernen, können Sie Ihre Meinung über die Implementierung jederzeit ändern, ohne die Komponenten zu berühren.
Sie wissen nicht, wie der Dienst funktioniert.

Die Implementierung in _diesem_ Tutorial wird weiterhin _mock heroes_ liefern.

Importieren Sie den `Hero` und `HEROES`.

`src/app/hero.service.ts`
```typescript
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
```

Fügen Sie eine Methode `getHeroes` hinzu, um die _mock heroes_ zurückzugeben.

`src/app/hero.service.ts`
```typescript
getHeroes(): Hero[] {
  return HEROES;
}
```

## Bereitstellen des `HeroService`

Sie müssen den `HeroService` für das Dependency Injection System verfügbar machen
bevor Angular ihn in die `HeroesComponent` _injizieren_ kann, indem ein _Provider_ registriert wird. Ein Provider ist etwas, das einen Dienst erstellen oder liefern kann; in diesem Fall instanziiert er die `HeroService` Klasse, um den Dienst bereitzustellen.

Um sicherzustellen, dass der `HeroService` diesen Dienst bereitstellen kann, registrieren Sie ihn
mit dem _injector_, der das Objekt ist, das für die Auswahl des
und die Injektion des Anbieters, wo die Anwendung ihn benötigt.

Standardmäßig registriert der Angular CLI-Befehl `ng generate service` einen Provider mit dem _root injector_ für Ihren Service, indem er Provider-Metadaten, also `providedIn: 'root'` in den `@Injectable()` Dekorator einfügt.

```typescript
@Injectable({
  providedIn: 'root',
})
```

Wenn man den Dienst auf der Root-Ebene bereitstellt, erstellt Angular eine einzelne, gemeinsame Instanz von `HeroService` und injiziert sie in jede Klasse, die danach fragt.
Die Registrierung des Providers in den `@Injectable`-Metadaten erlaubt es Angular auch, eine Anwendung zu optimieren, indem der Service entfernt wird, wenn er doch nicht gebraucht wird.

> Um mehr über Provider zu erfahren, lesen Sie den Abschnitt [Providers](https://angular.io/guide/providers).
Weitere Informationen über Injektoren finden Sie im [Dependency Injection guide](https://angular.io/guide/dependency-injection).

Der `HeroService` ist nun bereit, in die `HeroesComponent` eingebunden zu werden.

![asset](/images/hint.png) Sofern Git Bash nicht gewählt werden kann, könnte es daran liegen, dass du die IDE neustarten musst. 
Dies ist ein vorläufiges Codebeispiel, das es Ihnen ermöglicht, den `HeroService` bereitzustellen und zu verwenden. An diesem Punkt wird sich der Code vom `HeroService` in der ["final code review"](#final-code-review) unterscheiden.


## Update `HeroesComponent`

Öffnen Sie die Klassendatei `HeroesComponent`.

Löschen Sie den `HEROES`-Import, da Sie diesen nicht mehr benötigen.
Importieren Sie stattdessen den `HeroService`.

`src/app/heroes/heroes.component.ts (import HeroService)`
```typescript
import { HeroService } from '../hero.service';
```

Ersetzen Sie die Definition der Eigenschaft "heroes" durch eine Deklaration.

`src/app/heroes/heroes.component.ts`
```typescript
heroes: Hero[] = [];
```

### <a id="#inject-message-service"></a>Inject the `HeroService`

Fügen Sie einen privaten `heroService` Parameter vom Typ `HeroService` zum Konstruktor hinzu.

`src/app/heroes/heroes.component.ts`
```typescript
constructor(private heroService: HeroService) {}
```

Der Parameter definiert gleichzeitig eine private `heroService`-Eigenschaft und identifiziert sie als `HeroService`-Injektionsstelle.

Wenn Angular eine `HeroesComponent` erstellt, setzt das `Dependency Injection` System
setzt den `heroService` Parameter auf die Singleton Instanz von `HeroService`.

### Hinzufügen von `getHeroes()`

Erstellen Sie eine Methode, um die Helden aus dem Service abzurufen.

`src/app/heroes/heroes.component.ts`
```typescript
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
```

### Aufruf in `ngOnInit()`

Obwohl Sie `getHeroes()` im Konstruktor aufrufen könnten, ist das nicht die beste Praxis.

Reservieren Sie den Konstruktor für eine minimale Initialisierung, wie z.B. die Verknüpfung von Konstruktorparametern mit Eigenschaften.
Der Konstruktor sollte _nichts_ tun.
Er sollte sicherlich keine Funktion aufrufen, die HTTP-Anfragen an einen entfernten Server stellt, wie es ein _echter_ Datendienst tun würde.

Rufen Sie stattdessen `getHeroes()` innerhalb des [*ngOnInit lifecycle hook*](https://angular.io/guide/lifecycle-hooks) auf und
Angular `ngOnInit()` zu einem geeigneten Zeitpunkt _nach_ der Erstellung einer `HeroesComponent`-Instanz aufrufen lassen.

`src/app/heroes/heroes.component.ts`
```typescript
ngOnInit() {
  this.getHeroes();
}
```
### Sehen Sie, wie es läuft

Nachdem der Browser aktualisiert wurde, sollte die Anwendung wie zuvor laufen,
Sie zeigt eine Liste der Helden und eine Detailansicht des Helden an, wenn Sie auf den Namen eines Helden klicken.

## Beobachtbare Daten

Die Methode `HeroService.getHeroes()` hat eine _synchrone Signatur_,
was bedeutet, dass der `HeroService` Helden synchron abrufen kann.
Die `HeroesComponent` verbraucht das `getHeroes()` Ergebnis
als ob Helden synchron geholt werden könnten.

`src/app/heroes/heroes.component.ts`
```typescript
this.heroes = this.heroService.getHeroes();
```

Dies wird in einer echten Anwendung nicht funktionieren.
Im Moment kommen Sie noch damit durch, weil der Dienst derzeit _mock heroes_ zurückgibt.
Aber bald wird die Anwendung Helden von einem entfernten Server abrufen,
was von Natur aus ein _asynchroner_ Vorgang ist.

Der `HeroService` muss auf die Antwort des Servers warten,
`getHeroes()` kann nicht sofort mit Heldendaten zurückkehren,
und der Browser wird nicht blockieren, während der Dienst wartet.

Die Funktion `HeroService.getHeroes()` muss eine _asynchrone Signatur_ irgendeiner Art haben.

In diesem Tutorial wird `HeroService.getHeroes()` ein `Observable` zurückgeben
zurück, weil es schließlich die Angular-Methode `HttpClient.get` verwenden wird, um die Helden zu holen
und [`HttpClient.get()` gibt ein `Observable` zurück](https://angular.io/guide/http).

### Observable `HeroService`

Observable" ist eine der Schlüsselklassen in der [RxJS-Bibliothek](https://rxjs.dev/).

In einem [späteren Tutorial über HTTP](05_7_Data_Server.md) werden Sie lernen, dass die `HttpClient`-Methoden von Angular RxJS `Observable` zurückgeben.
In diesem Tutorial werden Sie das Abrufen von Daten vom Server mit der RxJS-Funktion "of()" simulieren.

Öffnen Sie die Datei `HeroService` und importieren Sie die Symbole `Observable` und `of` von RxJS.

`src/app/hero.service.ts (Observable imports)`
```typescript
import { Observable, of } from 'rxjs';
```

Ersetzen Sie die Methode `getHeroes()` durch die folgende:

`src/app/hero.service.ts`
```typescript
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  return heroes;
}
```

`of(HEROES)` gibt ein `Observable<Hero[]>` zurück, das _einen einzelnen Wert_, das Array der Mock-Helden, ausgibt.

> Im [HTTP-Tutorial](05_7_Data_Server.md) rufen Sie `HttpClient.get<Hero[]>()` auf, das ebenfalls ein `Observable<Hero[]>` zurückgibt, das _einen einzelnen Wert_, ein Array von Helden aus dem Body der HTTP-Antwort, ausgibt.


### Abonnieren in `HeroesComponent`

Die Methode `HeroService.getHeroes` gab früher einen `Hero[]` zurück.
Jetzt gibt sie ein `Observable<Hero[]>` zurück.

Sie müssen sich an diesen Unterschied in `HeroesComponent` anpassen.

Suchen Sie die Methode `getHeroes` und ersetzen Sie sie durch den folgenden Code.
`heroes.component.ts (Observable)`
```typescript
getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
```
`heroes.component.ts (Original)`
```typescript
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}
```

`Observable.subscribe()` ist der entscheidende Unterschied.

Die bisherige Version weist der Eigenschaft `heroes` der Komponente ein Array von Helden zu.
Die Zuweisung erfolgt _synchron_, als ob der Server die Helden sofort zurückgeben könnte
oder der Browser könnte die Benutzeroberfläche einfrieren, während er auf die Antwort des Servers wartete.

Das _funktioniert_ aber nicht, wenn der `HeroService` tatsächlich Anfragen an einen entfernten Server stellt.

Die neue Version wartet darauf, dass der `Observable` das Array der Helden ausgibt&mdash;was
könnte jetzt oder in einigen Minuten geschehen.
Die Methode `subscribe()` übergibt das ausgegebene Array an den Callback,
der die Eigenschaft `Helden` der Komponente setzt.

Dieser asynchrone Ansatz wird _funktionieren_ wenn
der `HeroService` Helden vom Server anfordert.

## Nachrichten anzeigen

Dieser Abschnitt führt Sie durch die folgenden Schritte:

* Hinzufügen einer `MessagesComponent`, die Anwendungsnachrichten am unteren Rand des Bildschirms anzeigt
* Erstellen eines injizierbaren, app-weiten `MessageService` zum Senden von Nachrichten, die angezeigt werden sollen
* Injizieren von `MessageService` in den `HeroService`.
* Anzeige einer Nachricht, wenn `HeroService` erfolgreich Helden holt

### Erstellen der `MessagesComponent`

Verwenden Sie die CLI, um die `MessagesComponent` zu erstellen.

```shell
  ng generate component messages
```

Das CLI erstellt die Komponentendateien im Ordner `src/app/messages` und deklariert die `MessagesComponent` im `AppModule`.

Ändern Sie das Template `AppComponent`, um die erzeugte `MessagesComponent` anzuzeigen.

`src/app/app.component.html`
```html
<h1>{{title}}</h1>
<app-heroes></app-heroes>
<app-messages></app-messages>
```

Sie sollten den Standardabsatz von `MessagesComponent` unten auf der Seite sehen.

### Erstellen Sie den `MessageService`

Verwenden Sie die CLI, um den `MessageService` in `src/app` zu erstellen.

```shell
  ng generate service message
```

Öffnen Sie `MessageService` und ersetzen Sie dessen Inhalt durch den folgenden.

`src/app/message.service.ts`
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
```

Der Dienst stellt seinen Cache von `Nachrichten` und zwei Methoden zur Verfügung: eine, um `Add()` eine Nachricht zum Cache hinzuzufügen und eine andere, um `Clear()` den Cache zu löschen.

### Injiziere ihn in den `HeroService`.

In `HeroService` importieren Sie den `MessageService`.

`src/app/hero.service.ts (import MessageService)`
```typescript
import { MessageService } from './message.service';
```

Ändern Sie den Konstruktor mit einem Parameter, der eine private Eigenschaft `messageService` deklariert.
Angular wird das Singleton `MessageService` in diese Eigenschaft injizieren
wenn es den `HeroService` erstellt.

`src/app/hero.service.ts`
```typescript
constructor(private messageService: MessageService) { }
```

> Dies ist ein typisches "*Service-in-Service*"-Szenario:
Man injiziert den `MessageService` in den `HeroService`, der wiederum in die `HeroesComponent` injiziert wird.

### Senden einer Nachricht von `HeroService`

Ändern Sie die Methode `getHeroes()`, um eine Nachricht zu senden, wenn die Helden abgeholt werden.

`src/app/hero.service.ts`
```typescript
getHeroes(): Observable<Hero[]> {
  const heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return heroes;
}
```

### Anzeige der Nachricht von `HeroService`

Die `MessagesComponent` sollte alle Nachrichten anzeigen,
einschließlich der Nachricht, die vom `HeroService` gesendet wird, wenn er Helden holt.

Öffnen Sie `MessagesComponent` und importieren Sie den `MessageService`.

`src/app/messages/messages.component.ts (import MessageService)`
```typescript
import { MessageService } from '../message.service';
```

Modifizieren Sie den Konstruktor mit einem Parameter, der eine **öffentliche** Eigenschaft `messageService` deklariert.
Angular wird das Singleton `MessageService` in diese Eigenschaft injizieren
wenn es die `MessagesComponent` erstellt.

`src/app/messages/messages.component.ts`
```typescript
constructor(public messageService: MessageService) {}
```

Die Eigenschaft `messageService` **muss öffentlich sein**, weil Sie in im Template daran binden werden.

![asset](/images/hint.png) Angular bindet nur an _öffentliche_ Komponenteneigenschaften.

### Bindung an den `MessageService`

Ersetzen Sie das CLI-generierte `MessagesComponent` Template durch das folgende.

`src/app/messages/messages.component.html`
```html
<div *ngIf="messageService.messages.length">

  <h2>Messages</h2>
  <button class="clear"
          (click)="messageService.clear()">Clear messages</button>
  <div *ngFor='let message of messageService.messages'> {{message}} </div>

</div>
```

Dieses Template bindet direkt an den `messageService` der Komponente.

* Das `*ngIf` zeigt den Nachrichtenbereich nur an, wenn es Nachrichten zu zeigen gibt.


* Ein `*ngFor` stellt die Liste der Nachrichten in wiederholten `<div>` Elementen dar.


* Ein Angular [event-binding](https://angular.io/guide/event-binding) bindet das Click-Ereignis der Schaltfläche
an `MessageService.clear()`.

Die Nachrichten werden besser aussehen, wenn Sie die privaten CSS-Stile zu `messages.component.css` hinzufügen
wie in einem der ["final code review"](#final-code-review) Tabs unten aufgeführt.

## Hinzufügen zusätzlicher Nachrichten zum Heldendienst

Das folgende Beispiel zeigt, wie man jedes Mal, wenn der Benutzer auf einen Hero klickt, eine Nachricht sendet und anzeigt.
einen Hero klickt, eine Nachricht sendet und anzeigt, die einen Verlauf der Auswahl des Benutzers anzeigt. Dies wird hilfreich sein, wenn Sie zum
nächsten Abschnitt über [Routing](tutorial/toh-pt5).

`src/app/heroes/heroes.component.ts`
```typescript
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
```

Aktualisieren Sie den Browser, um die Liste der Helden zu sehen, und scrollen Sie nach unten, um die
Nachrichten vom HeroService zu sehen. Jedes Mal, wenn Sie auf einen Helden klicken, erscheint eine neue Nachricht, die die Auswahl
der Auswahl. Verwenden Sie die Schaltfläche **Nachrichten löschen**, um den Nachrichtenverlauf zu löschen.

## <a id="final-code-review"></a>Abschließende Code-Überprüfung
<a href="../assets/files/05_5.zip" download>Hier</a> oder [hier](../assets/files/05_5) 
sind die auf dieser Seite besprochenen Codedateien.


## Zusammenfassung

* Sie haben den Datenzugriff auf die Klasse `HeroService` umstrukturiert.
* Sie haben den `HeroService` als _Provider_ seines Dienstes auf der Root-Ebene registriert, so dass er überall in der Anwendung injiziert werden kann.
* Sie haben [Angular Dependency Injection](https://angular.io/guide/dependency-injection) verwendet, um ihn in eine Komponente zu injizieren.
* Sie haben der _get data_ Methode von `HeroService` eine asynchrone Signatur gegeben.
* Sie haben `Observable` und die RxJS _Observable_ Bibliothek entdeckt.
* Sie haben RxJS `of()` benutzt, um ein Observable von Mock-Helden (`Observable<Hero[]>`) zurückzugeben.
* Der Lifecycle-Hook `ngOnInit` der Komponente ruft die Methode `HeroService` auf, nicht den Konstruktor.
* Sie haben einen `MessageService` für lose gekoppelte Kommunikation zwischen Klassen erstellt.
* Der `HeroService`, der in eine Komponente injiziert wird, wird mit einem anderen injizierten Dienst erstellt,
 `MessageService`.