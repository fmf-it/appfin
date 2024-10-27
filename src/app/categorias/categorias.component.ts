import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {

  displayedColumns: string[] = ['nome', 'acoes'];
  categorias = [
    { nome: 'Alimentação' },
    { nome: 'Transporte' },
    { nome: 'Educação' }
  ];

  constructor(private router: Router) {}

  irParaNovaCategoria() {
    this.router.navigate(['/nova-categoria']); // Substitua pela rota correta de CategoriaFormComponent
  }

  editarCategoria(categoria: any) {
    // Código para editar a categoria
  }

  deletarCategoria(categoria: any) {
    // Código para deletar a categoria
  }
}
