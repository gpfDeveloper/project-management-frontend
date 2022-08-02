import React, { FunctionComponent, useState } from 'react';
import {
  TeamMember,
  ProjectIssuePriority,
  ProjectIssueStatus,
  ProjectIssueProps,
} from 'types/types';
import IssueDetailLeft from './IssueDetailLeft';
import IssueDetailRight from './IssueDetailRight';
import { useProject } from 'contexts/project-context';
import { addHistory, updateIssue } from 'dummyData/dummyData';
import { v4 as uuid } from 'uuid';
import { useAuth } from 'contexts/auth-context';
import type { History } from 'types/types';

const IssueDetail: FunctionComponent = () => {
  const {
    currentIssue: issue,
    teamMembers,
    setCurrentIssue,
    setIssuesPerProject,
    issuesPerProject,
  } = useProject();
  const { user } = useAuth();

  const _updateIssue = (_issue: ProjectIssueProps) => {
    _issue.updatedAt = new Date().toISOString();
    setCurrentIssue(_issue);
    const idx = issuesPerProject.findIndex((item) => item.id === _issue.id);
    if (idx !== -1) {
      const _issuePerProject = issuesPerProject.slice();
      _issuePerProject[idx] = _issue;
      setIssuesPerProject(_issuePerProject);
      updateIssue(_issue);
    }
  };

  const [summary, setSummary] = useState(issue!.summary);
  const summaryError = summary.length === 0 || summary.length > 255;
  const saveSummaryHandler = () => {
    if (summaryError) return;
    const _issue: ProjectIssueProps = { ...issue!, summary };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Summary',
      updatedBy: user!,
      issueId: _issue.id,
    };
    addHistory(history);
    _updateIssue(_issue);
  };
  const [description, setDescription] = useState({
    text: issue!.description || '',
  });
  const changeDescriptionHandler = (content: string) => {
    setDescription({ text: content });
  };
  const saveDescriptionHandler = () => {
    const _issue: ProjectIssueProps = {
      ...issue!,
      description: description.text,
    };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Description',
      updatedBy: user!,
      issueId: _issue.id,
    };
    addHistory(history);
    _updateIssue(_issue);
  };

  const [issueStatus, setIssueStatus] = useState<ProjectIssueStatus>(
    issue!.status
  );
  const issueStatusSelectorHandler = (status: ProjectIssueStatus) => {
    setIssueStatus(status);
    const _issue: ProjectIssueProps = { ...issue!, status };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Status',
      updatedBy: user!,
      issueId: _issue.id,
      from: issue!.status,
      to: status,
    };
    addHistory(history);
    _updateIssue(_issue);
  };
  const [reporter, setReporter] = useState<TeamMember | null>(issue!.reporter);
  const reporterSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: TeamMember | null
  ) => {
    let _reporter = value;
    if (!value) _reporter = teamMembers[0];
    setReporter(_reporter);
    const _issue: ProjectIssueProps = { ...issue!, reporter: _reporter! };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Reporter',
      updatedBy: user!,
      issueId: _issue.id,
      from: JSON.stringify(issue!.reporter),
      to: JSON.stringify(_issue!.reporter),
    };
    addHistory(history);
    _updateIssue(_issue);
  };
  const [assignee, setAssignee] = useState<TeamMember | null>(issue!.assignee);
  const assigneeSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: TeamMember | null
  ) => {
    let _assignee = value;
    if (!value) _assignee = teamMembers[0];
    setAssignee(_assignee);
    const _issue: ProjectIssueProps = { ...issue!, assignee: _assignee! };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Assignee',
      updatedBy: user!,
      issueId: _issue.id,
      from: JSON.stringify(issue!.assignee),
      to: JSON.stringify(_issue!.assignee),
    };
    addHistory(history);
    _updateIssue(_issue);
  };
  const [priority, setPriority] = useState<ProjectIssuePriority>(
    issue!.priority
  );
  const prioritySelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _priority = e.target.value as ProjectIssuePriority;
    setPriority(_priority);
    const _issue: ProjectIssueProps = { ...issue!, priority: _priority };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Priority',
      updatedBy: user!,
      issueId: _issue.id,
      from: issue!.priority,
      to: _issue.priority,
    };
    addHistory(history);
    _updateIssue(_issue);
  };
  let _due = null;
  if (issue!.dueAt) _due = new Date(issue!.dueAt);
  const [dueDate, setDueDate] = useState<Date | null>(_due);
  const dueDateSelectorHandler = (date: Date | null) => {
    setDueDate(date);
    let _date;
    if (date) _date = date.toISOString();
    const _issue: ProjectIssueProps = { ...issue!, dueAt: _date };
    const history: History = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      field: 'Due',
      updatedBy: user!,
      issueId: _issue.id,
      from: issue!.dueAt,
      to: _issue.dueAt,
    };
    addHistory(history);
    _updateIssue(_issue);
  };
  return (
    <>
      <IssueDetailLeft
        summary={summary}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onSaveSummary={saveSummaryHandler}
        summaryError={summaryError}
        description={description}
        onChangeDescription={changeDescriptionHandler}
        onSaveDescription={saveDescriptionHandler}
      />
      <IssueDetailRight
        allPeople={teamMembers.filter((people) => people.status === 'Active')}
        assignee={assignee}
        onChangeAssignee={assigneeSelectorHandler}
        reporter={reporter}
        onChangeReporter={reporterSelectorHandler}
        priority={priority}
        onChangePriority={prioritySelectorHandler}
        issueStatus={issueStatus}
        onChangeIssueStatus={issueStatusSelectorHandler}
        dueDate={dueDate}
        onChangeDueDate={dueDateSelectorHandler}
        createdAt={issue!.createdAt}
        updatedAt={issue!.updatedAt}
      />
    </>
  );
};

export default IssueDetail;
