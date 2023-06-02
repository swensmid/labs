---
title: "Angular Data Bindings"
type: docs
linkTitle: "Data Bindings in Angular"
weight: 17
date: 2022-03-14
description: >
  Data Bindings in Angular.
---
## Ziele
* Du kennst, die verschiedenen Angular Data Bindings und kannst diese umsetzen.

## Angular Data Bindings
### Interpolation
- Anhand von diesem One-Way Binding kann man Properties des Components im Template anzeigen.
  Wenn sich das Property im Component ändert, wird das Template aktualisiert, um die neuen Änderungen anzuzeigen.
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-greeting',
    templateUrl: './app-greeting.component.html',
    styleUrls: ['./app-greeting.component.scss']
})
export class GreetingComponent {
    name = 'Max Mustermann';
}
```
```html
<!--app-greeting.component.html-->
<p>Welcome, {{ name }}!</p>
```

### Event Binding
- Event Binding ist definiert als das Aktualisieren/Senden des Werts/der Information einer bestimmten Variablen vom Template zum Component.\
  Zum Beispiel das Klicken eines Buttons.
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './app-counter.component.html',
    styleUrls: ['./app-counter.component.scss']
})
export class CounterComponent {
    count = 0;

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}
```
```html
<!--app-counter.component.html-->
<p>actual count:: {{ count }}</p>
<button (click)="increment()">+1</button>
<button (click)="decrement()">-1</button>
```

### Property Binding
- Anhand von Property Bindings können wir einen Wert unseres Components auf eine Eigenschaft eines Elements binden.
  Wenn sich also der bestimmte Wert im Component verändern sollte, wird dies im Template aktualisiert.
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './app-button.component.html',
    styleUrls: ['./app-button.component.scss']
})
export class ButtonComponent {
    isDisabled = false;
    buttonText = 'Click me!'

    changeDisabledState() {
        this.isDisabled = !this.isDisabled;
    }
}
```
```html
<!--app-button.component.html-->
<button [disabled]="isDisabled">{{ buttonText }}</button>
<button (click)="changeDisabledState()">change the disbale state first button</button>
```

### Two-Way-Binding
- Two-Way-Binding ist eine Kombination aus Property- und Eventbinding. Daten werden kontinuierlich synchronisiert: vom Template zum Component und vom Component zum Template.
  Dies bedeutet also, dass Änderungen, die an den Daten des Components vorgenommen wurden, werden mit dem Template synchronisiert und sofort aktualisiert.
  Umgekehrt funktioniert es auf dieselbe Weise, daher auch der Name "Two-Way-Binding".
```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-ng-model',
    templateUrl: './app-ng-model.component.html',
    styleUrls: ['./app-ng-model.component.scss']
})
export class NgModelComponent {
    currentItem: string = 'test';

    getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
    }
}
```
```html
<!--app-ng-model.component.html-->
  <div>
  <h4>NgModel examples</h4>
  <p>Current item name: {{ currentItem }}</p>
  <p>
    <label>without NgModel:</label>
    <input [value]="currentItem" (input)="currentItem = getValue($event)" />
  </p>

  <p>
    <label>[(ngModel)]:</label>
    <input [(ngModel)]="currentItem" />
  </p>

  <p>
    <label>(ngModelChange)="currentItem=$event":</label>
    <input [ngModel]="currentItem" (ngModelChange)="currentItem = $event" />
  </p>
</div>
```

Wichtig im `app.module.ts` muss man das `FormsModule` bei den imports hinzufügen damit man `ngModel`verwenden kann
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <---  import FormsModule


import { AppComponent } from './app.component';
import { NgModelComponent } from './ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    NgModelComponent
  ],

  imports: [
    BrowserModule,
    FormsModule // <--- import into the NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

![Databinding](../images/component-of-data-binding.png) 
