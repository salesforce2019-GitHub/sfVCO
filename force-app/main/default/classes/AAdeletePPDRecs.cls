global class AAdeletePPDRecs implements Database.Batchable<AggregateResult>,Database.Stateful{

    List<id> ProdIDlist = new list<id>();
 
    
    List<Account> ppddeletelist = new List<Account>();
    
    global Iterable<AggregateResult>  start(Database.BatchableContext BC){
        system.debug('--start--');
            return new AggregateResultIterable1(); 
        }
    
    
    global void execute(Database.BatchableContext BC, List<AggregateResult> ppdlist){
    
     system.debug('--execute--'+ppdlist);
     
        for (AggregateResult ppd :ppdlist){
            ProdIDlist.add(String.valueof(ppd.get('accountId')));
            //system.debug(ppd.get('Product_Lookup__c')); 
        }
        List<contact> prodlist =[select Id from contact where accountId in :ProdIDlist];
        system.debug('--contact size--'+prodlist.size()); 
        /*
        if(prodlist.size()>0)
        {
            ppddeletelist = [select id from Product_Pricing_Detail__c where Product_Lookup__c in :prodlist];
        }
        if(ppddeletelist.size()>0)
        deleteddd ppddeletelist;
        system.debug(ppddeletelist.size()); 
        */
    }
    
    
    global void finish(Database.BatchableContext BC){
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        String[] toAddresses = new String[] {'ashish.agrawal@salesforce.com'};
        mail.setToAddresses(toAddresses);
        mail.setSubject('PPD Batch');
        mail.setSaveAsActivity(false);
        
        mail.setPlainTextBody('List of Records to be deleted ');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
    
    
    global class AggregateResultIterable1 implements Iterable<AggregateResult>{ 
        global Iterator<AggregateResult> Iterator(){ 
            return new AggregateResultIterator1(); 
        } 
    }
    
    global class AggregateResultIterator1 Implements Iterator<AggregateResult>{ 
    
        AggregateResult [] results {get;set;} 
        //Integer index {get;set;} 
           Integer index=0;
        
        global AggregateResultIterator1(){ 
        
        system.debug('--AggregateResultIterator1--');
            string str1 = '012a0000001CEuV';
            string str2 = '012a0000001CEuW';
            String query =  'Select accountId,count(ID) count_contact from contact group by accountId'; 
            results = Database.query(query); 
          system.debug('--result--'+results);  
          
          system.debug('--result.size()--'+results.size());   
        } 
        
        global boolean hasNext(){ 
             system.debug('--hasNext--');
            return results !=null; 
        } 
        
        global AggregateResult next(){ 
         system.debug('--next--'+results[index++]);
            return results[index++]; 
        } 
    }

   
}