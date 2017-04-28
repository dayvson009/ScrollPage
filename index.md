# ScrollPages JS

O [ScrollPages JS](https://github.com/dayvson009/ScrollPage) é utilizado para sites de uma só Página, onde você clica no menu e ele desce automaticamente e suave.

### Dependência

*  [Classie.js](https://github.com/dayvson009/ScrollPage/blob/readme.md/example/classie.js) é utilizado para (adicionar / remover / verificar ) Classe. 

### Css

```css
.fix{position: fixed;top:0;} // Deixa o menu fixo
.active{color:#0f0;} //Active do menu `
```

### HTML

#### Estrutura básica.

O pai dos links terá um id `menu`, que será o menu fixo.

Cada link do menu terá uma class `.sp-link` e um `data-name` com o nome da pagina, na qual será a `ancora`.

```html
<nav id="menu" class="">
	<a href="" class="sp-link" data-name="page1">page1 / </a>
	<a href="" class="sp-link" data-name="page2">page2 / </a>
	<a href="" class="sp-link" data-name="page3">page3 / </a>
</nav>

```

Cada página terá um id com o nome da pagina igual ao `data-name` do link acima.

```html
<div class="div1 spages" id="page1">Page1</div>

<div class="div2 spages" id="page2">Page2</div>

<div class="div3 spages" id="page3">Page3</div>
```