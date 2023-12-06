import sys

def sumDivisibleToMax(divisor, maximum):
    factor_max = maximum // divisor
    sum = divisor * (factor_max*(factor_max+1)) // 2
    
    return sum
        
num_of_inputs = int(input().strip())
for i in range(num_of_inputs):
    dividend_maximum = int(input().strip())
    
    sum = sumDivisibleToMax(3, dividend_maximum-1) + sumDivisibleToMax(5, dividend_maximum-1) - sumDivisibleToMax(15, dividend_maximum-1)
     
    print("The sum of numbers below", dividend_maximum, "divisible by 3 or 5 is: ", sum)