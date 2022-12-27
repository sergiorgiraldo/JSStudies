import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
	/**
	 * Delete notes
	 */

	const [notes, setNotes] = React.useState(
		() => JSON.parse(localStorage.getItem("notes")) || []
	);
	const [currentNoteId, setCurrentNoteId] = React.useState(
		(notes[0] && notes[0].id) || ""
	);

	React.useEffect(() => {
		console.log("update local storage");
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	function createNewNote() {
		const newNote = {
			id: nanoid(),
			body: "# Type your markdown note's title here"
		};
		setNotes((prevNotes) => [newNote, ...prevNotes]);
		setCurrentNoteId(newNote.id);
	}

	function updateNote(text) {
		setNotes((oldNotes) => {
			const idx = findIndexOfCurrentNote();
			oldNotes.splice(0, 0, oldNotes.splice(idx, 1)[0]);
			return oldNotes.map((oldNote) => {
				return oldNote.id === currentNoteId
					? { ...oldNote, body: text }
					: oldNote;
			});
		});
	}

	function findCurrentNote() {
		return (
			notes.find((note) => {
				return note.id === currentNoteId;
			}) || notes[0]
		);
	}

	function findIndexOfCurrentNote() {
		return (
			notes.findIndex((note) => {
				return note.id === currentNoteId;
			}) || 0
		);
	}

	function deleteNote(event, which) {
		event.stopPropagation();
		setNotes((prevNotes) => {
			var prevNotes_ = [...prevNotes];
			var idx = prevNotes_.findIndex((note) => {
				return note.id === which;
			});
			prevNotes_.splice(idx, 1);
			return prevNotes_;
		});
	}

	return (
		<main>
			{notes.length > 0 ? (
				<Split
					sizes={[30, 70]}
					direction="horizontal"
					className="split">
					<Sidebar
						notes={notes}
						currentNote={findCurrentNote()}
						setCurrentNoteId={setCurrentNoteId}
						newNote={createNewNote}
						deleteNote={deleteNote}
					/>
					{currentNoteId && notes.length > 0 && (
						<Editor
							currentNote={findCurrentNote()}
							updateNote={updateNote}
						/>
					)}
				</Split>
			) : (
				<div className="no-notes">
					<h1>You have no notes</h1>
					<button className="first-note" onClick={createNewNote}>
						Create one now
					</button>
				</div>
			)}
		</main>
	);
}
