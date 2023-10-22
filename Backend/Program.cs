using Backend;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:4200", "https://dotnetbackendangular.azurewebsites.net/");
        });
});
// Add services to the container.
builder.Services.AddDbContext<NoteDbContext>(dbContextOptionsBuilder =>
    dbContextOptionsBuilder.UseSqlite(builder.Configuration["ConnectionStrings:DefaultConnection"]));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions =>
{
    swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "Note Taking Web API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(swaggerUIOptions =>
{
    swaggerUIOptions.DocumentTitle = "Note Taking Web API";
    swaggerUIOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API serving a simple Post model.");
    swaggerUIOptions.RoutePrefix = string.Empty;
});

app.UseCors("CORSPolicy");

app.UseHttpsRedirection();

app.MapNotesEndpoints();

app.Run();
