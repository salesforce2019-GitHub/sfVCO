public class canvas_page_ctlr {

    public String rawOutputToScreen {get; set;}

    public canvas_page_ctlr(){
        //seriously, store this somewhere other than code (e.g. Private Custom Setting)
        String CLIENT_SECRET = 'F38498D1595C564BE718EE357D4C1013C21193D49FE2DBC43D7DF04341957FF8'; 

        String signedRequest = ApexPages.currentPage().getParameters().get('signed_request');
        if(String.isNotBlank(signedRequest)){
            system.debug('signed_request: ' + signedRequest);
            List<String> signedRequestPieces = signedRequest.split('\\.'); //signed request pieces separated by a period (must escape the period in split regex)
            String contextSignedWithClientSecretByCanvasApp = signedRequestPieces[0]; //signed
            String contextEncoded  = signedRequestPieces[1]; //just encoded

            //Re-sign the encoded context with our pre-shared Canvas Connected App client secret...
            String contextReSignedWithClientSecretByThisController = 
                EncodingUtil.base64Encode(Crypto.generateMac('hmacSHA256', Blob.valueOf(contextEncoded), Blob.valueOf(CLIENT_SECRET)));

            //The signatures should match...
            if(contextSignedWithClientSecretByCanvasApp==contextReSignedWithClientSecretByThisController){
                //context valid and untampered...
                rawOutputToScreen = EncodingUtil.base64Decode(contextEncoded).toString();
            } else {
                //signature mismatch. don't trust context...
                rawOutputToScreen = 'Sorry Charlie! Not today.';
            }
        } else {
            //we didn't get a signed_request parameter in the POST body... show us what we got for demo purposes only...
            rawOutputToScreen = 'Error: ' + ApexPages.currentPage().getParameters();
        }
    }
}