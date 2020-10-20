global class demoAJAXCls
{
    public String accountName { get; set; }
    public account act {get;set;}
    //public static list<Account> account { get; set; }
    public demoAJAXCls() {
        act = [select name from account LIMIT 1];
     }
   
    @RemoteAction
    global static list<Account> getAccount()
    {
        list<account> account = [select id, name, phone, type, numberofemployees from Account LIMIT 5 ];
        return account;
    }
    

}