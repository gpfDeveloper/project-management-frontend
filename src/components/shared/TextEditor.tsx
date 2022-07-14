// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Box } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FunctionComponent, useState } from 'react';

const config = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['clean'],
    ],
  },
};

const TextEditor: FunctionComponent = () => {
  const [editorState, setEditorState] = useState({ text: '' });
  const changeHandler = (value: string) => {
    setEditorState({ text: value });
  };

  return (
    <Box sx={{ '& .ql-editor': { minHeight: 120 } }}>
      <ReactQuill
        value={editorState.text}
        onChange={changeHandler}
        {...config}
      />
    </Box>
  );
};

export default TextEditor;
