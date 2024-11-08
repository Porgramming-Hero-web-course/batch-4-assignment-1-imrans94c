{
    type Circle = {
    shape : "circle";
    radius: number;
   }


   type Rectangle = {
    shape : 'rectangle';
    width:number;
    height:number;
   }

   type Shape = Circle | Rectangle;

   const calculateShapeArea = (shape: Shape):number | string => {

        if(shape.shape === "circle"){
            return (Math.PI * Math.pow(shape.radius, 2)).toFixed(2);
        }else if(shape.shape === "rectangle"){
            return shape.width * shape.height;
        }else{
            throw new Error("Error shape type");
        }
     
   }
}