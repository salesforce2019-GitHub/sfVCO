public inherited sharing class aaEnforceSecuritySOQL{

 public String sName {get;set;}
 
 public List<Account> getAllTheSecrets(){
 
 List<Account> a = [SELECT Name,Industry FROM Account where name like 'A%'];
 sName = a[0].Industry;
 system.debug('-----'+sName);

 return a;
 }
}