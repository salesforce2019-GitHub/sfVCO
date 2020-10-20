({
    fetchData: function (cmp, event,helper) {
		
        var action = cmp.get("c.getDependency");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            //alert(state);
            if (state === "SUCCESS") {
                //alert(response);
                cmp.set("v.data", JSON.stringify(response.getReturnValue()));
                //cmp.set("v.data", response.getReturnValue());
                //cmp.set("v.dataTree", response.getReturnValue());

                var tempString = JSON.stringify(response.getReturnValue());
                var newString = tempString.replaceAll("under_children", "_children");
          		var obj = JSON.parse(newString);
                
                //cmp.set('v.gridData', response.getReturnValue());
                cmp.set('v.gridData', obj);
                cmp.set('v.UnfilteredData', obj);
                
                
                //console.log('response '+ JSON.stringify(obj));
                //alert(JSON.stringify(response.getReturnValue()));
            }
        });
        $A.enqueueAction(action);
    },
    
    FilterRecords: function(cmp) { 
        //data showing in table
        //https://sfdclesson.com/2019/02/09/super-fast-records-searching-in-the-lightning-component/  
        var data = cmp.get("v.gridData");  
        // all data featched from apex when component loaded 
        var allData = cmp.get("v.UnfilteredData"); 
        //Search tems  
        var searchKey = cmp.get("v.filter"); 
        // check is data is not undefined and its lenght is greater than 0 
        if(data!=undefined || data.length>0){ 
        // filter method create a new array tha pass the test (provided as function) 
        var filtereddata = allData.filter(word => (!searchKey) || word.Name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || word.apiVer.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || word.Type.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || word.crDate.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || word.modDate.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || word.status.toLowerCase().indexOf(searchKey.toLowerCase()) > -1);  
  		//alert(filtereddata.length);
            cmp.set("v.filterCount",filtereddata.length);
            console.log('** '+filtereddata);  
        }  
        
        // set new filtered array value to data showing in the table. 
        cmp.set("v.gridData", filtereddata);
        // check if searchKey is blank  
        if(searchKey==''){  
            // set unfiltered data to data in the table.
            cmp.set("v.gridData",cmp.get("v.UnfilteredData"));  
        } 
    } 
});