using Microsoft.AspNetCore.Mvc;

namespace immersive_API.Controllers
{
    [Route("/users")]
    public class usersController : Controller
    {
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