---
title: "Setup"
linkTitle: "Setup"
weight: 3
---

Um alle Übungen machen zu können wird eine lokale Datenbank benötigt. Dazu verwenden wir MariaDB. Falls du MariaDB noch 
nicht installiert hast, sind hier die Downloadlinks. Das DB-Tool dbeaver ist optional. Beim Download von MariaDB wird 
gleichzeitig HeidiSQL installiert, jedoch ist dieses Tool teilweise nicht so praktisch.

MariaDB:
* Download: https://mariadb.org/download/ 
* DB-Tool: https://dbeaver.io/download/

Bei beiden Tools kann der normale Installationsprozess durchlaufen werden. Merke dir das Passwort, dass du bei MariaDB 
gesetzt hast. Du wirst es im nächsten Schritt brauchen. Nach der Installation kannst du DBeaver öffnen und MariaDB 
wie folgt verbinden: 

1. Klicke oben links auf das Verbinden-Icon (Stecker):
    ![](../images/Neue_Verbindung.PNG)
2. Wähle MariaDB aus und klicke auf "Weiter":
    ![](../images/DB_Auswahl.PNG)
3. Gib dein Passwort ein und klicke auf "Fertigstellen":
    ![](../images/Connection.PNG)
4. Wenn alles funktioniert hat, solltest du die DB in der Liste sehen können:
    ![](../images/Ende.PNG)
5. Um ein SQL-Script auszuführen, musst du einen SQL-Editor öffnen. Mache dazu Rechtsklick auf localhost und wähle 
`SQL-Editor -> SQL-Skript` aus:  
    ![](../images/SQL-Editor.PNG)
6. Vom SQL-Editor aus kannst du alle gelernten SQL-Statements anwenden. Zuerst solltest du jedoch eine Datenbank mit 
`CREATE DATABASE name` erstellen. Dort kannst du wie in den Docs gelernt Tabellen usw. erstellen. 

Wenn diese Schritte funktioniert haben, bist du für die Labs bereit. Falls du Probleme bei der Installation/Einrichtung 
hast, melde dich bei einem anderen Auszubildenden oder bei einem Coach.