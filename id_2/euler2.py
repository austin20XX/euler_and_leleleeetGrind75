import sys


t = int(input().strip())
for a0 in range(t):
    maximum = int(input().strip())
    
    low_fib = 1
    high_fib = 2
    
    sum = 2 
    
    while (low_fib + high_fib < maximum):
        next_fib = low_fib+high_fib
        if next_fib % 2 == 0:
            sum+=next_fib
        low_fib=high_fib
        high_fib=next_fib
          
    print("The sum of even Fibonacci numbers under ", maximum, "is: ", sum)