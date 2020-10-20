global class AAIterableExmple implements Iterator<Contact>{

List<Contact> con {get; set;}
 Integer i {get; set;}

public AAIterableExmple(){
    system.debug('--cons--');
 con = [SELECT Id, lastname FROM Contact LIMIT 5];
 i = 0;
    system.debug('--cons--'+i+'------'+con.size());
 }

// This is Iterator interface hasNext() method, it will return true if the list 'con' contains record else it will return false.
//Testing

global boolean hasNext(){
    system.debug('--has next--');
 if(i >= con.size()) {
 return false;
 } else {
 return true;
 }
 }

//This is Iterator interface next() method, it will keep on returning next element on the list until integer i reaches 5 and number 5 in if loop is the size of the list returned by soql query in above code.

global Contact next(){
system.debug('--next--');
if(i == 5){return null;}
 i++;
    system.debug('--con Prev--'+con[i-1]);
    con[i-1].lastname = con[i-1]+'Ahsish';
    system.debug('--con after--'+con[i-1]);
 return con[i-1];
 }
 }