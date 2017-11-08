using System.Collections.Generic;
using System.Linq;
using immersive_API.Entities;
using Microsoft.EntityFrameworkCore;

namespace immersive_API.Services
{
    class ImersiveRepository : IImersiveRepository
    {
        private ImmersiveDbContext _context;
        public ImersiveRepository(ImmersiveDbContext context)
        {
            _context = context;
        }

        public int AddMeasurementForProject(int projectId)
        {
            throw new System.NotImplementedException();
        }

        public int AddProject(Project project, int userId)
        {
            _context.Projects.Add(project);
            _context.SaveChanges();
            var rel = new UserProject{
                UserId = userId,
                ProjectId = project.ProjectId
            };
            project.UserProjects.Add(rel);
            _context.Projects.Update(project);
            _context.SaveChanges();
            return project.ProjectId;
        }

        public int AddUnit(Unit unit)
        {
            throw new System.NotImplementedException();
        }

        public int AddUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user.UserId;
        }

        public Measurement GetMeasurement(int measurementId)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Project> GetMeasurementsForProject(int projectId)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Parameter> GetParametersForMeasurement(int measurementId)
        {
            throw new System.NotImplementedException();
        }

        public Project GetProject(int projectId)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Project> GetProjectsForUser(int userId)
        {

            var user = _context.Users.Where(u => u.UserId == userId).FirstOrDefault();
            var userProjects = _context.Entry(user).Collection(u => u.UserProjects).Query().ToList();
            var projects = new List<Project>();
            foreach(UserProject up in userProjects)
            {
                projects.Add(_context.Projects.Where(p => p.ProjectId == up.ProjectId).FirstOrDefault());
            }
            return projects;
        }

        public int GetUnitId(string unitName)
        {
            throw new System.NotImplementedException();
        }

        public User GetUser(string username)
        {
            return _context.Users.Where(u => u.Username==username).FirstOrDefault();
        }

        public IEnumerable<User> GetUsers()
        {
            return _context.Users.OrderBy(u => u.UserId).ToList();
        }

        public IEnumerable<User> GetUsersForProject(int projectId)
        {
            throw new System.NotImplementedException();
        }

        public bool MeasurementExists(int measurementId)
        {
            throw new System.NotImplementedException();
        }

        public bool ProjectExists(int projectId)
        {
            throw new System.NotImplementedException();
        }

        public bool UnitExists(string unitName)
        {
            throw new System.NotImplementedException();
        }

        public bool UsernameExists(string username)
        {
            return _context.Users.Any(u => u.Username == username);
        }

    }
}