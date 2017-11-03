using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace immersive_API.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId {get; set;}
        [Required]
        public string PassHash {get; set; }
        public ICollection<UserProject> UserProjects { get; set; }
            = new List<UserProject>();
    }
}