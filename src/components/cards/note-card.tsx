import React from "react"

import { Badge } from "../ui/badge"

type Tags = {
  id: number
  NoteId: number
  color: string
  name: string
}

type NoteCardProps = {
  title: string
  content: string
  tags: Tags[]
}

const NoteCard = ({ title, content, tags }: NoteCardProps) => {
  return (
    <article className="rounded-md border border-border bg-card p-4 shadow-sm">
      <div className="flex w-full items-start justify-between">
        <div>
          <h3 className="cursor-pointer text-lg font-medium hover:underline">{title}</h3>
          <p>in the garage</p>
        </div>
        <p className="text-sm text-muted-foreground">10 min ago</p>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{content}</p>
      <div className="mt-2 flex items-center justify-start gap-2">
        {tags.map((tag) => (
          <Badge>{tag.name}</Badge>
        ))}
      </div>
    </article>
  )
}

export default NoteCard
