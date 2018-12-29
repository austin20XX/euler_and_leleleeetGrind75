#include <stdio.h>
#include <stdlib.h>

int main(void){

unsigned int smallest = 1;

unsigned int max_divisor;

puts("Please enter the max divisor you would like to check for");

char* temp_str = malloc(sizeof(char)*2);
fgets(temp_str,sizeof(temp_str),stdin);

int success  = sscanf(temp_str,"%d", &max_divisor);
free(temp_str);
if(success < 1) {
        return -1;
} 

int i;

for(i=1; i<max_divisor;i++) {
        if(smallest%i == 0) {
                continue;
        }
        else{
                smallest++;
                i=0;
                continue;    
        }
        
}

printf("The smallest number evenly divisible by all integers between 1 and %d is %d\n",max_divisor,smallest);

return 1;
}
