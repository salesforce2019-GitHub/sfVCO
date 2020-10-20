public class AccountProcessor {

     @future
     public static void processAccounts(Set<String> names) {
          // list to store the accounts to update
          List<Account> accountsToUpdate = new List<Account>();
        // iterate through the list of accounts to process
          for (Account a : [Select Id, Name From Account where name IN :names]) {
               // ... do your account processing
               // add the account to the list to update
               accountsToUpdate.add(a);
          }
          ProcessorControl.inFutureContext = true;
          // update the accounts
          update accountsToUpdate;
     }

}