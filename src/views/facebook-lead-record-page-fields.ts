import {
  defineView,
  generateDefaultFieldUniversalIdentifier,
} from 'twenty-sdk/define';

export default defineView({
  universalIdentifier: '2bc9dfdd-8979-430e-97b4-8f9bc66a976f',
  name: 'facebook-lead-record-page-fields',
  objectUniversalIdentifier: '2eb4bc89-eddc-4ea5-8a3a-4fd7d547c244',
  type: 'FIELDS_WIDGET',
  icon: 'IconList',
  position: 0,
  fields: [
  {
    universalIdentifier: 'a4ff998e-216e-415e-a57f-199ef34ebde5',
    fieldMetadataUniversalIdentifier: 'bf1c5246-b098-42ed-b07b-4e6bb9e6ef35',
    position: 0,
    isVisible: true,
    size: 200,
  },
  {
    universalIdentifier: '68b47d45-022f-439c-9e11-804bbb39d55f',
    fieldMetadataUniversalIdentifier: generateDefaultFieldUniversalIdentifier({
      objectUniversalIdentifier: '2eb4bc89-eddc-4ea5-8a3a-4fd7d547c244',
      fieldName: 'createdAt',
    }),
    position: 1,
    isVisible: true,
    size: 200,
  },
  {
    universalIdentifier: 'ebe755ea-2eb5-4394-9dd3-42f48ed776c8',
    fieldMetadataUniversalIdentifier: generateDefaultFieldUniversalIdentifier({
      objectUniversalIdentifier: '2eb4bc89-eddc-4ea5-8a3a-4fd7d547c244',
      fieldName: 'updatedAt',
    }),
    position: 2,
    isVisible: true,
    size: 200,
  },
  {
    universalIdentifier: '5f0ebf26-177a-41ec-9881-f5156f71cc51',
    fieldMetadataUniversalIdentifier: generateDefaultFieldUniversalIdentifier({
      objectUniversalIdentifier: '2eb4bc89-eddc-4ea5-8a3a-4fd7d547c244',
      fieldName: 'createdBy',
    }),
    position: 3,
    isVisible: true,
    size: 200,
  },
  {
    universalIdentifier: '3634ae13-7a6f-4804-a893-311a5c0bcd0c',
    fieldMetadataUniversalIdentifier: generateDefaultFieldUniversalIdentifier({
      objectUniversalIdentifier: '2eb4bc89-eddc-4ea5-8a3a-4fd7d547c244',
      fieldName: 'updatedBy',
    }),
    position: 4,
    isVisible: true,
    size: 200,
  },
  ],
  // filters: [
  //   {
  //     universalIdentifier: '...',
  //     fieldMetadataUniversalIdentifier: '...',
  //     operand: 'Contains',
  //     value: '',
  //   },
  // ],
  // sorts: [
  //   {
  //     universalIdentifier: '...',
  //     fieldMetadataUniversalIdentifier: '...',
  //     direction: 'DESC',
  //   },
  // ],
});
