let X_O = 'O'
let win_positions = [ 
    ["i1", "i2", "i3"],
    ["i4", "i5", "i6"],
    ["i7", "i8", "i9"],
    ["i1", "i4", "i7"],
    ["i2", "i5", "i8"],
    ["i3", "i6", "i9"],
    ["i1", "i5", "i9"],
    ["i3", "i5", "i7"]
]
let current_positions = []

let k = 0
function addCheck(id){  // checks, so u dont add the X or O on top of the current one, idk
    while(k < current_positions.length){
        if(id == current_positions[k]){
            return true
        }
        k++
    }
    k=0
}

function add(id){   // adds the X or O to the board, current_positions
    if(addCheck(id) != true){
        if(X_O == 'O'){
            document.getElementById(id).innerHTML = X_O
            X_O = "X"
            current_positions.push(id)
            }
            else{
            document.getElementById(id).innerHTML = X_O
            X_O = "O"
            current_positions.push(id)
            }
    }
}
function innerH(id){    // gets the innerHTML of position
    return document.getElementById(id).innerText
}



var styles = `
    
`

let i = 0
function check(){   // Checks for winings
    while(i < 8){
        if(innerH(win_positions[i][0]) == "X" && innerH(win_positions[i][1]) == "X" && innerH(win_positions[i][2]) == "X"){
            styles = `
            #${win_positions[i][0]}{
                background-color:green;
            }
            #${win_positions[i][1]}{
                background-color:green;
            }
            #${win_positions[i][2]}{
                background-color:green;
            }
        `
        style()
        console.log("X win")
        break;
        }
        if(innerH(win_positions[i][0]) == "O" && innerH(win_positions[i][1]) == "O" && innerH(win_positions[i][2]) == "O"){
        styles = `
            #${win_positions[i][0]}{
                background-color:green;
            }
            #${win_positions[i][1]}{
                background-color:green;
            }
            #${win_positions[i][2]}{
                background-color:green;
            }
        `
        style()
        console.log("O win")
        break;
        }
    i++
}
i = 0
}

function style(){   // Colors the lines
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
}

/* --- Navyciok 2023 ---*/

    
