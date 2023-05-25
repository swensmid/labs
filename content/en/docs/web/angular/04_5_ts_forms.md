---
title: "Angular Reactive Forms"
type: docs
linkTitle: "Angular Reactive Forms"
weight: 101
date: 2023-04-20
description: >
  In diesem Kapitel wird erklärt wozu das Angular Reactive Forms sind.
---
Angular Reactive Forms sind ein leistungsstarkes Feature von Angular, mit dem Entwickler Formulare erstellen, validieren und mit ihnen interagieren können. Im Gegensatz zu Template-driven Forms, bei denen die Formularlogik hauptsächlich im HTML-Template liegt, wird bei Reactive Forms die Formularlogik in den Components selbst geschrieben.

### Doch wieso sollte man Forms verwenden? 


### Importieren in Module
Bevor man Reactive Forms verwenden kann muss man die `ReactiveFormsModule` in das Modul, in dem man Reactive Forms verwenden möchte importieren.
```typescript
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule],
  // ...
})
export class AppModule { }
```

### Forms Control
Ein `FormControl` ein Objekt, das ein einzelnes Formularelement repräsentiert und steuert. Es ermöglicht die Verwaltung des Werts, der Validierung und des Zustands des Formularelements.

Wenn man ein `FormControl` verwenden möchte kann man dieses mittels `new FormControl('')` einer Variable zuweisen. Dadurch ist die Variabel nun das FormControl. Damit man es nun im HTML verwenden kann um es zu Binden muss man bei einem `input`-tag `[formControl]=""` verwenden in die "" kommt dann der Variabelname des FormControls.
```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    name: FormControl = new FormControl('');
}
```
```html
<div>
    <label for="name">Name: </label>
    <input id=name type="text" [formControl]="name">
    <p>Value: {{ name.value }}</p>
</div>
```

Man kann dem FormControl auch einen Defaultwert geben, dazu einfach innerhalb der runden Klammern anstelle von einem leeren String den Defaultwert einfügen.
Auch der Value kann man manuel im Typescript verändern mittels der `setValue()` Methode.
```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    name: FormControl = new FormControl('default name');

    updateName() {
        this.name.setValue('Peter');
    }
}
```
```html
<div>
    <label for="name">Name: </label>
    <input id=name type="text" [formControl]="name">
    <p>Value: {{ name.value }}</p>
    <button type="button" (click)="updateName()">Update Name</button>
</div>
```

Wenn man im Typescript auch direkt auf Änderungen im FormControl subscriben möchte, damit man immer den aktuellen Value des FormControls hat, kann man `valueChanges` benutzen. Somit hat man im Typescript die gleiche aktuelle Value wie im HTML mittels `{{ name.value }}`.
```typescript
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    name: FormControl = new FormControl('default name');

    constructor() {
        this.name.valueChanges.subscribe((value) => {
            console.log(value);
        })
    }
}
```
```html
<div>
    <label for="name">Name: </label>
    <input id=name type="text" [formControl]="name">
    <p>Value: {{ name.value }}</p>
</div>
```

### Froms Group
Da eine Form normalerweise aus mehr als einem Controls besteht, kann all die FormControls zu einer gruppieren.

Für die FormGroup erstellt man auch eine neue Instanz des `FormGroup` in welcher sich die `FormControl`'s befinden. Die FormGroup wird in einer Variabel gespeichert, die FormControls werden mit eindeutigem Key-Value Prinzip definiert.
Man kann auch hier auf die Group mittels `valueChanges` subscriben, nur das man hier dann nicht einfach den Value des Inputs erhaltet, sondern ein Objekt mit den Controls als Key-Value.
Um eine FormGroup im HTML zu verwenden, sollte man den `form`-tag. In diesem muss man die FormGroup mittels `[formGroup]=""` angeben, auch hier kommt in die "" der Variabelname der FormGroup. Um nun die FormControls anzugeben verwendet man nicht mehr `[formControl]=""`, sondern `formControlName=""`, hier kommt in die "" der Key der FormControl.
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    profileForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    });

    constructor() {
        this.profileForm.valueChanges.subscribe((value) => {
            console.log(value) // {firstName: '', lastName: ''}
        })
    }
}
```
```html
<form [formGroup]="profileForm">
    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">

    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">
