========================
Tecnologias de front end
========================

Este repositório inicia uma série de trabalhos sobre tecnologias de front-end. 
Todos os trabalhos poderão ser feitos em dupla, com entregas a cada semana. O 
tema do projeto é desenvolver uma landing page para algum projeto. Por padrão,
assumirei que o projeto será o que desenvolveremos juntos ao longo do semestre
(sistema de consulta com votação baseada no método `"ranked pairs" <https://en.wikipedia.org/wiki/Ranked_pairs>`). Vocês também 
podem escolher desenvolver uma landing page para outro projeto pessoal.


Trabalho 1
========== 

A primeira parte (entrega dia 28/03) consiste em propor o HTML para esta página
baseado nas recomendações do https://html5boilerplate.com/. Copiei a estrutura
básica do projeto no repositório, mas vale a pena consultar a documentação para 
entender as escolhas adotadas neste modelo.

Esta primeira entrega *não* avaliará nem o CSS nem o Javascript. Não é necessário
incluir conteúdo real e as partes de texto longo podem ser preenchidas com 
conteúdo da `Wikipedia <http://wikipedia.com>` ou `Lorem Ipsum <http://generator.lorem-ipsum.info/>`

Elementos que devem aparecer na página:

* Cabeçalho com links internos à página e logo
* Elemento `hero <https://en.wikipedia.org/wiki/Hero_image>` com título e slogan do projeto
* Conteúdo principal:
    * Seção de texto preenchido com Lorem ipsum e algumas (~2) imagens. O parágrafo de texto deve conter algumas palavras em negrito.
    * Seção de cards com ícone + título + frase (entre 3 e 4 cards)
    * Seção com "depoimentos" sobre o projeto
* Rodapé com links importantes + copyright

Pontos de avaliação:

* Seguiu as recomendações do html5 Boilerplate
* Escolheu tags semânticas ao invés de uma sopa de divs
* Não utilizou tags descontinuadas de HTML4 


Trabalho 2
==========

A segunda parte (entrega dia 04/04) consiste em fazer a primeira versão para a
folha de estilo do site. Para isto, vamos utilizar a metodologia  
junto com `SuitCSS <https://suitcss.github.io/>`. Vocês devem montar uma versão
muito básica do estilo para plataformas móveis. 

O CSS (ou Sass) deve incluir:

* Todos as listas de elementos (links, cards, etc) devem remover a decoração dos bullets
* Todos os depoimentos menos o primeiro na seção de depoimentos devem ser ocultos

Adicionalmente, cada grupo deve escolher duas das seguintes tarefas:

* Cabeçalho com barra de navegação é fixo no topo da página
* Algum elemento ativa alguma animação ao carregar a página (ex.: fade in)
* Os cards possuem algum tipo de moldura e sombra
* Algum elemento insere conteúdo via CSS (ex, adicionar aspas antes e depois das citações na seção de citações)
* Algum efeito de imagem no "hero" como blur, paralaxe, etc.

Pontos de avaliação:

* Nomeou as classes de acordo com o SuiteCSS e criou um "componente"
* Manteve a especificidade baixa utilizando as classes sugeridas pelo SuiteCSS
* Desenhou o layout para celulares (e não para desktop)
* Evitou criação de divs adicionais desnecessárias


Trabalho 3
==========

A terceira parte (entrega dia 11/04) consiste em implementar o design responsivo
para o site e fazê-lo funcionar adequadamente em telas maiores. Esta etapa também
é onde reorganizaremos nosso CSS como `Sass <https://sass-lang.com/>` + `ITCSS <https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/>`
Cada dupla deve fazer:

* Reorganizar o código como Sass + ITCSS
* Projeto deve definir configurações globais como breaking points, tipo de fonte e cores principais
* Algumas regras aplicando estas configurações globais à página
* Utilizar media queries para aumentar a fonte do elemento hero quando estivermos no desktop
* Utilizar flex-box na seção de cards pra que eles se alinhem horizontalmente no
  desktop e verticalmente no celular

Pontos de avaliação:

* Utilizou a arquitetura ITCSS corretamente
* Manteve o HTML intacto


Trabalho 4
==========

No último trabalho desta série (entrega dia 18/04), vamos implementar interações
com o Javascript + jQuery. Neste trabalho, não podemos utilizar bibliotecas 
externas de UI e devemos implementar a funcionalidade com Javascript + jQuery 
puros.

Cada grupo deve:

* Implementar os depoimentos como um carrocel animado

E além disto escolher algum dos sub-projetos:

* Requisitar as informação dos depoimentos via AJAX para um arquivo "depoimento.json"
* Implementar um timer que roda o carrocel automaticamente se o usuário não clicar para avançar
* Criar uma lógica que inicializa todos elementos de uma página com o atributo <div is-carrousel> como um carrocel 
