({
    getAccountlst : function(component, event, helper) {
        
        var action = component.get("c.getAccountlist");
        
        action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                component.set("v.accountlist", a.getReturnValue());
            } else if (a.getState() === "ERROR") {
                $A.log("Errors", a.getError());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    getAccountCount : function(component, event, helper) {
           alert('--1-');    
       var action = component.get("c.AccountCnt");
         //var action = component.get("c.getAccountlist");
        alert('--2-');
   
        action.setCallback(this, function(a) {

            if (a.getState() === "SUCCESS") {
                alert(a.getReturnValue());
                component.set("v.accountCount", a.getReturnValue());
                alert("You clicked: " + event.getSource().get("v.label"));
            } else if (a.getState() === "ERROR") {
                $A.log("Errors", a.getError());
            }
        });
        
        $A.enqueueAction(action); 
    }
})