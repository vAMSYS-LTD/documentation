---
title: Using Regular Expressions To Determine The Type of Flight
nextjs:
  metadata:
    title: Using Regular Expressions To Determine The Type of Flight
    description: Using Regular Expressions To Determine The Type of Flight.
---

{% table %}
* Author {% align="right" %}
---
* Jan Podlipský (TVS32) - jan.podlipsky@sw-virtual.eu
{% /table %}

This is a community guide and not part of official vAMSYS documentation.

## Description Of The Use Case

Our airline is using a "sort of" logical system for the callsings, so in most cases, you are able to determine the type of flight (Scheduled, Charter, Repositioning, Training) just based on that callsign.

What we are going to do here, is to use Regular Expression, to determine a clear callsign pattern, to differentiate flight types.

## Regular Expressions

### Basics

Regular Expressions are a patterns used to match character combinations in strings. Usually, you determine a type (or a range) of characters, and how many of them are there. 

Here is a guide from [CoderPad](https://coderpad.io/blog/development/the-complete-guide-to-regular-expressions-regex/)

Let's take this callsign - **TVS3BD**

This is one of the common types used for Smartwings's scheduled flights, because it's an ARCID (Aircraft Identification), which can be used for any scheduled flight within Eurocontrol, and usually it's a combination of numbers and letters.

Now, we are going to disassemble it. The pattern here is:

*Letter-Letter-Letter-Number-Letter-Letter*

And this is something translateable into a Regular Expression.

``[A-Z]{3}\d{1}[A-Z]{2}``

Now let's disassemble this:
- ``[A-Z]{3}`` = 3 characters containing letters from A to Z = "TVS"
- ``\d{1}`` = 1 character containing a decimal digit (0 to 9) = "3"
- ``[A-Z]{2}`` = 2 characters containing letters from A to Z = "BD"

As you can see, it works that you define a pattern and a number of characters in the curly brackets.

### Combinations

Let me introduce one callsign into the mix, for example - **TVS56H**

Based on what we have described above, you would say, that this is a different pattern - (*Letter-Letter-Letter-Number-Number-Letter*), and therefore it needs a new Regular Expression.

**WRONG!**

You can also use some combinations to match several patterns by one Regular Expressions. The number of characters in the curly brackets doesn't have to be one number, but a several ones.

So, in order to write a Regular Expression which will match both of these patterns, you only need to write it like this:

``[A-Z]{3}\d{1,2}[A-Z]{1,2}``

Let's disassemble this as well:
- ``[A-Z]{3}`` = 3 characters containing letters from A to Z = "TVS"
- ``\d{1,2}`` = **1 or 2 characters** containing a decimal digit (0 to 9) = "3 or 56"
- ``[A-Z]{1,2}`` = **1,2 characters** containing letters from A to Z = "BD or H"

### Other Practical Examples

- Smartwings ferry and positioning flights = 3 numbers and a P or F, e.g. TVS240P and TVS240F
    - ``[A-Z]{3}\d{3}[FP]{1}``  

    - *Note: In case you want to have only selected letters in the pattern, for example here, we want only a P and an F, you write them in brackets without a space - [FP]*

- Smartwings charter flight = 4 numbers, e.g. TVS2240
    - ``[A-Z]{3}\d{4}``

## Practical Usage In The Google Sheets

### Basics

Google Sheets can use Regular Expressions in Conditions, that whether some Regular Expression is matched, it can add a text in the cell.

***Important note: the parameter separator is dependant on your regional settings. In my case, it's a semicolon, but can be a comma.***

The syntax is like this:

``=IF(REGEXMATCH(A1;"[A-Z]{3}\d{4}");"Charter Flight")``

This means that:
- IF(CONDITION;RESULT)
- REGEXMATCH(CELL;Regular Expression)

So, if a cell A1 matches a Regular Expression ``[A-Z]{3}\d{4}`` then a string "Charter Flight" is added.

What you can also do, is to add multiple conditions. You just need to use an **IFS** function instead of an **IF**

- The pattern is like this: ``=IFS(CONDITION;RESULT;CONDITION;RESULT...)``
- So you can have something like: ``=IFS(H2=434;"Business Jet Flight";REGEXMATCH(F2;"[A-Z]{3}[0-9]{3}[FP]");"Repositioning Flight";REGEXMATCH(F2;"[A-Z]{3}[0-9]{4}");"Charter Flight";REGEXMATCH(F2;"[A-Z]{3}\d{1,2}[A-Z]{1,2}");"Scheduled Flight";REGEXMATCH(F2;"[A-Z]{3}\d{1}[A-Z]{1}\d{1}");"Scheduled Flight";REGEXMATCH(F2;"[A-Z]{3}[0-9]{2,3}");"Scheduled Flight";REGEXMATCH(F2;"[A-Z]{3}[0-9]{1}");"Scheduled Flight";TRUE;"")``

- This is the pattern I'm using for a **TAG** column in the vAMSYS v5 Importer.

- When several conditions are used, always the first one to be triggered gets the result. So you can see, that my first entry is ``H2=434;"Business Jet Flight"`` which corresponds to a fleet of Business jets, and wherever the Business jet fleet is added, it's automatically a Business Jet Flight.

- What I also recommend, is to add a following condition to the end ``"TRUE;"""`` so in case any of those conditions is not met, it leaves the cell blank. Default behavior is an error message in the cell, if you will not use this.

### Add Another Flight Parameters From There

What I'm also doing, that by determining the Tag column above, is to add another parameters to other columns in the Sheet.

- Type
    - ``=IFS(T2="Scheduled Flight";"scheduled";OR(T2="Charter Flight";T2="Business Jet Flight");"charter";T2="Repositioning Flight";"repositioning";TRUE;"")``
- Flighttype
    - ``=IFS(T2="Scheduled Flight";"s";OR(T2="Charter Flight";T2="Repositioning Flight";T2="Business Jet Flight");"n";TRUE;"")``

**The End!**  
Enjoy!
