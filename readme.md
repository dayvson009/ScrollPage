# ScrollPages JS

O [ScrollPages JS](https://github.com/dayvson009/ScrollPage) é utilizado para sites de uma só Página, onde você clica no menu e ele desce automaticamente e suave.

**Além de mudar a url e o Título da página**

### Dependência

*  [Classie.js](https://github.com/dayvson009/ScrollPage/blob/readme.md/example/classie.js) é utilizado para (adicionar / remover / verificar ) Classe. 

### Css

```css
.fix{position: fixed;top:0;} // Deixa o menu fixo.
.active{color:#0f0;} //Active do menu.
```

### HTML

#### Estrutura básica.

O pai dos links terá um id `#menu`, que será o menu fixo.

Cada link do menu terá uma classe `.sp-link` e um `data-name` com o nome da pagina, na qual será a `âncora` e o título da pagina `title`.

```html
<nav id="menu" class="">
	<a href="" class="sp-link" title="Page 1" data-name="page1">page1 / </a>
	<a href="" class="sp-link" title="Page 2" data-name="page2">page2 / </a>
	<a href="" class="sp-link" title="Page 3" data-name="page3">page3 / </a>
</nav>

```

Cada página terá um id com o nome da pagina igual ao `data-name` do link acima.
E uma classe `.spages` que indica qual pagina atual

```html
<div class="div1 spages" id="page1">Page1</div>

<div class="div2 spages" id="page2">Page2</div>

<div class="div3 spages" id="page3">Page3</div>
```

### JS

Modo de chamar pelo JS

```js

new scrollPage.init({

	'title' : ' - '+document.title
	,'attr_title' 	: 'title'
	,'page' 		: '.spages' 
	,'classlnk' 	: '.sp-link'
	,'hash' 	: '!/'
	,'parentMenu' 	: 'menu'
	,'afterFix' 	: 'page1'
	,'classFix' 	: 'fix'
	,'classActive' 	: 'active'
	,'data_atribute': 'data-name'
	,'duration' 	: '500'

});

```

#### Opções


*  `'title' : ' - '+document.title` Define como vai ser mostrado o título na aba do navegador. 
`' - '+document.title` fica `PáginaAtual - Seu site`.

*  `'attr_title' : 'title'` Define o attributo do titulo.

*  `'page' : '.spages' ` Define a Classe das paginas, onde está o id das paginas também. Serve para que o plugin identifique o local exato do elemento.

*  `'classlnk' : '.sp-link'` Define a Classe do link a ser clicado, no menu ou em um link qualquer da sua página.

*  `'classActive' : 'active'` Define a Classe do active do menu.

*  `'data_atribute': 'data-name'` Define o atributo que indica para qual `#id` da pagina tem que ir. 

*  `'hash' : '!/'` Define o Hash/Url `http://Seusite.com/!#/pagina1`. Valores: `false` = defalt, ou pode ser personalizado.

*  `'parentMenu' : 'menu'` Define o Id do "pai" que ficará fixo.

*  `'afterFix' : 'page1'` Define depois de qual pagina o menu será fixo. Valores: `false` = ele nao fica fixo.

*  `'classFix' : 'fix'` Define a Classe que vai ser adicionada para o menu ficar fixo, se a opção acima for diferente de `false`

*  `'duration' : '500'` Define o tempo do Scrolling da pagina.
