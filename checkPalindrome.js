// palindromo ´quando as palavras não se alteram quando lidas de trás para frente

function solution(inputString) {
    let reversed = inputString.split("").reverse().join("");
    if (reversed == inputString){
        return true;
    }else{
        return false;
    }
}

console.log(solution("racecar"));

//split("") -> divide o array por string, fazendo assim que a trocas das strings sejam possiveis. o paramentro dela é indicado onde vai ocorrer a quebra, no caso aqui a cada string, mas poderia ser por virgula(","), espaço(" "), etc.

//reverse() -> funçao que faz a inversão das strings.

//join("") -> inverso do split, ele inseri algo onde o join dividiu, no caso acima ele inseri as strings dentro do array, fazendo com o array  deixe de ser  um conjunto de strings e vire uma string só.

