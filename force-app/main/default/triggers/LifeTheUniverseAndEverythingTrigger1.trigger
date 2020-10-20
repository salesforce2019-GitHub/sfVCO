trigger LifeTheUniverseAndEverythingTrigger1 on Account
   (after update) {
 
    // Make sure if there is an answer given its always 42!
    for(Account record : Trigger.new) {
        if(record.NumberOfEmployees!= null && record.NumberOfEmployees != 200) {
            record.NumberOfEmployees.addError('Answer is not 200!');
        }
    }
}