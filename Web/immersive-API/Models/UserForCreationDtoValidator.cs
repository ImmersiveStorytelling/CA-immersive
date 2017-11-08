using FluentValidation;

namespace immersive_API.Models
{
    public class UserForCreationDtoValidator :AbstractValidator<UserForCreationDto>
    {
        public UserForCreationDtoValidator(){
            RuleFor(user => user.Username).NotEmpty().WithMessage("you must provide a username");
            RuleFor(user => user.Username).Length(1,20).WithMessage("your username is too long");
            RuleFor(user => user.Password).NotEmpty().Length(8,200).WithMessage("your password is too short");
        }
    }
}