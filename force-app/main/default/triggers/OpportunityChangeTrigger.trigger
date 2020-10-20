trigger OpportunityChangeTrigger on OpportunityChangeEvent (after insert) {
     system.debug('---CDC---');
    List<Task> tasks = new List<Task>();
    system.debug('---CDC---');
    for(OpportunityChangeEvent opp : trigger.new) {
        system.debug('---CDC opp---'+opp);
        EventBus.ChangeEventHeader header = opp.ChangeEventHeader;
        if (header.changetype == 'UPDATE') { 
            //The trigger iterates all Event with changeType field is 'UPDATE'
            if(opp.isWon==true) { 
                //check if opportunity isWon field is equal to true 
                Task newTask = new Task();
                newTask.Subject='Follow up on won opportunities: ' + header.recordIds;
                newTask.OwnerId = header.CommitUser;
                newTask.WhatId = header.recordIds[0];
                tasks.add(newTask);
            }
        }
    }
    if(tasks != null && !tasks.isEmpty()) {
        insert tasks; 
        //insert the Task with all the isWon Opportunities
    }
}