import { Icons } from "@/components/icons"
import * as z from "zod"

export const createIssueSchema = z.object({
  title: z.string().min(3, "Name is required"),
  description: z.string().optional(),
  status: z.string(),
  priority: z.string().optional(),
  assigneeId: z.string().optional(),
  labels: z.array(z.string()).optional(),
  dueDate: z.string().optional(),
})

export type CreateIssueSchema = z.infer<typeof createIssueSchema>

export const statusArr = [
  {
    title: "Backlog",
    icon: Icons.BacklogStatus,
  },
  {
    title: "Todo",
    icon: Icons.TodoStatus,
  },
  {
    title: "In Progress",
    icon: Icons.InProgressStatus,
  },
  {
    title: "Done",
    icon: Icons.DoneStatus,
  },
  {
    title: "Cancelled",
    icon: Icons.CancelledStatus,
  },
  {
    title: "Blocked",
    icon: Icons.BlockedStatus,
  },
  {
    title: "Check",
    icon: Icons.CheckStatus,
  },
]

export const priorityArr = [
  {
    title: "Low",
    color: "bg-green-500",
    number: 1,
  },
  {
    title: "Medium",
    color: "bg-yellow-500",
    number: 2,
  },
  {
    title: "High",
    color: "bg-red-500",
    number: 3,
  },
  {
    title: "Critical",
    color: "bg-red-600",
    number: 4,
  },
]
