export type ProjectIssueType = 'Story' | 'Task' | 'Bug';
export type ProjectIssuePriority =
  | 'Highest'
  | 'High'
  | 'Medium'
  | 'Low'
  | 'Lowest';
export type ProjectIssueStatus = 'TO DO' | 'IN PROGRESS' | 'DONE';

export type ProjectIssueProps = {
  id: string;
  projectId: string;
  type: ProjectIssueType;
  summary: string;
  description?: string;
  assignee: People;
  reporter: People;
  priority: ProjectIssuePriority;
  status: ProjectIssueStatus;
  createdAt: string;
  updatedAt: string;
  dueAt?: string;
};

export type People = {
  email: string;
  name: string;
  img?: string;
};

export type Comment = {
  id: string;
  issueId: string;
  createdBy: People;
  createdAt: string;
  updatedAt: string;
  content: string;
};
