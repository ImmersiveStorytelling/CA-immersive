using FluentValidation;

namespace immersive_API.Models
{
    public class ProjectForCreationDtoValidator : AbstractValidator<ProjectForCreationDto>
    {
        public ProjectForCreationDtoValidator()
        {
            RuleFor(p => p.ProjectName).NotEmpty().WithMessage("you must provide a name");
        }
    }
}