---
title: "Git Erweitert"
linkTitle: "Git Erweitert"
weight: 2
---

Nachdem du die Basics von git gelernt hast, ist es Zeit dich weiter zu vertiefen.

## Inhalt

* [Stash](#Stash)
* [Cherry Pick](#CherryPick)
* [Tag](#Tag)
* [Alias](#Alias)

## Stash
#### Was ist stash?
Mit git stash ist es möglich Änderungen zwischenzuspeichern und diese später abzurufen.
Nach dem stashen kannst du an anderen Dateien arbeiten bis du die zwischengespeicherten Daten problemlos wieder abrufen kannst.

#### Wie funktioniert stash?
Um Dateien zu stashen wird der folgende Befehl verwendet:

```bash
git stash
```
Um Dateien im Anschluss abzurufen wird der folgende Befehl verwendet:
```bash
git stash pop
```
Mit ```git stash pop``` werden alle Änderungen des stashes gelöscht und der ursprünglichen Datei hinzugefügt.

Die Alternative dazu ist:
```bash
git stash apply
```
Mit ```git stash apply``` werden die änderungen ebenfalls übernommen,
der Unterschied zu ```git stash pop``` liegt darin das stash apply die Dateien nicht aus dem Stash löscht,
dies kann nützlich sein, wenn dieselbe Änderung mehreren Branches hinzugefügt werden soll.


## Squash
#### Was ist Squash
squash in Git meint mehrere Commits zu vereinen.
Squash wird meistens benutzt, wenn Branches gemerged werden.
An dieser Stelle ist es jedoch wichtig zu erwähnen das es keinen ```git squash``` Befehl gibt.


#### Wie funktioniert squash?
Es gibt verschiedene Wege um Commits zu squashen.
Zum Beispiel gibt es die Methode des manuellen squashens, dazu wird das Interactive rebase feature von Git genutzt.
Um die Interactive Rebase session zu starten wird der folgende Befehl verwendet:
```bash
git rebase -i HEAD~3
```
Danach öffnet sich ein Editor der die letzten n Commits anzeigt, n wird durch die Zahl nach dem "~" definiert.
Um jetzt die Commits zu squashen muss das pick zu beginn der zeile mit squash ersetzt werden.
Jetzt werden alle Commits mit dem squash Schlüsselwort an den obersten Commit hinzugefügt.


##### Wieso sollte man Squashen:
Angenommen du beendest die Arbeit an einem Featurebranch und willst diese in den Main branch mergen,
jedoch enthält der Featurebranch viele Commits die nicht zwingend im Mainbranch aufgeführt werden sollen,
in diesem Fall eignet sich das squashen, um diese Commits zusammenzufassen.



## Merge/Pull Requests
###Was ist der Unterschied zwischen einer Merge Request und einer Pull Request?
Beide Begriffe meinen dasselbe, werden jedoch mit einer anderen Plattform assoziiert.
Der Begriff Merge Request wird im Zusammenhang mit GitLab verwendet.
Im Zusammenhang mit GitHub wird jedoch der Begriff Pull Request verwendet.
Der Einfachheit wird im folgenden Text nur von Pull Request gesprochen.

### Was ist eine Pull Request bzw. eine Merge Request?
In ihrer einfachsten Form sind Pull-Requests eine Funktion für Entwickler
die andere Teammitglieder darüber informiert, dass ein Feature fertiggestellt wurde.
Dies lässt alle Beteiligten wissen, dass der Code bereit für eine überprüfung ist und danach in Hauptzweig eingeführt werden kann.

### Wie kann eine Pull Request erstellt werden (IntelliJ)
Um eine Pull Request direkt aus Intelij zu erstellen, muss zuerst sichergestellt werden das man selber berechtigt ist eine Pull Request zu erstellen.
Sind diese Berechtigungen vorhanden, kann die Pull Request in wenigen Schritten erstellt werden.
Oben Links in IntelliJ befindet sich einen Button der mit Pull Request beschriftet ist.
Danach öffnet sich ein Fenster in dem ausgewählt werden kann, welchen der lokalen Branches in das Ziel Repo gemerged werden soll.
Danach muss nach noch einen Titel festgelegt werden. Es besteht ebenfalls die Möglichkeit eine Beschreibung hinzuzufügen, dies ist jedoch nur optional.
Im Anschluss besteht die Möglichkeit einen Reviewer hinzuzufügen.
Jetzt kann die Pull Request erstellt werden.

### Wie kann eine Pull Request erstellt werden (Github)
Um eine Pull Request direkt von GitHub aus zu senden, muss zuerst der Reiter Pull Request ausgewählt werden,
Jetzt stehen verschiedene Möglichkeiten zu Auswahl, in unserem Fall wollen wir aber nur eine neue Pull Request erstellen.
Im Anschluss erscheint ein neues Panel, das wichtigste dabei ist die Wahl des richtigen source und target branches.
Als nächstes kann noch ein Name und eine Beschreibung für die Pull Request gesetzt werden.
Wie in IntelliJ besteht auch hier die Möglichkeit einen Reviewer hinzuzufügen, der Button dazu befindet sich mittig auf der linken Seite.
Da nun alle Einstellungen vorgenommen wurden, kann die Pull Request erstellt werden.


## Cherry Pick
### Was ist Cherry-Pick ?
git cherry-pick ist ein Befehl welcher es ermöglicht beliebige Git-Commits per Referenz
anzusprechen und diese an den momentanen Arbeitskopf (HEAD) anzuheften.
git cherry-pick kann sehr nützlich für das rückgängig Machen von Änderungen sein.

Zum Beispiel: Ein Commit ist aus Versehen im falschen Branch. Nun kannst du zum korrekten
Branch wechselt und brauchst git cherry-pick um den Commit am richtigen Ort zu befestigen.

### Wie funktioniert Cherry-Pick ?
Um Cherry Pick anzuwenden gibt man folgenden Befehl ein:
```
git cherry-pick <commit-hash>
```
Der <commit-hash> muss natürlich noch mit dem korrekten Hash des Commits ersetzt werden, welchen
man verschieben will. Anschliessend wird der Commit an den Branch angeheftet, auf dem man sich gerade
befindet. Darum Achtung!: Immer zuerst kontrollieren ob man derzeit auch wirklich auf dem korrekten
Branch ist.

## Tag
### Was sind Tags ?
Tags sind Referenzen, welche an einen bestimmten Punkt der History
zeigen. Tagging wird üblicherweise benutzt um wichtige Ereignisse wie z.B.
das Release einer Applikation festzuhalten. Ein Tag ist etwas ähnliches
wie ein Branch, nur das ein Tag sich nicht verändert. Anders als ein Branch,
kann ein Tag nach dem Erstellen keine weiteren Commits
beinhalten.

### Wie funktionieren Tags ?
Um ein Tag zu erstellen wird folgender Befehl benötigt:
```
git tag <tagname>
 ```
Wobei der <tagname> auch wieder durch den gewünschten String ersetzt werden muss.
Will man zusätzlich zum Tag eine Beschriftung hinzufügen, macht man das mit:
```
git tag <tagname> -a
 ```
Damit wird ein annotated tag erstellt.

Auch wichtig anzumerken: Wenn du normal auf den Branch pushst, werden die Tags
nicht standardmässig mitgepusht. Dazu brauchst du dann:
```
git push origin --tags
 ```
Willst du nur ein einzelnes Tag pushen, brauche:
```
git push origin <tag>
 ```

## Alias
### Was sind Aliasse ?
Ein Git-Alias ist zu vergleichen mit einem Shortcut. Aliasse werden z.b.
auch beim Arbeiten mit der Bash-Konsole eingesetzt. Aliase werden gebraucht um kürzere Befehle
zu realisieren. Sie ermöglichen effizienteres Programmieren.

Nehmen wir zum Beispiel den git-checkout Befehl.
Dieser Befehl wird häufig verwendet und muss immer wieder neu eingetippt werden. Mit den Git-Aliassen
jedoch kann man git-checkout z.B. in git.co verwandeln. Dies spart enorme Schreibarbeit über längere Zeit
und verliert dennoch nicht an Wirksamkeit.

### Wie funktionieren Aliasse?
Um Aliasse festzulegen, müssen wir diese in der gitconfig-Datei definieren. Dort erstellen wir das
Stichwort [alias]. Danach könnte das etwa so aussehen:
```
[alias]
    st = status
    ci = commit -v
 ```
Die Aliasse können beliebig definiert werden, Ziel davon soll nur sein, die Schreibarbeit zu
minimieren und das eigene Programmieren praktischer zu machen.

## Gitg
### Was ist Gitg
Gitg ist eine grafische Benutzeroberfläche für git. Es zielt darauf ab, ein kleines,
schnelles und bequemes Werkzeug zu sein, um Git-Repositories zu visualisieren.
Neben der Visualisierung bietet Gitg auch einfache Möglichkeiten zur Verwaltung eines Repositorys.
Jedoch bietet IntelliJ standardmässig die dieselben Möglichkeiten, sollte man jedoch eine IDE ohne Git integration verwenden ist gitg ein praktisches Tool.


### Installationsanleitung
Unter Linux kann gitg mit folgendem Befehl installieren:
<br>```sudo apt install gitg```<br>
Leider ist git unter Windows nicht verfügbar.
Eine empfehlenswerte Alternative dazu ist der offizielle GitHub Client.

## Github Client
### Was ist der GitHub Client
Der GitHub Client ist ein Windows Programm für die Verwaltung von Git Repositorys.
Der GitHub Client funktioniert am besten mit GitHub repositorys,
das bedeutet aber nicht das dieser keine Repositorys von anderen Quellen unterstützt.
Es ist lediglich ein wenig aufwändiger Repositorys aus anderen Quellen einzubinden.


### Installationsanleitung
Unter Windows kann der GitHub Client auf der folgenden Seite heruntergeladen werden:
```https://desktop.github.com/``` 
Unter Linux der Client mithilfe des folgenden Scripts heruntergeladen werden:
```https://gist.github.com/berkorbay/6feda478a00b0432d13f1fc0a50467f1```

## Git Blame
### Was ist Git-Blame?
Ist ein Befehl, welcher dazu dient den Author der letzten Änderung anzuzeigen. Deswegen auch
git "blame". Man "blamed" den Verfasser der letzten Änderung für seinen Fehler (falls er
einen gemacht hat). 

### Wie funktioniert Git-Blame?
Um git blame anzuwenden braucht es nicht viel:
```
git blame <filename>
 ```
Und schon haben wir den Verantwortlichen für die letzte Änderung an einem unserer
Files. Jedoch bietet  ```git blame``` auch andere Anwendungsmöglichkeiten:

```Bash
git blame -L 1,5 <filename>
 ```
Hier zum Beispiel definieren wir eine Range von der Zeile 1 bis zur Zeile 5. Oder hier, noch
eine weitere Variante:
```
git blame -e <filename>
 ```
Die Option -e zeigt uns anstatt des usernames des Authors, direkt die E-mail Adresse von
ihm, so dass wir gerade Kontakt aufnehmen können.

Zum Schluss haben wir noch die -w Option
```
git blame -w <filename>
 ```
Dieser Befehl ignoriert wenn ein Author nur Leerschläge geändert hat. Das hat den Vorteil, dass
wir nur die Authoren bekommen, welche auch wirklich etwas am Code selbst geändert und ihn
nicht nur formatiert haben.

## Blobs und Trees
### Was sind Blobs und Trees show?
Zuerst zu den Blobs: Blobs werden benutzt, um die Inhalte einzelner Dateien zu speichern.
Trees wiederum beinhalten Referenzen zu anderen Blobs oder Unterbäumen. 

### Wozu braucht es sie?
Wenn man eine Datei staged wird eine Blob-Datei erstellt. Dieser Blob hat den
Inhalt der Datei und hat den Typ "blob". Ein Blob eigentlich der Inhalt der Datei
an einer bestimmten Instanz. Die verschiedenen Blobs fallen danach unter einen
Tree. 

Nun bildet sich hier eine Kette: Das Commit-Objekt greift auf die Tree-Objekte zu.
Diese wiederum geben uns die Blob-Objekte zurück. Deshalb brauchen wir diese Konstellation also.
Ohne die Trees und Blobs hätten wir keinen Zugriff auf die Inhalte unserer Dateien mehr.

<img src="https://miro.medium.com/max/541/1*ZGVkiRbMErfng2CqpU3YQQ.png">
Im Diagramm kann die Abhängigkeit dementsprechend besichtigt werden.



