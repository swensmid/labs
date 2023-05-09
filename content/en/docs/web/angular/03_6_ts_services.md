---
title: "Services"
type: docs
weight: 3
date: 2023-05-04
description: >

---

## Services
Angular-Services sind in Angular eine wichtige Art, Code zu organisieren und wiederzuverwenden. Sie bieten eine Möglichkeit, Funktionen und Daten zu teilen, die von mehreren Components innerhalb einer Anwendung benötigt werden. Ein Service ist eine Klasse, die von anderen Components injiziert werden kann, um auf seine Funktionen und Daten zuzugreifen.

Services können beispielsweise Daten von einem Backend-Server abrufen, eine benutzerdefinierte Logik ausführen, eine Konfiguration bereitstellen oder andere Arbeiten erledigen, die für mehrere Komponenten relevant sind. Im Gegensatz zu Komponenten haben Services normalerweise keine visuelle Darstellung, sondern dienen als reine "Helfer"-Klassen.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/api/data');
  }

}
```