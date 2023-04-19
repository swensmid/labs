---
title: "Asynchrone Anfragen"
type: docs
linkTitle: "Asynchrone Anfragen"
weight: 14
date: 2022-04-19
description: >
  Modul #F4 - JavaScript - Promises und Web-Request mit JavaScript.
---

## Ziele
* Du weisst, was Promises sind und wozu sie verwendet werden.
* Du kannst, Promises korrekt anwenden in Funktionen.
* Du weisst die man Web-Request machen kann und die Antworten weiterverwendet.

## Promises
Ein Promise repräsentiert einen Wert (oder ein Versprechen), der möglicherweise in der Zukunft verfügbar sein wird.

Promises werden oft verwendet, um asynchrone Operationen wie das Laden von Daten von einem Server oder das Ausführen eines HTTP-Requests zu verwalten. Ein Promise kann sich in einem von drei Zuständen befinden:
* Pending (ausstehend): Der Promise ist noch nicht erfüllt (`resolved`) oder abgelehnt (`rejected`) worden.
* Fulfilled (erfüllt): Die asynchrone Operation wurde erfolgreich abgeschlossen (`resolved`) und der Promise enthält den zurückgegebenen Wert.
* Rejected (abgelehnt): Die asynchrone Operation ist fehlgeschlagen und der Promise enthält den Fehler.

Ein Promise kann mit der Funktion `new Promise()` erstellt werden. Diese Funktion nimmt eine Funktion als Argument, die zwei Parameter enthält: `resolve` und `reject`. `resolve` wird aufgerufen, wenn die Operation erfolgreich abgeschlossen wurde, und `reject`, wenn ein Fehler aufgetreten ist.

```javascript
const promise = new Promise((resolve, reject) => {
    if (success) {
        resolve('success');
    } else {
        reject('error');
    }
});
```

Promises bieten zwei Methoden an, um mit dem Ergebnis oder dem Fehler der asynchronen Operation umzugehen:
* `then()`
* `catch()`

Die `then()` Methode wird verwendet, um eine Funktion zu registrieren, die ausgeführt wird, wenn das Promise erfolgreich erfüllt wird. Diese Funktion erhält das Ergebnis des erfüllten Promise als Parameter:

```javascript
const promise = new Promise((resolve, reject) => resolve('success'));

promise.then((result) => {
    console.log(result) // 'success'
})
```

`then()` kann jedoch mehrmals hintereinander verwendet werden, um eine Kette von Funktionen zu erstellen, die nacheinander ausgeführt werden, wenn das Promise erfüllt wird.

Durch die Verwendung von `then()` in Kombination mit `return` in jeder Funktion kann eine Kette von Funktionen erstellt werden, die nacheinander ausgeführt werden, wobei jedes Ergebnis das Argument für die nächste Funktion in der Kette ist.

```javascript
const promise = new Promise((resolve, reject) => resolve(2));

promise
    .then((result) => {
        console.log(result); // 2
        return result * 2;
    })
    .then((result) => {
        console.log(result); // 4
        return result * 2;
    })
    .then((result) => {
        console.log(result); // 8
    });
```

Die `catch()` Methode wird verwendet, um eine Funktion zu registrieren, die ausgeführt wird, wenn das Promise fehlschlägt. Diese Funktion erhält den Fehler als Parameter.
```javascript
const promise = new Promise((resolve, reject) => reject('error'));

promise.catch((result) => {
    console.log(result); // 'error'
});
```

`then()` und `catch()` werden fast immer zusammen verwendet:

```javascript
const number = 10;
const promise = new Promise((resolve, reject) => {
    if (number > 0) {
        resolve('success');
    } else {
        reject('error');
    }
});

promise.then((result) => {
    console.log(result); // 'success'
}).catch((error) => {
    console.error(error); // 'error'
});
```

### Promises als Function
Man kann Promises auch in eine Funktion packen indem man das gesamte Promise in der function returned:
```javascript
function promiseFunction(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}
```

