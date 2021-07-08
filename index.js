function helloword () {
    console.log("helloword")
}

helloword();



const saudacao = () => {
    var data = new Date()
    return data.getHours() <=12? "Bom dia": data.getHours() <=18? "Boa tarde!": "Boa Noite!";
}
/*Arrow functions são uma notação mais recente 
para declaração de funcçoes no JS. A funcao acima
pode ser escrita da seguinte maneira:

function saudacao () {
    //conteudo
}
*/

console.log(`A saudacao do momento eh: ` + saudacao());