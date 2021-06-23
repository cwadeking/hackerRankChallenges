using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackerRankTesting
{
    static class Result
    {

        //static void miniMaxSum(int[] arr)
        //{
        //    long minSum = 0;
        //    long maxSum = 0;
        //    Array.Sort(arr, 0, arr.Length);
        //    for(int i = 0; i < arr.Length - 1; i++)
        //    {
        //        minSum += arr[i];
        //    }
        //    Array.Reverse(arr);
        //    for (int i = 0; i < arr.Length - 1; i++)
        //    {
        //        maxSum += arr[i];
        //    }
        //    Console.WriteLine(minSum + " " + maxSum);
        //}
        //public static void staircase(int n)
        //{
        //    int poundCounter = 1;
        //    while(n > 0)
        //    {
        //        string emptySpaces = "";
        //        for(int i = 0; i < n -1; i++)
        //        {
        //            emptySpaces += " ";
        //        }
        //        for(int i = 0; i < poundCounter; i++)
        //        {
        //            emptySpaces += "#";
        //        }
        //        poundCounter++;
        //        Console.WriteLine(emptySpaces);
        //        n -= 1;
        //        emptySpaces = "";
        //    }

        //}

        public static int diagonalDifference(List<List<int>> arr)
        {
            var firstDiagonal = 0;
            var secondDiagonal = 0;
            var diagonalCount = arr.Count - 1;
            var result = 0;

            for (var i = 1; i <= diagonalCount; i++)
            {
                var differential = i - 1;
                firstDiagonal += arr[i][differential];
                secondDiagonal += arr[diagonalCount - differential][i - 1];
            }

            result = firstDiagonal - secondDiagonal;
            result = Math.Abs(result);
            return result;
        }
    }
}
