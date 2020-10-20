public class aaBulkAPI2 {
    /*
Id jId = aaBulkAPI2.submitJob();
aaBulkAPI2.checkJobStatus(jId);
aaBulkAPI2.getJobResult(jId);
/services/data/v49.0/jobs/ingest/7502w000005HgPs/failedResults
*/
    @AuraEnabled(cacheable=true)
    //public static  map<string,list<refCompDetails>> getDependency(){
    public static Id submitJob(){
        String vType ='ApexClass';
        String baseURL='callout:aaBulkAPINamedCred';  //Named Credential
        
        HttpRequest req = new HttpRequest();
        //req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        String SFdomainUrl=URL.getSalesforceBaseUrl().toExternalForm();
        req.setEndpoint(baseURL+'/query');
        string sbody = '{ "operation": "query","query": "select sic,accountNumber from account"}';
        req.setBody(sbody) ;   
        req.setMethod('POST');
        Http h = new Http();
        HttpResponse response = h.send(req);
        //https://developer.salesforce.com/forums/?id=9060G000000I3dtQAC
        system.debug(response.getBody());
        //system.debug(response.getBody().replace('n', ''));
        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        system.debug(results);
        string jId = String.valueof(results.get('id'));
        return jId;
        //system.debug(results.get('id'));
    }
    public static void checkJobStatus(Id jobId){
        String baseURL='callout:aaBulkAPINamedCred';  //Named Credential
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        req.setHeader('Content-Type', 'application/json');
        String SFdomainUrl=URL.getSalesforceBaseUrl().toExternalForm();
        req.setEndpoint(baseURL+'/query'+'/'+jobId);
        //string sbody = '{ "operation": "query","query": "select id from account"}';
        //req.setBody(sbody) ;   
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse response = h.send(req);
        //https://developer.salesforce.com/forums/?id=9060G000000I3dtQAC
        //system.debug(response.getBody());
        //system.debug(response.getBody().replace('n', ''));
        //
        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        system.debug(results.get('state'));
    }
    
    public static void getJobResult(Id jobId){
        String baseURL='callout:aaBulkAPINamedCred';  //Named Credential
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        req.setHeader('Content-Type', 'application/json');
        
        String SFdomainUrl=URL.getSalesforceBaseUrl().toExternalForm();
        req.setEndpoint(baseURL+'/query'+'/'+jobId+'/results');   
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse response = h.send(req);
        string csv = response.getBody();
        //CHANGE THE HEADER NAME
        //https://www.sfdcpoint.com/salesforce/import-csv-file-using-apex-visualforce/#:~:text=Now%20we%20need%20to%20write,be%20inserted%20on%20account%20records.
        //csv = csv.replaceall('Account_Unique_Number__c','Account_Unique__c');

        list<string> csvFileLines = new list<string>();
        
        list<string> NewCSVFileLines = new list<string>();
        
        csvFileLines = csv.split('\n');
        system.debug('----'+csvFileLines.size());
        for(Integer i=0;i<csvFileLines.size();i++){
            if(i==0){
                list<string> headerData = csvFileLines[i].split(',');
                headerData.add(0,'"Account_Unique__c"');
                //string fld1 = headerData[1].replaceall('sic','Child__c');
                //string fld2 = headerData[2].replaceall('accountNumber','Parent__c');
                //system.debug('-headerData-'+headerData);
                NewCSVFileLines.add(headerData[0].trim()+','+'"Child__c"'+','+'"Parent__c"');
            } else{
                list<string> recData = csvFileLines[i].split(',');
                string a = recData[0].replaceall('"','')+recData[1].replaceall('"','');
                system.debug('-a-'+string.valueof(a));
                recData.add(0,'"'+a+'"');
                NewCSVFileLines.add(recData[0].trim()+','+recData[1].trim()+','+recData[2].trim());
            }
        }
        
       
        String commaSepratedList='';
        for(string str : NewCSVFileLines){
            commaSepratedList += str + +'\n' ;
        }
		//commaSepratedList = commaSepratedList.subString(0,commaSepratedList.length());
         system.debug('-New CSV-'+commaSepratedList);
        
        Id ingJobId = createIngestJob();
     //submitIngestJob(csv,ingJobId);
        submitIngestJob(commaSepratedList,ingJobId);
        runIngestJob(ingJobId);
    }
    
    public static Id createIngestJob(){
        
        String baseURL='callout:aaBulkAPINamedCred';  //Named Credential
        
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        req.setHeader('Content-Type', 'application/json');
        
        //create a job for insert
        req.setEndpoint(baseURL+'/ingest/');
        //https://newstechnologystuff.com/2020/08/31/bulk-api-2-0-using-apex-and-flow/
        string sbody = '{"object" : "a_obj__c","contentType" : "CSV","operation" : "insert"}';
        req.setMethod('POST');
        req.setBody(sbody) ;  
        Http h = new Http();
        HttpResponse response = h.send(req);
        system.debug(response.getBody());
        Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        system.debug(results.get('id'));
        return String.valueof(results.get('id'));
    }
    
    public static void submitIngestJob(string csv,Id jobId){
        
        String baseURL='callout:aaBulkAPINamedCred';  //Named Credential
        
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'text/csv');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        
        //create a job for insert
        req.setEndpoint(baseURL+'/ingest/'+jobId+'/batches/');
        req.setMethod('PUT');
        system.debug('--csv--'+csv);
        req.setBody(csv) ;  
        Http h = new Http();
        HttpResponse response = h.send(req);
        system.debug(response.getBody());
        // Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        //system.debug(results.get('id'));
    }
    
    public static void runIngestJob(Id jobId){
        
        String baseURL='callout:aaBulkAPINamedCred';  //Named Credential
        
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID()); //Get user Session ID
        
        //create a job for insert
        req.setEndpoint(baseURL+'/ingest/'+jobId);
        req.setMethod('PATCH');
        string sbody = '{"state" : "UploadComplete"}';
        req.setBody(sbody) ;  
        Http h = new Http();
        HttpResponse response = h.send(req);
        system.debug(response.getBody());
        // Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        //system.debug(results.get('id'));
    }
    
}