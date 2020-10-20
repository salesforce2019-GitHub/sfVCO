global class scheduledBatchable1 implements Schedulable {
   global void execute(SchedulableContext sc) {
      BatchApexExample b = new BatchApexExample(); 
      Database.executeBatch(b);
   }
}