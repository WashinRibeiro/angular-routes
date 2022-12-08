# Trabalhando com Rotas no Angular

Links úteis:
- https://balta.io/blog/angular-rotas-guardas-navegacao
- https://medium.com/angularbr/angular-5-trabalhando-com-rotas-8335617fcdbc

---

A diferença entre href e routerLink
 - O href, recarrega para a tela que desejamos ir, ou seja, toda vez carregar o projeto
 - o routerLink já faz essa alteração de componentes dinamicamente sem precisar recarregar todo o projeto. Trazendo assim, a cacaracterística da SPA (Single-page application) 

[routerLink] - Informamos a rota que queremos ir ao dar o click
[routerLinkActive] - Informamos uma ou mais classes que queremos aplicar quando a rota for ativada
[routerLinkActiveOptions] - Informamos que só queremos que a ativação da classe funciona quando aquela configuração for exatamente igual

---

Para recuperar informações dos parâmetros (parâmetros conhecidos no app-routing), 
utilizamos a ActivatedRoute da seguinte forma:
exemplo: http://localhost:4200/portfolio/1

  ```
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((res: any) => {
      console.log(res);
        ...
    })
  }
  ```

---

Para recuperar informações dos queryParams (informações que vem no link, mas não são conhecidos), utilizamos a ActivatedRoute da seguinte forma:
exemplo.: http://localhost:4200/portfolio/1/?name=felipe&token=123

```

constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe((res: any) => {
        console.log('queryParams:', res);
        ...
    })
  }
```

---

Mais uma funcionalidade que podemos aplicar no nosso sistema é o redirecionamento (navegação) para outra tela no próprio typescript do component. Para isso, precisamos importar o Router do '@angular/router' e colocar no constructor:

```
constructor(private navigate: Router) {}
```

Com isso, conseguimos no momento da inicialização do componente, ou então ao chamar alguma função, redirecionar para outra rota, da seguinte forma, por exemplo:

```
ngOnInit(): void {
    setInterval(() => {
      this.navigate.navigate(['/']);
    }, 5000)
}
```
ou
```
navigate() {
    this.navigate.navigate(['/']);
}
```

---

Por fim, podemos ter as rotas children, ou seja, as rotas filhas.
Basicamente elas "herdam" os caminhos iniciais dos seus pais e com isso podemos passá-las como um complemente,
dependendo do nosso objetivo.

```
// portfolio
// portfolio/id
// portfolio/id/token

{ path: 'portfolio', component: CardComponent, children: [
    { path: ':id', component: CardComponent },
    { path: ':id/:token', component: CardComponent },
  ]},
```

Para conseguirmos pegar os parâmetros das rotas filhas, podemos utilizar o firstChild do ActivatedRoute, como abaixo:

```
this.activeRoute.firstChild?.params.subscribe((res: any) => {
  console.log('params filhos:', res);
})

```
---
