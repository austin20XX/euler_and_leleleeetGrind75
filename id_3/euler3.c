#include <stdio.h>
#include <math.h>
#include <stdbool.h>
#include <stdlib.h>

bool isEven(int);
void print_prime_factors(unsigned long int);

int main(void){

unsigned long int num;

char num_str[15];
//Im doing it this way because I want to get out of the habit of using scanf
//I hear its bad
do{
	puts("Please enter a positive number");
	fgets(num_str,sizeof(num_str),stdin);
 }while(!(num=atol(num_str)));

print_prime_factors(num);

return 1;
}

void print_prime_factors(unsigned long int num){
	while(isEven(num)){
		num = num/2;
		printf("%d\t",2);
	 }

	int i;
	double root = sqrt((double)num);

	for(i=3;i<=root;i=i+2){
		while(0==num%i){
			num = num/i;
			printf("%d\t",i);
		 }	
	 }
}

bool isEven(int n){
	if(0==n%2)
		return true;
	else 
		return false;
}

