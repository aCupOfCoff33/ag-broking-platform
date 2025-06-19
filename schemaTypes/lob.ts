export default {
  name: 'lob',
  type: 'document',
  fields: [
    {name:'name', type:'string'},                 // "Excess Liability"
    {name:'code', type:'string'},                 // "xsl"
    {name:'regions', type:'array', of:[{type:'string'}], 
      options:{list:['US','Canada'],layout:'tags'}},
    {name:'isSpecialProgramme', type:'boolean'},  // true for "Captives", "PEO", etc.
    {name:'sortOrder', type:'number'}
  ]
}
