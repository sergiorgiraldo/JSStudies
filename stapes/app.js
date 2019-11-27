var listTemplate = Handlebars.compile( $("#template").html() );

var TodosModel = Stapes.subclass();

var InputView = Stapes.subclass({
    constructor : function( model ) {
        this.model = model;
        this.$el = $("#inputform");
        this.$input = this.$el.find("#single");
        this.bindEventHandlers();
    },

    bindEventHandlers : function() {
        this.$el.on('submit', function(e) {
            e.preventDefault();

            this.model.push({
                "text" : this.$input.val()
            });

            this.$input.val('');
        }.bind(this));
    }
});

var BatchView = Stapes.subclass({
    constructor : function( model ) {
        this.model = model;
        this.$el = $("#batchform");
        this.$input = this.$el.find("#multiple");
        this.bindEventHandlers();
    },

    bindEventHandlers : function() {
        this.$el.on('submit', function(e) {
            e.preventDefault();

            var arrTodos = this.$input.val().split(';');
            const populate = (t) => {
                this.model.push({
                    "text": t
                })
            };
            R.map(populate, arrTodos);
            
            this.$input.val('');
        }.bind(this));
    }
});


var ListView = Stapes.subclass({
    constructor : function( model ) {
        this.model = model;
        this.$el = $("#todos");
        this.template = listTemplate;
        this.bindEventHandlers();
    },
    bindEventHandlers : function() {
        this.$el.on('click', '.remove', function(e) {
            var id = $(e.target).parents("li").data('id');
            this.model.remove(id);
        }.bind(this));
    },
    render : function() {
        var html = this.template({
            size : this.model.size(),
            todos : this.model.getAllAsArray()
        });

        this.$el.html( html );
    }
});

var TodosController = Stapes.subclass({
    constructor : function() {
        this.model = new TodosModel();
        this.listView = new ListView( this.model )
        this.inputView = new InputView( this.model );
        this.batchView = new BatchView( this.model );
        
        this.model.on('change', function() {
            this.listView.render();
        }, this);
        
        this.listView.render();
    }
});

var controller = new TodosController();