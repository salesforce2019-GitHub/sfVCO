global class scheduledBatchable implements Schedulable {
   
global void execute(SchedulableContext sc) {      
        SearchAndReplace b = new SearchAndReplace('a','a','a','a');       
        database.executebatch(b);   
    }
    
}