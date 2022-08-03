import {
  Comment,
  TeamMember,
  ProjectIssueProps,
  History,
  ProjectProps,
} from 'types/types';

export const sampleTeamMembers: TeamMember[] = [
  { email: '', name: 'Unassigned', status: 'Active', role: 'User' },
  {
    email: 'pengfei@pengfeidevelopment.com',
    name: 'Pengfei Gao',
    status: 'Active',
    role: 'Admin',
  },
  {
    email: 'terry@gmail.com',
    name: 'Terry Smith',
    status: 'Active',
    role: 'User',
  },
  { email: 'john@gmail.com', name: 'John Doe', status: 'Active', role: 'User' },
  {
    email: 'james@gmail.com',
    name: 'James Johnson',
    status: 'Invited',
    role: 'User',
  },
  {
    email: 'robert@gmail.com',
    name: 'Robert Williams',
    status: 'Suspended',
    role: 'User',
  },
];

export const sampleIssues: ProjectIssueProps[] = [
  {
    id: 'ebc304c6-46f7-400e-a9fb-460d8731ff9b',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can create a project by click Projects > Creact project and specify project name and project type.',
    description:
      '<h1>As a user, I can create a project by click Projects &gt; Creact project and specify project name and project type.</h1>',
    assignee: {
      email: 'john@gmail.com',
      name: 'John Doe',
      status: 'Active',
      role: 'User',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'High',
    status: 'TO DO',
    createdAt: '2022-08-03T01:12:23.556Z',
    updatedAt: '2022-08-03T01:56:13.238Z',
    dueAt: '2022-08-02T16:00:00.000Z',
  },
  {
    id: '4d2462a6-1155-4b8c-bb38-96b61486d8bb',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can update project name, description and avatar in the project setting',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Lowest',
    status: 'TO DO',
    createdAt: '2022-08-03T01:47:29.099Z',
    updatedAt: '2022-08-03T02:06:30.482Z',
  },
  {
    id: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can create issues, and specify summary and descriptions, reporter, assignee, priority and due date.',
    description:
      '<h3>As a user, I can create issues, and specify summary and descriptions, reporter, assignee, priority and due date.</h3>',
    assignee: {
      email: 'terry@gmail.com',
      name: 'Terry Smith',
      status: 'Active',
      role: 'User',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'High',
    status: 'DONE',
    createdAt: '2022-08-03T01:52:21.390Z',
    updatedAt: '2022-08-03T02:43:32.932Z',
    dueAt: '2022-08-05T16:00:00.000Z',
  },
  {
    id: '71ea80ac-81c8-48a7-8969-09ecdd007dcd',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can view and update issue details by clicking the card of the issue on the Kanban board.',
    description: '',
    assignee: {
      email: 'terry@gmail.com',
      name: 'Terry Smith',
      status: 'Active',
      role: 'User',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Medium',
    status: 'TO DO',
    createdAt: '2022-08-03T01:55:01.674Z',
    updatedAt: '2022-08-03T01:55:01.674Z',
  },
  {
    id: '89c26ccb-672b-4490-bd99-3554c975ae54',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can add a comment to a issue, and I can also edit and delete a comment. I can also know if the comment is been edited.',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'High',
    status: 'IN PROGRESS',
    createdAt: '2022-08-03T01:57:56.849Z',
    updatedAt: '2022-08-03T02:28:59.387Z',
    dueAt: '2022-08-02T16:00:00.000Z',
  },
  {
    id: '7e41efc2-03b1-4d5e-a5dc-905f84c69fb1',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can see recent updated projects, and view all projects',
    description: '',
    assignee: {
      email: 'john@gmail.com',
      name: 'John Doe',
      status: 'Active',
      role: 'User',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Highest',
    status: 'IN PROGRESS',
    createdAt: '2022-08-03T01:59:51.786Z',
    updatedAt: '2022-08-03T02:44:25.427Z',
    dueAt: '2022-08-09T16:00:00.000Z',
  },
  {
    id: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can update issue status by drag and drop it on the board.',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Highest',
    status: 'DONE',
    createdAt: '2022-08-03T02:02:47.177Z',
    updatedAt: '2022-08-03T02:42:18.289Z',
    dueAt: '2022-08-02T16:00:00.000Z',
  },
  {
    id: '39552749-ec37-4767-87e9-4a76ca621141',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can filter the issue by assignee, and issue summary. I can also clear the filter.',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Low',
    status: 'TO DO',
    createdAt: '2022-08-03T02:04:18.220Z',
    updatedAt: '2022-08-03T02:06:49.329Z',
  },
  {
    id: '580bc810-38f2-4d02-8b01-88936a4317b5',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary:
      'As a user, I can see all the issues in a table, I can also sort and filter the issue. I can also click the item to see detail info, and I can also copy the link of the issue.',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Medium',
    status: 'TO DO',
    createdAt: '2022-08-03T02:06:17.781Z',
    updatedAt: '2022-08-03T02:06:17.781Z',
  },
  {
    id: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Story',
    summary: 'As a user, I can see all the history of an issue.',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Highest',
    status: 'DONE',
    createdAt: '2022-08-03T02:08:34.229Z',
    updatedAt: '2022-08-03T02:26:33.152Z',
    dueAt: '2022-08-02T16:00:00.000Z',
  },
  {
    id: 'cb608cac-c823-427e-ac9d-53041e0c1764',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Task',
    summary:
      'Creating the navbar, and it has Logo, Your work, Projects, People, and a Create button to create issue.',
    description: '',
    assignee: {
      email: 'terry@gmail.com',
      name: 'Terry Smith',
      status: 'Active',
      role: 'User',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Highest',
    status: 'IN PROGRESS',
    createdAt: '2022-08-03T02:12:43.456Z',
    updatedAt: '2022-08-03T02:26:48.074Z',
  },
  {
    id: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Task',
    summary:
      'Create left drawer, it has project name, project avatar, project type, it can navigate to board, issues, and project settings',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'Highest',
    status: 'DONE',
    createdAt: '2022-08-03T02:15:28.595Z',
    updatedAt: '2022-08-03T02:36:14.382Z',
    dueAt: '2022-08-02T16:00:00.000Z',
  },
  {
    id: 'cabf48b4-31d0-4285-a79d-8f7f2bf225e1',
    projectId: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    type: 'Bug',
    summary:
      'Project is not update properly after user click the save button on project setting page.',
    description: '',
    assignee: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    reporter: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    priority: 'High',
    status: 'DONE',
    createdAt: '2022-08-03T02:18:01.186Z',
    updatedAt: '2022-08-03T02:19:29.259Z',
    dueAt: '2022-08-02T16:00:00.000Z',
  },
];

export const sampleComments: Comment[] = [
  {
    id: '834c0931-1a94-4caa-9487-2b041f2d29c1',
    createdAt: '2022-08-03T01:56:05.741Z',
    updatedAt: '2022-08-03T01:56:05.741Z',
    content: '<p>Update assignee and set priority to high.</p>',
    issueId: 'ebc304c6-46f7-400e-a9fb-460d8731ff9b',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'f2b84b75-591b-478c-b95d-3ff156832625',
    createdAt: '2022-08-03T02:18:42.038Z',
    updatedAt: '2022-08-03T02:18:42.038Z',
    content: '<p>Working on it</p>',
    issueId: 'cabf48b4-31d0-4285-a79d-8f7f2bf225e1',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'c9ade085-cb22-41da-827f-a576f0fc9129',
    createdAt: '2022-08-03T02:19:22.376Z',
    updatedAt: '2022-08-03T02:19:22.376Z',
    content: '<p>Done</p>',
    issueId: 'cabf48b4-31d0-4285-a79d-8f7f2bf225e1',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '978013fe-6fef-4feb-9a85-7b9f624b7bb9',
    createdAt: '2022-08-03T02:25:11.642Z',
    updatedAt: '2022-08-03T02:25:11.642Z',
    content: '<p>Working on it</p>',
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '09b1a235-65bb-476b-a574-c8131943901c',
    createdAt: '2022-08-03T02:25:44.909Z',
    updatedAt: '2022-08-03T02:25:52.359Z',
    content: '<p>It should be done today.</p>',
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '7fb2654a-b92f-48b0-8717-1c91fcb25504',
    createdAt: '2022-08-03T02:26:29.741Z',
    updatedAt: '2022-08-03T02:26:29.741Z',
    content: '<p>Done</p>',
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '9f72a612-2019-45ce-8e8d-5112c525b0b5',
    createdAt: '2022-08-03T02:27:13.230Z',
    updatedAt: '2022-08-03T02:27:13.230Z',
    content: '<p>Hi Terry,</p><p>Please working on this.</p>',
    issueId: 'cb608cac-c823-427e-ac9d-53041e0c1764',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'bb5511d8-bf1d-40ab-b467-408cc0a10b46',
    createdAt: '2022-08-03T02:34:46.471Z',
    updatedAt: '2022-08-03T02:34:46.471Z',
    content: '<p>Working on it</p>',
    issueId: '89c26ccb-672b-4490-bd99-3554c975ae54',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'c0c352d4-4549-4b66-ae42-0751e2de1717',
    createdAt: '2022-08-03T02:35:34.454Z',
    updatedAt: '2022-08-03T02:35:34.454Z',
    content: '<p>Working on it.</p>',
    issueId: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'ef910ca1-233d-4447-8bf1-cbba82c1a697',
    createdAt: '2022-08-03T02:36:11.465Z',
    updatedAt: '2022-08-03T02:36:11.465Z',
    content: '<p>done.</p>',
    issueId: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'de7b9935-537d-42e9-936d-8552c2304080',
    createdAt: '2022-08-03T02:41:45.206Z',
    updatedAt: '2022-08-03T02:41:45.206Z',
    content:
      '<p><strong>Update the priority and working on this, it should be done today.</strong></p>',
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '79c44363-eb2a-4858-bebd-c629903b9243',
    createdAt: '2022-08-03T02:42:14.778Z',
    updatedAt: '2022-08-03T02:42:14.778Z',
    content: '<h2>Done</h2>',
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'cee43bd3-0d26-4d80-afba-4f2edd304bcb',
    createdAt: '2022-08-03T02:43:24.970Z',
    updatedAt: '2022-08-03T02:43:24.970Z',
    content: '<p>Done</p>',
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'f2c07469-a40c-4442-a691-a6cc264b09c5',
    createdAt: '2022-08-03T02:44:09.655Z',
    updatedAt: '2022-08-03T02:44:09.655Z',
    content: '<p>Working on it</p>',
    issueId: '7e41efc2-03b1-4d5e-a5dc-905f84c69fb1',
    createdBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
];

export const sampleHistory: History[] = [
  {
    id: '01807302-3993-4c2e-93d3-3845d3ce4308',
    issueId: 'ebc304c6-46f7-400e-a9fb-460d8731ff9b',
    createdAt: '2022-08-03T01:12:23.556Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '6dff7bc0-a737-439c-ba60-566976796f17',
    issueId: '0f5a557a-f905-45a0-98dd-e787322a5477',
    createdAt: '2022-08-03T01:35:32.054Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '1c6bea10-539d-43c0-8c1c-5e53c022155b',
    issueId: '4d2462a6-1155-4b8c-bb38-96b61486d8bb',
    createdAt: '2022-08-03T01:47:29.099Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'bd6bca83-8eef-4431-85af-99533bd5a624',
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    createdAt: '2022-08-03T01:52:21.390Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'b6b0bb61-f38e-4711-abda-4a73534b4f89',
    createdAt: '2022-08-03T01:53:15.881Z',
    field: 'Summary',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
  },
  {
    id: '0bc750e8-743a-452a-849c-bcd888f4729e',
    createdAt: '2022-08-03T01:53:25.849Z',
    field: 'Description',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
  },
  {
    id: 'f423ab71-7ffb-413c-a13e-75a6ad44d5b3',
    createdAt: '2022-08-03T01:53:38.526Z',
    field: 'Priority',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    from: 'Medium',
    to: 'High',
  },
  {
    id: 'caaddf4b-dc8a-47ee-8be9-a02afe18448e',
    issueId: '71ea80ac-81c8-48a7-8969-09ecdd007dcd',
    createdAt: '2022-08-03T01:55:01.674Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '89b06743-f312-4f5d-bbc7-19edd8d115fb',
    createdAt: '2022-08-03T01:56:10.726Z',
    field: 'Assignee',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'ebc304c6-46f7-400e-a9fb-460d8731ff9b',
    from: '{"email":"pengfei@pengfeidevelopment.com","name":"Pengfei Gao","status":"Active","role":"Admin"}',
    to: '{"email":"john@gmail.com","name":"John Doe","status":"Active","role":"User"}',
  },
  {
    id: '09ec2438-ef45-4d94-9eda-04b4721c0d4a',
    createdAt: '2022-08-03T01:56:13.238Z',
    field: 'Priority',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'ebc304c6-46f7-400e-a9fb-460d8731ff9b',
    from: 'Medium',
    to: 'High',
  },
  {
    id: '36c21c7e-93fb-418d-bd84-0fd408478cbb',
    issueId: '89c26ccb-672b-4490-bd99-3554c975ae54',
    createdAt: '2022-08-03T01:57:56.849Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '3b207d61-b268-47d7-8a86-129ad718a24b',
    issueId: '7e41efc2-03b1-4d5e-a5dc-905f84c69fb1',
    createdAt: '2022-08-03T01:59:51.786Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'd9301cc8-d742-4a56-98f1-ce40228b283d',
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    createdAt: '2022-08-03T02:02:47.177Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '6efabe0c-b0b0-42da-a33d-22a31a3cb1ab',
    issueId: '39552749-ec37-4767-87e9-4a76ca621141',
    createdAt: '2022-08-03T02:04:18.220Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '765e6ef5-eefc-47b6-a9ea-9f0c30fa7241',
    issueId: '580bc810-38f2-4d02-8b01-88936a4317b5',
    createdAt: '2022-08-03T02:06:17.781Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '8a915227-32d9-43a6-9ce8-0450cde21d08',
    createdAt: '2022-08-03T02:06:30.482Z',
    field: 'Priority',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '4d2462a6-1155-4b8c-bb38-96b61486d8bb',
    from: 'Medium',
    to: 'Lowest',
  },
  {
    id: '36165edb-0bf6-48c2-b5f3-f748b6ec8d7e',
    createdAt: '2022-08-03T02:06:49.329Z',
    field: 'Priority',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '39552749-ec37-4767-87e9-4a76ca621141',
    from: 'Medium',
    to: 'Low',
  },
  {
    id: 'affc6424-2e57-494e-af37-a7c16afb0b2a',
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    createdAt: '2022-08-03T02:08:34.229Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '71efda08-0f0c-4044-86c3-21ec5908a071',
    issueId: 'cb608cac-c823-427e-ac9d-53041e0c1764',
    createdAt: '2022-08-03T02:12:43.456Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '9a3d9410-65cf-4ce9-979e-6666cf17823e',
    issueId: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    createdAt: '2022-08-03T02:15:28.595Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: '35e6adaf-fc07-4eb2-a112-f6532fb60849',
    issueId: 'cabf48b4-31d0-4285-a79d-8f7f2bf225e1',
    createdAt: '2022-08-03T02:18:01.186Z',
    field: 'Issue',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
  },
  {
    id: 'f702bf20-4ae7-46f0-b7b1-37e650b988f6',
    createdAt: '2022-08-03T02:18:10.224Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'cabf48b4-31d0-4285-a79d-8f7f2bf225e1',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: 'eef30b46-bcac-4416-91f5-aef9eb18a517',
    createdAt: '2022-08-03T02:19:29.259Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'cabf48b4-31d0-4285-a79d-8f7f2bf225e1',
    from: 'IN PROGRESS',
    to: 'DONE',
  },
  {
    id: '530ee027-e252-4e76-9cd9-b4b9e0c96ef9',
    createdAt: '2022-08-03T02:19:55.487Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: '6e8fa4f9-0fce-461e-8489-192ee50dfd33',
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    field: 'Comment',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    createdAt: '2022-08-03T02:24:54.423Z',
  },
  {
    id: '4daf65c7-2a98-464b-b039-315b271cb4f3',
    createdAt: '2022-08-03T02:25:24.551Z',
    field: 'Due',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    from: '2022-08-03T16:00:00.000Z',
    to: '2022-08-02T16:00:00.000Z',
  },
  {
    id: 'ce529327-386d-4881-a205-cc434089df4d',
    createdAt: '2022-08-03T02:26:33.152Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'd843cf50-ae82-4a61-ade8-c54cb9f94778',
    from: 'IN PROGRESS',
    to: 'DONE',
  },
  {
    id: 'c19dbf83-8e5a-4059-b01b-08204a2cf908',
    createdAt: '2022-08-03T02:26:42.212Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'cb608cac-c823-427e-ac9d-53041e0c1764',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: 'c2f259fe-0c86-4a18-a233-442749ade3e1',
    createdAt: '2022-08-03T02:26:48.074Z',
    field: 'Assignee',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'cb608cac-c823-427e-ac9d-53041e0c1764',
    from: '{"email":"pengfei@pengfeidevelopment.com","name":"Pengfei Gao","status":"Active","role":"Admin"}',
    to: '{"email":"terry@gmail.com","name":"Terry Smith","status":"Active","role":"User"}',
  },
  {
    id: '12adbbae-09b6-4b80-ae11-d359e6c5b4a5',
    createdAt: '2022-08-03T02:27:54.894Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: '06186cf8-cea9-440c-8ecf-bbfbf1263115',
    createdAt: '2022-08-03T02:28:39.093Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '89c26ccb-672b-4490-bd99-3554c975ae54',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: 'd6567758-a1f4-49d4-86d9-730e38bdeb2d',
    createdAt: '2022-08-03T02:28:51.065Z',
    field: 'Assignee',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '89c26ccb-672b-4490-bd99-3554c975ae54',
    from: '{"email":"terry@gmail.com","name":"Terry Smith","status":"Active","role":"User"}',
    to: '{"email":"pengfei@pengfeidevelopment.com","name":"Pengfei Gao","status":"Active","role":"Admin"}',
  },
  {
    id: '9d4f1cb2-f329-48a1-bb23-3f841953cb3b',
    createdAt: '2022-08-03T02:28:53.882Z',
    field: 'Priority',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '89c26ccb-672b-4490-bd99-3554c975ae54',
    from: 'Medium',
    to: 'High',
  },
  {
    id: '8d52a9b3-941a-495b-bc21-dae79b4182e8',
    createdAt: '2022-08-03T02:28:59.387Z',
    field: 'Due',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '89c26ccb-672b-4490-bd99-3554c975ae54',
    to: '2022-08-02T16:00:00.000Z',
  },
  {
    id: '5dc3460b-47a3-4604-aa38-0af28deac949',
    createdAt: '2022-08-03T02:35:46.484Z',
    field: 'Due',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    to: '2022-08-02T16:00:00.000Z',
  },
  {
    id: '82bb8c3e-dfcc-49a1-8e51-4fb7d0aa1f6d',
    createdAt: '2022-08-03T02:36:14.382Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '5924779a-72eb-4ca2-bcaa-dfa17e12a6d1',
    from: 'IN PROGRESS',
    to: 'DONE',
  },
  {
    id: '596073b6-488d-4fca-b7f2-c8507474f9b4',
    createdAt: '2022-08-03T02:41:07.423Z',
    field: 'Priority',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    from: 'Medium',
    to: 'Highest',
  },
  {
    id: 'd81ebd3d-24da-49f5-866f-f87ff00f3a78',
    createdAt: '2022-08-03T02:41:33.314Z',
    field: 'Due',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    to: '2022-08-02T16:00:00.000Z',
  },
  {
    id: '11e676d5-bb34-4c22-8274-83cf1642f253',
    createdAt: '2022-08-03T02:41:39.166Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: 'eaa51e7e-fca6-4008-8700-222458b94600',
    createdAt: '2022-08-03T02:42:18.289Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '1b56d890-7a3f-42ed-98ec-4c26977300d9',
    from: 'IN PROGRESS',
    to: 'DONE',
  },
  {
    id: '8e91f9e0-581f-4036-8c70-6ea804603dba',
    createdAt: '2022-08-03T02:42:43.105Z',
    field: 'Due',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    to: '2022-08-05T16:00:00.000Z',
  },
  {
    id: 'aff1cb89-9206-4d8c-91ed-92007f682ee7',
    createdAt: '2022-08-03T02:42:54.550Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
  {
    id: '09005b48-15dd-4586-b432-bbc958f38036',
    createdAt: '2022-08-03T02:43:32.931Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: 'de6014bc-21e9-4e5f-b9b4-ab54dd5fb44e',
    from: 'IN PROGRESS',
    to: 'DONE',
  },
  {
    id: 'b2cc0b13-b9f7-4975-a825-8052b9dde98b',
    createdAt: '2022-08-03T02:43:57.666Z',
    field: 'Due',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '7e41efc2-03b1-4d5e-a5dc-905f84c69fb1',
    to: '2022-08-09T16:00:00.000Z',
  },
  {
    id: 'ef093768-0785-44bc-9980-c24285ec5702',
    createdAt: '2022-08-03T02:44:19.896Z',
    field: 'Assignee',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '7e41efc2-03b1-4d5e-a5dc-905f84c69fb1',
    from: '{"email":"pengfei@pengfeidevelopment.com","name":"Pengfei Gao","status":"Active","role":"Admin"}',
    to: '{"email":"john@gmail.com","name":"John Doe","status":"Active","role":"User"}',
  },
  {
    id: '3547acde-a25d-4963-bce3-9639b5344a3e',
    createdAt: '2022-08-03T02:44:25.427Z',
    field: 'Status',
    updatedBy: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    issueId: '7e41efc2-03b1-4d5e-a5dc-905f84c69fb1',
    from: 'TO DO',
    to: 'IN PROGRESS',
  },
];

export const sampleProjects: ProjectProps[] = [
  {
    id: '8037cd16-0c74-451e-8b2d-67f7e39563f7',
    name: 'Project Management Web App',
    type: 'Software',
    avatar: 'Rocket',
    owner: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    createdAt: '2022-08-03T01:04:57.389Z',
    updatedAt: '2022-08-03T01:04:57.389Z',
    lead: {
      email: 'pengfei@pengfeidevelopment.com',
      name: 'Pengfei Gao',
      status: 'Active',
      role: 'Admin',
    },
    isPrivate: false,
    description: '<p>Build a project management web app</p>',
  },
];

export const queryIssues = (projectId: string) => {
  return sampleIssues.filter((item) => item.projectId === projectId);
};

export const createIssue = (issue: ProjectIssueProps) => {
  sampleIssues.push(issue);
};

export const updateIssue = (issue: ProjectIssueProps) => {
  const idx = sampleIssues.findIndex((item) => item.id === issue.id);
  if (idx !== -1) {
    sampleIssues[idx] = issue;
  }
};

export const deleteIssue = (id: string) => {
  const idx = sampleIssues.findIndex((item) => item.id === id);
  if (idx !== -1) {
    sampleIssues.splice(idx, 1);
  }
};

export const getProject = (projectId: string) => {
  return sampleProjects.filter((item) => item.id === projectId)[0];
};

export const addProject = (project: ProjectProps) => {
  sampleProjects.unshift(project);
};

export const updateProject = (project: ProjectProps) => {
  const idx = sampleProjects.findIndex((item) => project.id === item.id);
  if (idx !== -1) {
    sampleProjects[idx] = project;
  }
};

export const deleteProject = (projectId: string) => {
  const idx = sampleProjects.findIndex((item) => item.id === projectId);
  if (idx !== -1) {
    sampleProjects.splice(idx, 1);
    let issueIdx = sampleIssues.findIndex(
      (item) => item.projectId === projectId
    );
    while (issueIdx !== -1) {
      sampleIssues.splice(issueIdx, 1);
      issueIdx = sampleIssues.findIndex((item) => item.projectId === projectId);
    }
  }
};

export const getIssue = (issueId: string) =>
  sampleIssues.find((item) => item.id === issueId);

export const getAllMyProjects = () => sampleProjects;

export const getIssuesAssignedToMe = (teamMember: TeamMember | null) => {
  if (!teamMember) return [];
  return sampleIssues.filter(
    (issue) => issue.assignee.email === teamMember.email
  );
};

export const getTeamMembers = () => sampleTeamMembers;

export const addComment = (comment: Comment) => {
  sampleComments.push(comment);
};

export const deleteComment = (commentId: string) => {
  const idx = sampleComments.findIndex((item) => item.id === commentId);
  if (idx !== -1) {
    sampleComments.splice(idx, 1);
  }
};

export const editComment = (comment: Comment) => {
  const idx = sampleComments.findIndex((item) => item.id === comment.id);
  if (idx !== -1) {
    sampleComments[idx] = comment;
  }
};

export const queryComments = (issueId: string) => {
  return sampleComments.filter((item) => item.issueId === issueId);
};

export const queryHistory = (issueId: string) => {
  return sampleHistory.filter((item) => item.issueId === issueId);
};

export const addHistory = (history: History) => {
  sampleHistory.push(history);
};
