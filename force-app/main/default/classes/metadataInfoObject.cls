public class metadataInfoObject {
	
    @AuraEnabled public String cmpParentName {get;set;}
	@AuraEnabled public List<Records> cmpChildDetails {get;set;} 

	public class Records {
		@AuraEnabled public String details {get;set;} 
	}

}