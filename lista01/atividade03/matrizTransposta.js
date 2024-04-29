function transporMatriz(A) {
    console.log("Matriz Original:");
    imprimirMatriz(A);

    let transposta = [];
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
        for (let j = 0; j < A.length; j++) {
            transposta[i].push(A[j][i]);
        }
    }

    console.log("Matriz Transposta:");
    imprimirMatriz(transposta);
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join("\t"));
    }
    console.log("");
}

const matriz = [
    [1, 2],
    [4, 5],
    [7, 8]
];

transporMatriz(matriz);

/*
function transportarMatriz(A){
  console.log(A);

  let mOriginal = ""

  for(let i = 0; i < A.length; i ++){
    for(let j = 0; j < A[0].length; j++){
       mOriginal += A[i][j] + ' ';
    }
    mOriginal +='\n';
  }

  console.log(mOriginal)

  let mTransposta = ""

  for(let j = 0; j < A[0].length; j++){
    for(let i = 0; i < A.length; i++){
       mTransposta  += A[i][j] + ' ';
    }
    mTransposta +='\n';
  }

  console.log(mTransposta)
}

const A = [
    [1,2],
    [3,4],
    [5,6]
];
transportarMatriz(A);
*/