
import math

def isPalindrome(number):
    numberReversed = str(number)[::-1]
    
    if number == int(numberReversed):
        return True
    else:
        return False

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    
    cap = math.ceil(math.sqrt(n))
    
    if cap < 10:
        # N is not large enough for 2 three digit factors
        print("N is too small")
        continue
    
    products = set()
    for factorOne in range(100, 1000):
        for factorTwo in range(factorOne, 1000):
            p = factorOne * factorTwo
            if p > n:
                break
            if isPalindrome(p):
                products.add(p)

    largest = max(products)
    print(largest)