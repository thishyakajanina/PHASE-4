class Rectangle {
    constructor(l, b) {
      this.l =l;
      this.b = b;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.l * this.b;
    }

    
    set parameter1(parameter1){
    this.l=parameter1;
    
}
set parameter2(parameter2){
   
    this.b=parameter2;
}

  }
  
  const square = new Rectangle(40, 10);
  console.log(square.area);
 square.parameter1="30" ;
 square.parameter2="50";
  console.log(square.area);
