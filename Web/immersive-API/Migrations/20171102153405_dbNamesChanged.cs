using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace immersiveAPI.Migrations
{
    public partial class dbNamesChanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Measurement_Projects_ProjectId",
                table: "Measurement");

            migrationBuilder.DropForeignKey(
                name: "FK_Parameter_Measurement_MeasurementId",
                table: "Parameter");

            migrationBuilder.DropForeignKey(
                name: "FK_Parameter_Unit_UnitId",
                table: "Parameter");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Unit",
                table: "Unit");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Parameter",
                table: "Parameter");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Measurement",
                table: "Measurement");

            migrationBuilder.RenameTable(
                name: "Unit",
                newName: "Units");

            migrationBuilder.RenameTable(
                name: "Parameter",
                newName: "Parameters");

            migrationBuilder.RenameTable(
                name: "Measurement",
                newName: "Measurements");

            migrationBuilder.RenameIndex(
                name: "IX_Parameter_UnitId",
                table: "Parameters",
                newName: "IX_Parameters_UnitId");

            migrationBuilder.RenameIndex(
                name: "IX_Parameter_MeasurementId",
                table: "Parameters",
                newName: "IX_Parameters_MeasurementId");

            migrationBuilder.RenameIndex(
                name: "IX_Measurement_ProjectId",
                table: "Measurements",
                newName: "IX_Measurements_ProjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Units",
                table: "Units",
                column: "UnitId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Parameters",
                table: "Parameters",
                column: "ParameterId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Measurements",
                table: "Measurements",
                column: "MeasurementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Measurements_Projects_ProjectId",
                table: "Measurements",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parameters_Measurements_MeasurementId",
                table: "Parameters",
                column: "MeasurementId",
                principalTable: "Measurements",
                principalColumn: "MeasurementId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parameters_Units_UnitId",
                table: "Parameters",
                column: "UnitId",
                principalTable: "Units",
                principalColumn: "UnitId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Measurements_Projects_ProjectId",
                table: "Measurements");

            migrationBuilder.DropForeignKey(
                name: "FK_Parameters_Measurements_MeasurementId",
                table: "Parameters");

            migrationBuilder.DropForeignKey(
                name: "FK_Parameters_Units_UnitId",
                table: "Parameters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Units",
                table: "Units");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Parameters",
                table: "Parameters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Measurements",
                table: "Measurements");

            migrationBuilder.RenameTable(
                name: "Units",
                newName: "Unit");

            migrationBuilder.RenameTable(
                name: "Parameters",
                newName: "Parameter");

            migrationBuilder.RenameTable(
                name: "Measurements",
                newName: "Measurement");

            migrationBuilder.RenameIndex(
                name: "IX_Parameters_UnitId",
                table: "Parameter",
                newName: "IX_Parameter_UnitId");

            migrationBuilder.RenameIndex(
                name: "IX_Parameters_MeasurementId",
                table: "Parameter",
                newName: "IX_Parameter_MeasurementId");

            migrationBuilder.RenameIndex(
                name: "IX_Measurements_ProjectId",
                table: "Measurement",
                newName: "IX_Measurement_ProjectId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Unit",
                table: "Unit",
                column: "UnitId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Parameter",
                table: "Parameter",
                column: "ParameterId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Measurement",
                table: "Measurement",
                column: "MeasurementId");

            migrationBuilder.AddForeignKey(
                name: "FK_Measurement_Projects_ProjectId",
                table: "Measurement",
                column: "ProjectId",
                principalTable: "Projects",
                principalColumn: "ProjectId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parameter_Measurement_MeasurementId",
                table: "Parameter",
                column: "MeasurementId",
                principalTable: "Measurement",
                principalColumn: "MeasurementId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Parameter_Unit_UnitId",
                table: "Parameter",
                column: "UnitId",
                principalTable: "Unit",
                principalColumn: "UnitId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
