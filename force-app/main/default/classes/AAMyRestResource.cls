@RestResource(urlMapping='/Account/*')
global with sharing class AAMyRestResource {

    @HttpDelete
    global static void doDelete() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account account = [SELECT Id FROM Account WHERE Id = :accountId];
        delete account;
    }
 
  @HttpGet
    global static string doGet() {
      /*
       RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        Account result = [SELECT Id, Name, Phone, Website FROM Account WHERE Id = :accountId];
        return result;*/
        
        return getToken();
    }

  @HttpPost
    global static String doPost(String name,
        String phone, String website) {
        Account account = new Account();
        account.Name = name;
        account.phone = phone;
        account.website = website;
        insert account;
        return account.Id;
    }
  
    
    
public static string getToken(){
    
        String body = 'username=prep2020@salesforce.com&password=ashish$2nn5CuJFALx8Kg2f8YeGYmgDL&client_id=3MVG9n_HvETGhr3Bmx3du03ox3tBgxnLW0luKsda8ImO.fFATbm7YjSM7YI37OpztnmjkS1Zc39oXQ_xs_5Cd&client_secret=7C5728F262E278FB6E7F78A672BB2C261F9B794A616DCF76FCEDCDC5EBF6736D&grant_type=password';

        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://login.salesforce.com/services/oauth2/token');
        req.setMethod('POST');
     
        req.setHeader('Content-Type', 'application/x-www-form-urlencoded');
        req.setCompressed(true);
        req.setbody(body);
        Http http = new Http();
        HTTPResponse response = http.send(req);
        system.debug('-----'+response);
        return string.valueof(response);
        /*

wrapperForHttp wObj = (wrapperForHttp)Json.deserialize(body,wrapperForHttp.class);
string accessToken = wObj.access_token;
system.debug('***** accessToken -- '+ accessToken);*/
        
        }

    

    global static String getFile() {
    
        
        String sessionId = UserInfo.getSessionId();
         
        HttpRequest req = new HttpRequest();
        
         req.setEndpoint('https://prep2020-dev-ed.my.salesforce.com/services/apexrest/Account/');
         req.setMethod('GET');
     
     
     String authorizationHeader = 'Bearer ' +sessionId;
     req.setHeader('Authorization', authorizationHeader);
     req.setHeader('Content-Type','application/json');
   
     // Create a new http object to send the request object
     // A response object is generated as a result of the request  
     
    //  list< Document> lstDoc = [select body from document where id='0152w000000MCLjAAO' LIMIT 1];
  
     Http http = new Http();
     HTTPResponse res = http.send(req);
     System.debug(res.getBody());
         
       return res.getBody();

        //return string.valueof(lstDoc[0].body);
    }
    
    
}