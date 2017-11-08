using System;
using immersive_API.Services;

namespace immersive_API.Models
{
    public class UserForCreationDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Salt { get; set;}
        public string PassHash {get; set;}
    
        
        
    }
}