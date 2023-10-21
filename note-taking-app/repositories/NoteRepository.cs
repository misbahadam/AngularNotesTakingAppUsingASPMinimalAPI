public class NoteRepository : INoteRepository
{
    private readonly NoteDbContext _context;

    public NoteRepository(NoteDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Note> GetAllNotes()
    {
        return _context.Notes.ToList();
    }

    public Note GetNoteById(int id)
    {
        return _context.Notes.FirstOrDefault(n => n.Id == id);
    }

    public Note CreateNote(Note note)
    {
        _context.Notes.Add(note);
        _context.SaveChanges();
        return note;
    }

    public void UpdateNote(Note note)
    {
        _context.Notes.Update(note);
        _context.SaveChanges();
    }

    public void DeleteNote(int id)
    {
        var note = _context.Notes.FirstOrDefault(n => n.Id == id);
        if (note != null)
        {
            _context.Notes.Remove(note);
            _context.SaveChanges();
        }
    }
}
