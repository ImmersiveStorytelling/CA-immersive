using Microsoft.EntityFrameworkCore;

namespace immersive_API.Entities
{
    public class ImmersiveDbContext : DbContext
    {
        public ImmersiveDbContext(DbContextOptions<ImmersiveDbContext> options):base(options)
        {
            Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<UserProject>()
                .HasKey(u => new {u.ProjectId, u.UserId});
            modelBuilder.Entity<UserProject>()
                .HasOne(up => up.Project)
                .WithMany(p => p.UserProjects)
                .HasForeignKey(up => up.ProjectId);
            modelBuilder.Entity<UserProject>()
                .HasOne(up => up.User)
                .WithMany(u => u.UserProjects)
                .HasForeignKey(up => up.UserId);
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Measurement> Measurements { get; set; }
        public DbSet<Parameter> Parameters { get; set; }
        public DbSet<Unit> Units { get; set; }

    }
}