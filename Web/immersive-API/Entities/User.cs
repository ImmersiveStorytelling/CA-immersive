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
        [MaxLength(20)]
        public string Username { get; set; }
        [Required]
        [MaxLength(45)]
        public string PassHash {get; set; }
        [Required]
        [MaxLength(25)]
        public string Salt { get; set; }
        public ICollection<UserProject> UserProjects { get; set; }
            = new List<UserProject>();
    }
}