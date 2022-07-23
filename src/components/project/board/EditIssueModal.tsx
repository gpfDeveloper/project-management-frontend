import { FunctionComponent, useState } from 'react';
import { Box, Modal } from '@mui/material';

import { sampleIssues } from 'dummyData/dummyData';
import EditIssueModalHeader from './EditIssueModalHeader';
import IssueDetail from '../issue/IssueDetail';

type Props = {
  issueId: string;
  open: boolean;
  onClose: () => void;
};

const EditIssueModal: FunctionComponent<Props> = ({
  open,
  onClose,
  issueId,
}) => {
  const issue = sampleIssues.find((item) => item.id === issueId)!;

  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        ref={(node: Node) => {
          if (node) setScrollTarget(node);
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          bgcolor: 'background.paper',
          boxShadow: 4,
          overflowY: 'auto',
          maxHeight: '90vh',
          pb: 4,
        }}
      >
        <EditIssueModalHeader
          issueId={issue.id}
          projectId={issue.projectId}
          issueType={issue.type}
          scrollTarget={scrollTarget}
          onClose={onClose}
        />
        <Box sx={{ p: '0 2rem', display: 'flex', gap: 4 }}>
          <IssueDetail />
        </Box>
      </Box>
    </Modal>
  );
};

export default EditIssueModal;
