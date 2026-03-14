import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const editionsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/editions" }),
  schema: z.object({
    name: z.string(),
    date: z.string(),
    time: z.string().optional(),
    venueName: z.string().optional(),
    venueAddress: z.string().optional(),
    theme: z.string().optional(),
    registrationUrl: z.string().optional(),
    speakerProposalUrl: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    highlights: z.array(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string().optional(),
    })).optional(),
  }),
});

const speakersCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/speakers" }),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(), // Role or Talk Title depending on usage
    company: z.string().optional(), // Affiliation
    avatarUrl: z.string().optional(), // Photo
    shortBio: z.string().optional(),
    talkTitle: z.string().optional(),
    talkAbstract: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    website: z.string().optional(),
    edition: z.string(), // slug of the edition they are speaking at
    sessionSlug: z.string().optional(), // slug reference to session
    status: z.enum(["draft", "pending", "confirmed", "published"]).default("published"),
    sortOrder: z.number().default(0),
  }),
});

const sessionsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/sessions" }),
  schema: z.object({
    title: z.string(),
    edition: z.string(),
    sessionType: z.enum([
      "keynote", "technical talk", "lightning talk", 
      "panel discussion", "break", "networking", "workshop"
    ]).default("technical talk"),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    room: z.string().optional(),
    summary: z.string().optional(),
    speakers: z.array(z.string()).optional(), // array of speaker slugs
    status: z.enum(["draft", "published"]).default("published"),
    sortOrder: z.number().default(0),
    resources: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).optional(),
  }),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().transform((str) => new Date(str)),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    editionSlug: z.string().optional(),
    sessionSlug: z.string().optional(),
    speakerSlug: z.string().optional(),
    coverImage: z.string().optional(),
    status: z.enum(["draft", "published"]).default("published"),
  }),
});

export const collections = {
  editions: editionsCollection,
  speakers: speakersCollection,
  sessions: sessionsCollection,
  posts: postsCollection,
};
