using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Threading.Tasks;
using immersive_API.Models;
using immersive_API.Services;
using System.Collections.Generic;
using AutoMapper;


namespace immersive_API.Controllers
{
    [Route("/api/auth")]
    public class AuthController : Controller
    {
        private IImersiveRepository _imersiveRepo;
        private IPasswordHasher _passHasher;
        public AuthController(IImersiveRepository immersiveRepo, IPasswordHasher passHasher)
        {
            _imersiveRepo = immersiveRepo;
            _passHasher = passHasher;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto user)
        {
            if (user == null)
            {
                return BadRequest("the data was unreadable");
            }
            if (!_imersiveRepo.UsernameExists(user.Username))
            {
                return BadRequest("this user does not exist in the database");
            }
            var userFromDb = _imersiveRepo.GetUser(user.Username);
            var passHash = _passHasher.HashPassword(user.Password,userFromDb.Salt);
            if (userFromDb.PassHash.Equals(passHash))
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Username)
                };

                var userIdentity = new ClaimsIdentity(claims, "login");
                ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);

                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal);
                return Ok(Mapper.Map<UserDto>(userFromDb));
            }
            return Unauthorized();
        }
    }
}