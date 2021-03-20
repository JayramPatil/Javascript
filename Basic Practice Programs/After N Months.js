function afterNMonths(year, months) {
	if(year == null){
		return "year missing"
	}else if(months == null){
		return "month missing"
	}
	if(months < 12)
		{
			return year
		}
	var i = 1
		while(12*i < months)
		{
			i++;
		}
	if(12*i == months)
		return year +i
	
	return year+i-1
}