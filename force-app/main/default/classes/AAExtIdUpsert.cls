public class AAExtIdUpsert{
//AAExtIdUpsert.upsertAcc(); My new changes
// 2nd changes in remote    

    public static void upsertAcc(){
    
        List<Account> acclist=new list<Account>();
        
        Account acc = new account();
        acc.name='Demo test1';
        acc.Account_Unique_Number__c='00001';
        acclist.add(acc);
        
        Schema.SObjectField ftoken = Account.Fields.Account_Unique_Number__c;
        system.debug('--ftoken--'+ftoken);
        
        Database.UpsertResult[] srList = Database.upsert(acclist,ftoken,false);
        system.debug('--srList--'+srList);
        
        for (Database.UpsertResult sr : srList) {
            if (sr.isSuccess()) {
                // Operation was successful
            }
            else {
                // Operation failed, so get all errors                
                for(Database.Error err : sr.getErrors()) {
                    System.debug('error has occurred.' + err.getStatusCode() + ': ' + err.getMessage());                    
                    System.debug('fields that affected this error: ' + err.getFields());
                    
                }
            }
        }
        
            
            }

}
