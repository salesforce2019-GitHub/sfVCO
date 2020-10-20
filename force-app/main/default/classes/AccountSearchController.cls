public with sharing class AccountSearchController { 
    // Matching Accounts
    public Transient List<Account> acc {get;set;}  
    
    // Search Text entered by user
    public Transient String searchString {get;set;}  
    public String searchString1;
    
    Transient string a='123'; // this will not be part of view state
    string b ='123456'; // this will be part of view state
   
    //Constructor
    public AccountSearchController(ApexPages.StandardController controller) {  
    } 
    
    // Action method to search for Accounts  
    public void search() {  
        system.debug('======'+searchString);
        String searchWord = searchString + '%';  
        acc= [SELECT AccountNumber,Name,Phone,Industry,Website 
              FROM Account 
              WHERE Name like : searchWord]; 
    }  
    
 //based on transient keyword on variable decide to keep the value or not within the content load BUT NOT RELOAD THE PAGE
   //  searchString1  will always null if you will not use transient
   
     public String getsearchString1() {
         if(searchString1 == null)   // for transient variable this will always null as it is not in view state
             searchString1 = searchString; // initially this will not be part of view state because varabilable is not assigned so far
         return searchString1;
     }
   
    
    
    DateTime t1;
    transient DateTime t2;

    public String getT1() {
        if (t1 == null) t1 = System.now();
        return '' + t1;
    }

    public String getT2() {
        if (t2 == null) t2 = System.now();
        return '' + t2;
    }
 }