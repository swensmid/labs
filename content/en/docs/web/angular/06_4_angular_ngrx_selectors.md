---
title: "NgRx Selectors"
type: docs
linkTitle: "NgRx Selectors"
weight: 29
date: 2023-05-26
description: >
  Hier findet man was NgRx Selectors sind.
---
## Ziele
* Du weisst, was NgRx Selectors sind und kannst diese anwenden.
* Du weisst, was das AppState ist.

## AppState
In einer typischen NgRx-Anwendung kann die AppState-Datei verwendet werden, um den gesamten Anwendungsstatus zu definieren und zu typisieren. Sie enthält normalerweise eine Schnittstelle oder ein Interface, das alle Teilzustände oder Slices des Anwendungsstatus definiert und zu einem Gesamtzustand kombiniert.
```typescript
import { AuthState } from './auth.reducer';

export interface AppState {
    auth: AuthState;
    // ...
}
```

## NgRx Selectors
Selectors sind Funktionen, die dazu dienen, bestimmte Teile des Zustands aus dem Store abzurufen. Sie ermöglichen es, den Zustand zu filtern, zu transformieren und zu kombinieren, um spezifische Daten abzurufen, die von den Components verwendet werden.

```typescript
import { createSelector } from '@ngrx/store';
import { AppState } from './app-state';
import { AuthState } from './auth.reducer';

// Ein Selector, der den Authentifizierungsstatus abruft
export const getLoggedIn = createSelector(
    (state: AppState) => state.auth, 
    (auth: AuthState) => auth.loggedIn
);

// Ein Selector, der den Benutzernamen abruft
export const getUsername = createSelector(
    (state: AppState) => state.auth, 
    (auth: AuthState) => auth.username
);

// Ein Selector, der die E-Mail-Adresse abruft
export const getEmail = createSelector(
    (state: AppState) => state.auth, 
    (auth: AuthState) => auth.email
);
```
```typescript
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getLoggedIn, getUsername, getEmail } from './auth.selectors';

@Component({
  // ...
})
export class LoginComponent {
    loggedIn$ = this.store.pipe(select(getLoggedIn));
    username$ = this.store.pipe(select(getUsername));
    email$ = this.store.pipe(select(getEmail));
    
    constructor(private store: Store) {}
}
```


