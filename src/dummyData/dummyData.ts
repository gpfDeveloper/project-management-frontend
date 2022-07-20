import { People, ProjectIssueProps } from 'types/project';
import { v4 as uuid } from 'uuid';

export const samplePeople: People[] = [
  { email: '', name: 'Unassigned' },
  { email: 'pengfei@pengfeidevelopment.com', name: 'Pengfei Gao' },
  { email: 'terry@gmail.com', name: 'Terry Smith' },
  { email: 'john@gmail.com', name: 'John Doe' },
];

export const sampleIssues: ProjectIssueProps[] = [
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: samplePeople[0],
    reporter: samplePeople[1],
    priority: 'Low',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'Lowest',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'High',
    status: 'IN PROGRESS',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[1],
    reporter: samplePeople[1],
    priority: 'Highest',
    status: 'DONE',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: samplePeople[2],
    reporter: samplePeople[1],
    priority: 'Medium',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: uuid(),
    projectId: 'project1',
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: samplePeople[3],
    reporter: samplePeople[1],
    priority: 'Low',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
];
