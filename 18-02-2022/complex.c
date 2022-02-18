#include<stdio.h>
struct complex{
    int real;
    float imaginary;
};
int main()
{
    struct complex num1, num2, result;
    printf("Enter the First Complex Number(a+ib) without i : ");
    scanf("%d %f", &num1.real, &num1.imaginary);
    printf("Enter the Second Complex Number : ");
    scanf("%d %f", &num2.real, &num2.imaginary);

    result.real=num1.real +num2.real;
    result.imaginary=num2.imaginary+num1.imaginary;

    printf("Sum of both the complex number is : %d + %fi", result.real, result.imaginary);
    return 0;
}
