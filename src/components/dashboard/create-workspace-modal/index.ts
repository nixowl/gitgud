import * as z from "zod"

export const createWorkspaceSchema = z.object({
  name: z.string().min(3, "Name is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  website: z.string().optional(),
})

export type CreateWorkspaceInput = z.infer<typeof createWorkspaceSchema>
