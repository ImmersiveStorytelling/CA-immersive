using Microsoft.AspNetCore.Mvc;
using immersive_API.Entities;

namespace immersive_API.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private ImmersiveDbContext _immersiveDbContext;
        public UsersController(ImmersiveDbContext immersiveDbContext){
            _immersiveDbContext = immersiveDbContext;
        }
        [HttpGet]
        public IActionResult GetResponse()
        {
            return Ok("result from controller");
        }

        [HttpPost]
        public IActionResult GiveResponse()
        {
            return Ok("result from post");
        }
    }
}