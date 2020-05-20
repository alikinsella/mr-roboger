# _Mr. Roboger's Neighborhood_

#### _Epicodus code review, May 21, 2020_

#### By _**Ali Kinsella**_

## _Description_

_This page is honestly not very useful. It converts numbers into strings of nonsense, but it took a lot of javascript figuring!_

_These are the specs I used to help me build this page._

| **spec** | **example input** | **example output** |
|------|---|---|
| The program returns a range of numbers from 0 to the user's inputted number. | 4 | 0,1,2,3,4 |
| The program returns a range of numbers from 0 to the user's inputted number, substituting "beep!" for 1. | 4 | 0,beep!,2,3,4 |
| The program returns a range of numbers from 0 to the user's inputted number, substituting "boop!" for 2. | 4 | 0,beep!,boop!,3,4 |
| The program returns a range of numbers from 0 to the user's inputted number, substituting "Won't you be my neighbor?" for 3. | 4 | 0,beep!,boop!,Won't you be my neighbor?,4 |
| The program returns a range of numbers from 0 to the user's inputted number, substituting "beep!" for any number that has a 1 as a digit. | 10 | 0,beep!,boop!,Won't you be my  neighbor?,4,5,6,7,8,9,beep! |
| The program returns a range of numbers from 0 to the user's inputted number, substituting "boop!" for any number that has a 2 as a digit, overriding 1s. | 12 | 0,beep!,boop!,Won't you be my  neighbor?,4,5,6,7,8,9,beep!,11,boop!|
| The program returns a range of numbers from 0 to the user's inputted number, substituting "Won't you be my neighbor?" for any number that has a 3 as a digit, overriding 1s and 2s. | 31 | 0,beep!,boop!,Won't you be my  neighbor?,4,5,6,7,8,9,beep!,11,boop! ... 29,Won't you be my neighbor?,Won't you be my neighbor? |


## Link to this site on GitHub Pages

https://alikinsella.github.io/mr-roboger/

## Setup/Installation Requirements

* _There aren't any setup instructions._
* _Just enter a number and watch the beeps and boops abound!_

## Known Bugs

_There are no known bugs._

## Support and contact details

_XXXX_

## Technologies Used
.html, .css, .js, .jQuery 3.5.0, Bootstrap 3.3.7.

### License
This software is licensed under the MIT license.

Copyright (c) 2020 **_Ali Kinsella_**