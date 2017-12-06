window.onload=function(){
	var amonth=[31,28,31,30,31,30,31,31,30,31,30,31]
	
	var cells=document.getElementsByTagName('td');
	var eyear=document.getElementById('year');
	var emonth=document.getElementById('month');
	var left=document.getElementById('left')
	var right=document.getElementById('right')
	var td=new Date();
	var tyear=td.getFullYear();
	var tmonth=td.getMonth()
	var tdate=td.getDate();
	var cyear=tyear;
	var cmonth=tmonth;
	eyear.innerHTML=tyear;
	emonth.innerHTML=tmonth+1;
	fillDate(tyear,tmonth);
	function fillDate(year,month){
		var fd=new Date(year,month,1);
		var begin=fd.getDay();
		var end=begin+amonth[month]-1
		if(isLeapYear(year)&&month==1)
			end++;
		var first=month?amonth[month-1]-begin+1:amonth[11]-begin+1
		for(var i=0;i<42;i++){
			cells[i].classList.remove('today');
			cells[i].classList.remove('gray')
			if(i==begin||i==end+1)
				first=1
			cells[i].innerHTML=first;
			if(i<begin||i>end)
				cells[i].classList.add('gray')
			if(i>=begin&&i<=end&&first==tdate&&month==tmonth&&year==tyear)
				cells[i].classList.add('today');
			first++;
		}
	}
	function isLeapYear(year){
		if(year%400==0||year%4==0&&year%100!=0)
			return true;
		return false
	}
	left.onclick=function(){
		cmonth--;
		if(cmonth<0){
			cmonth=11;
			cyear--;
		}
		fillDate(cyear,cmonth);
		eyear.innerHTML=cyear;
		emonth.innerHTML=cmonth+1;
	}
	right.onclick=function(){
		cmonth++;
		if(cmonth>11){
			cmonth=0;
			cyear++;
		}
		fillDate(cyear,cmonth);
		eyear.innerHTML=cyear;
		emonth.innerHTML=cmonth+1;
	}
	
}
