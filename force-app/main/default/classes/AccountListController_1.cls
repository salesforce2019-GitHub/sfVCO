public class AccountListController {
    
    @AuraEnabled
    //public static list<Account> getAccountlist(){
        
    public static list<aaprep2020_account_archive__x> getAccountlist(){    
       // return [Select id, Name,Industry,Phone from Account Order by CreatedDate desc limit 10];
        
        return [select accountsource__c  , sfid__c , accountnumber__c  from aaprep2020_account_archive__x where accountnumber__c !=null limit 10];
    }
    
    @AuraEnabled
    public static string AccountCnt(){    
        // return [Select id, Name,Industry,Phone from Account Order by CreatedDate desc limit 10];
        
        return [select accountnumber__c   from aaprep2020_account_archive__x where accountnumber__c ='123456'][0].accountnumber__c;
        //return [select name from account where name like 'AA%'][0].name;
    }
    
    @AuraEnabled
    public static void getAccountupdatedlist(Account newAcc){
        
        insert newAcc ;
    }
    
}