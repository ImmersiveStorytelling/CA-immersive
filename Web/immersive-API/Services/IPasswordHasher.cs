namespace immersive_API.Services
{
    public interface IPasswordHasher
    {
        string HashPassword(string pass, string salt);
        string GenerateSalt();
    }
}