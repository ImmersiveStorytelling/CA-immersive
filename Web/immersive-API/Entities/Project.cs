using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace immersive_API.Entities
{
    public class Project
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProjectId { get; set; }
        [Required]
        [MaxLength(20)]
        public string ProjectName { get; set; }
        [Required]
        [MaxLength(50)]
        public string ApiKey { get; set; }
        public ICollection<UserProject> UserProjects {get; set;}
            = new List<UserProject>();
        public ICollection<Measurement> Measurements { get; set; }
            = new List<Measurement>();
    }
}