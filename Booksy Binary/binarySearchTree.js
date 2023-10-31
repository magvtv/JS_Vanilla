class Node {
	constructor(value) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root) {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			this._insertRecursive(this.root, newNode);
		}
	}

	_insertRecursive(node, newNode) {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				_insertRecursive(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this._insertRecursive(node.right, newNode);
			}
		}
	}

	find(value) {
		return this._findRecursive(this.root, value);
	}

	_findRecursive(node, value) {
		if (node === null) {
			return null;
		}

		if (value < node.value) {
			return this._findRecursive(node.left, value);
		} else if (value > node.value) {
			return this._findRecursive(node.right, value);
		} else {
			return node;
		}
	}

	delete(value) {
		this.root = this._deleteRecursive(this.root, value);
	}

	_deleteRecursive(node, value) {
		if (node === null) {
			return null;
		}

		if (value < node.value) {
			return this._deleteRecursive(node.left, value);
		} else if (value > node.value) {
			return this._deleteRecursive(node.right, value);
		} else {
			if (node.left === null && node.right === null) {
				node = null;
			} else if (node.left === null) {
				node = node.right;
			} else if (node.right === null) {
				node = node.left;
			} else {
				const minRight = this._getMin(node.right);
				node.value = minRight.value;
				node.right = this._deleteRecursive(node.right, minRight.value);
			}
		}
		return node;
	}

	_getMin(node) {
		while (node.left !== null) {
			node = node.left;
		}
		return node;
	}
}