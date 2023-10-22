using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Backend.Data.Models;


namespace Backend;

public static class NotesEndPoints
{
    // Extends WebApplication.
    
    public static void MapNotesEndpoints(this WebApplication app)
    {
        app.MapGet("/notes", async (NoteDbContext dbContext) =>
        {
            List<Note> allNotes = await dbContext.Notes.ToListAsync();

            return Results.Ok(allNotes);
        });
        
        app.MapGet("/notes/{Id}", async (int Id, NoteDbContext dbContext) =>
        {
            Note? post = await dbContext.Notes.FindAsync(Id);

            if (post != null)
            {
                return Results.Ok(post);
            }
            else
            {
                return Results.NotFound();
            }
        });

        app.MapPost("/notes", async (NoteDTO noteToCreateDTO, NoteDbContext dbContext) =>
        {
            // Let EF Core auto-increment the ID.
            Note NoteToCreate = new()
            {
                Id = 0,
                Title = noteToCreateDTO.Title,
                Body = noteToCreateDTO.Body,
                CreatedDate = noteToCreateDTO.CreatedDate
            };

            dbContext.Notes.Add(NoteToCreate);

            bool success = await dbContext.SaveChangesAsync() > 0;

            if (success)
            {
                return Results.Created($"/notes/{NoteToCreate.Id}", NoteToCreate);
            }
            else
            {
                // 500 = internal server error.
                return Results.StatusCode(500);
            }
        });

        app.MapPut("/notes/{Id}", async (int Id, NoteDTO updatedNoteDTO, NoteDbContext dbContext) =>
        {
            var noteToUpdate = await dbContext.Notes.FindAsync(Id);

            if (noteToUpdate != null)
            {
                noteToUpdate.Title = updatedNoteDTO.Title;
                noteToUpdate.Body = updatedNoteDTO.Body;
                noteToUpdate.CreatedDate = updatedNoteDTO.CreatedDate;

                bool success = await dbContext.SaveChangesAsync() > 0;

                if (success)
                {
                    return Results.Ok(noteToUpdate);
                }
                else
                {
                    // 500 = internal server error.
                    return Results.StatusCode(500);
                }
            }
            else
            {
                return Results.NotFound();
            }
        });

        app.MapDelete("/notes/{Id}", async (int Id, NoteDbContext dbContext) =>
        {
            Note? noteToDelete = await dbContext.Notes.FindAsync(Id);

            if (noteToDelete != null)
            {
                dbContext.Notes.Remove(noteToDelete);

                bool success = await dbContext.SaveChangesAsync() > 0;

                if (success)
                {
                    return Results.NoContent();
                }
                else
                {
                    // 500 = internal server error.
                    return Results.StatusCode(500);
                }
            }
            else
            {
                return Results.NotFound();
            }
        });
    }
}