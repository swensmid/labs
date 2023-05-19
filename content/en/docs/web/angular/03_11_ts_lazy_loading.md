---
title: "Lazy Loading"
type: docs
linkTitle: "Lazy Loading"
weight: 13
date: 2022-03-14
description: >
    Lazy Loading bezeichnet ganz allgemein eine Technik in der Software-Entwicklung um Daten erst bei Bedarf nachzuladen.
    Im Zusammenhang mit Websites geht es darum, beispielsweise Bilder erst dann vom Server zu laden, wenn diese im sichtbaren Bereich sind.
    Dadurch wird die Ladezeit reduziert.
---

![Lazy loading](../images/lazy_loading.png)

## Lazy Loading in Angular
Standardmässig lädt der Browser alle Angular-Module, bevor der Benutzer mit ihnen arbeiten kann.
Natürlich gibt es auch einige, die nicht oder zumindest nicht sofort benötigt werden.

Genau hier setzt das Lazy Loading an, um die Startgeschwindigkeit zu optimieren: Es stellt sicher, dass nur die wichtigsten Anwendungsbestandteile
im Browser landen, der Rest wird später bei Bedarf angefordert. Hierfür werden einfach Routen mit der Eigenschaft `loadChildren` verwendet

```typescript
const routes = [
    { path: 'login', component: LoginComponent },
    { path: 'admin', loadChildren: () => import('./admintools/admintools.module').then(m => m.AdmintoolsModule)},
    { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
    // ...
]
```

## Lazy Loading mit Angular Material
Einige Components von [Angular Material](/05_1_ts_angular_material) unterstützen Lazy Loading. 

Ein Beispiel hierzu ist das Expansion-Panel.

![Expansion Panel](../images/expansion_panel.png)

Die Inhalte des Expansion Panels werden geladen, auch wenn das Expansion-Panel geschlossen ist.
Wenn man auf einer Ansicht beispielsweise 30 dieser Expansion-Panels anzeigt und den jeweiligen Inhalt lädt, kann dies zu Performance-Problemen führen.

Jedoch unterstützt dieser Component Lazy Loading, wodurch man die Performance-Probleme sehr einfach umgehen kann.
Inhalte werden erst geladen, wenn sich das Expansion-Panel öffnet.

In den meisten Fällen ist das Anwenden von Lazy Loading in Angular Material Components auch kein grosser Aufwand.

Schaut also auf der Angular Material Website in "Overview" des Components immer **gut** nach, ob der Component Lazy Loading unterstützt.