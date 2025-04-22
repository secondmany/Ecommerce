
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models{
    [Table("Categories")]

    public class Category{
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id {get; set;}

        [Required]
        [StringLength(100)]
        [Column(TypeName = "varchar(100)")]
        public string Name {get; set;}

        [StringLength(255)]
        [Column(TypeName = "varchar(255)")]
        public string? Description {get; set;}

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt {get; set;} = DateTime.UtcNow;
 
    }
}