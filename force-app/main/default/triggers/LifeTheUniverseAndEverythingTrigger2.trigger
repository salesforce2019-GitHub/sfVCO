trigger LifeTheUniverseAndEverythingTrigger2 on Account
   (before insert,before update) {
 
    // Make sure if there is an answer given its always 42!
    for(Account record : Trigger.new) {
        
      record.NumberOfEmployees = record.NumberOfEmployees;
        
    }
}