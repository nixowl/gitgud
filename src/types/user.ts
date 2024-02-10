export type User = {
    id: number
    githubId?: number 
    createdAt: string
    name?: string
    email: string
    image ?: string
    roleId: number
    role: string
}

export type UserRecord = Record<"user", User>