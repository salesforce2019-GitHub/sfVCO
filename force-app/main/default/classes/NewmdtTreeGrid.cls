public class NewmdtTreeGrid {
    @AuraEnabled(cacheable=true)
    //public static  map<string,list<refCompDetails>> getDependency(){
     public static list<depDetailsObj> getDependency(){
        String vType ='ApexClass';
        String baseURL='callout:class_analysis_named_cred?q=';  //Named Credential
        
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        req.setHeader('Content-Type', 'application/json');
        String SFdomainUrl=URL.getSalesforceBaseUrl().toExternalForm();
     	//string query='Select+MetadataComponentId,MetadataComponentName,MetadataComponentType,RefMetadataComponentName,RefMetadataComponentId,RefMetadataComponentType+from+MetadataComponentDependency+where+MetadataComponentType=\''+vType+'\'';
     string query='Select+MetadataComponentId,MetadataComponentName,MetadataComponentType,RefMetadataComponentName,RefMetadataComponentId,RefMetadataComponentType+from+MetadataComponentDependency';
        //req.setEndpoint(SFdomainUrl+'/services/data/v49.0/tooling/query/?q='+query);
     req.setEndpoint(baseURL+query);
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse response = h.send(req);
		metadataJSON2Apex meatadatalst = (metadataJSON2Apex) JSON.deserialize(response.getBody(), metadataJSON2Apex.class);

        map<string,compDetails> compDetailsMap = new map<string,compDetails>();
        list<ApexClass> apexlst = [SELECT id,Name,ApiVersion,CreatedDate,LastModifiedDate,LengthWithoutComments,Status from ApexClass];

		// Keep metadataJSON2Apex in map with key as refmetadata respective details. This will used to get more details like Type of component
		// How to get metadata component details in map as its not their in depedency api  
		
         map<string,string> mdt = new map<string,string>();
         map<string,string> mdtRef = new map<string,string>();
      
        //Set details of component in inner-class
        for(ApexClass each : apexlst){         
            compDetails detailInst = new compDetails();         
            detailInst.Name = each.Name;
            detailInst.cmpName = each.Name;
            detailInst.charCount = string.valueof(each.LengthWithoutComments);
            detailInst.apiVer = string.valueof(each.ApiVersion);
            detailInst.status = each.status;
            detailInst.crDate = string.valueof(each.CreatedDate);
            detailInst.modDate = string.valueof(each.LastModifiedDate); 
            compDetailsMap.put(each.Name,detailInst);
        }

      	//parse depedency api response
         map<string,list<string>> apiResMap = new map<string,list<string>>();
         for(metadataJSON2Apex.records each : meatadatalst.records){
             
             mdt.put(each.MetadataComponentName,each.MetadataComponentType);
             mdtRef.put(each.RefMetadataComponentName,each.RefMetadataComponentType);
             
             if(apiResMap.containsKey(each.MetadataComponentName)){
                 list<string> y = apiResMap.get(each.MetadataComponentName);
                 y.add(each.RefMetadataComponentName);
                 apiResMap.put(each.MetadataComponentName,y);
             }else{
                 list<string> x = new list<string>();
                 x.add(each.RefMetadataComponentName);
                 apiResMap.put(each.MetadataComponentName,x);
             }  
         } 
		// Update map with apex details
		
         map<compDetails,list<compDetails>> apiResDetailsMap = new map<compDetails,list<compDetails>>();
         for (String key : apiResMap.keySet()){
            compDetails parentDetails = new compDetails();
			// some of the standard class doesn't exists while making query on ApexClass
             if(compDetailsMap.get(key) == null){
                 parentDetails.Name = key;
                 parentDetails.cmpName =  key;
                 parentDetails.Type =  mdt.get(key);
                 parentDetails.apiVer = '--';
                 parentDetails.charCount = '--';
                 parentDetails.status = '--';
                 parentDetails.crDate = '--';
                 parentDetails.modDate = '--';
             } else {
                 parentDetails = compDetailsMap.get(key);
                 parentDetails.Type =  mdt.get(key); 
             }
            list<compDetails> childDetailsList = new list<compDetails>();
             for(string inneach : apiResMap.get(key)){
                 compDetails childDetails = new compDetails();
                 if(compDetailsMap.get(inneach) == null){
                     childDetails.Name = inneach;
                     childDetails.cmpName =  inneach;
                     childDetails.Type =  mdtRef.get(inneach);
                     childDetails.apiVer = '--';
                     childDetails.charCount = '--';
                     childDetails.status = '--';
                     childDetails.crDate = '--';
                     childDetails.modDate = '--';
                 } else {
                    childDetails = compDetailsMap.get(inneach);
                    childDetails.Type =  mdtRef.get(inneach);
                 }
                 childDetailsList.add(childDetails);
             }
			 apiResDetailsMap.put(parentDetails,childDetailsList);            
         }
         //Prepare final list to return
         list<depDetailsObj> depDetailsObjList = new list<depDetailsObj>();
         for (compDetails each : apiResDetailsMap.keySet()){

			 depDetailsObj finalIns = new depDetailsObj();
             finalIns.Name = each.cmpName;
             finalIns.cmpName = each.cmpName;
             finalIns.Type = each.Type;
             finalIns.apiVer = each.apiVer;
             finalIns.charCount = each.charCount;
             finalIns.status = each.status;
             finalIns.crDate = each.crDate;
             finalIns.modDate = each.modDate;
             finalIns.under_children = apiResDetailsMap.get(each);
             depDetailsObjList.add(finalIns);
   
         }
         //system.debug('-----'+depDetailsObjList);
         return depDetailsObjList;
     }
         
    	//Final object to return to comp
         public class depDetailsObj { 
             @AuraEnabled public String Name {get;set;}
             @AuraEnabled public String cmpName {get;set;}
             @AuraEnabled public String apiVer {get;set;}
             @AuraEnabled public String charCount {get;set;}
             @AuraEnabled public String status {get;set;}
             @AuraEnabled public String Type {get;set;}
             @AuraEnabled public String crDate {get;set;}
             @AuraEnabled public String modDate {get;set;} 
             @AuraEnabled public List<compDetails> under_children  {get;set;} 
         }       
 
         //Class to get details of component
         public class compDetails{
             @AuraEnabled public String Name {get;set;}
             @AuraEnabled public String cmpName {get;set;}
             @AuraEnabled public String apiVer {get;set;}
             @AuraEnabled public String charCount {get;set;}
             @AuraEnabled public String status {get;set;}  
             @AuraEnabled public String Type {get;set;}
             @AuraEnabled public String crDate {get;set;}
             @AuraEnabled public String modDate {get;set;} 
         } 

}