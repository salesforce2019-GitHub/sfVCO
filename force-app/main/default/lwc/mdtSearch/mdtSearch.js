import { LightningElement, track, wire } from 'lwc';
import mdtFetch from '@salesforce/apex/mdtSearchUtil.mdtFetch';

export default class mdtTreeGrid extends LightningElement {

@track gridColumns = [
{
    type: 'text',
    fieldName: 'RefMetadataComponentName',
    label: 'Ref Component Name'
},
{
    type: 'text',
    fieldName: 'MetadataComponentId',
    label: 'Component Id'
},
{
    type: 'text',
    fieldName: 'MetadataComponentType',
    label: 'Component Type'
},
{
    type: 'text',
    fieldName: 'MetadataComponentName',
    label: 'Dependent Component Name'
},
{
    type: 'text',
    fieldName: 'MetadataComponentNamespace',
    label: 'Component Namespace'
}
/*
,
{
    type: 'text',
    fieldName: 'RefMetadataComponentId',
    label: 'RefMetadataComponentId'
},
{
    type: 'text',
    fieldName: 'RefMetadataComponentNamespace',
    label: 'RefMetadataComponentNamespace'
},
{
    type: 'text',
    fieldName: 'RefMetadataComponentType',
    label: 'RefMetadataComponentType'
}*/
];

//gridData = DEP;

@track gridData; 
//@track tempData;  

@wire(mdtFetch)
mdtData({ error, data }) {
    if ( data ) {
        var tempData = JSON.parse( JSON.stringify( data ) );
        //var tempjson = JSON.parse( JSON.stringify( data ).split( 'mdtCompDetails' ).join( '_children' ) );
        //console.log( 'Temp JSON is ' + JSON.stringify(tempjson) );
        
        for ( var i = 0; i < tempData.length; i++ ) {
            var cons = tempData[ i ][ 'mdtCompDetails' ];
            //console.log(cons)
            if ( cons ) {
                tempData[ i ]._children = cons;
                delete tempData[ i ].mdtCompDetails;
            }
        }
        this.gridData = tempData;
    }
}

clickToExpandAll(e) {
    const grid =  this.template.querySelector('lightning-tree-grid');
    grid.expandAll();
}

clickToCollapseAll(e) {
    const grid =  this.template.querySelector('lightning-tree-grid');
    grid.collapseAll();
}

}