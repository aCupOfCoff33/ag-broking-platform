import { Rule as RuleType } from 'sanity';

export default {
    name: 'preferredMarketRule',
    title: 'Preferred Market Rule',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Rule Title',
        type: 'string',
      },

      {
        name: 'accessType',
        title: 'Access Type',
        type: 'string',
        options: {
          list: [
            { title: 'Retail (Direct Access)', value: 'retail' },
            { title: 'Wholesale Only', value: 'wholesale' },
            { title: 'Both', value: 'both' }
          ],
          layout: 'radio'
        },
        validation: (Rule: RuleType) => Rule.required()
      },

    
      {
        name: 'market',
        title: 'Preferred Market',
        type: 'reference',
        to: [{ type: 'market' }]
      },
      {
        name: 'conditions',
        title: 'Conditions',
        type: 'object',
        fields: [
          {
            name: 'lob',
            title: 'Line(s) of Business',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: 'region',
            title: 'Region(s)',
            type: 'array',
            of: [{ type: 'string' }]
          },
          {
            name: 'isWrap',
            title: 'Is Wrap Project?',
            type: 'boolean'
          },
          {
            name: 'locationRestrictions',
            title: 'Location Restrictions',
            type: 'object',
            fields: [
              {
                name: 'excludedStates',
                title: 'Excluded States',
                type: 'array',
                of: [{ type: 'string' }]
              },
              {
                name: 'includedStates',
                title: 'Included States',
                type: 'array',
                of: [{ type: 'string' }]
              }
            ]
          },
          {
            name: 'minLimit',
            title: 'Minimum Project Limit ($)',
            type: 'number'
          },
          {
            name: 'minAttachmentPoint',
            title: 'Minimum Attachment Point ($)',
            type: 'number'
          }
        ]
      }
    ]
  }
  