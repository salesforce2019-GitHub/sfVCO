/**
 * Default settings values
 */
export const KEYFIELD = 'name';

/**
 * Columns definition
 * :: valid basic version
 */
export const COLUMNS_DEFINITION_BASIC = [
    {
        type: 'text',
        fieldName: 'accountName',
        label: 'Account Name',
    },
    {
        type: 'phone',
        fieldName: 'phone',
        label: 'Phone Number',
    },
];

/**
 * Columns definition
 * :: with non-whitelisted column keys
 */
export const COLUMNS_DEFINITION_NONWHITELIST = [
    {
        type: 'text',
        fieldName: 'accountName',
        label: 'Account Name',
    },
    {
        type: 'phone',
        fieldName: 'phone',
        label: 'Phone Number',
        sortable: true,
    },
];

/**
 * Columns definition
 * :: used in examples
 */
export const EXAMPLES_COLUMNS_DEFINITION_BASIC = [
    {
        type: 'text',
        fieldName: 'accountName',
        label: 'Account Name',
        initialWidth: 300,
    },
    {
        type: 'number',
        fieldName: 'employees',
        label: 'Employees',
    },
    {
        type: 'phone',
        fieldName: 'phone',
        label: 'Phone Number',
    },
    {
        type: 'url',
        fieldName: 'accountOwner',
        label: 'Account Owner',
        typeAttributes: {
            label: { fieldName: 'accountOwnerName' },
        },
    },
    {
        type: 'text',
        fieldName: 'billingCity',
        label: 'Billing City',
    },
];

/**
 * Sample expanded rows
 * :: valid basic version, no invalid row IDs
 */
export const EXPANDED_ROWS_BASIC = ['584996-s7', '377526-zg'];

/**
 * Sample expanded rows including some without children content
 * :: valid basic version, no invalid row IDs
 */
export const EXPANDED_ROWS_MISSING_CHILDREN_CONTENT = [
    '584996-s7',
    '377526-zg',
    '816682-xr',
];

/**
 * Sample expanded rows
 * :: with invalid row IDs
 */
export const EXPANDED_ROWS_INVALID = [
    '584996-s7',
    '377526-zg',
    'AWEFUL-bad_iD',
    '882894-s3',
    'PiCkLeS',
    '31337-ID',
];

/**
 * Sample selected rows
 * :: valid basic version, no invalid row IDs
 */
export const SELECTED_ROWS_BASIC = ['125313-7j', '584996-s7'];

/**
 * Sample selected rows
 * :: with invalid row IDs
 */
export const SELECTED_ROWS_INVALID = [
    '584996-s7',
    '377526-zg',
    'AWEFUL-bad_iD',
    '882894-s3',
    'PiCkLeS',
    '31337-ID',
];



