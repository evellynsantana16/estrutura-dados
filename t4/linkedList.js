const Node = require("./node.js");

class LinkedList {

    constructor() {
        this.head = null;
    }

    // Inserir no início
    insertAtBeginning(value) {

        const newNode = new Node(value);

        newNode.next = this.head;

        this.head = newNode;
    }

    // Inserir no final
    insertAtEnd(value) {

        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    // Remover valor específico
    removeByValue(value) {

        if (this.head === null) {
            return;
        }

        // Remove o primeiro
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;

        while (current.next !== null &&
               current.next.value !== value) {

            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Buscar valor
    search(value) {

        let current = this.head;

        while (current !== null) {

            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // Mostrar lista
    printList() {

        let current = this.head;

        while (current !== null) {

            console.log(current.value);

            current = current.next;
        }
    }
}

module.exports = linkedList;