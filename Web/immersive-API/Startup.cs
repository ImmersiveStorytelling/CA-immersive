using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using AutoMapper;
using FluentValidation;
using immersive_API.Entities;
using immersive_API.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace immersive_API
{
    public class Startup
    {

        public static IConfigurationRoot Configuration;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appSettings.json", optional:false, reloadOnChange:true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddAuthentication(o =>
            {
                o.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(options =>
            {
                options.AccessDeniedPath = new PathString("/");
                options.LoginPath = new PathString("/");
                options.ExpireTimeSpan = new TimeSpan(10,0,0,0);
            });

            string connectionstring = Startup.Configuration["connectionstring"];
            services.AddEntityFrameworkNpgsql().AddDbContext<ImmersiveDbContext>(o => o.UseNpgsql(connectionstring));

            services.AddSingleton<IImersiveRepository, ImersiveRepository>();
            services.AddSingleton<IPasswordHasher, PasswordHasher>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStatusCodePages();

            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Entities.User,Models.UserDto>();
                cfg.CreateMap<Entities.Project, Models.ProjectDto>();
                cfg.CreateMap<Models.UserForCreationDto, Entities.User>();
                cfg.CreateMap<Models.ProjectForCreationDto, Entities.Project>();
            });
            app.UseAuthentication();

            app.UseMvc();
        }
    }
}
