class MinStack{
  constructor(){
    this.stack = [];
    this.minStack = []
  }

  top(){
    return this.stack[this.stack.length - 1]
  }

  push(item){
    this.stack.push(item)
    const min = this.getMin();
    if(item < min || this.minStack.length === 0){
      this.minStack.push(item)
    }else{
      this.minStack.push(min)
    }
  }

  pop(){
    this.stack.pop()
    this.minStack.pop()
  }

  getMin(){
    return this.minStack[this.minStack.length - 1]
  }
}

const  minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
minStack.top();
console.log(minStack.getMin());
