// NotesController.cs
[Route("api/notes")]
[ApiController]
public class NotesController : ControllerBase
{
    private readonly INoteRepository _noteRepository;

    public NotesController(INoteRepository noteRepository)
    {
        _noteRepository = noteRepository;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Note>> GetNotes()
    {
        Console.WriteLine("Hi")
        var notes = _noteRepository.GetAllNotes();
        return Ok(notes);
    }

    [HttpPost]
    public ActionResult<Note> CreateNote([FromBody] Note note)
    {
        if (note == null)
        {
            return BadRequest("Note object is null");
        }

        var createdNote = _noteRepository.CreateNote(note);
        return CreatedAtAction(nameof(GetNotes), new { id = createdNote.Id }, createdNote);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateNote(int id, [FromBody] Note note)
    {
        if (note == null)
        {
            return BadRequest("Note object is null");
        }

        var existingNote = _noteRepository.GetNoteById(id);
        if (existingNote == null)
        {
            return NotFound();
        }

        _noteRepository.UpdateNote(note);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteNote(int id)
    {
        var existingNote = _noteRepository.GetNoteById(id);
        if (existingNote == null)
        {
            return NotFound();
        }

        _noteRepository.DeleteNote(id);
        return NoContent();
    }
}
