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
  assignee: TeamMember;
  reporter: TeamMember;
  priority: ProjectIssuePriority;
  status: ProjectIssueStatus;
  createdAt: string;
  updatedAt: string;
  dueAt?: string;
};

type TeamMemberRole = 'Admin' | 'User';
type TeamMemberStatus = 'Invited' | 'Active' | 'Suspended';
export interface TeamMember {
  email: string;
  name: string;
  img?: string;
  role: TeamMemberRole;
  status: TeamMemberStatus;
}

export type Comment = {
  id: string;
  issueId: string;
  createdBy: TeamMember;
  createdAt: string;
  updatedAt: string;
  content: string;
};

export type HistoryField =
  | 'Issue'
  | 'Summary'
  | 'Description'
  | 'Assignee'
  | 'Reporter'
  | 'Priority'
  | 'Status'
  | 'Due'
  | 'Comment';

export type History = {
  id: string;
  issueId: string;
  createdAt: string;
  field: HistoryField;
  updatedBy: TeamMember;
  from?: string;
  to?: string;
};

export type ProjectType = 'Software' | 'Business';
export type ProjectAvatarName =
  | 'Rocket'
  | 'Snow'
  | 'Bug'
  | 'Airplane'
  | 'Camera'
  | 'Castle'
  | 'Tower';
export type ProjectProps = {
  id: string;
  name: string;
  type: ProjectType;
  createdAt: string;
  updatedAt: string;
  owner: TeamMember;
  URL?: string;
  avatar: ProjectAvatarName;
  lead: TeamMember;
  description?: string;
  isPrivate: boolean;
};
