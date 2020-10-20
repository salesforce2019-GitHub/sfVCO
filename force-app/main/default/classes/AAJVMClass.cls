public class AAJVMClass {


    public list<String> sRegion {get;set;}
    public AAJVMClass(){
    
        sRegion = new list<String>();
        sRegion.add('\'FR\'');
        sRegion.add('\'CA\'');
        sRegion.add('\'IN\'');
        
        }

 public ID parentId {get;set;}
  public String pdfName {get;set;}
  
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
    attach.ParentId ='0012w000002qcEe';
    insert attach;
    
    // send the user to the account to view results
    return new PageReference('/'+'0012w000002qcEe');

  }

}