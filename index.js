class Branch {
   constructor(val){
      this.value = val
      this.left = null
      this.right = null
   }
}

class BinaryTree {
   constructor(){
      this.root = null
   }

   add(value){
      const newBranch = new Branch(value)
      if(!this.root) return this.root = newBranch

      let currentBranch = this.root
      while(currentBranch){
         if(newBranch.value < currentBranch.value){
            if(!currentBranch.left) return currentBranch.left = newBranch
            currentBranch = currentBranch.left
         } else {
            if(!currentBranch.right) return currentBranch.right = newBranch
            currentBranch = currentBranch.right
         }
      }
   }

   loopDeep(callback, method){
      switch (method) {
         case 'preOrder':
            return this.methodPreOrder(this.root, callback)
            break;
         case 'inOrder':
            return this.methodInOrder(this.root, callback)
            break;
         case 'postOrder':
            return this.methodPostOrder(this.root, callback)
            break;
      
         default:
            break;
      }
   }

   loopWide(callback){
      console.log('rooot', this.root);
      const queue = [this.root]

      while(queue.length){
         const branch = queue.shift()
         callback(branch)

         if(branch.left) queue.push(branch.left)
         if(branch.right) queue.push(branch.right)
      }
   }

   methodPreOrder(branch, callback){
      if(!branch) return
      if(callback) callback(branch)
      this.methodPreOrder(branch.left, callback)
      this.methodPreOrder(branch.right, callback)
   }
   methodInOrder(branch, callback){
      if(!branch) return
      this.methodInOrder(branch.left, callback)
      if(callback) callback(branch)
      this.methodInOrder(branch.right, callback)
   }
   methodPostOrder(branch, callback){
      if(!branch) return
      this.methodPostOrder(branch.left, callback)
      this.methodPostOrder(branch.right, callback)
      if(callback) callback(branch)
   }
}

const tree = new BinaryTree()
tree.add(6)
tree.add(16)
tree.add(3)
tree.add(7)
tree.add(8)
tree.add(1)
tree.add(22)


//     6
//  3    16
// 1    7  22
//       8
// 

console.log('pre');
tree.loopDeep((val => console.log(val.value, val)), 'preOrder')
console.log('in');
tree.loopDeep((val => console.log(val.value, val)), 'inOrder')
console.log('post');
tree.loopDeep((val => console.log(val.value, val)), 'postOrder')

tree.loopWide((val => console.log(val.value)))

console.log(tree);