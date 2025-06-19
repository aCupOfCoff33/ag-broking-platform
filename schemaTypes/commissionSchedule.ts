export default {
    name:'commissionSchedule',
    type:'document',
    fields:[
      {name:'market', type:'reference', to:[{type:'market'}]},
      {name:'lob',    type:'reference', to:[{type:'lob'}]},
      {name:'channel',type:'string', options:{list:['direct','wholesale','london']}},
      {name:'commissionPct', type:'number'}, // e.g. 0.15
      {name:'comments', type:'text'},
      {name:'effective', type:'date'}
    ]
  }
  