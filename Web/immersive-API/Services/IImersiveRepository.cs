using System.Collections.Generic;
using immersive_API.Entities;

namespace immersive_API.Services
{
    public interface IImersiveRepository
    {
        IEnumerable<User> GetUsers();
        IEnumerable<User> GetUsersForProject(int projectId);
        User GetUser(string username);
        bool UsernameExists(string username);
        int AddUser(User user);
        IEnumerable<Project> GetProjectsForUser(int userId);
        Project GetProject(int projectId);
        int AddProject(Project project, int userId);
        bool ProjectExists(int projectId);
        IEnumerable<Project> GetMeasurementsForProject(int projectId);
        Measurement GetMeasurement(int measurementId);
        bool MeasurementExists(int measurementId);
        int AddMeasurementForProject(int projectId);
        IEnumerable<Parameter> GetParametersForMeasurement(int measurementId);
        int GetUnitId(string unitName);
        bool UnitExists(string unitName);
        int AddUnit(Unit unit);

    }
}