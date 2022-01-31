let final = 0;

function listar() {
  let getn1 = document.getElementById('n1').value;
  let getn2 = document.getElementById('n2').value;
  var getn3 = document.getElementById('n3').value;
  let list = document.getElementById('inputTextToSave');
  let m3 = getn2;
  var resultado = 1 * m3;
  let valor = resultado.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  data = new Date(getn3).toLocaleDateString('pt-br', {timeZone: 'UTC'});

  list.innerHTML += `Transação "${getn1}" de valor ${valor} com a data de vencimento em ${data}.<br>`;

  document.getElementById('n1').value = '';
  document.getElementById('n2').value = '';
  document.getElementById('n3').value = '';

  let result = document.getElementById('res');
  final += resultado;
  result.innerHTML = `Total: R$ ${final},00`;

}

function baixar_pdf() {
    var dadospdf = document.getElementById('inputTextToSave').innerHTML;
    var janela = window.open('','','width=800,heigth=600');
    janela.document.write('<htm><head>');
    janela.document.write('<title>PDF</title></head>');
    janela.document.write('<body>');
    janela.document.write(dadospdf);
    janela.document.write('</body></html>');
    janela.document.close();
    janela.print();
}