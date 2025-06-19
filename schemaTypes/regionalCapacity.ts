export default {
    name: 'regionalCapacity',
    type: 'object',
    fields: [
      { name: 'region', type:'string', options:{list:['US','NY','FL','CA','TX','CAN','BERMUDA','OTHER']} },
      { name: 'minAttachment', type:'number' },      // e.g. 5 000 000
      { name: 'maxAttachment', type:'number' },      // leave blank if none
      { name: 'capacity', type:'number' },           // 25 000 000
      { name: 'notes', type:'text' }                 // "Lead only if UL lines support…"
    ]
  }
  