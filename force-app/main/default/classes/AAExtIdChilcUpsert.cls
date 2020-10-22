public class AAExtIdChilcUpsert{

//AAExtIdUpsert.upsertAcc()
//15:48:59:148 USER_DEBUG [17]|DEBUG|--srList--(Database.UpsertResult[getErrors=();getId=0012w000004cakRAAQ;isCreated=true;isSuccess=true;])

    public static void upsertCon(){
    
List<Contact> conlist=new list<Contact>();
Contact con=new Contact();
con.lastname='Kumar';
con.Firstname='Kumar';
con.email='sunil02kumar@gmail.com';
Account acc=new Account(Account_Unique_Number__c='00001');
con.Account=acc;
conlist.add(con);
Database.UpsertResult[] srList = Database.upsert(conlist,false);
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
