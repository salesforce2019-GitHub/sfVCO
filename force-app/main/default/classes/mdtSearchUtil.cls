/**
Test
**/

public with sharing class mdtSearchUtil {
    @AuraEnabled(cacheable=true)
    public static list<mdtDeplistWrapper> mdtFetch() {

        list<mdtDependencyObj__c> mdtlst = [ select id,MetadataComponentId__c,MetadataComponentName__c,MetadataComponentNamespace__c,MetadataComponentType__c,
        RefMetadataComponentId__c,RefMetadataComponentName__c,RefMetadataComponentNamespace__c,RefMetadataComponentType__c
        FROM mdtDependencyObj__c LIMIT 50];

        map<string,list<mdtDepWrapper>> treeMap = new   map<string,list<mdtDepWrapper>> ();


        for(mdtDependencyObj__c each : mdtlst){

            if(treeMap.containsKey(each.RefMetadataComponentName__c)){
                list<mdtDepWrapper> avilLst = treeMap.get(each.RefMetadataComponentName__c);
                mdtDepWrapper instDep = new mdtDepWrapper();

                instDep.Id = each.Id;
                instDep.MetadataComponentId = each.MetadataComponentId__c;
                instDep.RefMetadataComponentId = each.RefMetadataComponentId__c;
                instDep.MetadataComponentName = each.MetadataComponentName__c;
                //instDep.RefMetadataComponentName = each.RefMetadataComponentName__c;
                instDep.MetadataComponentNamespace = (each.MetadataComponentNamespace__c == null ? '--':each.MetadataComponentNamespace__c);
                instDep.RefMetadataComponentNamespace = (each.RefMetadataComponentNamespace__c == null ? '--':each.RefMetadataComponentNamespace__c);
                instDep.MetadataComponentType = each.MetadataComponentType__c;
                instDep.RefMetadataComponentType = each.RefMetadataComponentType__c;

                avilLst.add(instDep);
                treeMap.put(each.RefMetadataComponentName__c,avilLst);

            }else{
                list<mdtDepWrapper> tempLst = new list<mdtDepWrapper> ();
                mdtDepWrapper instDep = new mdtDepWrapper();

                instDep.Id = each.Id;
                instDep.MetadataComponentId = each.MetadataComponentId__c;
                instDep.RefMetadataComponentId = each.RefMetadataComponentId__c;
                instDep.MetadataComponentName = each.MetadataComponentName__c;
                //instDep.RefMetadataComponentName = each.RefMetadataComponentName__c;
                instDep.MetadataComponentNamespace = (each.MetadataComponentNamespace__c == null? '--':each.MetadataComponentNamespace__c);
                instDep.RefMetadataComponentNamespace = (each.RefMetadataComponentNamespace__c == null ? '--':each.RefMetadataComponentNamespace__c);
                instDep.MetadataComponentType = each.MetadataComponentType__c;
                instDep.RefMetadataComponentType = each.RefMetadataComponentType__c;

                tempLst.add(instDep);
                treeMap.put(each.RefMetadataComponentName__c,tempLst);
            }

        }
        
        list<mdtDeplistWrapper> depList = new list<mdtDeplistWrapper>();
        integer uniqueId = 10001;
        for(String each : treeMap.keyset()){

            // To get the ref metadata details; common in respective list
            list<mdtDepWrapper> keyValList = treeMap.get(each);
            mdtDepWrapper depInst = keyValList.get(0);

            mdtDeplistWrapper  mdtDepInst = new mdtDeplistWrapper();

            mdtDepInst.Id = string.valueof(uniqueId);
            mdtDepInst.RefMetadataComponentName = each+' ('+keyValList.size()+')';
            mdtDepInst.MetadataComponentName = '--';
            // consider this as parent details
            mdtDepInst.MetadataComponentId = depInst.RefMetadataComponentId;
            // consider this as parent details
            mdtDepInst.MetadataComponentNamespace = (depInst.RefMetadataComponentNamespace == '' ? '--':depInst.RefMetadataComponentNamespace);
            mdtDepInst.MetadataComponentType = depInst.RefMetadataComponentType;

            mdtDepInst.mdtCompDetails =  treeMap.get(each);

            depList.add(mdtDepInst);
            uniqueId = uniqueId +1;
        }

        //System.debug('--Map--'+depList); 
        return depList;
        
    }


public class mdtDepWrapper{
    @AuraEnabled public string Id {get;set;}
    @AuraEnabled public string MetadataComponentName {get;set;}
    @AuraEnabled public string RefMetadataComponentName {get;set;}
    @AuraEnabled public string MetadataComponentId {get;set;}
    @AuraEnabled public string RefMetadataComponentId {get;set;}
    @AuraEnabled public string MetadataComponentNamespace {get;set;}
    @AuraEnabled public string RefMetadataComponentNamespace {get;set;}
    @AuraEnabled public string MetadataComponentType {get;set;}
    @AuraEnabled public string RefMetadataComponentType {get;set;}
}

public class mdtDeplistWrapper{
    @AuraEnabled public string Id {get;set;}
    @AuraEnabled public string MetadataComponentName {get;set;}
    @AuraEnabled public string RefMetadataComponentName {get;set;}
    @AuraEnabled public string MetadataComponentId {get;set;}
    @AuraEnabled public string RefMetadataComponentId {get;set;}
    @AuraEnabled public string MetadataComponentNamespace {get;set;}
    @AuraEnabled public string RefMetadataComponentNamespace {get;set;}
    @AuraEnabled public string MetadataComponentType {get;set;}
    @AuraEnabled public string RefMetadataComponentType {get;set;}

    @AuraEnabled public list<mdtDepWrapper> mdtCompDetails{get;set;}
}


}//end of  class