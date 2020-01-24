| Behavior        | Input           | Output  |
| ------------- | ------------- | ----- |
| User inputs nothing, prevent submission | "" | *Default HTML 'required' form message* |
| User inputs anything besides a number, display "Error: Please enter a number" | "hello"      |   "Error: Please enter a number" |
| User inputs a number, display a list of numbers from 0 to user input number | "5"      |    "0, 1, 2, 3, 4, 5" |
| If listed number contains a "1", replace all digits with "Beep!" | "5"      |    "'0', 'Beep!', 2, 3, 4, 5" |
| If listed number contains a "2", replace all digits with "Boop!" | "5"      |    "'0', 'Beep!', 'Boop!', 3, 4, 5" |
| If listed number contains a "3", replace all digits with "I'm sorry, Dave. I'm afraid I can't do that." | "5"      |    "'0', 'Beep!', 'Boop!', 'I'm sorry, Dave. I'm afraid I can't do that.', 4, 5" |