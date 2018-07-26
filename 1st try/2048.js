var array = [
    ["", "", "", ""],
    ["", "", 4, ""],
    ["", "", "", ""],
    ["", "", 5, ""],
];
drawCells();

// $("#new-game").click(newGame);

// function newGame(){
//     console.log("Hello");
//     //remove cells previously displayed in html & empty array
//     $(".cellContent").detach();
//     array = [
//         ["", "", "", ""],
//         ["", "", "", ""],
//         ["", "", "", ""],
//         ["", "", "", ""],
//     ];
    
//     //generate random indexes for the original 2 tiles  
//     var a = Math.floor(Math.random() * 4); 
//     var b = Math.floor(Math.random() * 4);
//     var c = Math.floor(Math.random() * 4); 
//     var d = Math.floor(Math.random() * 4);
//     //double check the new tiles wont be on the same spot
//     while ((a == c) && (b == d)){
//         var a = Math.floor(Math.random() * 4); 
//         var b = Math.floor(Math.random() * 4);
//         var c = Math.floor(Math.random() * 4); 
//         var d = Math.floor(Math.random() * 4);
//     }
//     //70% chances new tile will be 2, 30% it will be 4
//     var tile1 = Math.floor(Math.random() * 10);
//     if (tile1 < 8){
//         cellValue1 = 2;
//     }
//     else{
//         cellValue1 = 4;
//     }
//     var tile2 = Math.floor(Math.random() * 10);
//     if (tile2 < 8){
//         cellValue2 = 2;
//     }
//     else{
//         cellValue2 = 4;
//     }
//     //Pushing new tiles in html && in array
//     for (i=0;i<4;i++){
//         for (j=0;j<4;j++){
//             if ((a == i) && (b == j)){
//                 array[i][j] = cellValue1;
//                 $(".grid-row:eq("+i+") .grid-cell:eq("+j+")").append("<span class='cellContent'>"+cellValue1+"</span>");
//                 $(".grid-row:eq("+i+") .grid-cell:eq("+j+")").addClass("full");
//             }
//             else if ((c == i) && (d == j)){
//                 array[i][j] = cellValue2;
//                 $(".grid-row:eq("+i+") .grid-cell:eq("+j+")").append("<span class='cellContent'>"+cellValue2+"</span>");
//                 $(".grid-row:eq("+i+") .grid-cell:eq("+j+")").addClass("full");

//             }
            
//         }
//     }
// };





function drawCells(){
    for(i=0;i<4;i++){
        for(j=0;j<4;j++){
            $(".grid-row:eq("+i+") .grid-cell:eq("+j+")").append(array[i][j].value);
        }
    }
}



