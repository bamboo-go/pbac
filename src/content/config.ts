import { defineCollection, z } from 'astro:content';

const issuesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(), // 例: "ISSUE-001"
    title: z.string(),
    status: z.enum(['open', 'in-progress', 'resolved']),
    severity: z.enum(['low', 'medium', 'high', 'critical']),
    systemLayer: z.string(), // 例: "ankle-joint", "lumbar-spine"
    dateDetected: z.date(),
    baselineMetric: z.object({
      name: z.string(),
      currentLeft: z.string(),
      currentRight: z.string(),
      target: z.string(),
    }),
    githubIssueUrl: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  issues: issuesCollection,
};
