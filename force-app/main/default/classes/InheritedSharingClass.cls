public with sharing class InheritedSharingClass{
    public List<Account> getAllTheSecrets(){
        return [SELECT Name,Industry FROM Account where name like 'A%'];
    }
}

// default is without sharing