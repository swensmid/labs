---
title: "NgRx Actions"
type: docs
linkTitle: "NgRx Actions"
weight: 27
date: 2023-05-26
description: >
  Hier findet man was NgRx Actions sind.
---
## Ziele
* Du weisst, was NgRx Actions sind und kannst diese anwenden.

## NgRx Actions
Actions sind einfache JS-Objekte, die eine bestimmte Aktion beschreiben, die in einer Anwendung ausgeführt werden soll. Jede Action hat einen Typ und optional zusätzliche Daten.

Actions spielen eine zentrale Rolle in der Redux-Architektur und dienen als Auslöser für Zustandsänderungen im Store. Indem man Actions verwendet, kann man den Zustand der Anwendung eindeutig beschreiben und die Auswirkungen dieser Aktionen auf den Zustand zentral verwalten.

Die Action Typen werden meistens in einem Enum definiert, so hat man eine bessere Übersicht welche Actions die Anwendung besitzt. Die Typen werden in eckigen Klammern mit einem präfix, der den Kontext der Aktion angibt, geschrieben.

Hier ein Beispiel
```typescript
export enum ActionTypes {
    LOGIN = '[Login Page] Login',
    REGISTRATION = '[Registration Page] Registration'
}
```

Als Nächstes muss man die Typen in einer Action-Creator-Funktion verwenden. Dazu muss diese Funktion zuerst erstellt werden. Mithilfe der `createAction`-Funktion aus dem `@ngrx/store`-Packages kann man Action-Creator-Funktionen erstellen. Die Funktion `createAction` akzeptiert den Action-Typ und optional zusätzliche Daten (Props) und gibt eine Action zurück.
```typescript
import { createAction, props } from '@ngrx/store';

export const login = createAction(
    ActionTypes.LOGIN, 
    props<{ username: string; password: string }>()
);

export const registration = createAction(
    ActionTypes.REGISTRATION,
    props<{ username: string; password: string; email: string }>()
);
```

Diese Action-Creator-Funktionen kann man nun in den Components verwenden und sie auslösen.
```typescript
import { Store } from '@ngrx/store';
import { login } from './auth.actions';

@Component({
    // ..
})
export class AppComponent {
    
    constructor(private store: Store) { }

    onSubmit(username: string, password: string) {
        store.dispatch(login({ username: username, password: password }));
    }
}
```

Die Actions werden dann von den Reducer-Funktionen behandelt, um den Zustand zu aktualisieren und auf die Aktionen zu reagieren.