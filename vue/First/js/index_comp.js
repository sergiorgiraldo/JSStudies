var data = {
	livros: [
		{
			titulo: "Orange is The New Black",
			autor: "Piper Kerman",
			checked: true
		},
		{
			titulo: "A Origem das Espécies",
			autor: "Charles Darwin",
			checked: false
		}
	],
	cabecalho: "Livros Preferidos",
	novoLivro: "",
	novoAutor: "",
	simplePlaceholder: ""
};

/**
 * Declarando os componentes
 */
var ItensComp = Vue.extend({
	data: function () {
		return data;
	},
	template:
		"<ul>" +
		'           <li v-for="livro in livros" :class="{ \'removido\': livro.checked }">' +
		'             <div class="checkbox">' +
		"             	<label>" +
		'                	<input type="checkbox" v-model="livro.checked"> ' +
		"                	<big>{{ livro.titulo }}</big> - <small>{{ livro.autor }}</small>" +
		"             	</label>" +
		"             </div>" +
		"           </li>" +
		"         </ul>"
});

var AlteraTituloComp = Vue.extend({
	data: function () {
		return data;
	},
	template: '<input v-model="cabecalho"/>'
});

var MostraMeuPlaceholder = Vue.extend({
	data: function () {
		return data;
	},
	template: '<input v-model="simplePlaceholder"/>'
});

var AddItemComp = Vue.extend({
	data: function () {
		return data;
	},
	methods: {
		addLivro: function () {
			var titulo, autor;
			titulo = this.novoLivro.trim();
			autor = this.novoAutor.trim();
			if (titulo) {
				this.livros.push({
					titulo: titulo,
					autor: autor,
					checked: false
				});
				this.novoLivro = "";
				this.novoAutor = "";
			}
		}
	},
	template:
		"<div>" +
		'<input v-model="novoLivro" @keyup.enter="addLivro"' +
		' placeholder="Adicionar título do livro" type="text" class="form-control" /><br/>' +
		'<input v-model="novoAutor" @keyup.enter="addLivro"' +
		' placeholder="Adicionar autor do livro" type="text" class="form-control" /> <br/>' +
		'<span class="input-group-btn">' +
		'  <button @click="addLivro" class="js-add btn btn-primary btn-block"' +
		' type="button">Adicionar!</button>' +
		"</span>" +
		"<div>"
});

/**
 * Registrando componentes
 */
Vue.component("itens-comp", ItensComp);
Vue.component("altera-titulo-comp", AlteraTituloComp);
Vue.component("my-placeholder", MostraMeuPlaceholder);
Vue.component("add-item-comp", AddItemComp);

/**
 * Instanciando o Vue
 */
new Vue({
	el: "#app",
	data: data
});
