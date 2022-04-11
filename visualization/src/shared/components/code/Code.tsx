import { useRef, useCallback } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import css from './Code.module.css';

type Props = {
  value: string,
};

const Code = (props: Props) => {
  const codeMirrorRef = useRef<any>();

  const handleEditorDidMount = useCallback((editor) => {
    codeMirrorRef.current = editor;
  }, []);

  return (
    <div className={css.root}>
      <CodeMirror
        value={props.value}
        editorDidMount={handleEditorDidMount}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }} />
    </div>
  );
};

export default Code;
