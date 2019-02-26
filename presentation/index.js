// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  List,
  ListItem,
  Slide,
  Text
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import CodeSlide from 'spectacle-code-slide';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'black',
    secondary: '#1EA0FF',
    tertiary: '#CC1814',
    bgColor: '#F5F5D5'

  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth={1600}
        contentHeight={1600}
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide bgColor="bgColor">
          <Heading size={1} caps textColor="primary">Última linha</Heading>
          <Text textColor="secondary" caps bold>Quais minhas opções</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={2} fit caps textColor="primary" lineHeight="1.2em">Exemplo</Heading>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={2} fit textColor="primary">Exemplo: publicar um post</Heading>
          <Appear>
            <List textColor="secondary">
              <ListItem bold>apenas conteúdo</ListItem>
              <ListItem bold>URL do post</ListItem>
            </List>
          </Appear>
          <Appear>
            <List textColor="tertiary">
              <ListItem bold>termos de serviço => rejeição</ListItem>
              <ListItem bold>limite diário => agendamento</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={2} caps textColor="primary">Exemplo</Heading>
          <Text lineHeight="1.2em" fit textColor="secondary">pseudo-código</Text>
        </Slide>
        <CodeSlide
          lang="clike"
          code={require('raw-loader!./01_pseudo-code.example')}
          ranges={[
            {
              loc: [0, 5],
              title: 'Simples'
            },
            {
              loc: [1, 2],
              note: 'Valida',
              title: 'Simples'
            },
            {
              loc: [3, 4],
              note: 'Publica (ou agenda)',
              title: 'Simples'
            },
            {
              loc: [0, 0],
              title: 'Né?'
            }
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={2} caps textColor="primary">Exemplo</Heading>
          <Text lineHeight="1.2em" fit textColor="tertiary">realidade</Text>
        </Slide>
        <CodeSlide
          lang="clike"
          code={require('raw-loader!./02_reality.example')}
          ranges={[
            {
              loc: [0, 16],
              title: 'Lá se vão os sonhos ...'
            },
            {
              loc: [1, 2],
              note: 'Validar retorna 0, false, null? Mas falhar lança exceção',
              title: 'Denso'
            },
            {
              loc: [4, 5],
              note: 'Publicar ou agendar retorna um código',
              title: 'Obscuro'
            },
            {
              loc: [5, 7],
              note: 'Retorno é uma url-ish string?',
              title: 'Números mágicos'
            },
            {
              loc: [7, 9],
              note: 'E agora é um objeto!',
              title: 'Inconsistente'
            },
            {
              loc: [9, 11],
              note: 'Boolean? É um erro ou ...?',
              title: 'Bingo!?'
            },
            {
              loc: [12, 14],
              note: 'Código de retorno também é uma alternativa',
              title: 'Bingo!? Agora sim?!'
            },
            {
              loc: [8, 9],
              note: 'Variável sorrateira',
              title: 'Supreendente'
            }
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={2} caps fit textColor="primary">Alternativas</Heading>
        </Slide>
        <CodeSlide
          lang="shell"
          code={require('raw-loader!./03_bash.example')}
          ranges={[
            {
              loc: [2, 13],
              note: 'O método validate'
            },
            {
              loc: [6, 8],
              note: 'O caso de falha termina o processo com um código'
            },
            {
              loc: [9, 11],
              note: 'O caso de sucesso também termina o processo com um código'
            },
            {
              loc: [9, 10],
              note: 'Mas produz uma saída específica também'
            },
            {
              loc: [14, 23],
              note: 'O método publish_or_schedule'
            },
            {
              loc: [17, 18],
              note: 'Não tem retorno, popula variáveis globais'
            },
            {
              loc: [19, 21],
              note: 'Não tem retorno, popula variáveis globais, talvez'
            },
            {
              loc: [24, 43],
              note: 'Função que orquestra outras funções'
            },
            {
              loc: [27, 29],
              note: 'Tentando contruir um post'
            },
            {
              loc: [30, 31],
              note: 'Precisa verificar a saída do último processo'
            },
            {
              loc: [31, 32],
              note: 'Se deu certo então a variável não é uma mensagem de erro e pode ser repassada'
            },
            {
              loc: [33, 34],
              note: 'Verificação de uma variável global'
            },
            {
              loc: [34, 38],
              note: 'Pra decidir o que aconteceu com o post'
            },
            {
              loc: [39, 41],
              note: 'E a validação pode ter falhado'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Bash</Heading>
          <List>
            <ListItem>código numérico de retorno</ListItem>
            <ListItem>variáveis globais</ListItem>
            <ListItem>apenas texto</ListItem>
            <ListItem>pouco controle sobre erros</ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="csharp"
          code={require('raw-loader!./04_csharp.example')}
          ranges={[
            {
              loc: [4, 26],
              title: 'C#'
            },
            {
              loc: [4, 22],
              note: 'Uma classe normal'
            },
            {
              loc: [8, 10],
              note: 'Getters e setters, ou attr_accessor'
            },
            {
              loc: [11, 15],
              note: 'Construtor que aceita o conteúdo'
            },
            {
              loc: [16, 21],
              note: 'Validação se o conteúdo não está vazio'
            },
            {
              loc: [16, 17],
              note: 'Não retorna nada'
            },
            {
              loc: [19, 20],
              note: 'Mas se inválido lança uma exceção'
            },
            {
              loc: [33, 47],
              note: 'Classe com a lógica se o post vai ser agendado'
            },
            {
              loc: [35, 36],
              note: 'É void, então não retorna nada'
            },
            {
              loc: [37, 38],
              note: 'Apenas modifica a instância'
            },
            {
              loc: [40, 41],
              note: 'Apenas modifica a instância'
            },
            {
              loc: [48, 68],
              note: 'Uma classe de serviço pra orquestrar as outras classes'
            },
            {
              loc: [57, 70],
              note: 'Método com a lógica'
            },
            {
              loc: [59, 60],
              note: 'Construindo um Post'
            },
            {
              loc: [60, 61],
              note: 'Validação pode ter uma exceção, mas fica pra camada de cima, ou não'
            },
            {
              loc: [62, 63],
              note: 'Mutação do post pelo serviço de agendamento'
            },
            {
              loc: [64, 65],
              note: 'Precisa checar se não é nulo pra saber o que aconteceu'
            }
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>C#</Heading>
          <List>
            <ListItem>retorno de função + objetos</ListItem>
            <ListItem>mutação explícita por ponteiros</ListItem>
            <ListItem>controle de erros por exceções</ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="go"
          code={require('raw-loader!./05_golang.example')}
          ranges={[
            {
              loc: [9, 29],
              title: 'Go'
            },
            {
              loc: [9, 14],
              note: 'Post com conteúdo obrigatório, URL e data de publicação opcionais'
            },
            {
              loc: [15, 18],
              note: 'Slug'
            },
            {
              loc: [19, 26],
              note: 'Validação'
            },
            {
              loc: [19, 20],
              note: 'Retorno é uma tupla, pode ser um Post se der certo ou um erro'
            },
            {
              loc: [21, 22],
              note: 'Caso de erro'
            },
            {
              loc: [23, 24],
              note: 'Caso de successo com a struct'
            },
            {
              loc: [27, 37],
              note: 'Publicação'
            },
            {
              loc: [27, 28],
              note: 'Retorno também é uma tupla, de data de agendamento ou um erro'
            },
            {
              loc: [32, 34],
              note: 'Caso de sucesso da publicação'
            },
            {
              loc: [35, 36],
              note: 'Caso de sucesso do agendamento'
            },
            {
              loc: [39, 60],
              note: 'Orquestração de tudo'
            },
            {
              loc: [42, 47],
              note: 'Verificação se o método teve sucesso antes de usar o resultado'
            },
            {
              loc: [48, 52],
              note: 'Outra verificação'
            },
            {
              loc: [54, 59],
              note: 'Identificação se foi publicado ou agendado'
            },
            {
              loc: [54, 55],
              note: 'schedAt não pode ser nulo aqui, mas é uma verificação parecida'
            },
            {
              loc: [55, 56],
              note: 'url sempre vai ser uma string aqui, mas pode estar vazia'
            }
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Go</Heading>
          <List>
            <ListItem>returno de função + tuplas</ListItem>
            <ListItem>não usar variáveis é um erro</ListItem>
            <ListItem>mutabilidade normal</ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="rust"
          code={require('raw-loader!./06_rust.example')}
          ranges={[
            {
              loc: [2, 20],
              title: 'Rust'
            },
            {
              loc: [2, 7],
              note: 'Post com conteúdo obrigatório, URL e data de publicação opcionais'
            },
            {
              loc: [8, 21],
              note: 'Construtor e slug'
            },
            {
              loc: [22, 26],
              note: 'Possíveis estados de um post depois do rascunho'
            },
            {
              loc: [27, 34],
              note: 'Validação'
            },
            {
              loc: [27, 28],
              note: 'Retorno é um Result, pode ser um Post se der certo ou uma mensagem de erro'
            },
            {
              loc: [29, 30],
              note: 'Caso de erro com a string'
            },
            {
              loc: [31, 32],
              note: 'Caso de successo com a struct'
            },
            {
              loc: [35, 46],
              note: 'Publicação'
            },
            {
              loc: [35, 36],
              note: 'Retorno também é um Result, de PostState ou mensagem de erro'
            },
            {
              loc: [35, 36],
              note: 'E pra modificar o post precisa da marcação mut'
            },
            {
              loc: [40, 42],
              note: 'Caso de sucesso da publicação'
            },
            {
              loc: [43, 44],
              note: 'Caso de sucesso do agendamento'
            },
            {
              loc: [47, 60],
              note: 'Orquestração de tudo'
            },
            {
              loc: [49, 50],
              note: 'Como o retorno é um Result dá pra usar a macro `?`'
            },
            {
              loc: [50, 51],
              note: 'Outra vez a macro'
            },
            {
              loc: [52, 53],
              note: 'URL é opcional, então tem que extrair o valor'
            },
            {
              loc: [53, 57],
              note: 'Como state é um enum tem que tratar todos os casos'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Rust</Heading>
          <List>
            <ListItem>retorno de função + tipos + macros</ListItem>
            <ListItem>match não-exaustivo é um erro</ListItem>
            <ListItem>mutabilidade explícita</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Result/Option</Heading>
          <Text textColor="tertiary" bold>Monadic types</Text>
          <Appear>
            <Heading size={4} textColor="secondary" caps>Either/Maybe</Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
