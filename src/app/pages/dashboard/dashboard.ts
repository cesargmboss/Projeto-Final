import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  // Dados Simulados para os Cards de Métricas
  metricas = [
    { titulo: 'Veículos Vendidos (Mês)', valor: '12.450', icone: '🚗', cor: '#1351d8' },
    { titulo: 'Satisfação do Cliente', valor: '94%', icone: '⭐', cor: '#00274C' },
    { titulo: 'Receita Total (Milhões)', valor: 'R$ 520M', icone: '💰', cor: '#1b357e' },
    { titulo: 'Novos Leads', valor: '3.890', icone: '👥', cor: '#6c757d' }
  ];

  // Dados Simulados para o Gráfico de Vendas
  dadosVendas = [
    { mes: 'Jan', vendas: 5200 },
    { mes: 'Fev', vendas: 6500 },
    { mes: 'Mar', vendas: 8100 },
    { mes: 'Abr', vendas: 7300 },
    { mes: 'Mai', vendas: 9500 },
    { mes: 'Jun', vendas: 12450 } // Mês Atual
  ];
  
  // Dados Simulados para Tabela/Lista
  modelosMaisVendidos = [
    { modelo: 'Ford Ranger', quantidade: 3100, porcentagem: 25 },
    { modelo: 'Ford Maverick', quantidade: 2500, porcentagem: 20 },
    { modelo: 'Ford Bronco', quantidade: 1800, porcentagem: 14.5 },
    { modelo: 'Ford Mustang', quantidade: 900, porcentagem: 7.2 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Aqui você faria chamadas a serviços para buscar dados reais
  }

}