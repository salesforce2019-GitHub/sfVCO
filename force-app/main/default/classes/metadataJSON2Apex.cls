public  class metadataJSON2Apex {
	/*
	public Integer size {get;set;} 
	public Integer totalSize {get;set;} 
	public Boolean done {get;set;} 
	public Object queryLocator {get;set;} 
	public String entityTypeName {get;set;} */
	public List<Records> records {get;set;} 

	public class Records {
		//public String attributes {get;set;} 
		public String MetadataComponentId {get;set;} 
		public String MetadataComponentName {get;set;}
        public String MetadataComponentType {get;set;}
        public String RefMetadataComponentId {get;set;} 
		public String RefMetadataComponentName {get;set;} 
		public String RefMetadataComponentType {get;set;} 
	}
}