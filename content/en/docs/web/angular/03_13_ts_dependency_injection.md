---
title: "Dependency Injection"
type: docs
linkTitle: "Dependency Injection"
weight: 15
date: 2023-05-04
description: >
 Was eine Dependency Injection genau ist und wozu man diese verwendet kann man hier nachlesen.
---

## Was ist eine Dependency Injection
Dependency Injection ist ein Coding pattern, bei welchem Klassen alle Abhängigkeiten von externen Quellen erhalten, anstatt sie selbst zu erstellen.

## Dependency Injection in Angular
Der Angular Dependency Injector liefert uns Vorteile wie Skalierbarkeit, Testbarkeit und eine klare Trennung von Aufgaben.

Um den Dependency Injector in Angular zu nutzen, müssen wir 3 Schritte erledigen

* Den `@Injectable()` Decorator der Klasse/ dem Service hinzufügen.
* Den Injector davon erzählen, indem wir es als Provider aufzählen.
* Die Dependency injecten

1. @Injectable importieren und nutzen:
  ```typescript
  import {Injectable} from './@angular/core';

  @Injectable()
  export class Car{
      //....
  }
  ```
2. Das Auto als Provider registrieren (in `module.ts`):
```typescript
//...
import {Car} from './car';
@NgModule({
    declatations: [],
    //...
    bootstrap: [AppComponent],
    providers: [Car]
})
export class AppModule{ }
```
3. Dependency injecten wo (in unserem Beispiel) das Auto genutzt wird:
```typescript
import {Car} from './car';

@Component({
    //...
})
export class CarUser{
    //...
    human: Human[];
    
    constructor(private car: Car){ }

    ngOnInit(){
        // Jetzt kann man das Auto hier einfach benutzen
        this.human = this.car.getInsassen():
    }
}
```
Das Minibeispiel soll lediglich die 3 wichtigen Schritte etwas besser darstellen.

In Euren Projekten werdet ihr dieses Verfahren für die [Services](/03_8_ts_services) anwenden.

