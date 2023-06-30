---
title: "String"
linkTitle: "String"
weight: 6
description: >
  Modul #J1
---

#### String
Eine Variable, die eine Zeichenkette enthält, hat den Typ String.
```java
String hello = "Hello, Java";
```

Diese Zeichenkette besteht aus 11 Zeichen, einschließlich eines Leerzeichens. Wie wir hier ebenfalls sehen, müssen String-Literale von doppelten Anführungszeichen umgeben sein. Ein Objekt des Typs String ist unveränderlich, die Werte innerhalb eines Strings können also nach dessen Erstellung nicht mehr verändert werden.

##### Methoden
Der folgende Code zeigt die Verwendung einiger Methoden der Klasse String. Alle Methoden sind in der API unter [java.lang.String](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/String.html) zu finden.
```java
public class StringMethoden {
    public static void main(String[] args) {
        String house = "house";

        /**
         * Returns the char value at the specified index (indexing starts from 0)
         */
        char o = house.charAt(1);

        /**
         * Returns the length of this string.
         */
        int length = house.length();

        /**
         * Returns true if and only if this string contains the specified sequence of char values
         */
        boolean isContaining = house.contains("us");

        /**
         * Returns the index within this string of the first occurrence of the specified character
         */
        int indexChar = house.indexOf('s');

        /**
         * Returns the index within this string of the first occurrence of the specified substring
         */
        int indexSubstring = house.indexOf("us");

        /**
         * Tests if this string starts with the specified prefix
         */
        boolean startsWithPrefix = house.startsWith("Ho"); // false
        boolean startsWithPrefix2 = house.startsWith("ho"); // true

        /**
         * Tests if this string ends with the specified suffix
         */
        boolean endsWithSuffix = house.endsWith("se"); // true

        /**
         * Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar
         */
        String mouse = house.replace('h', 'm');
        String houseHouse = "House, House";
        String mouseMouse = houseHouse.replace('H', 'M');

        /**
         * Returns a new string that is a substring of this string, starting from the specified index
         */
        String applePearLemon = "Apple, pear, lemon";
        String pearLemon = applePearLemon.substring(7);

        /**
         * Returns a new string that is a substring of this string
         */
        String pear = applePearLemon.substring(7, 11);

        /**
         * Converts all of the characters in this String to upper case
         */
        String apple = "Apple";
        String appleUpperCase = apple.toUpperCase(); // APPLE

        /**
         * Converts all of the characters in this String to lower case.
         */
        String appleLowerCase = apple.toLowerCase(); // apple

        /**
         * Splits this string around matches of the given regular expression, puts them in a String array
         */
        String applePear = "Apple, pear";
        String[] fruits = applePear.split(",\\s"); // \\s means whitespace

        /**
         * Converts this string to a new character array
         */
        char[] charArray = applePearLemon.toCharArray();

        /**
         * Compares this string to the specified object
         */
        String appleOne = "Apple";
        String appleTwo = "Apple";
        boolean isEqual = appleOne.equals(appleTwo);

        /**
         * Compares two strings lexicographically.
         * The comparison is based on the Unicode value of each character in the strings. 
		 * The result is a negative integer if this String object lexicographically precedes the argument string.
		 * The result is a positive integer if this String object lexicographically follows the argument string.
		 * The result is zero if the strings are equal
         */
        String abcd = "abcd";
        String cdef = "cdef";

        if (abcd.compareTo(cdef) < 0) {
            System.out.println(abcd + " precedes " + cdef);
        }

        if (house.compareTo(house) == 0) {
            System.out.println(house + " is equal to " + house);
        }

        if (cdef.compareTo(abcd) > 0) {
            System.out.println(cdef + " follows " + abcd);
        }

        /**
         * Capital letters precede lower case letters
         */
        String houseLowerCase = "house";
        String houseUpperCase = "HOUSE";
        if (houseLowerCase.compareTo(houseUpperCase) > 0) {
            System.out.println(houseUpperCase + " precedes + " houseLowerCase);
        }

        /**
         * Compares two strings lexicographically, ignoring case differences
         */
        System.out.println(houseLowerCase.compareToIgnoreCase(houseUpperCase));
    }
}
```
