using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace immersiveAPI.Migrations
{
    public partial class passhashingSupport : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "PassHash",
                table: "Users",
                type: "varchar(35)",
                maxLength: 35,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<string>(
                name: "Salt",
                table: "Users",
                type: "varchar(25)",
                maxLength: 25,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Salt",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "PassHash",
                table: "Users",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(35)",
                oldMaxLength: 35);
        }
    }
}
