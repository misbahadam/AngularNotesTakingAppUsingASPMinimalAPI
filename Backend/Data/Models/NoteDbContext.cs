using Backend.Data.Models;
using Microsoft.EntityFrameworkCore;

public class NoteDbContext : DbContext
{
    public NoteDbContext(DbContextOptions<NoteDbContext> options) : base(options)
    {
    }

    public DbSet<Note> Notes { get; set; }
}
