import { defineLogicFunction } from 'twenty-sdk/define';

// Lead data from Facebook scraper
interface FacebookLeadInput {
  name: string;
  profileUrl?: string;
  phoneNumbers?: string[];
  emailAddresses?: string[];
  sourceUrl?: string;
  title?: string;
  description?: string;
  location?: string;
  price?: string;
  source: 'MARKETPLACE' | 'GROUP';
  postedAt?: string;
  postId?: string;
}

interface IngestLeadParams {
  leads: FacebookLeadInput[];
}

// Logic function handler for ingesting leads
const handler = async (
  params: IngestLeadParams,
  context: { api: any }
): Promise<{ success: boolean; created: number; errors: string[] }> => {
  const { leads } = params;
  const { api } = context;
  
  let created = 0;
  const errors: string[] = [];

  for (const lead of leads) {
    try {
      // Check if lead already exists by postId
      if (lead.postId) {
        const existing = await api.facebookLeads.findMany({
          filter: {
            postId: { eq: lead.postId }
          },
          first: 1
        });
        
        if (existing.edges.length > 0) {
          continue; // Skip duplicate
        }
      }

      // Create the lead
      await api.facebookLeads.createOne({
        name: lead.name || 'Unknown',
        profileUrl: lead.profileUrl || '',
        phoneNumber: lead.phoneNumbers?.length ? lead.phoneNumbers[0] : '',
        email: lead.emailAddresses?.length ? lead.emailAddresses[0] : '',
        sourceUrl: lead.sourceUrl || '',
        title: lead.title || '',
        description: lead.description || '',
        location: lead.location || '',
        price: lead.price || '',
        source: lead.source,
        status: 'NEW',
        postedAt: lead.postedAt || '',
        postId: lead.postId || '',
      });
      
      created++;
    } catch (error: any) {
      errors.push(`Failed to create lead ${lead.name}: ${error.message}`);
    }
  }

  return { success: errors.length === 0, created, errors };
};

export default defineLogicFunction({
  universalIdentifier: '11de89dd-73a9-4a20-8943-bb59d4a6c5b7',
  name: 'ingest-lead',
  description: 'Ingest Facebook leads from scraper into CRM',
  timeoutSeconds: 30,
  handler,
  httpRouteTriggerSettings: {
    path: '/ingest-leads',
    httpMethod: 'POST',
    isAuthRequired: true,
  },
});
