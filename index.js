/* 
Challenge: Use ChatGPT to generate and solve an algo problem

1. Ask ChatGPT to give you the FizzBuzz problem. Specify you do NOT
want the solution! 
2. Attempt to solve it yourself 
3. If you solve, ask ChatGPT for advice on how to improve it
4. If you don't solve, ask ChatGPT for help!

/* 
C code
int i;
for (i = 1 ; i <= n ; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        printf("FizzBuzz ");
    } else if ((i % 3) == 0) {
        printf("Fizz ");
    } else if ((i % 5) == 0) {
        printf("Buzz ");
    } else {
        printf("%d ", i);
    }
}
*/

____________________________________________

/*Your FizzBuzz implementation is already quite clear and efficient. However, here are a few suggestions to improve readability and maintainability:

1. **Indentation and Formatting**: Ensure consistent and clear indentation to improve code readability.

2. **Constants for Multiples**: Consider defining constants for the multiples of 3 and 5 to improve code clarity and avoid "magic numbers."

3. **Function to Print FizzBuzz**: You could encapsulate the logic to print Fizz, Buzz, and FizzBuzz into a separate function for better modularity and readability.

*/

//Here's an improved version incorporating these suggestions:

```c
#include <stdio.h>

#define MULTIPLE_OF_3 3
#define MULTIPLE_OF_5 5

void printFizzBuzz(int n) {
    for (int i = 1; i <= n; i++) {
        if (i % MULTIPLE_OF_3 == 0 && i % MULTIPLE_OF_5 == 0) {
            printf("FizzBuzz ");
        } else if (i % MULTIPLE_OF_3 == 0) {
            printf("Fizz ");
        } else if (i % MULTIPLE_OF_5 == 0) {
            printf("Buzz ");
        } else {
            printf("%d ", i);
        }
    }
}

int main() {
    int n = 100;  // Change this to the desired range
    printFizzBuzz(n);
    return 0;
}
```

//This version improves readability and maintainability while keeping the functionality the same. 