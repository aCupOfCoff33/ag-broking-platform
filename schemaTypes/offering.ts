export default {
    name:'offering',
    type:'object',
    title:'Market Offering',
    fields:[
      {name:'lob', type:'reference', to:[{type:'lob'}]},
      {name:'channel', type:'string',            // direct | wholesale | london
        options:{list:['direct','wholesale','london']}},
      {name:'wholesaleAccess', type:'array', of:[{type:'reference', to:[{type:'wholesaler'}]}]},
  
      /* appetite data */
      {name:'lastUpdated', type:'date'},
      {name:'attachmentPoint', type:'string'},
      {name:'capacity', type:'string'},
      {name:'notes', type:'text'},
      {name:'exclusions', type:'array', of:[{type:'reference', to:[{type:'exclusion'}]}]},
  
      /* contacts specific to THIS offering */
      {name:'regionalContacts', type:'array', of:[{type:'contact'}]},
      {name:'nationalContacts', type:'array', of:[{type:'contact'}]},
  
      /* docs */
      {name:'appetitePDF', type:'file'},
      {name:'documentationRequired', type:'boolean'}
    ]
  }
  