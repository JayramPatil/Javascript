let start = 11,end = 2000;

while(start <= end)
{
    let sum1 = 0, sum2 = 0, i = 0;

    for(i = 1; i<=(start/2); i++)
    {
        if(start%i == 0)
        {
            sum1 += i;
        }
    }
    
    if(start != sum1)
    {
        for(i = 1; i<=(sum1/2); i++)
        {
            if(sum1%i == 0)
            {
                sum2 += i;
            }
        }
    }

    if(sum2 == start)
    {
        document.write("<br>Amicable Number => " + start);
    }
    
    sum1 = sum2 = 0;
    start++;
}