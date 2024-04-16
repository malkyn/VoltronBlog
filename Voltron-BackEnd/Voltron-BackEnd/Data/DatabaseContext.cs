using Microsoft.EntityFrameworkCore;
using Voltron_BackEnd.Models;

namespace Voltron_BackEnd.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Personagem>? Personagens { get; set; }
    }
}
