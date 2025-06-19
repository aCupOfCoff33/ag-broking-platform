export default {
  name:'wholesaler',
  type:'document',
  fields:[
    {name:'name', type:'string'},
    {name:'brokerContacts', type:'array', of:[{type:'contact'}]},
    {name:'notes', type:'text'}
  ]
}
