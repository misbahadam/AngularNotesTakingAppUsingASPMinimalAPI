using Backend.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;
public class NoteDbContext : DbContext
{
    public NoteDbContext(DbContextOptions<NoteDbContext> options) : base(options)
    {
    }

    public DbSet<Note> Notes { get; set; }
}
