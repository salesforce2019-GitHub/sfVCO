({
    handleSelect : function (component, event, helper) {
        
     var stepName = event.getParam("detail").value;
       
    /* component.set('v.SelectedstepName',stepName);  */
     helper.fetchAccHelper(component, event, helper);
        component.set("v.openModal", true);
        
    /*
     alert( component.get('v.SelectedstepName'));
     var toastEvent = $A.get("e.force:showToast");
     toastEvent.setParams({
       "title": "Success!",
        "message": "Toast from " + stepName
        });
        toastEvent.fire();*/
    },
    handleOpenModal: function(component, event, helper) {
        //For Display Modal, Set the "openModal" attribute to "true"
        component.set("v.openModal", true);
    },
     
    handleCloseModal: function(component, event, helper) {
        //For Close Modal, Set the "openModal" attribute to "fasle"  
        component.set("v.openModal", false);
    }
})