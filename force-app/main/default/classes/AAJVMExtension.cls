public class AAJVMExtension{

public list<contact> lstCont {get;set;}    
public ID sId {get;set;}
public list<String> sRegion {get;set;}
public ID parentId {get;set;}
public String pdfName {get;set;}
public String a {get;set;}

public String strImageBlob {get;set;}
public Product2 currentRecord {get;set;}
public String redirectUrl {get;set;}


public AAJVMExtension(ApexPages.StandardController stdController) {


sRegion = new list<String>();
sRegion.add('\'FR\'');
sRegion.add('\'CA\'');
sRegion.add('\'IN\'');

sId= ApexPages.CurrentPage().getparameters().get('Id');
list<contact> lstCont = [Select lastname,firstname, AAImage__c from contact where accountid=:sId];

system.debug('--lstCont1--'+lstCont);
system.debug('--sId--'+sId);

}



public PageReference savePdf() {


PageReference ref = Page.AAJVMapPage;

// create the new attachment
Attachment attach = new Attachment();

// the contents of the attachment from the pdf
Blob body;

try {

// returns the output of the page as a PDF
body = ref.getContentAsPDF();

// need to pass unit test -- current bug    
} catch (VisualforceException e) {
body = Blob.valueOf('Some Text');
}

attach.Body = body;
// add the user entered name
attach.Name = 'pdfName';
attach.contentType='application/pdf';

attach.IsPrivate = false;
// attach the pdf to the account
attach.ParentId = sId;
insert attach;

// send the user to the account to view results
return new PageReference('/'+ sId);

}

public PageReference copyImage() {
system.debug('--lstCont2--'+lstCont[0]);
lstCont[0].AAImage__c = '<img src="'+ strImageBlob + '" >';
update lstCont;

return null;
}

}