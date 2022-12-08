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
    })
  }
  ```

---

Para recuperar informações dos queryParams (informações que vem no link, mas não são conhecidos), utilizamos a ActivatedRoute da seguinte forma:
exemplo.: http://localhost:4200/portfolio/1/?name=felipe&token=123

```
    this.activeRoute.queryParams.subscribe((res: any) => {
      console.log('queryParams:', res);
    })
```
