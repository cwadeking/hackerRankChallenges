using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackerRankTesting
{
    class Program
    {
        public static void Main(string[] args)
        {


            //int[] arr = new int[5];
            //arr.Append(1);
            //arr.Append(2);
            //arr.Append(3);
            //arr.Append(4);
            //arr.Append(5);

            //Result.staircase(6);
            //Console.ReadLine();

            List<List<int>> arr = new List<List<int>>();
            //arr.Add(new List<int> { 4 });
            //arr.Add(new List<int> { -1, 1, -7, -8 });
            //arr.Add(new List<int> { -10, -8, -5, -2 });
            //arr.Add(new List<int> { 0, 9, 7, -1 });
            //arr.Add(new List<int> { 4, 4, -2, 1 });
            arr.Add(new List<int> { 3 });
            arr.Add(new List<int> { 11, 2, 4 });
            arr.Add(new List<int> { 4, 5, 6 });
            arr.Add(new List<int> { 10, 8, -12 });

            int result = Result.diagonalDifference(arr);

            Console.ReadLine();



        }
                    
    }
}
