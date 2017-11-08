using Microsoft.AspNetCore.Mvc;
using immersive_API.Entities;
using immersive_API.Services;
using System.Collections.Generic;
using AutoMapper;
using immersive_API.Models;
using FluentValidation.Results;

namespace immersive_API.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private IImersiveRepository _immersiveRepo;
        private IPasswordHasher _passHasher;
        public UsersController(IImersiveRepository immersiveRepo, IPasswordHasher passHasher){
            _immersiveRepo = immersiveRepo;
            _passHasher = passHasher;
        }
        [HttpGet]
        public IActionResult GetUsers()
        {
            IEnumerable<User> users = _immersiveRepo.GetUsers();
            var results = Mapper.Map<IEnumerable<UserDto>>(users);
            return Ok(results);
        }

        [HttpPost]
        public IActionResult AddUser([FromBody]UserForCreationDto newUser)
        {
            if (newUser == null)
            {
                return BadRequest("unserializable");
            }

            var validator = new UserForCreationDtoValidator();
            ValidationResult results = validator.Validate(newUser);
            if (!results.IsValid)
            {
                return BadRequest(results);
            }

            if (_immersiveRepo.UsernameExists(newUser.Username))
            {
                return BadRequest("this username already exists");
            }

            newUser.Salt = _passHasher.GenerateSalt();
            newUser.PassHash = _passHasher.HashPassword(newUser.Password, newUser.Salt);
            

            User toWriteUser = Mapper.Map<User>(newUser);

            _immersiveRepo.AddUser(toWriteUser);

            return NoContent();
        }
    }
}