</form>
```

Es ist auch möglich FormGroup innerhalb einer FormGroup zu verwenden und so das gesamte verschachteln, um komplexe Forms mit hierarchischer Struktur zu erstellen. Dies funktioniert genau gleich hier muss dann einfach die zweite FormGroup auch als Key-Value angegeben werden. 
Die zweite FormGroup muss dann mit `formGroupName=""` angegeben werden und nicht mehr mit `[formGroup]=""`, innerhalb der "" kommt hier dann auch der Key der zweiten FormGroup. Man sollte für die zweite FormGroup dann ein `div`-tag verwenden.

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    profileForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
        })
    });

    constructor() {
        this.profileForm.valueChanges.subscribe((value) => {
            console.log(value) // {firstName: '', lastName: '', address: {...}}
        })
    }
}
```
```html
<form [formGroup]="profileForm">

    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">

    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">

    <div formGroupName="address">
        <h2>Address</h2>

        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">

        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">

        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">

        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
    </div>
</form>
```

Wenn man eine so grosse FormGroup hat und nun ein Wert ändern möchte über das Typescript, kann man dies auch mittels `setValue()` tun. Das kann jedoch mühsam sein da man bei dieser Methode alle Values der FormGroup angeben muss. Wenn man aber nur einzelne anpassen möchte, kann man die Methode `patchValue()` verwenden.
Denn diese Methode erlaubt es das man nur einzelne der Values angeben muss.

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    profileForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
        })
    });

    constructor() {
        this.profileForm.valueChanges.subscribe((value) => {
            console.log(value) // {firstName: '', lastName: '', address: {...}}
        })
    }

    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Peter',
            address: {
                street: '123 Down Street'
            }
        });
    }
}
```
```html
<form [formGroup]="profileForm">

    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">

    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">

    <div formGroupName="address">
        <h2>Address</h2>

        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">

        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">

        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">

        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
    </div>
</form>
<button type="button" (click)="updateProfile()">Update Profile</button>
```

### Form Array
`FormArray` ist eine alternative zu `FormGroup` 

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    profileForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormGroup({
            street: new FormControl(''),
            city: new FormControl(''),
            state: new FormControl(''),
            zip: new FormControl('')
        }),
        aliases: new FormArray([
            new FormControl('')
        ])
    });

    constructor() {
        this.profileForm.valueChanges.subscribe((value) => {
            console.log(value) // {firstName: '', lastName: '', address: {...}, aliases: Array[]}
        })
    }

    get aliases() {
        return this.profileForm.get('aliases') as FormArray;
    }

    addAlias() {
        this.aliases.push(new FormControl(''));
    }
}
```
```html
<form [formGroup]="profileForm">

    <label for="first-name">First Name: </label>
    <input id="first-name" type="text" formControlName="firstName">

    <label for="last-name">Last Name: </label>
    <input id="last-name" type="text" formControlName="lastName">

    <div formGroupName="address">
        <h2>Address</h2>

        <label for="street">Street: </label>
        <input id="street" type="text" formControlName="street">

        <label for="city">City: </label>
        <input id="city" type="text" formControlName="city">

        <label for="state">State: </label>
        <input id="state" type="text" formControlName="state">

        <label for="zip">Zip Code: </label>
        <input id="zip" type="text" formControlName="zip">
    </div>
    <div formArrayName="aliases">
        <h2>Aliases</h2>
        <button type="button" (click)="addAlias()">+ Add another alias</button>

        <div *ngFor="let alias of aliases.controls; let i=index">
            <!-- The repeated alias template -->
            <label for="alias-{{ i }}">Alias:</label>
            <input id="alias-{{ i }}" type="text" [formControlName]="i">
        </div>
    </div>
</form>
```


### Form Builder
Wie man bei der verschachtelten FormGroup gesehen hat, ist zum Teil der Code sehr duplikat. Um dies zu vermeiden, kann man beim Erstellen einer Form einen Hilfsservice namens `FormBuilder` benutzen. Diesen muss man auch importieren und dann im constructor injecten.
Anstelle von `new FormGroup()` schreibt man nun `this.formBuilder.group()`,bei `FormArray` schreibt man mittels FormBuilder noch `this.formBuilder.array()` und bei den Controls kann man jedoch einfach nur das Key-Value Paar angeben.

```typescript
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    // ..
})
export class AppComponent {
    profileForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        address: this.formBuilder.group({
            street: [''],
            city: [''],
            state: [''],
            zip: ['']
        }),
        aliases: this.formBuilder.array([
            this.formBuilder.control('')
        ])
    });

    constructor(private formBuilder: FormBuilder) {
        this.profileForm.valueChanges.subscribe((value) => {
            console.log(value) // {firstName: '', lastName: '', address: {...}}
        })
    }
}
```

### Validators

