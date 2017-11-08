using System.Collections.Generic;

namespace immersive_API.Models
{
    public class ProjectDto
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string ApiKey { get; set; }
        public ICollection<UserDto> Users { get; set; }
    }
}