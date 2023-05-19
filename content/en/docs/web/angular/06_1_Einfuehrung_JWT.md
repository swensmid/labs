---
title: "Json Web Token Authorisation (JWT)"
type: docs
linkTitle: "Json Web Token Authorisation (JWT)"
weight: 100
date: 2022-05-09
description: >
    JSON Web Token (JWT) ist ein offener Standard (RFC 7519) zur sicheren Kommunikation eines JSON-Objekts. In der Regel muss sich der Benutzer erfolgreich anmelden und erhält dann einen Token für API-Calls. Der Token besteht aus drei Teilen: Header, Payload und Signatur. Da die Payload alle erforderlichen Informationen enthält, ist für die Authentifizierung keine Datenbankabfrage erforderlich. Das ist besonders für die Skalierung zustandsloser Backend-Architekturen super!
---

## Sichere Kommunikation mit JSON Web Token
Ein JWT kann von jedem dekodiert und gelesen werden. Tatsächlich ist das für den Client und das Debuggen nützlich. Die Payload wird nicht verschlüsselt (für Verschlüsselung s. JWE), aber gültige Signaturen können nur erstellt werden, wenn man ein Geheimnis kennt. Jedes Mal, wenn ein Token empfangen wird, muss eine Integritätsprüfung die Signatur bestätigen. So wird sichergestellt, dass der Token nicht manipuliert wurde. Danach wird sein Inhalt als vertrauenswürdig eingestuft.

Die Gültigkeitsdauer des Token kann begrenzt werden, indem zeitbezogene Claims wie iat ("Issued At"), nbf ("Not Before") und exp ("Expiration Time") einbezogen werden. Ein abgelaufener JWT ist zwar weiterhin gültig, da es jedoch nicht möglich ist, Einträge zu manipulieren, ohne die Signatur zu zerstören, wird bei der serverseitigen Integritätsprüfung das Ablaufdatum des Tokens gelesen und der Zugriff verweigert.

Ein Nachteil ist das sehr komplizierte Widerrufen eines Tokens. Eine gängige Lösung ist das **Blacklisting**. Außerdem helfen kurze Gültigkeitsdauern.

**Beispiel für die Erstellung eines JSON Web Token**

Ein typisches JWT sieht folgendermassen aus (Header, Payload, Signature):

**xxxxx.yyyyyy.zzzzzz**


### Header
Der Header ist typischerweise in zwei Parts aufgeteilt: der erste Part ist der benötigte Algorythmus und der zweite der Typ des Tokens. Unten ein Beispiel dazu:
```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

### Payload
Der zweite Teil des Tokens der Payload, welche die erstellten Forderungen enthält. Forderungen sind Aussagen über eine Entität (normalerweise den Benutzer) und zusätzliche Daten. Es gibt drei Arten von Forderungen : registrierte, öffentliche und private.
1. Registrierte: Reihe vordefinierter Forderungen die nicht obligatorisch aber empfohlen sind; iss(Emittent), exp(Ablaufzeit), sub(Betreff) und aud(Publikum)
2. Öffentliche: Können nach Belieben definiert werden. Um Kollisionen zu vermeiden, sollten sie jedoch in der IANA JSON Web Token Registry definiert sein.
3. Private: Hierbei handelt es sich um benutzerdefinierte Forderungen, die erstellt wurden, um Informationen zwischen Parteien auszutauschen, die sich auf deren Verwendung einigen und weder registrierte noch öffentliche Forderungen sind
```json
{
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
}
```

### Signatur
Um den Signaturteil zu erstellen, muss man den codierten Header, den codierten Payload, ein Secret und den im Header angegebenen Algorithmus verwenden und diesen signieren.
Wenn man beispielsweise den HMAC SHA256-Algorithmus verwenden möchte, wird die Signatur folgendermaßen erstellt:
```json
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret)
```
Die Signatur wird verwendet, um zu überprüfen, ob die Nachricht unterwegs nicht geändert wurde. Bei Token, die mit einem privaten Schlüssel signiert wurden, kann auch überprüft werden, ob der Absender des JWT derjenige ist, für den er sich ausgibt.

## Alles zusammenführen
Die Ausgabe besteht aus drei durch Punkte getrennten Base64-URL-Zeichenfolgen, die in HTML- und HTTP-Umgebungen problemlos übergeben werden können und im Vergleich zu XML-basierten Standards wie SAML kompakter sind.

Das Folgende zeigt eine JWT, bei der der vorherige Header und die Nutzdaten codiert sind und die mit einem Geheimnis signiert ist. 

```javascript
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## Auftrag
Du hast nun alle Theorie die du für das nächste Projekt brauchst. Teste nun [hier](../../../../exams/web/angular/07_2_exam_angular), ob du alles verstanden hast.