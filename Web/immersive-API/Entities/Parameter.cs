using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace immersive_API.Entities
{
    public class Parameter
    {
        [Key]
        public int ParameterId { get; set; }
        [Required]
        public DateTime Timestamp { get; set; }
        [Required]
        [MaxLength(20)]
        public string Value { get; set; }
        public int MeasurementId { get; set; }
        [ForeignKey("MeasurementId")]
        public Measurement Measurement { get; set; }
        public int UnitId { get; set; }
        [ForeignKey("UnitId")]
        public Unit Unit { get; set; }
    }
}