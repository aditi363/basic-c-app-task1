/*In-Class 1
ADITI SAINI
Instructor: Sukhbir Tatla */


int n = 3;
// variable declaration 
for (int i = 0; i <= n; i++) // using for loop statement
{
    Console.Write("Enter Employee Number: ");
    int empNum = int.Parse(Console.ReadLine());
    Console.Write("Enter employee basic pay: ");
    double payRate = double.Parse(Console.ReadLine());
    Console.Write("Enter last week's total working  hours: ");
    double totalWorkingHours = double.Parse(Console.ReadLine());
    double extraWorkingHours = 0, newPay = 0;

    if (totalWorkingHours > 40)
    {
        extraWorkingHours = totalWorkingHours - 40;
        totalWorkingHours = totalWorkingHours - extraWorkingHours;
        newPay = payRate + (payRate / 2);

    }
    double pay = totalWorkingHours * payRate;
    double extraPay = extraWorkingHours * newPay;

    double grossPay = pay + extraPay;
    Console.WriteLine($"Employee Number: {empNum}");
    Console.WriteLine($"Gross Pay: {grossPay:C}"); // here C will determine the currency

}

