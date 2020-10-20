/*
The name save InterfaceTriggerHandler (ITriggerHandler)
By implementing the methods in this class, the TriggerDispatcher (discussed below) can be confident 
that the trigger handler has a method for each of these events
*/
public interface ITriggerHandler{

    void BeforeInsert (List<SObject> newItems); // Before insert, ID will not be available
    void BeforeUpdate (Map<Id,SObject> newItems,Map<Id,SObject> oldItems); // Update will have existing record, so Id will be available
    void BeforeDelete (Map<Id,SObject> oldItems); //Delete will have existing record, so Id will be available
    
    void AfterInsert (Map<Id,SObject> newItems);   // After insert, ID can be available as record gets save in database not commit
    void AfterUpdate (Map<Id,SObject> newItems,Map<Id,SObject> oldItems);
    void AfterDelete (Map<Id,SObject> oldItems);
    void AfterUndelete (Map<Id,SObject> oldItems);
    
    Boolean IsDisabled(); // It is method which return boolean and used to swith on-off based on custom setting or variables set in invoking class


}