---
title: "Labs zu RxJS"
type: docs
linkTitle: "RxJS Labs"
weight: 3
date: 2023-05-04
description: >
    Aufgaben zu Observales und RxJS.
---

# Aufgaben
## Übung 1
![task1](/images/task.png) - Einzelarbeit [Übung 1](/files/exams/angular/uebung1.html)

    Erstelle eine Website, welche anhand von Observables eine Browsernotification ausgibt.
    Dazu soll sich auf der Website ein Button befinden, welcher das Event auslöst, um die Notification im Browser anzuzeigen.

    Vorgehen:
    Lade die Datei im Titel herunter und öffne sie in VS Code. 
    Die Datei enthält lediglich das Grundgerüst der Übung, füge an den auskommentierten Stellen den entsprechenden Code ein.
    Am Grundgerüst der Datei soll nichts verändert werden.

![asset](/images/hint.png)    
Damit die Notifications fehlerfrei funktionieren, muss die Extension "Live Server" in VS Code hinzugefügt und angewendet werden.

## Aufgabe 2
Erstelle eine Angular-Komponente mit einem Eingabefeld, das als Live-Suche fungiert. Bei jeder Eingabe sollten die Suchergebnisse dynamisch angezeigt werden

* Verwende ein Subject, um die Benutzereingaben als Observable-Quelle zu behandeln.
* Binden das Eingabefeld an das Subject und verwenden Sie den Operator `debounceTime`, um die Eingabe zu verzögern und nur nach einer kurzen Pause nach der Eingabe eine Suche auszuführen.
* Verwende den Operator `distinctUntilChanged`, um nur neue Suchanfragen auszuführen, wenn sich die Eingabe ändert. Die Suchanfrage soll auf ein Mockdatenarray in einem Service gehen.
* Zeige die Suchergebnisse in Echtzeit in der Komponente an.