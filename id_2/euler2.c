#include <stdio.h>
#include <stdbool.h>

#define _CAP 4000000

bool isEven(int);
void fib(int*,int*);

int main(void){

int sum=2;
int prevFib=1, nextFib=2;

while(1){
    if(nextFib > _CAP){
        break; 
     }
    fib(&prevFib,&nextFib);

    if(isEven(nextFib)){
        sum+=nextFib;
     }

 }

printf("The sum of all even numbers in the Fibonacci sequance less that %d is %d\n", _CAP, sum);

return 1;

}



//Checks if number is even
bool isEven(int num){
    if(0==(num%2))
        return true;
    else
        return false;
}


//Takes integer pointers.
//Moves newest to oldest
//Generates next number and places it in newest
void fib(int* oldest, int* newest){
    int temp = *(newest);

    *(newest) = *(oldest)+*(newest);
    *(oldest) =  temp;
}