Nun kann man diese Funktion innerhalb von anderen Funktionen verwenden. Wichtig ist das diese mit `await` verwendet werden, um auf das Ergebnis des Promises zu warten, bevor der Rest der Funktion fortgesetzt wird. So kann man sicher gehen das man das Resultat aus dem Promise zur Verfügung hat und es danach in der Funktion verwenden kann. Wenn man jedoch ein `await` in einer Funktion verwendet muss die gesamte Funktion asynchron sein, dazu muss man vor die Funktion das Schlüsselwort `async`schreiben.
```javascript
function promiseFunction(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

async function callPromiseFunction() {
    const successResult = await promiseFunction(10);
    console.log(successResult);

    const errorResult = await promiseFunction(-5);
    console.log(errorResult);
}

callPromiseFunction();
// 'success'
// Promise {<rejected>: 'error'}
```

Wenn man es nicht verwenden würde, würde der Code in der Funktion weiterfahren ohne das er evtl. das Resultat aus der Promise hat (das Promise hat noch den Zustand Pending).
```javascript
function promiseFunction(number) {
    return new Promise((resolve, reject) => {
        if (number > 0) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

function callPromiseFunction() {
    const promise = promiseFunction(10).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error(error);
    })
    
    console.log(promise);
}

callPromiseFunction();
// Promise {<pending>}
// 'success'
```

## Webanfrage mit JavaScript
Wenn du eine Webanwendung schreibst, dann muss deine Website (=Frontend) wahrscheinlich Daten von (d)einem Backend abfragen.

In den meisten Fällen werden hierfür HTTP-Requests verwendet, die du bereits kennengelernt hast (REST API bei Spring und HTML Forms).

Um das einmal auszuprobieren, wollen wir eine API anfragen, die als Antwort zufällige "Fakten" über Chuck Norris zurückschickt. Wenn wir diese URL im Browser aufrufen (= HTTP GET), erhalten wir einen Witz in Form von JSON:

`GET https://api.chucknorris.io/jokes/random`

```json
{
    "categories": [],
    "created_at": "2020-01-05 13:42:20.262289",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "6F3bv9fIRUGCPTcma6Je1w",
    "updated_at": "2020-01-05 13:42:20.262289",
    "url": "https://api.chucknorris.io/jokes/6F3bv9fIRUGCPTcma6Je1w",
    "value": "Albert Einstein's hair used to be neatly combed...until the day he met Chuck Norris."
}
```

Folglich interessiert uns der Wert für `"value"`.

Damit für dich das Vorgehen verständlicher ist, führen wir Schritt für Schritt in der Browser-Konsole aus.

Die Abfrage kannst du wie folgt durchführen:
```javascript
fetch('https://api.chucknorris.io/jokes/random', {method: 'get'});
```
Du wirst sehen, dass dieser Funktionsaufruf ein `Promise {<pending>}` zurückgibt. Wir sehen, dass die Anfrage noch nicht vorbei ist (pending = anstehend). Dieses `Promise`-Objekt wird die Antwort enthalten, sobald die Antwort verfügbar ist. Da wir sowieso erst weiterfahren möchten, wenn die Antwort bereit ist, interessieren wir uns nicht für das `Promise`. Daher können wir einfach mit der Fortsetzung des Scriptes solange warten, bis wir die Antwort hätten. Das können wir wie folgt machen:

```javascript
await fetch('https://api.chucknorris.io/jokes/random', {method: 'get'});
```

Das `await` führt dazu, dass das Script erst weitergeht, wenn die Antwort da ist. Zusätzlich wird die Antwort automatisch aus dem `Promise`-Objekt entpackt und wir erhalten so direkt ein Objekt vom Typ `Response`.

Theoretisch haben wir nun die Daten, die wir wollen. Da wir als Antwort ein JSON-Objekt als Antwort erwarten, können wir direkt die Antwort als JavaScript-Objekt anfordern:

```javascript
let response = await fetch('https://api.chucknorris.io/jokes/random', {method: 'get'});

response.json();
```

Komischerweise erhalten wir wieder ein `Promise {<pending>}`. Was müssen wir machen, um das JSON aus diesem Promise zu kriegen?

