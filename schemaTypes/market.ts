import { Rule as RuleType } from 'sanity';

export default {
  name:'market',
  type:'document',
  fields:[
    {name:'name', type:'string', validation:(Rule: RuleType) => Rule.required()},
    {name:'status', type:'string', options:{list:['active','inactive']}},
    {name:'regions', type:'array', of:[{type:'string'}],
      options:{list:['US','Canada'],layout:'tags'}},

    /* ───────── embedded offerings ───────── */
    {name:'offerings', type:'array', of:[{type:'offering'}]},

    /* house-keeping */
    {name:'logo', type:'image'},
    {name:'website', type:'url'},
    {name:'commentary', type:'text'}
  ]
}
