import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Certifique-se de que não há código que afete a exibição da imagem
  }

  entrar() {
    alert('Entrar');
  }

  cadastrar() {
    alert('Cadastrar no Usuário');
  }

  recuperarSenha() {
    alert('Recuperar Senha do Usuário');
  }
}
