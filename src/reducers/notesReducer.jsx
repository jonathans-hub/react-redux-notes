const initialState = {
  notes: [
    {
      title: "Redux",
      date: "02/21/2022",
      text: "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
      id: "dfsdjkvnsdjkfnskf",
    },
    {
      title: "re: Meet Joe Black",
      date: "November 2, 1998",
      text: "“Take love, multiply it by infinity and take it to the depths of forever.. and you still have only a glimpse of how I feel for you.”",
      id: "45fsdsjkvnsdjkfnskf",
    },
    {
      title: "COVID-19",
      date: "2019",
      text: "I am here player. Next year is a big one lol:)",
      id: "weonbfjkvnwvnsdjkfnskf",
    },
  ],
};

export const notesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      const newNote = {
        title: payload.title,
        date: payload.date,
        text: payload.text,
        id: Math.random().toString(),
      };
      return { ...state, notes: [...state.notes, newNote] };
    case "REMOVE_NOTE":
      const undeletednotes = state.notes.filter((note) => note.id !== payload);
      return { notes: undeletednotes };
    case "EDIT_NOTE":
      return {
        notes: state.notes.map((note) =>
          note.id === payload.note_id ? payload.new_note : note
        ),
      };
    default:
      return state;
  }
};