export const DEP = 
[
    {
    "Id":"10001",
    "_children":[
    {
    "Id":"a0S2w00000EcyMyEAJ",
    "MetadataComponentId":"01p2P0000008Z2yQAE",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyMzEAJ",
    "MetadataComponentId":"01p2P0000008Z2zQAE",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN0EAJ",
    "MetadataComponentId":"01p2P0000008h8kQAA",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN1EAJ",
    "MetadataComponentId":"01p2P0000008h9EQAQ",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN2EAJ",
    "MetadataComponentId":"01p2P0000008h9GQAQ",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN3EAJ",
    "MetadataComponentId":"01p2P0000008h9MQAQ",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN4EAJ",
    "MetadataComponentId":"01p5P000000d3QEQAY",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN5EAJ",
    "MetadataComponentId":"01p5P000000d3QsQAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN6EAJ",
    "MetadataComponentId":"01p5P000000d3QwQAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN7EAJ",
    "MetadataComponentId":"01p5P000000d3R0QAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNDEAZ",
    "MetadataComponentId":"01p5P000000d3ReQAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNEEAZ",
    "MetadataComponentId":"01p5P000000d3RpQAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNFEAZ",
    "MetadataComponentId":"01p5P000000d3RxQAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNGEAZ",
    "MetadataComponentId":"01p5P000000d3S0QAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN8EAJ",
    "MetadataComponentId":"01p5P000000d3R3QAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyN9EAJ",
    "MetadataComponentId":"01p5P000000d3R7QAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNAEAZ",
    "MetadataComponentId":"01p5P000000d3RPQAY",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNBEAZ",
    "MetadataComponentId":"01p5P000000d3RWQAY",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNCEAZ",
    "MetadataComponentId":"01p5P000000d3RcQAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNHEAZ",
    "MetadataComponentId":"01p5P000000d3S5QAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNIEAZ",
    "MetadataComponentId":"01p5P000000d3S8QAI",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNJEAZ",
    "MetadataComponentId":"01p5P000000d3SAQAY",
    "MetadataComponentName":"AccountDomain",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z1yQAE",
    "RefMetadataComponentType":"ApexClass"
    }
    ],
    "MetadataComponentId":"",
    "MetadataComponentName":"",
    "MetadataComponentNamespace":"",
    "MetadataComponentType":"",
    "RefMetadataComponentId":"",
    "RefMetadataComponentName":"AccountDomain",
    "RefMetadataComponentNamespace":"",
    "RefMetadataComponentType":""
    },
    {
    "Id":"10002",
    "_children":[
    {
    "Id":"a0S2w00000EcyNXEAZ",
    "MetadataComponentId":"01p5P000000d3SRQAY",
    "MetadataComponentName":"AccountService",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p5P000000d3QEQAY",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNYEAZ",
    "MetadataComponentId":"01p5P000000dbcLQAQ",
    "MetadataComponentName":"AccountService",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p5P000000d3QEQAY",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNZEAZ",
    "MetadataComponentId":"01p5P000000dpjVQAQ",
    "MetadataComponentName":"AccountService",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p5P000000d3QEQAY",
    "RefMetadataComponentType":"ApexClass"
    }
    ],
    "MetadataComponentId":"",
    "MetadataComponentName":"",
    "MetadataComponentNamespace":"",
    "MetadataComponentType":"",
    "RefMetadataComponentId":"",
    "RefMetadataComponentName":"AccountService",
    "RefMetadataComponentNamespace":"",
    "RefMetadataComponentType":""
    },
    {
    "Id":"10003",
    "_children":[
    {
    "Id":"a0S2w00000EcyNaEAJ",
    "MetadataComponentId":"01p2P0000008Z1zQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNbEAJ",
    "MetadataComponentId":"01p2P0000008Z22QAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNgEAJ",
    "MetadataComponentId":"01p2P0000008Z2PQAU",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNhEAJ",
    "MetadataComponentId":"01p2P0000008Z2XQAU",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNiEAJ",
    "MetadataComponentId":"01p2P0000008Z2bQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNjEAJ",
    "MetadataComponentId":"01p2P0000008Z2dQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNkEAJ",
    "MetadataComponentId":"01p2P0000008Z2fQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNlEAJ",
    "MetadataComponentId":"01p2P0000008Z2iQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNcEAJ",
    "MetadataComponentId":"01p2P0000008Z24QAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNdEAJ",
    "MetadataComponentId":"01p2P0000008Z26QAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNeEAJ",
    "MetadataComponentId":"01p2P0000008Z2JQAU",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNfEAJ",
    "MetadataComponentId":"01p2P0000008Z2LQAU",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNmEAJ",
    "MetadataComponentId":"01p2P0000008Z2kQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNnEAJ",
    "MetadataComponentId":"01p2P0000008Z2vQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNoEAJ",
    "MetadataComponentId":"01p2P0000008Z2xQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNpEAJ",
    "MetadataComponentId":"01p2P0000008Z2zQAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNqEAJ",
    "MetadataComponentId":"01p2P0000008Z36QAE",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNsEAJ",
    "MetadataComponentId":"01p2P0000008h83QAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNtEAJ",
    "MetadataComponentId":"01p2P0000008h85QAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNuEAJ",
    "MetadataComponentId":"01p2P0000008h8mQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNvEAJ",
    "MetadataComponentId":"01p2P0000008h8pQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNwEAJ",
    "MetadataComponentId":"01p2P0000008h8rQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNxEAJ",
    "MetadataComponentId":"01p2P0000008h8tQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNyEAJ",
    "MetadataComponentId":"01p2P0000008h8vQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNzEAJ",
    "MetadataComponentId":"01p2P0000008h8xQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO0EAJ",
    "MetadataComponentId":"01p2P0000008h8zQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO1EAJ",
    "MetadataComponentId":"01p2P0000008h97QAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO2EAJ",
    "MetadataComponentId":"01p2P0000008h9AQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO3EAJ",
    "MetadataComponentId":"01p2P0000008h9FQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO4EAJ",
    "MetadataComponentId":"01p2P0000008h9HQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyNrEAJ",
    "MetadataComponentId":"01p2P0000008h7sQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO5EAJ",
    "MetadataComponentId":"01p2P0000008h9JQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO6EAJ",
    "MetadataComponentId":"01p2P0000008h9LQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO7EAJ",
    "MetadataComponentId":"01p2P0000008h9NQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO8EAJ",
    "MetadataComponentId":"01p2P0000008h9QQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyO9EAJ",
    "MetadataComponentId":"01p2P0000008h9aQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOAEAZ",
    "MetadataComponentId":"01p2e0000008TFPAA2",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOBEAZ",
    "MetadataComponentId":"01p2e0000008TFSAA2",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOCEAZ",
    "MetadataComponentId":"01p2e0000008TFYAA2",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyODEAZ",
    "MetadataComponentId":"01p5P000000dbcLQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOEEAZ",
    "MetadataComponentId":"01p5P000000dbcMQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOFEAZ",
    "MetadataComponentId":"01p5P000000dbcPQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOGEAZ",
    "MetadataComponentId":"01p5P000000dbcSQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOHEAZ",
    "MetadataComponentId":"01p5P000000dbcUQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOIEAZ",
    "MetadataComponentId":"01p5P000000dbcWQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOJEAZ",
    "MetadataComponentId":"01p5P000000dbcaQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOKEAZ",
    "MetadataComponentId":"01p5P000000dbcbQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOLEAZ",
    "MetadataComponentId":"01p5P000000dbccQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOMEAZ",
    "MetadataComponentId":"01p5P000000dbcdQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyONEAZ",
    "MetadataComponentId":"01p5P000000dbcfQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOOEAZ",
    "MetadataComponentId":"01p5P000000dbcgQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOPEAZ",
    "MetadataComponentId":"01p5P000000dbchQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOQEAZ",
    "MetadataComponentId":"01p5P000000dbcjQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOREAZ",
    "MetadataComponentId":"01p5P000000dbckQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOSEAZ",
    "MetadataComponentId":"01p5P000000dbcmQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOTEAZ",
    "MetadataComponentId":"01p5P000000dbcrQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOmEAJ",
    "MetadataComponentId":"01p5P000000dbdVQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOnEAJ",
    "MetadataComponentId":"01p5P000000dbdWQAQ",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOoEAJ",
    "MetadataComponentId":"01p5P000000dbdbQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOpEAJ",
    "MetadataComponentId":"01p5P000000dbdcQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOqEAJ",
    "MetadataComponentId":"01p5P000000dbdjQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOrEAJ",
    "MetadataComponentId":"01p5P000000dbdkQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOsEAJ",
    "MetadataComponentId":"01p5P000000dbdlQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOtEAJ",
    "MetadataComponentId":"01p5P000000dbdmQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOuEAJ",
    "MetadataComponentId":"01p5P000000dbdoQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOvEAJ",
    "MetadataComponentId":"01p5P000000dbdqQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOwEAJ",
    "MetadataComponentId":"01p5P000000dbdrQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOxEAJ",
    "MetadataComponentId":"01p5P000000dbdsQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOyEAJ",
    "MetadataComponentId":"01p5P000000dbduQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyOzEAJ",
    "MetadataComponentId":"01p5P000000dbdvQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyP0EAJ",
    "MetadataComponentId":"01p5P000000dbdwQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyP1EAJ",
    "MetadataComponentId":"01p5P000000dbdyQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyP2EAJ",
    "MetadataComponentId":"01p5P000000dbe0QAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyPWEAZ",
    "MetadataComponentId":"01p5P000000dsfaQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    },
    {
    "Id":"a0S2w00000EcyPXEAZ",
    "MetadataComponentId":"01p5P000000dsfjQAA",
    "MetadataComponentName":"AccountTestData",
    "MetadataComponentType":"ApexClass",
    "RefMetadataComponentId":"01p2P0000008Z20QAE",
    "RefMetadataComponentType":"ApexClass"
    }
    ],
    "MetadataComponentId":"",
    "MetadataComponentName":"",
    "MetadataComponentNamespace":"",
    "MetadataComponentType":"",
    "RefMetadataComponentId":"",
    "RefMetadataComponentName":"AccountTestData",
    "RefMetadataComponentNamespace":"",
    "RefMetadataComponentType":""
    }
    ];

/**
 * Sample data
 * :: valid basic version, no missing children content
 */
export const DATA_BASIC = [
    {
        name: '125313-7j',
        accountName: 'Dach-Welch',
        phone: '837-555-0100',
    },
    {
        name: '584996-s7',
        accountName: 'Corkery-Windler',
        phone: '837-555-0100',
        _children: [
            {
                name: '747773-jw',
                accountName: 'Corkery-Abshire',
                phone: '837-555-0100',
            },
            {
                name: '377526-zg',
                accountName: 'Robel, Friesen and Flatley',
                phone: '837-555-0100',
                _children: [
                    {
                        name: '955330-wp',
                        accountName: 'Donnelly Group',
                        phone: '837-555-0100',
                    },
                    {
                        name: '343693-9x',
                        accountName: 'Kshlerin Group',
                        phone: '837-555-0100',
                    },
                ],
            },
            {
                name: '638483-y2',
                accountName: 'Bruen, Steuber and Spencer',
                phone: '837-555-0100',
            },
        ],
    },
    {
        name: '306979-mx',
        accountName: 'Spinka LLC',
        phone: '837-555-0100',
    },
    {
        name: '066195-o1',
        accountName: 'Koelpin LLC',
        phone: '837-555-0100',
        _children: [],
    },
];

/**
 * Sample data
 * :: valid basic version, with missing children content
 */
export const DATA_MISSING_CHILDREN_CONTENT = [
    {
        name: '125313-7j',
        accountName: 'Dach-Welch',
        phone: '837-555-0100',
    },
    {
        name: '584996-s7',
        accountName: 'Corkery-Windler',
        phone: '837-555-0100',
        _children: [],
    },
    {
        name: '816682-xr',
        accountName: 'Schmitt-Littel',
        phone: '837-555-0100',
        _children: [
            {
                name: '118985-mf',
                accountName: 'Hegmann-Turcotte',
                phone: '837-555-0100',
            },
            {
                name: '841476-yo',
                accountName: 'Kuhlman LLC',
                phone: '837-555-0100',
            },
        ],
    },
    {
        name: '653331-j4',
        accountName: 'Swaniawski-Hilpert',
        phone: '366-145-6134',
        _children: [
            {
                name: '605249-ei',
                accountName: 'Swaniawski, Veum and Barton',
                phone: '837-555-0100',
            },
            {
                name: '686777-5d',
                accountName: 'Lubowitz, McClure and Russel',
                phone: '837-555-0100',
            },
            {
                name: '582166-n4',
                accountName: 'Reichel-Jerde',
                phone: '837-555-0100',
                _children: [
                    {
                        name: '513683-mm',
                        accountName: 'Tromp Inc',
                        phone: '837-555-0100',
                    },
                ],
            },
        ],
    },
    {
        name: '306979-mx',
        accountName: 'Spinka LLC',
        phone: '837-555-0100',
    },
    {
        name: '066195-o1',
        accountName: 'Koelpin LLC',
        phone: '837-555-0100',
        _children: [],
    },
];

/**
 * Sample data
 * :: used by examples
 */
export const EXAMPLES_DATA_BASIC = [
    {
        name: '123555',
        accountName: 'Rewis Inc',
        employees: 3100,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'Jane Doe',
        billingCity: 'Phoeniz, AZ',
    },

    {
        name: '123556',
        accountName: 'Acme Corporation',
        employees: 10000,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'San Francisco, CA',
        _children: [
            {
                name: '123556-A',
                accountName: 'Acme Corporation (Bay Area)',
                employees: 3000,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
                _children: [
                    {
                        name: '123556-A-A',
                        accountName: 'Acme Corporation (Oakland)',
                        employees: 745,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'John Doe',
                        billingCity: 'New York, NY',
                    },
                    {
                        name: '123556-A-B',
                        accountName: 'Acme Corporation (San Francisco)',
                        employees: 578,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'Jane Doe',
                        billingCity: 'Los Angeles, CA',
                    },
                ],
            },

            {
                name: '123556-B',
                accountName: 'Acme Corporation (East)',
                employees: 430,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'San Francisco, CA',
                _children: [
                    {
                        name: '123556-B-A',
                        accountName: 'Acme Corporation (NY)',
                        employees: 1210,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'Jane Doe',
                        billingCity: 'New York, NY',
                    },
                    {
                        name: '123556-B-B',
                        accountName: 'Acme Corporation (VA)',
                        employees: 410,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'John Doe',
                        billingCity: 'New York, NY',
                        _children: [
                            {
                                name: '123556-B-B-A',
                                accountName: 'Allied Technologies',
                                employees: 390,
                                phone: '837-555-0100',
                                accountOwner:
                                    'http://salesforce.com/fake/url/jane-doe',
                                accountOwnerName: 'Jane Doe',
                                billingCity: 'Los Angeles, CA',
                                _children: [
                                    {
                                        name: '123556-B-B-A-A',
                                        accountName: 'Allied Technologies (UV)',
                                        employees: 270,
                                        phone: '837-555-0100',
                                        accountOwner:
                                            'http://salesforce.com/fake/url/jane-doe',
                                        accountOwnerName: 'John Doe',
                                        billingCity: 'San Francisco, CA',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    {
        name: '123557',
        accountName: 'Rhode Enterprises',
        employees: 6000,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'New York, NY',
        _children: [
            {
                name: '123557-A',
                accountName: 'Rhode Enterprises (UCA)',
                employees: 2540,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
            },
        ],
    },

    {
        name: '123558',
        accountName: 'Tech Labs',
        employees: 1856,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'New York, NY',
        _children: [
            {
                name: '123558-A',
                accountName: 'Opportunity Resources Inc',
                employees: 1934,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'Los Angeles, CA',
            },
        ],
    },
];

/**
 * Sample data
 * :: used by lazy loading example
 */
export const EXAMPLES_DATA_LAZY_LOADING = [
    {
        name: '123555',
        accountName: 'Rewis Inc',
        employees: 3100,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'Jane Doe',
        billingCity: 'Phoeniz, AZ',
    },

    {
        name: '123556',
        accountName: 'Acme Corporation',
        employees: 10000,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'San Francisco, CA',
        _children: [
            {
                name: '123556-A',
                accountName: 'Acme Corporation (Bay Area)',
                employees: 3000,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
                _children: [],
            },

            {
                name: '123556-B',
                accountName: 'Acme Corporation (East)',
                employees: 430,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'San Francisco, CA',
                _children: [
                    {
                        name: '123556-B-A',
                        accountName: 'Acme Corporation (NY)',
                        employees: 1210,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'Jane Doe',
                        billingCity: 'New York, NY',
                    },
                    {
                        name: '123556-B-B',
                        accountName: 'Acme Corporation (VA)',
                        employees: 410,
                        phone: '837-555-0100',
                        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                        accountOwnerName: 'John Doe',
                        billingCity: 'New York, NY',
                        _children: [],
                    },
                ],
            },
        ],
    },

    {
        name: '123557',
        accountName: 'Rhode Enterprises',
        employees: 6000,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'New York, NY',
        _children: [
            {
                name: '123557-A',
                accountName: 'Rhode Enterprises (UCA)',
                employees: 2540,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'New York, NY',
            },
        ],
    },

    {
        name: '123558',
        accountName: 'Tech Labs',
        employees: 1856,
        phone: '837-555-0100',
        accountOwner: 'http://salesforce.com/fake/url/jane-doe',
        accountOwnerName: 'John Doe',
        billingCity: 'New York, NY',
        _children: [
            {
                name: '123558-A',
                accountName: 'Opportunity Resources Inc',
                employees: 1934,
                phone: '837-555-0100',
                accountOwner: 'http://salesforce.com/fake/url/jane-doe',
                accountOwnerName: 'John Doe',
                billingCity: 'Los Angeles, CA',
            },
        ],
    },
];