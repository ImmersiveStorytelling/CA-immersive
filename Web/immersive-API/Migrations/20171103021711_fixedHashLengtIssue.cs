using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace immersiveAPI.Migrations
{
    public partial class fixedHashLengtIssue : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PassHash",
                table: "Users",
                type: "varchar(45)",
                maxLength: 45,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 35);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PassHash",
                table: "Users",
                maxLength: 35,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(45)",
                oldMaxLength: 45);
        }
    }
}
