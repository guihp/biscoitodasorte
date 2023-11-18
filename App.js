import React, { useState } from "react";
import { View, Text, StyleSheet , Image, TouchableOpacity } from 'react-native'

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');
  let frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Acompanhe os exemplares e absorva o que eles têm a ensinar.',
    'O discernimento é mais valioso do que uma grande quantidade de conhecimento.',
    'O sorriso é o elo mais próximo entre duas almas.',
    'Abandone as inquietações e abrace a felicidade.',
    'Execute o que é evidente, cogite o inesperado e alcance o inatingível.',
    'Tenha fé em milagres, mas não baseie sua vida neles.',
    'A maior barreira para o êxito é o receio do fracasso.',
    'Siga os que trilham caminhos virtuosos e aprenda com eles.',
    'Valorize o bom senso, pois ele supera vasto conhecimento.',
    'O riso é uma ponte que aproxima as pessoas.',
    'Desprenda-se das preocupações e permita-se ser feliz.',
    'Concretize o que é óbvio, explore o improvável e alcance o inalcançável.',
    'Mantenha a crença em milagres, mas não delegue tudo a eles.',
    'O medo do fracasso é a maior barreira para o sucesso.',
    'Siga os exemplos positivos e aprenda com cada experiência.',
    'A sabedoria prática supera a acumulação de conhecimento teórico.',
    'O sorriso é o elo mais próximo entre as almas afins.',
    'Abandone as preocupações e mergulhe na alegria de viver.',
    'Realize o óbvio, explore o inusitado e alcance o impossível.',
    'Tenha fé em milagres, mas não dependa exclusivamente deles.',
    'O medo do fracasso é a barreira principal para o sucesso.',
    'Siga os que inspiram bons valores e aprenda com suas lições.',
    'O discernimento supera em valor a mera acumulação de conhecimento.',
    'O riso é uma linguagem universal que aproxima as pessoas.',
    'Despreocupe-se e permita-se viver uma vida plena de felicidade.',
    'Realize o óbvio, explore o inesperado e alcance o inalcançável.',
    'Acredite em milagres, mas não delegue completamente sua jornada a eles.',
    'O medo do fracasso é a maior barreira para o sucesso duradouro.',
    'Acompanhe os sábios e aprenda com as suas experiências.',
    'O bom senso é mais valioso do que um grande acervo de conhecimento.',
    'O sorriso é um vínculo delicado entre duas almas conectadas.',
    'Abandone as inquietações e abrace a felicidade com plenitude.',
    'Execute o evidente, cogite o inusitado e alcance o impossível.',
    'Tenha fé em milagres, mas construa sua própria jornada.',
    'O medo do fracasso é a maior barreira para o sucesso persistente.',
    'Siga os exemplos positivos e aprenda valiosas lições com eles.',
    'O discernimento vale mais do que uma vasta acumulação de conhecimento.',
    'O riso é uma linguagem universal que une corações.',
    'Despreocupe-se e permita-se viver plenamente a alegria.',
    'Concretize o óbvio, imagine o inusitado e alcance o impossível.',
    'Acredite em milagres, mas participe ativamente na construção do seu destino.',
    'O medo do fracasso é o maior desafio para o sucesso duradouro.',
    'Siga os que exemplificam bons valores e aprenda com suas experiências.',
    'O bom senso é mais valioso do que um vasto conhecimento teórico.',
    'O sorriso é uma ponte que une almas afins.',
    'Liberte-se das preocupações e abrace a alegria de viver plenamente.'
  ];
  
  function quebraBiscoito() {
   
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' "'+frases[numeroAleatorio]+ '" ');

    setImg(require('./src/biscoitoAberto.png'));
  }
  
  function reniciarBiscoito() {

    setTextoFrase('');

    setImg(require('./src/biscoito.png'));

  }

  return (
    <View style={styles.container}> 


    <Image source={img}
    style={styles.img}
    />

    <Text style={styles.textofrase}> {textoFrase} </Text>

    <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>  

     <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: 'gray'}]} onPress={ reniciarBiscoito }>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, {color: 'gray'}]}>Reniciar biscoito</Text>
      </View>
    </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 20,
    color: 'orange',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  }

});

export default App;


