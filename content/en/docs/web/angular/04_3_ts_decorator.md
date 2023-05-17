---
title: "Decorators"
type: docs
linkTitle: "Decorators"
weight: 17
date: 2023-05-17
description: >

---

Decorators sind spezielle Funktionen, die verwendet werden, um zusätzliche Informationen zu einer Klasse, Methode oder Eigenschaft hinzuzufügen oder das Verhalten davon zu ändern. Sie helfen dabei, den Code besser zu organisieren und bestimmte Aufgaben automatisch auszuführen.

Folgende sieben Decorators sind in Angular die meistverwendeten:
* `@Component`: Der @Component-Decorator wird verwendet, um den Component  zu definieren.

* `@Directive`: Der @Directive-Decorator wird verwendet, um eine [Directives](/03_5_ts_directives) zu definieren. 

* `@Injectable`: Der @Injectable-Decorator wird verwendet, um einen [Service](/03_6_ts_services) zu definieren, er wird aber auch bei [Dependency Injection](/03_11_ts_dependency_injection) verwendet. 

* `@Input`: Der @Input-Decorator wird verwendet, um eine Eingabeeigenschaft in eines Components oder Directive zu definieren.

* `@Output`: Der @Output-Decorator wird verwendet, um eine Ausgabeeigenschaft in eines Components oder Directive zu definieren. 

* `@ViewChild`: Der @ViewChild-Decorator wird verwendet, um auf ein Child-Element in eines Components zuzugreifen.

* `@ViewChildren`: Der @ViewChildren-Decorator wird verwendet, um auf eine Liste von Child-Elementen in einen Component zuzugreifen.


## @Component
Der @Component-Decorator wird verwendet, um einen Component zu definieren. Er ist einer der wichtigsten Decorators und enthält Metadaten, die Angular dabei helfen, den Component zu verstehen und zu rendern.

Er wird über der Klassen-Deklaration platziert und enthält ein Objekt mit verschiedenen Eigenschaften:

* `selector`: Der selector gibt an, wie der Component in HTML-Dateien referenziert wird. Im folgenden Beispiel wäre das `<app-my-component></app-my-component>`, damit kann man den Components in anderen Templates verwenden.

* `templateUrl` (oder `template`): Der templateUrl-Eigenschaftswert gibt den Pfad zur HTML-Datei an, die das Template des Components enthält. Alternativ kann man auch die template-Eigenschaft verwenden, um das Template direkt innerhalb des @Component-Decorators zu definieren, das sollte jedoch vermieden werden.

* `styleUrl`s (oder `styles`): Die styleUrls-Eigenschaft gibt ein Array von CSS-Dateipfaden an, die für den Component gelten sollen. Man kann auch die styles-Eigenschaft verwenden, um den CSS-Code direkt im @Component-Decorator einzufügen, dies sollte jedoch vermieden werden.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.scss']
})
export class MyComponent {
  // gesamte Compoenentlogik 
}
```

## @Input
Der @Input-Decorator ermöglicht es, Daten von einem übergeordneten Component (Parent) an einen untergeordnete Component (Child) zu übergeben.
Somit wird die Kommunikation zwischen den Components erleichtern

```typescript
import { Component, Input } from '@angular/core';

@Component({
    // ..
})
export class ChildComponent {
    @Input() childData: string;
}
```

Um die Eingabeeigenschaft zu verwenden und Daten vom Parent zu erhalten, verwendet man die Property-Bindingsyntax im Parent.
```html
<app-child [childData]="parentData"></app-child>
```

## @Output
Mit dem @Output-Decorator kann ein Component Ereignisse an den übergeordneten Component (Parent) senden und mitteilen, dass etwas im Component (Child) geschehen ist.

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    // ..
})
export class ChildComponent {
    @Output() dataEvent: EventEmitter<string> = new EventEmitter<string>();

    sendData() {
        this.dataEvent.emit('Data from Child Component');
    }
}
```
```html
<button (click)="sendData()">Send Data</button>
```

Um das Ereignis im Parent zu empfangen und darauf zu reagieren, wird das Event-Binding verwendet.
```html
<app-child (dataEvent)="receiveData($event)"></app-child>
```

## @ViewChild


## @ViewChildren



