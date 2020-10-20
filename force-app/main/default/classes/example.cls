global class example implements iterable<Account>{   
   global Iterator<Account> Iterator(){
      system.debug('--example.Iterator--');
      return new CustomIterable();
   }
    
}