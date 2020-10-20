/***  Controller: ***/
            
public class exampleCon {
    Integer count = 0;
    Boolean stop = true;
            
    public PageReference incrementCounter() {
        count++;
        return null;
    }
            
    public Integer getcount() {
        return count;
    }
    
    public Boolean getstop() {
        if(count == 5) stop = false;
        return stop;
    }
}