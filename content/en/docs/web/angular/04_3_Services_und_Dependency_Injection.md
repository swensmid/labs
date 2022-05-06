---
title: "Services und Dependency Injection"
type: docs
linkTitle: "Services und Dependency Injection"
weight: 5
date: 2022-03-14
description: >
---

## Services
Services implementieren Daten oder Logik, die in den verschiedenen Components verwendet werden, z.B.:
- Domain-Spezifische Berechnungen
- Applikationsweiter Datencache
- Kommunikation mit der Backendapplikation

## Dependency Injection
### Was is eine Dependency Injection
Dependency Injection ist ein Coding pattern, bei welchem Klassen alle Abhängigkeiten von externen Quellen erhalten, anstatt sie selbst zu erstellen.

### Dependency Injection in Angular
Der Angular Dependency Injector liefert uns Vorteile wie Skalierbarkeit, Testbarkeit und eine klare Trennung von Aufgaben.

Um den Dependency Injector in Angular zu nutzen müssen wir 3 Schritte erledigen

Den `@Injectable()` Decorator der Klasse/ dem Service hinzufügen.
Den Injector davon erzählen, indem wir es als Provider aufzählen.
Die Dependency injecten

1. @Injectable importieren und nutzen:
  ```typescript
  import {Injectable} from './@angular/core';

  @Injectable()
  export class Auto{
      //....
  }
  ```
2. Das Auto als Provider registrieren (in `module.ts`):
```typescript
//...
import {Auto} from './auto';
@NgModule({
    declatations: [],
    //...
    bootstrap: [AppComponent],
    providers: [Auto]
})
export class AppModule{ }
```
3. Dependency injecten wo (in unserem Beispiel) das Auto genutzt wird:
```typescript
import {Auto} from './auto';

@Component({
    //...
})
export class AutoNutzer{
    //...
    menschen: Menschen[];
    
    constructor(private auto: Auto){ }

    ngOnInit(){
        // Jetzt kann man das Auto hier einfach benutzen
        this.menschen = this.auto.getInsassen():
    }
}
```
Das Minibeispiel soll lediglich die 3 wichtigen Schritte etwas besser darstellen.

In Euren Projekten werdet ihr dieses Verfahren für die Services anwenden.

## Aufgabe 2
Folgende Datenbankstruktur ist gegeben:

<img src="../04_03_Class_Diagram.png" alt="ERD" style="width:50%"/>

- Erstelle für jede Entität ein geeignetes Model
- Erstelle für jede Entität einen Service 
- Erstelle bei jedem Service Musterdaten die du in einer geeigneten Component anzeigst. Design ist noch nicht wichig, es geht nur um das Verständnis
- Behalte die Ordnerstruktur korrekt (Ordner für die Componenten, Ordner für die Services, etc.)