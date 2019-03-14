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
          <Text textColor="secondary" caps bold>Quais minhas opções?</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={2} fit caps textColor="primary">Exemplo</Heading>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={2} fit textColor="primary">Exemplo: publicar um post</Heading>
          <Appear>
            <List textColor="secondary">
              <ListItem bold>entra conteúdo</ListItem>
              <ListItem bold>sai URL do post</ListItem>
            </List>
          </Appear>
          <Appear>
            <List textColor="tertiary">
              <ListItem bold>conteúdo inválido &rarr; rejeição</ListItem>
              <ListItem bold>serviço externo &rarr; erro de rede</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={2} caps textColor="primary">Exemplo</Heading>
          <Text fit textColor="secondary">pseudo-código</Text>
        </Slide>
        <CodeSlide
          lang="clike"
          code={require('raw-loader!./01_pseudo-code.example')}
          ranges={[
            {
              loc: [0, 5]
            },
            {
              loc: [1, 2],
              note: 'Valida',
            },
            {
              loc: [3, 4],
              note: 'Publica',
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={2} caps textColor="primary">Exemplo</Heading>
          <Text fit textColor="tertiary">realidade</Text>
        </Slide>
        <CodeSlide
          lang="clike"
          code={require('raw-loader!./02_reality.example')}
          ranges={[
            {
              loc: [0, 16],
            },
            {
              loc: [1, 2],
              note: 'Validar pode lançar uma exceção',
            },
            {
              loc: [4, 5],
              note: 'Publicar retorna um código',
            },
            {
              loc: [5, 7],
              note: 'Retorno pode ser uma string',
            },
            {
              loc: [7, 9],
              note: 'Ou uma booleana',
            },
            {
              loc: [10, 12],
              note: 'Ou nulo',
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={2} caps fit textColor="primary">Alternativas</Heading>
        </Slide>
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
          lang="shell"
          code={require('raw-loader!./03_bash.example')}
          ranges={[
            {
              loc: [2, 23],
              title: 'Bash'
            },
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
              note: 'Como validate termina o processo tem que rodar em sub-shell'
            },
            {
              loc: [30, 31],
              note: 'E verificar a saída do último processo'
            },
            {
              loc: [31, 32],
              note: 'Se deu certo então a variável não é uma mensagem de erro e pode ser repassada'
            },
            {
              loc: [31, 32],
              note: 'publish_or_schedule popula variáveis globais então tem que rodar no mesmo processo'
            },
            {
              loc: [33, 34],
              note: 'Verificação de uma variável global'
            },
            {
              loc: [39, 41],
              note: 'E a validação pode ter falhado'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>C#</Heading>
          <List>
            <ListItem>retorno de função + objetos</ListItem>
            <ListItem>mutação por ponteiros</ListItem>
            <ListItem>controle de erros por exceções</ListItem>
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
              loc: [28, 42],
              note: 'Classe com a lógica se o post vai ser agendado'
            },
            {
              loc: [30, 31],
              note: 'É void, então não retorna nada'
            },
            {
              loc: [32, 33],
              note: 'Apenas modifica a instância'
            },
            {
              loc: [35, 36],
              note: 'Apenas modifica a instância'
            },
            {
              loc: [43, 63],
              note: 'Uma classe de serviço pra orquestrar as outras classes'
            },
            {
              loc: [52, 65],
              note: 'Método com a lógica'
            },
            {
              loc: [54, 56],
              note: 'Validação pode ter uma exceção, mas fica pra camada de cima, ou não'
            },
            {
              loc: [57, 58],
              note: 'Mutação do post pelo serviço de agendamento'
            },
            {
              loc: [59, 60],
              note: 'Precisa checar se não é nulo pra saber o que aconteceu'
            },
            {
              loc: [59, 60],
              note: 'Mas com método que retorna valor é mais fácil'
            }
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Go</Heading>
          <List>
            <ListItem>returno de função + tuplas</ListItem>
            <ListItem>não usar variáveis é um erro</ListItem>
            <ListItem>mutação por ponteiros</ListItem>
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
              loc: [9, 13],
              note: 'Post com conteúdo obrigatório, URL opcional'
            },
            {
              loc: [18, 25],
              note: 'Validação'
            },
            {
              loc: [18, 19],
              note: 'Retorno é uma tupla, pode ser um Post se der certo ou um erro'
            },
            {
              loc: [20, 21],
              note: 'Caso de erro'
            },
            {
              loc: [22, 23],
              note: 'Caso de successo com a struct'
            },
            {
              loc: [26, 36],
              note: 'Publicação'
            },
            {
              loc: [26, 27],
              note: 'Retorno também é uma tupla, de data de agendamento ou um erro'
            },
            {
              loc: [31, 32],
              note: 'Caso de sucesso da publicação'
            },
            {
              loc: [33, 34],
              note: 'Caso de sucesso do agendamento'
            },
            {
              loc: [37, 58],
              note: 'Orquestração de tudo'
            },
            {
              loc: [40, 45],
              note: 'Verificação se o método teve sucesso antes de usar o resultado'
            },
            {
              loc: [46, 51],
              note: 'Outra verificação'
            },
            {
              loc: [52, 57],
              note: 'Identificação se foi publicado ou agendado'
            },
            {
              loc: [52, 53],
              note: 'schedAt não pode ser nulo aqui, mas é uma verificação parecida'
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
        <CodeSlide
          lang="rust"
          code={require('raw-loader!./06_rust.example')}
          ranges={[
            {
              loc: [2, 20],
              title: 'Rust'
            },
            {
              loc: [2, 6],
              note: 'Post com conteúdo obrigatório, URL opcional'
            },
            {
              loc: [8, 11],
              note: 'Construtor só pra não precisar passar todos atributos'
            },
            {
              loc: [15, 21],
              note: 'Possíveis estados de um post depois do rascunho'
            },
            {
              loc: [22, 29],
              note: 'Validação'
            },
            {
              loc: [22, 23],
              note: 'Retorno é um Result, pode ser um Post se der certo ou uma mensagem de erro'
            },
            {
              loc: [24, 25],
              note: 'Caso de erro com a string'
            },
            {
              loc: [26, 27],
              note: 'Caso de successo com a struct'
            },
            {
              loc: [30, 40],
              note: 'Publicação'
            },
            {
              loc: [30, 31],
              note: 'Retorno também é um Result, de PostState ou mensagem de erro'
            },
            {
              loc: [30, 31],
              note: 'E pra modificar o post precisa da marcação mut'
            },
            {
              loc: [32, 33],
              note: 'URL é opcional, aqui indica que agora tem um valor'
            },
            {
              loc: [35, 36],
              note: 'Caso de sucesso da publicação'
            },
            {
              loc: [37, 38],
              note: 'Caso de sucesso do agendamento'
            },
            {
              loc: [41, 53],
              note: 'Orquestração de tudo'
            },
            {
              loc: [43, 44],
              note: 'Como o retorno é um Result dá pra usar a macro `?`'
            },
            {
              loc: [44, 45],
              note: 'Outra vez a macro'
            },
            {
              loc: [46, 47],
              note: 'URL é opcional, então tem que extrair o valor'
            },
            {
              loc: [47, 51],
              note: 'state é um enum tem que tratar todos os casos'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Result/Option</Heading>
          <Appear>
            <Text textColor="tertiary" bold>Monadic types</Text>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary" caps>Either/Maybe</Heading>
          </Appear>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={4} caps>Result</Heading>
          <Text>É um tipo simples:</Text>
          <List>
            <ListItem>guarda dois valores mutuamente exclusivos</ListItem>
            <ListItem>um pra sucesso</ListItem>
            <ListItem>um pra falha</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={4} caps>Option</Heading>
          <Text>É um tipo simples:</Text>
          <List>
            <ListItem>guarda um valor e meio mutuamente exclusivos</ListItem>
            <ListItem>um pra presença</ListItem>
            <ListItem>e a ausência não tem valor, mas é explícita</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Text>Variáveis globais não são um bom meio de comunicação</Text>
          <Text>Funções que retornam são mais fáceis de lidar</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Text>Exceções não são um bom meio de comunicação, nem de controle</Text>
          <Text>Tratar erros é chato, mas chato é legal</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Text>Código de retorno é uma ideia simples</Text>
          <Text>Result/Option é uma implementação menos mágica dessa ideia</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Text>Valores mágicos não são um bom meio de comunicação: null, 0, "" dependem do contexto</Text>
          <Text>Não precisa custar nada um retorno explícito</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3}>Referências</Heading>
          <List>
            <ListItem>
              http://joeduffyblog.com/2016/02/07/the-error-model/
              <Text>Joe Duffy - The Error Model</Text>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
