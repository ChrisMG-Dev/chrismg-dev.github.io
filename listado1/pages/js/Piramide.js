/*
	Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente 
	tipo:
	1
	22
	333
	4444
	55555DWEC. 2º D.A.W.
	2
	666666
	7777777
	88888888
	999999999
	0000000000
*/

for(var i=1;i<=10;i++){
	for(var j=0;j<i;j++){
		if(i % 10 == 0){
			document.write(0);
		}
		else{
			document.write(i);
		}
		
	}
	document.write("<br />");
}