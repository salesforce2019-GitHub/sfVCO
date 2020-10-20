trigger aaDuplicateCM on CampaignMember (before update) {


    for(CampaignMember a : Trigger.New) {
        
          //check if record exists
            system.debug('----'+a);
            a.AAcounter__c = a.AAcounter__c +1;
            AADuplicateCMObj__c x = new AADuplicateCMObj__c();
            x.name ='Ashish';
            x.Campaign__c = a.campaignId;
            x.AAcontactId__c = a.contactId;
            insert x;
        }
}