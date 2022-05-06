# Routing
## Routing
Angular Router ist ein leistungsstarker JavaScript-Router, der vom Angular Core Team erstellt und gewartet wird. Der Router wird über das Paket "@angular/router" installiert.
Das Paket bietet eine vollständige Routing-Library:
- Mehrere Router-Outlets
- Verschiedene Strategien für Path-Matching
- Einfachen Zugriff auf Route-Parameter und Route-Guards zu haben, um Components vor unbefugtem Zugriff zu schützen.

Der Angular-Router ist ein zentraler Bestandteil der Angular-Plattform. Entwickler können damit Single Page Applications mit mehreren Views erstellen und zwischen diesen navigieren.

## Router-Outlet
Die Router-Library stellt uns die Router-Outlet Direktive zur Verfügung. In dieser Direktive fügt der Router den Component ein, der anhand der URL abgeglichen wird. 
Wir können in einer Angular-Applikation mehrere Outlets hinzufügen, um erweiterte Routing-Szenarien zu implementieren.
Für den Anfang werden wir uns jedoch auf einen einzelnen Outlet beschränken.

```html
<router-outlet></router-outlet>
```

## Routen und Pfade
Routen sind Objekte, die aus mindestens einem Pfad- und einem Component-Attribut bestehen.
Das Pfad-Attribut bezieht sich auf den Teil der URL, der eine eindeutige View festlegt, die angezeigt werden soll.
Das Component-Attribut bezieht sich auf den Angular-Component, der dem Pfad zugeordnet wird. 

Jede Route ordnet einem Component einen URL-Pfad zu.

Der Router kann, basierend auf einer von uns bereitgestellten Routendefinition, den Benutzer zu einer bestimmten View navigieren.

Der Pfad kann auch leer sein. Dies gibt den Standardpfad einer Applikation an und ist normalerweise auch der Start der Applikation.

Der Pfad kann einen Wildcard String (**) enthalten. Der Router wählt diese Route aus, wenn die angeforderte URL keinen Pfaden der definierten Routen entspricht.
Wenn keine Übereinstimmung gefunden wird, kann man dies zum Anzeigen einer "Nicht gefunden"-View oder zum Umleiten zu einer bestimmten View verwendet werden.

Schauen wir uns ein Beispiel einer Route an:
```typescript
{ path: "contacts", component: ContactListComponent}
```
Falls diese Route so in der Router Konfiguration festgelegt wird, wird der Router den Component `ContactListComponent` rendern, sobald der URL des Browsers `/contacts` beinhaltet.

## Route Guards
Ein Route Guard ist ein Feature des Angular Routers, mit der wir Logik ausführen können, wenn eine Route angefordert wird.
Es wird häufig verwendet, um zu überprüfen, ob ein Benutzer angemeldet ist und über die Berechtigung verfügt, bevor er zugreifen kann.
Somit können wir also dem Benutzer den Zugriff auf die Route ermöglichen oder verweigern.

Für den Route Guard müssen wir das CanActivate-Interface implementieren, welches im `@angular/router` Paket verfügbar ist.
Die `canActivate()` Methode des Interfaces enthält die Logik, um den Zugriff auf die Route zuzulassen oder zu verweigern.

Beispielsweise ermöglicht folgender `Guard` immer den Zugriff auf eine Route:
```typescript
class MyGuard implements CanActivate {
    canActivate(){
        return true;
    }
}
```
Eine Route können wir nun anhand dieses Guards schützen, indem wir das "canActivate"-Attribut des Pfades benutzen:
```typescript
{ path: "contacts/:id", canActivate: [MyGuard], component: ContactListComponent}
```

## Navigation Directive
Der Angular Router stellt die routerLink-Direktive zum Erstellen von Navigationslinks bereit.
Diese Direktive navigiert anhand des Pfads, welcher dem Component zugeordnet ist. 

Beispielsweise:
```html
<a [routerLink]="'/contacts'">Contacts</a>
```

## Aufgabe 4
Nachdem du die Pipes erstellt hast, geht es darum das Routing auf die von dir erstellten Komponenten zu leiten.
- Erstelle nach deinem Ermessen für die jeweiligen Komponenten die du routen willst, eine entsprechende Weiterleitung
- Sofern du eine Komponente nur anzeigen lassen willst, wenn man beispielsweise angemeldet ist, versuche eine CanActivate Klasse zu erstellen
- Erstelle auch ein Routing auf die Typ-Komponente, welche mit Hilfe eines Parameters den jweiligen Typ anzeigt 