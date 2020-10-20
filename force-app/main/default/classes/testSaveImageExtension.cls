public with sharing class testSaveImageExtension {

    public String strImageBlob {get;set;}
    public Product2 currentRecord {get;set;}
    public String redirectUrl {get;set;}

    public testSaveImageExtension(ApexPages.StandardController controller) {

        currentRecord = [
            SELECT id,name,Product_Image__c
            FROM Product2 
            WHERE id = :ApexPages.CurrentPage().getparameters().get('ID')];
        redirectUrl = '/'+currentRecord.Id;

    }

     public PageReference copyImage() {

        currentRecord.Product_Image__c = '<img src="'+ strImageBlob + '" >';
        update currentRecord;

     return null;
     }
}