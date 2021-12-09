#include <iostream>
#include <cmath>

using std::cout;
using std::cin;

int main(void) {
    const unsigned int NUMBER_OF_DIGITS = 3;

    const unsigned int FACTOR_CEILING = pow(10.0, NUMBER_OF_DIGITS) - 1;

    cout << "Factor Ceiling: " << FACTOR_CEILING << std::endl;

    unsigned int factor1 = FACTOR_CEILING, factor2 = FACTOR_CEILING;

    return 0;
}
