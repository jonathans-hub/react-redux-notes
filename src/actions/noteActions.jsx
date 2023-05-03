export const addNote = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};

export const removeNote = (note_id) => {
  return {
    type: "REMOVE_NOTE",
    payload: note_id, 
  };
};

export const editNote =(note_id, new_note)=>{
  return{
    type: "EDIT_NOTE",
    payload: {note_id, new_note},
    }
}