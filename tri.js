const items = genBin(3)
for (let x of genBin(3))
{
 console.log(x)
}
function* genBin(n)
{
       const d = []
       for (let i=0; i<n; i++) d.push(0)
       yield d
       let i = n-1
       while(true)
       {
           if(i == -1) return
           else if(d[i] == 2)
           {
               d[i]=0
               i-=1
           }
           else
           {
               d[i]+=1
               i = n-1
               yield d
           }
       }
}
        function buildItems()
{
	const names = ['часы', 'картина', 'радио', 'выза', 'книга', 'компьютер']
	const values = [175, 90, 20, 50, 10, 200]
	const weights = [10, 9, 4, 2, 1, 20]
	const items = []
	for (let i = 0; i < values.length; i++)
	{
		items.push(
			 {
			name:names[i],
			value: values[i],
			weight: weights[i]
		})
	}
	return items
}

