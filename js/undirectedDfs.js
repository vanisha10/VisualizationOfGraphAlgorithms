function idfs(graph,node){
    stack = new stack();
    stack.push(node);
    graph.vertices[node].visited=true;
    cy.getElementById(node).addClass('visited');
  
  }
  k=0;
  function dodfs(graph){
    if(stack.isEmpty()){
      window.alert("Refresh to start again or go back home!");
      console.log("done");
      return true;
    }
    else{
      console.log(graph.vertices[0].visited);
      var v = graph.vertices[stack.peek()].child;
      var s = stack.peek();
      console.log("top element is:"+stack.peek());
      console.log("size of v is:" + v.length);
      console.log("value of k is" + k);
  
  
      if(v.length == 0){
        console.log(stack.peek());
        cy.getElementById(stack.peek()).addClass('backtracking');
        stack.pop();
      }
      else if(k==v.length){
        console.log(stack.peek());
        cy.getElementById(stack.peek()).addClass('backtracking');
        stack.pop();
        k=0;
      }
  
      else if(v[k].visited){
        //cy.getElementById("e"+""+s+","+v[k].id).addClass('eAlreadyvisited');
        k++;
      }
      else if(!v[k].visited){
        stack.push(v[k].id);
        console.log("pusshed" + v[k].id);
        v[k].visited = true;
        cy.getElementById(v[k].id).addClass('visited');
        cy.getElementById("e"+""+s+","+v[k].id).addClass('evisited');
        cy.getElementById("e"+""+v[k].id+","+s).addClass('evisited');
        k=0;
      }
    }
    return false;
  }
  
  var start = function(){
    if(dodfs(g)){
  
    }
    else{
      console.log("starting again");
      setTimeout(start,500);
    }
  }
  
  function set(){
    x = document.getElementsByName('textbox1')[0].value;
    if(x == ""){
      window.alert("Please Enter a node to start with!");
    }
    else if(x < g.vertices.length){
      idfs(g,x);
      setTimeout(start,1000);
    }
    else{
      window.alert("Please Enter a valid node!");
    }
  
  }
  