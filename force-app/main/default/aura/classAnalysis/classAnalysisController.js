({
    init: function (cmp, event, helper) {
        cmp.set('v.columns', [
            {label: 'Parent Name', fieldName:"cmpParentName", type: 'text'}
        ]);
        cmp.set('v.Childcolumns', [
            {label: 'Parent Name', fieldName:"cmpName", type: 'text'}
        ]);

        helper.fetchData(cmp, event, helper);
        
        /*******************************/
        var items = [{
            label: 'Item 1',
            items: [
                {
                    label: 'Item 1.1',
                    items: [{
                        label: 'Item 1.1.1',
                        items: []
                    }]
                }]
        }];

        cmp.set('v.items', items);
        /******************************/
        
        /*************TreeGrid****************/ 
        
		var columns = [
            {
                type: 'text',
                fieldName: 'cmpName',
                label: 'Class Name',
                initialWidth: 300
            },
            {
                type: 'text',
                fieldName: 'Type',
                label: 'Type',
                initialWidth: 300
            },
            {
                type: 'date',
                fieldName: 'crDate',
                label: 'Created Date'
            },
            {
                type: 'date',
                fieldName: 'modDate',
                label: 'Modified Date'
            },
            {
                type: 'Decimal',
                fieldName: 'apiVer',
                label: 'API Version'
            },
            {
                type: 'text',
                fieldName: 'charCount',
                label: 'Char Count'
            },
            {
                type: 'text',
                fieldName: 'status',
                label: 'Status'
            }        
        ];
        
        cmp.set('v.gridColumns', columns);
        
        //var expandedRows = [""];
        var expandedRows = [];
        cmp.set('v.gridExpandedRows', expandedRows);
        /*****************************/
  
    },
    
	doFilter: function(cmp, event, helper) {  	     
    	//calling helper 	     
    	helper.FilterRecords(cmp);  	   
    },
    expandAllRows: function(cmp, event) {
        var tree = cmp.find('mytree');
        tree.expandAll();
    },
    collapseAllRows: function(cmp, event) {
        var tree = cmp.find('mytree');
        tree.collapseAll();
    }
});