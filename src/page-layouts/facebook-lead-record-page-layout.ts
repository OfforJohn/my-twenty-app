import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';

export default definePageLayout({
  universalIdentifier: 'd867faa9-6bbc-4e66-99a5-ba736779740f',
  name: 'Default Facebook lead Layout',
  type: 'RECORD_PAGE',
  objectUniversalIdentifier: '2eb4bc89-eddc-4ea5-8a3a-4fd7d547c244',
  tabs: [
    {
      universalIdentifier: '7e762dab-7548-4560-b4dd-0bd0a43da093',
      title: 'Home',
      position: 10,
      icon: 'IconHome',
      layoutMode: PageLayoutTabLayoutMode.VERTICAL_LIST,
      widgets: [
        {
          universalIdentifier: '7adca976-268c-4022-94b0-82c7903b7687',
          title: 'Fields',
          type: 'FIELDS',
          configuration: {
            configurationType: 'FIELDS',
            viewUniversalIdentifier: '2bc9dfdd-8979-430e-97b4-8f9bc66a976f',
          },
        },
      ],
    },
    {
      universalIdentifier: '16c137b3-9a34-4c76-af70-4d31e371fc22',
      title: 'Timeline',
      position: 20,
      icon: 'IconTimelineEvent',
      layoutMode: PageLayoutTabLayoutMode.CANVAS,
      widgets: [
        {
          universalIdentifier: '9d9ccf09-ced0-4e6b-a3a0-9be243b3610f',
          title: 'Timeline',
          type: 'TIMELINE',
          configuration: {
            configurationType: 'TIMELINE',
          },
        },
      ],
    },
  ],
});
