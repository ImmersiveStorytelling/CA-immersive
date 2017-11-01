using System.Collections.Generic;

namespace immersive_API.Entities
{
    public class User
    {
        public int UserId {get; set;}
        public string PassHash {get; set; }
        public ICollection<UserProject> UserProjects { get; set; }
            = new List<UserProject>();
    }
}