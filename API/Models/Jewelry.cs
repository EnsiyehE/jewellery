﻿namespace WebAPI.Models
{
    public class Jewelry
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Price { get; set; }
        public string? Currency => "USD";
    }
}
