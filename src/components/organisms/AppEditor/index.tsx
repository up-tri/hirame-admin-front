import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { AppEditorButton } from "../AppEditorButton"
import styles from "./style.module.scss"

export const AppEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: "<p>Hello!</p>"
  })
  if (!editor) {
    return null
  }

  return (
    <>
      <AppEditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
      >H1</AppEditorButton>
      <AppEditorButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
      >H2</AppEditorButton>
      <AppEditorButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
      >B</AppEditorButton>
      <AppEditorButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
      >I</AppEditorButton>
      <EditorContent className={styles.AppEditor} editor={editor} />
    </>
  )
}