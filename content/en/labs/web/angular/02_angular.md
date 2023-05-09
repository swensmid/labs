---
title: "Labs zu Angular"
type: docs
linkTitle: "Angular Labs"
weight: 2
date: 2021-11-01
description: >
     Aufgaben zu Angular.
---

## Aufgabe 1
Folgender Code ist gegeben:
```typescript
class Fahrrad{
  name?: string;
  url?: string;
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fahrrad',
  templateUrl: './fahrrad.component.html',
  styleUrls: ['./fahrrad.component.scss']
})
export class FahrradComponent implements OnInit {

  fahrrad: Fahrrad;
  liebslingsFahrraeder:any = [];
  constructor(protected httpClient: HttpClient) {
    this.fahrrad = new Fahrrad();
    this.fahrrad.name = "Specialized Diverge Pro Carbon";
    this.fahrrad.url = "https://assets.specialized.com/i/specialized/96220-10_DIVERGE-PRO-CARBON-ETAP-REDWD-SMK-CHRM_HERO?bg=rgb(241,241,241)&w=2500&h=1406&fmt=auto"
   }

  ngOnInit(): void {
  }

  nameDesFahrrads(){
    alert(this.fahrrad.name);
  }

  bildLiebslingsFahrrad(){
    this.liebslingsFahrraeder = [];
    let url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDNGfS6NUdgwXOwKu9xlZPJFm84ylG6J4g&cx=005124428384360536924:rstfldysumw&q=" + this.fahrrad.name + "&searchType=image&safe=high";
    this.httpClient.get(url).subscribe((response:any) =>{
      for (var i = 0; i < 4; i++) {
        var item = response.items[i];
        item.image.height =  200 / item.image.width * item.image.height;
        item.image.width = 200;
        this.liebslingsFahrraeder.push(item);
      }
    });
  }
}
```
Folgendes muss angezeigt werden, wenn die Seite geladen wurde:

![Components Description](../../../docs/web/angular/images/first-page.png)


- "Wie heisst mein Fahrrad?" ist mit der Funktion "nameDesFahrrads()" verknüpft.
- "Mein Liebslingsfahrrad suchen" ist mit der Funktion "bildLiebslingsFahrrad()" verknüpft.
- Für die Anzeige der Lieblingsfahrräder muss ein `*ngFor` gebraucht werden.
- Tipp: Die Weite und Höhe der Bilder kann direkt mit einem Propertybinding gemacht werden.

Folgende Seite wird nach dem Klick auf "Mein Lieblingsfahrrad suchen" angezeigt:

![Components Description](../../../docs/web/angular/images/second-page.png)


## Aufgabe 2
Folgende Datenbankstruktur ist gegeben:
![ERD](../../../docs/web/angular/images/class-diagram.png)

- Erstelle für jede Entität ein geeignetes Model
- Erstelle für jede Entität einen Service
- Erstelle bei jedem Service Musterdaten die du in einer geeigneten Component anzeigst. Design ist noch nicht wichig, es geht nur um das Verständnis
- Behalte die Ordnerstruktur korrekt (Ordner für die Componenten, Ordner für die Services, etc.)


## Aufgabe 3
In der vorherigen Aufgabe hast du eine Grundstruktur geschaffen für die Anzeige von diversen Fahrrädern und dessen Marken und Typ.
- Erstelle nun eine Pipe welche die Spalte `wert` im Format `1'720.00 CHF` anzeigt. Der Währungstyp wird mit einem Parameter weitergegeben.
  Sofern nichts angegeben wird, wähle Standardmässig `CHF`.
- Geh davon aus das in der Spalte `wert` auch Zahlen wie `1287.87` oder `5421.21` gespeichert sind. Runde diese je nachdem auf oder ab.
- Auch das Hochzeichen (`'`) soll immer nach 3 Stellen erscheinen.
- Erstelle eine weitere Pipe, welche den Markennamen nur mit Grossbuchstaben anzeigt und hinter den Markennamen ein Copyrightzeichen (`©`) setzt.


## Aufgabe 4
Nachdem du die Pipes erstellt hast, geht es darum das Routing auf die von dir erstellten Komponenten zu leiten.
- Erstelle nach deinem Ermessen für die jeweiligen Komponenten die du routen willst, eine entsprechende Weiterleitung
- Sofern du eine Komponente nur anzeigen lassen willst, wenn man beispielsweise angemeldet ist, versuche eine CanActivate Klasse zu erstellen
- Erstelle auch ein Routing auf die Typ-Komponente, welche mit Hilfe eines Parameters den jweiligen Typ anzeigt 


## Aufgabe 5
Um die Fahrrad-Seite nun ein bisschen schöner darzustellen, brauchen wir nun Angular Material
- Folgende Material-Komponenten sollen die Seite verschönern (es ist dir überlassen, welches Material du welcher Komponente(n) zuordnest):
  - Card
  - Sidenav
  - Snackbar
  - Toolbar
  - Table
  - Input
  - Tabs
