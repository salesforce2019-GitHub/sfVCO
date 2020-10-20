public with sharing class AAmyController {

    private final Account account;
    public string aVar {get;set;}
  

      public AAmyController() {

            account = [select id, name, NumberOfEmployees, Industry from Account 
                       where id = :ApexPages.currentPage().getParameters().get('id')];
                       
         aVar = 'test ashish';
      }
      

      public Account getAccount() {
          
            system.debug('----getter account---'+account);
            return account;
      }
      


      public PageReference save() {
            aVar='345678';
             system.debug('---Save---');
            update account;
            return null;
      }

      public PageReference cancel() {
            return null;
      }
}