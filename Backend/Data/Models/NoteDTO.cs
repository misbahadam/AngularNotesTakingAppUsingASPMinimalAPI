// NoteDTO.cs

namespace Backend.Data.Models;

public class NoteDTO
{
    public string Title { get; set; }
    public string Body { get; set; }
    public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
}