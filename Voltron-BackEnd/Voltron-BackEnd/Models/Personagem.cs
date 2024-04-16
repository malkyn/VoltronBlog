namespace Voltron_BackEnd.Models
{
    public class Personagem
    {
        public int ID { get; set; }
        public string? Nome { get; set; }
        public string? Descricao { get; set; }
        public string? Idade { get; set; }
        public string? Curiosidades { get; set; }
        public string? ImagemPerfilURL { get; set; }
        public DateTime DataDeCriacao { get; set; } = DateTime.Now.ToLocalTime();
        public DateTime DataDeAlteracao { get; set; }
    }
}
