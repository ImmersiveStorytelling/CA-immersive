using Microsoft.AspNetCore.Mvc;
using immersive_API.Entities;
using immersive_API.Services;
using System.Collections.Generic;
using AutoMapper;
using immersive_API.Models;
using FluentValidation.Results;
using System.Threading.Tasks;

namespace immersive_API.Controllers
{
    [Route("/api/projects")]
    public class ProjectsController : Controller
    {
        private IImersiveRepository _imersiveRepo;
        public ProjectsController(IImersiveRepository imersiveRepo)
        {
            _imersiveRepo = imersiveRepo;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetProjects()
        {
            var projectsToMap = _imersiveRepo.GetProjectsForUser(3);
            var projectDtos = Mapper.Map<IEnumerable<ProjectDto>>(projectsToMap);
            return Ok(projectDtos);
        }

        [HttpPost]
        public async Task<IActionResult> AddProject([FromBody]ProjectForCreationDto newProject)
        {
            if (newProject == null)
            {
                return BadRequest("could not be seerialized");
            }

            var validator = new ProjectForCreationDtoValidator();
            var results = validator.Validate(newProject);
            if (!results.IsValid)
            {
                return BadRequest(results);
            }

            Project projectToCreate = Mapper.Map<Project>(newProject);
            projectToCreate.ApiKey = "testing123";
            _imersiveRepo.AddProject(projectToCreate,3);
            return NoContent();
        }
    }
}