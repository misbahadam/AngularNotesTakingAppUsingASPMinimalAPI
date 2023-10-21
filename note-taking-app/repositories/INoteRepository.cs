public interface INoteRepository
{
    IEnumerable<Note> GetAllNotes();
    Note GetNoteById(int id);
    Note CreateNote(Note note);
    void UpdateNote(Note note);
    void DeleteNote(int id);
}
