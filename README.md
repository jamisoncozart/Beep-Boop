# _Beep Boop_

#### _Site to display a list of numbers up to a given number, and replace certain numbers with messages._, 24 January 2020

#### By _**Jamison Cozart**_

## Description

_Takes a user input number and displays a list of numbers up to the given number. Numbers with a "1" in them will be replaced by "Beep!", numbers with a "2" replaced by "Boop!", and numbers with a "3" replaced by "I'm sorry, Dave. I'm aftraid I can't do that". Uses looping and conditional statements to display the desired outputs to the user._

## Setup/Installation Requirements

**Option 1:**

1. Clone the repository into preferred directory:
    ```
    git clone https://github.com/jamisoncozart/Beep-Boop
    ```

3. Change into project directory
    ```
    cd beep-boop
    ```

2. Open working directory in Visual Studio Code or preferred text editor:
    ```
    code .
    ```
3. Open `index.html` in Chrome or preferred browser (some styles might change if not openned in chrome)

**Option 2:**

1. Download the .zip file by clicking the `Clone or download` button on this repo page.

2. `Unzip` the downloaded .zip file.

3. Open `index.html` in a browser (Chrome preferred) to view the page.

## Behavior Driven Development Specifications

| Behavior        | Input           | Output  |
| ------------- | ------------- | ----- |
| User inputs nothing, prevent submission | "" | *Default HTML 'required' form message* |
| User inputs anything besides a number, display "Error: Please enter a number" | "hello"      |   "Error: Please enter a number" |
| User inputs a number, display a list of numbers from 0 to user input number | "5"      |    "0, 1, 2, 3, 4, 5" |
| If listed number contains a "1", replace all digits with "Beep!" | "5"      |    "0, Beep!, 2, 3, 4, 5" |
| If listed number contains a "2", replace all digits with "Boop!" | "5"      |    "0, Beep!, Boop!, 3, 4, 5" |
| If listed number contains a "3", replace all digits with "I'm sorry, Dave. I'm afraid I can't do that." | "5"      |    "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5" |
| If listed number is "13", replace all digits with "I'm sorry, Dave. I'm afraid I can't do that." | "13"      |    "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that." |
| If listed number is "21", replace all digits with "Boop!" | "21"      |    "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!" |
| If listed number is "32", replace all digits with "I'm sorry, Dave. I'm afraid I can't do that." | "32"      |    "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that., I'm sorry, Dave. I'm afraid I can't do that." |

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* Git

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jamison Cozart_**





