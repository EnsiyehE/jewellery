namespace WebAPI.Models
{
    public class Basket
    {
        public int Id { get; set; }
        public string? CustomerID { get; set; }
        public List<Jewelry>? Items { get; set; }
    }
}
