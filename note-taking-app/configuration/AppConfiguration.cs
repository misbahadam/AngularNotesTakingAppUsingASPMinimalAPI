using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;

public static class AppConfiguration
{
    public static void ConfigureDatabase(IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<NoteDbContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
        });
    }
}
