// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/csharp

// ----------------my solution----------------
using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    int sum = 0;
    
    foreach (int num in arr) {
      if (num > 0) sum += num;
    }
    
    return sum;
  }
}

// ----------------best practice----------------
using System;
using System.Linq;

public class Kata
{
  public static int PositiveSum(int[] arr)
  {
    return arr.Where(x => x > 0).Sum();
  }
}
