---
title: "Pipes"
type: docs
linkTitle: "Pipes"
weight: 6
date: 2022-03-14
description: >
    Jede Anwendung beginnt mit einer scheinbar einfachen Aufgabe: Daten abrufen, transformieren und Benutzern zeigen.
    Das Abrufen von Daten kann so einfach wie das Erstellen einer lokalen Variablen oder so komplex wie das Streamen von Daten über ein WebSocket sein.
---

Sobald Daten eingehen, könnte man ihre rohen toString-Werte direkt in die View übertragen. Dies führt jedoch selten zu einer guten user experience. In den meisten Anwendungsfällen
bevorzugen Benutzer beispielsweise die Anzeige eines Datums in einem einfachen Format wie `15. January 1929` anstelle des rohen Stringformats `Tu 15. January 1929 00:00:00 GMT-0700 (Pacific Daylight Time)`.

Es ist klar, dass einige Werte von etwas Bearbeitung profitieren. Viele der Transformationen werden sowohl innerhalb als auch zwischen Anwendungen wiederholt.
Dazu sind Pipes sehr praktisch. Man kann sie sich fast als Stile vorstellen.

Eine Pipe nimmt Daten als Eingabe auf und wandelt sie in eine gewünschte Ausgabe um.
In diesem Beispiel verwenden wir Pipes, um das Geburtstags-Property eines Components in ein leserfreundliches Datum umzuwandeln.

```typescript
import {Component} from '@angular/core';

@Component({
    selector: 'app-birthday',
    template: `<p>The birthday is {{birthday | date}}</p>`
})
export class BirthdayComponent{
    birthday = new Date(1929,0,15) // Month start by 0 => January 15, 1929
}
```

## Parametrisierte Pipes
Eine Pipe kann eine beliebige Anzahl optionaler Parameter akzeptieren, um ihre Ausgabe zu optimieren. Um einer Pipe Parameter hinzuzufügen,
fügen wir nach dem Pipe-Namen einen Doppelpunkt (:) und danach den Parameterwert (z. B. currency: `EUR`) hinzu.
Wenn die Pipe mehrere Parameter akzeptiert, trennen wir die Werte durch Doppelpunkte (z. B. Slice: 1: 5).

Unser Beispiel von vorher könnten wir z.B. so ausgeben:
```html
<p>The birthday of Martin Luther King Jr is {{ birthday | date:"mm/dd/yy" }} </p>
```

## Chaining Pipes
Wir können Pipes in nützlichen Kombinationen miteinander verketten. Im folgenden Beispiel wird der Geburtstag an die DatePipe und an die UpperCasePipe
ngekettet, um den Geburtstag in Grossbuchstaben anzuzeigen.

```html
<p>The chained birthday of Martin Luther King Jr is {{ birthday | date | uppercase }} </p>
```

Der Geburtstag wird nun so angezeigt: APR 15, 1988

## Custom Pipes
Für spezielle Anwendungsfälle können wir auch unsere eigenen Pipes schreiben. 

Wir können Beispielsweise das size eines Files anhand einer custom Pipe im Template darstellen.
```
{{ file.size | filesize: "megabyte" }}
```

Der Code für die custom Pipe dieses Beispiels würde so aussehen:
```typescript
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'filesize' })
export class FileSizePipe implements PipeTransform{
    transform(size: number, extensions: string = "MB"){
        return (size / (1024 * 1024)).toFixed(2) + extension;
    }
}
```
- Um Angular mitzuteilen, dass dies eine Pipe ist, wenden wir den `@Pipe` Decorator an, welchen wir aus `@angular/core` importieren.
- Die Pipe-Klasse implementiert die Methode `transform` des PipeTransform Interface, die einen Eingabewert gefolgt von optionalen Parametern akzeptiert und den transformierten Wert zurückgibt.
- Für jeden an die Pipe übergebenen Parameter gibt es ein zusätzliches Argument für die Methode `transform`. Unsere Pipe hat einen solchen Parameter: die `extension`.
- Mit dem `@Pipe` Decorator können wir den Pipe-Namen definieren, welchen wir im Template verwenden.

