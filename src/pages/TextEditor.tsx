import { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import type { EditorState as EditorStateType } from 'draft-js';
import type { EditorProps } from 'react-draft-wysiwyg';

const DynamicEditor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
});

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState<EditorStateType>(
    EditorState.createEmpty()
  );

  const handleEditorStateChange = (newEditorState: EditorStateType) => {
    setEditorState(newEditorState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const html = rawContentState.blocks
      .map((block) => {
        const className = block.type === 'unstyled' ? 'paragraph' : `heading-${block.depth}`;
        const inlineStyle = block.inlineStyleRanges
          .map((inlineStyleRange) => {
            const style = inlineStyleRange.style;
            return `${style}`;
          })
          .join(';');

        const entityData = {};
        const entityRanges = block.entityRanges.map((entityRange) => {
          const entityKey = entityRange.key;
          const entity = contentState.getEntity(entityKey);
          const entityType = entity.getType();
          const entityDataKey = `data-${entityType}`;

          entityData[entityDataKey] = entity.getData();

          return {
            offset: entityRange.offset,
            length: entityRange.length,
            key: entityKey,
          };
        });

        const entityDataString = Object.entries(entityData)
          .map(([key, value]) => {
            return `${key}='${JSON.stringify(value)}'`;
          })
          .join(' ');

        const startTag = `<${block.type} class="${className}" style="${inlineStyle}" ${entityDataString}>`;
        const endTag = `</${block.type}>`;

        return `${startTag}${block.text}${endTag}`;
      })
      .join('\n');

    console.log(html);
  };


  return (
    <div>
      <DynamicEditor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbar={{
          options: ['inline', 'blockType', 'fontSize', 'list', 'link', 'image'],
          inline: {
            options: ['bold', 'italic', 'underline'],
          },
          blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
            className: 'toolbar-block-type',
          },
          image: {
            uploadEnabled: true,
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: true, mandatory: false },
          },
          link: {
            defaultTargetOption: '_self',
            showOpenOptionOnHover: true,
          },
        }}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />

      <button onClick={handleSave}>Save</button>
      <style jsx global>{`
        .public-DraftEditor-content {
          font-size: 16px;
          font-family: 'Arial', sans-serif;
        }
        .paragraph {
          margin: 0 0 1em;
        }
        .heading-1 {
          font-size: 2em;
          margin: 0 0 0.5em;
        }
        .heading-2 {
          font-size: 1.5em;
          margin: 0 0 0.5em;
        }
        .heading-3 {
          font-size: 1.17em;
          margin: 0 0 0.5em;
        }
        .heading-4 {
          font-size: 1em;
          margin: 0 0 0.5em;
        }
        .heading-5 {
          font-size: 0.83em;
          margin: 0 0 0.5em;
        }
        .heading-6 {
          font-size: 0.67em;
          margin: 0 0 0.5em;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;




///import type { EditorProps } from 'react-draft-wysiwyg';

/*

const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);*/