public class mdtTreeGridCls {
    
    @AuraEnabled(cacheable=true)
    //public static  map<string,list<refCompDetails>> getDependency(){
     public static list<metadataInfoObject> getDependency(){
        String cmpType ='ApexClass';
        String baseURL='callout:class_analysis_named_cred?q=';  //Named Credential
        
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        req.setHeader('Content-Type', 'application/json');
        String SFdomainUrl=URL.getSalesforceBaseUrl().toExternalForm();
        string query='Select+MetadataComponentId,MetadataComponentName,RefMetadataComponentName,RefMetadataComponentId,RefMetadataComponentType+from+MetadataComponentDependency+where+RefMetadataComponentType=\''+cmpType+'\'';
        //req.setEndpoint(SFdomainUrl+'/services/data/v49.0/tooling/query/?q='+query);
        req.setEndpoint(baseURL+query);
        system.debug('---URL---'+baseURL+query);
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse response = h.send(req);
        system.debug(response.getBody());
		metadataJSON2Apex meatadatalst = (metadataJSON2Apex) JSON.deserialize(response.getBody(), metadataJSON2Apex.class);
    	//system.debug('-----'+meatadatalst.records.size());

        map<string,list<refCompDetails>> mdtMap = new map<string,list<refCompDetails>>();
        set<string> cmpSet = new set<string>();
        map<string,refCompDetails> refdetailsMap = new map<string,refCompDetails>();
        list<metadataInfoObject> finalList = new list<metadataInfoObject>();
        
        list<ApexClass> apexlst = [SELECT id,Name,ApiVersion,CreatedDate,LastModifiedDate,LengthWithoutComments,Status from ApexClass];
       
        //Set details of component in inner-class
        for(ApexClass each : apexlst){
            
            refCompDetails detailInst = new refCompDetails();
            
            detailInst.Name = each.Name;
            detailInst.cmpName = each.Name;
            //detailInst.createDate = each.CreatedDate;
            //detailInst.modDate = each.LastModifiedDate;
            detailInst.charCount = each.LengthWithoutComments;
            detailInst.apiVer = each.ApiVersion;
            detailInst.status = each.status;
            
            
            refdetailsMap.put(each.Name,detailInst);
        }
        
        // Identity unique parent
        for(metadataJSON2Apex.records each : meatadatalst.records){
            cmpSet.add(each.MetadataComponentName);
        }
  		
        // Identity child based on parent key
        // Extend this to get all the component irrespective of apex class and check in map for details.If details 
        // not found it means it is not a class and show that as NA for non relevant ddetails
        for (string eachSet : cmpSet){
            list<refCompDetails> refLst = new list<refCompDetails>();
            metadataInfoObject finalDetails = new metadataInfoObject();
            
            for(metadataJSON2Apex.records each : meatadatalst.records){
                if(each.MetadataComponentName == eachSet){
                    refCompDetails clsDetails = refdetailsMap.get(each.RefMetadataComponentName);
                    refLst.add(clsDetails);
                }
                finalDetails.Name = eachSet;
                finalDetails.cmpName = eachSet;
                //finalDetails.createDate = ;
                //finalDetails.modDate = ;
                finalDetails.charCount = 1;
                finalDetails.apiVer = 0.0;
                finalDetails.status = '-';
                
               finalDetails.under_children   =  refLst;
               
            }
            finalList.add(finalDetails); 
            //mdtMap.put(eachSet,refLst);
        }
        system.debug('--finalList--'+finalList);
        //return mdtMap;
        return finalList;
        
    }
    //Class to get details of component
    public class refCompDetails{
        @AuraEnabled public String Name {get;set;}
        @AuraEnabled public String cmpName {get;set;}
        //@AuraEnabled public datetime createDate {get;set;}
		//@AuraEnabled public datetime modDate {get;set;}
		@AuraEnabled public Decimal apiVer {get;set;}
		@AuraEnabled public Integer charCount {get;set;}
		@AuraEnabled public String status {get;set;}        
    }
    
   public class metadataInfoObject { 
        @AuraEnabled public String Name {get;set;}
        @AuraEnabled public String cmpName {get;set;}
        //@AuraEnabled public datetime createDate {get;set;}
		//@AuraEnabled public datetime modDate {get;set;}
		@AuraEnabled public Decimal apiVer {get;set;}
		@AuraEnabled public Integer charCount {get;set;}
		@AuraEnabled public String status {get;set;} 
		@AuraEnabled public List<refCompDetails> under_children  {get;set;} 
	}
}