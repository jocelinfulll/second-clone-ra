export interface AppError extends Error{
    id: string;
    domainId?: string;
    createdAt: string;
    field?: string;
    domain?: {};
    fileId: string;
}