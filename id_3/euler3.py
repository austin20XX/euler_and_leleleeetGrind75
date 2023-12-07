import sys
import math

def isEven(number):
    if number % 2 == 0:
        return True
    else:
        return False

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    
    reduced = n
    primeFactors = []
    while isEven(reduced):
        reduced /= 2
        primeFactors.append(2)
        
    square_root = math.sqrt(n)
    
    # A floor or cast can be used here, since we have only positive numbers
    for i in range(3, math.floor(square_root)+1, 2):
        while reduced % i == 0:
            reduced /= i
            primeFactors.append(i)
            
    primeFactors.append(math.floor(reduced))
    print(max(primeFactors))