Genau: Wir müssen es `await`en:
```javascript
let response = await fetch('https://api.chucknorris.io/jokes/random', {method: 'get'});

let jokeObject = await response.json();
```
Dies ist notwendig, da die Methode [json()](https://developer.mozilla.org/en-US/docs/Web/API/Response/json) asynchron den response Stream ausliest. 

Wenn du nun das `jokeObject` loggst (z.B. mit `console.log(jokeObject)`), siehst du, dass wir nun das gleiche Objekt, das wir ganz oben erwartet haben, erhalten haben.

Den Witz kannst du wie folgt ausgeben:
```javascript
console.log(jokeObject.value);
```

### Anfrage in eine Funktion einbinden
Im Normalfall packt man solche Logik in eine Funktion. Den oberen Code könntest du wie folgt in eine Methode einbinden:

```javascript
/** 
 * Requests a random Chuck Norris joke and returns it.
 * @return {Promise<string>} a random Chuck Norris joke.
*/
async function fetchJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random', { method: 'get' });
    const jokeObject = await response.json();

    return jokeObject.value;
}
```

Dir ist sicher aufgefallen, dass wir nun das `async`-Keyword vor `function` geschrieben haben. Dies ist erforderlich, wenn man `await` in einer Funktion verwenden möchte. Dieses `async`-Keyword führt auch dazu, dass die Methode ein Objekt des Typen `Promise<...>` zurückgibt.

Wenn du diese Funktion definiert hast, kannst du den Rückgabewert von ihr wie folgt loggen:
```javascript
console.log(await fetchJoke());
```

### await umgehen
Du wirst in die Situation kommen, wo du eine Antwort auf eine asynchrone Anfrage erhälst, aber kein `await` brauchen darfst, weil du dich nicht in einer mit `async` gekennzeichneten Funktion befindest.

Statt ein Promise zu awaiten, kannst du auch definieren, dass eine bestimmte Aktion durchgeführt werden soll, sobald die Antwort da ist. Dies kannst du mit `Promise.then(...)` machen:

```javascript
fetchJoke().then(joke => console.log(joke));
```

Was genau haben wir hier gemacht?

Wir haben `fetchJoke()` asynchron aufgerufen, ohne auf die Antwort zu warten. Deswegen erhalten wir ein Promise-Objekt. Promise-Objekte enthalten eine `then`-Methode. Bei dieser Methode kannst du eine Funktion übergeben. Die übergebene Funktion wird aufgerufen, sobald die Antwort erhalten wurde.


### Exception-Handling bei HTTP-Anfragen
Während einer HTTP-Anfrage passieren oft folgendes typische Fehler:
* Der angefragte Server kann nicht erreicht werden bzw. der Browser erhält keine Antwort (`Response`).
* Die Anfrage wurde durch den Browser blockiert (z.B. durch die CORS Policy).
* Der Server gibt eine Antwort mit einem Status-Code zurück, der einen Fehler beschreibt.

In den ersten beiden Fällen würde die `fetch()`-Funktion eine `Error` asynchron werfen. Diesen Fall könntest du mit einem `try` und `catch` abfangen.

Hingegen wird kein Fehler geworfen, wenn eine Antwort erhalten wird. Aber trotzdem könnte die Response auf einen Fehler hindeuten, z.B. wenn der Status-Code `404` wäre. In diesem Fall hätten wir eine Antwort vom Server erhalten, die darauf hindeutet, dass die Seite hinter der URL nicht gefunden werden konnte.

Daher macht es Sinn, die `response` auf den Status Code zu überprüfen. Hierfür bietet das `response`-Objekt ein praktisches Property an: `ok`. Wenn `ok` true ist, dann war der Status-Code zwischen 200 und 299 (erfolgreiche Status-Codes).

Beide Fälle kombiniert resultieren in einem Error-Handling, das ungefähr so aussehen könnte:

```javascript
async function fetchJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random', { method: 'get' });
    
    if (!response.ok) {
      throw new Error(`Fehlerhafte Antwort. Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(error);
    // Hier müsste noch der Fehler behandelt werden und evtl. eine Nachricht dem User angezeigt werden.
    return null; // etwas zurückgebe, das auf einen Fehler hindeutet.
  }
}
```

Möchte man eine genauere Prüfung des Status-Codes vornehmen, dann könnte man statt `response.ok` das Property `response.status` überprüfen.

![asset](/images/hint.png) Hierzu findest du [zwei Aufgaben im Lab](../../../../labs/web/html_css/03_javascript).


### Früher war alles besser?
Die `fetch`-Funktion hat Webrequest stark vereinfacht. Früher durftest du dich mit XML HTTP Requests herumschlagen. Aber siehe selbst: https://www.w3schools.com/xml/xml_http.asp 