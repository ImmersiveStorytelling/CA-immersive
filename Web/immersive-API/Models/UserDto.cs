using System.Collections.Generic;

namespace immersive_API.Models
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public ICollection<ProjectDto> Projects { get; set; }
    }
}