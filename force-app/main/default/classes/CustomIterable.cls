global class CustomIterable implements Iterator<Account>{ 
   List<Account> accs {get; set;} 
   Integer i {get; set;} 
   public CustomIterable(){ 
       system.debug('--CustomIterable--');
       accs = [SELECT id, name, numberofEmployees FROM Account where name <>'true' LIMIT 5]; 
       i = 0; 
       system.debug('--i--'+i);
       system.debug('--accs--'+accs.size());
   }   
   global boolean hasNext(){ 
       system.debug('--hasNext--');
       system.debug('--accs.size--'+accs.size());
       if(i >= accs.size()) 
           return false; 
       else 
           return true; 
   }    
   global Account next(){ 
       system.debug('--next--');
       if(i == 2){ i++; 
       accs[i-1].name=accs[i-1].name+'--1';
       system.debug('--i=2--'+i);
       return null;
       } 
       
       i=i+1; 
       accs[i-1].name = accs[i-1].name +'--ASHISH';
       system.debug('--i--acc--'+i+'--'+accs[i-1]);
       return accs[i-1]; 
   } 
}