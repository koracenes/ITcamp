/*
ULANCANE LISTE (LINKED LISTS)


*/ 
// function testFn(broj=0){ u slucaju da ne prosledimo argument, broj ce da bude 0
//     console.log(broj);
// }

class Node{
    constructor(data, next =null){
        this.data = data
        this.next = next
}                   
}

let nodeY = new Node(10)
let nodeX = new Node(20, nodeY)


class LinkedList{
    constructor(){
        this.head = null
    }
    insertFirst(data){
        const node = new Node(data, this.head)
        this.head = node
    }

    size(){
        let counter = 0
        let node = this.head

        while(node){
            counter++
            node = node.next
        }
        return counter
    }

    getFirst(){
        return this.head
    }

    getLast(){
        if(!this.head){ //Ako lista nema cvor, vraca null
            return null
        }

        let node = this.head
        while(node){
            if(!node.next){ //ako nema sledeceg cvora, to je poslednji
                return node 
            }
            node = node.next
        }

    }

    clear(){
        this.head = null
    }
    removeFirst(){
        if(!this.head){
            return
        }
        this.head = this.head.next
    }

    removeLast(){
        if(!this.last){
            return
        }
        
        if(!this.head.next){ //Ako postoji samo jedan cvor, postavlja next na null   
            this.head=null
            return
        }
        let previous = this.head
        let node = this.head.next
        while (node.next){
            previous = node
            node = node.next
        }
        previous.next = null // brise referencu na poslednji cvor
    }

    insertLast(data){
        const last = this.getLast()

        if(last){
            last.next = new Node(data)
        }else{
            this.head = new Node(data)
        }
    }

    getAt(index){
        let counter =0
        let node = this.head
        
        while(node){
            if(counter===index){
                return node
            }
            counter ++
            node = node.next
        }
        return null //ako index nije validan, vraca null
    }

    removeAt(index){
        if(!this.head){
            return
        }

        if(index===0){
            this.head=this.head.next
            return
        }

        const previous = this.getAt(index-1)
        if(!previus || !previous.next){
            return
        }
        previus.next = previus.next.next
    }

    insertAt(){}

    
}