using System;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace immersive_API.Services
{
    public class PasswordHasher : IPasswordHasher
    {
        private RandomNumberGenerator rng;
        public PasswordHasher()
        {
            rng = RandomNumberGenerator.Create();
        }
        public string HashPassword(string pass, string salt)
        {
            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: pass,
            salt: Convert.FromBase64String(salt),
            prf: KeyDerivationPrf.HMACSHA512,
            iterationCount: 10000,
            numBytesRequested: 256 / 8));
            return hashed;
        }

        public string GenerateSalt()
        {
            byte[] salt = new byte[128 / 8];
            rng.GetBytes(salt);
            return Convert.ToBase64String(salt);
        }
    }
}
