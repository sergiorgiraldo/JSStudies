function Node(data, next) {
	this.data = data;
	this.next = next;
}

Node.prototype = {
	toString: function () {
		return this.data;
	}
};

function LinkedList() {
	this.current = null;
	this.count = 0;
	this.first = null;
}

LinkedList.prototype = {
	last: function (node) {
		if (!node) node = this.current;
		return node.next ? this.last(node.next) : node;
	},
	insert: function (node) {
		if (!this.current) this.current = this.first = node;
		else this.last().next = node;
		this.count++;
	},
	move: function (num) {
		if (!num) return this.current;
		this.current = this.current.next;
		return this.move(num - 1);
	},
	delete: function (num) {
		this.current = this.first;
		this.move(this.count - num).next = null;
		this.count -= num;
	},
	toString: function () {
		var list = [(this.current = this.first)];
		for (var i = 1; i < this.count; i++, this.move(1))
			list.push(this.current.next.toString());
		return list.toString();
	}
};

var list = new LinkedList();
list.insert(new Node("first"));
list.insert(new Node("second"));
list.insert(new Node("third"));
console.log(list);

list.delete(2);
console.log(list);

list.insert(new Node("fourth"));
console.log(list);
