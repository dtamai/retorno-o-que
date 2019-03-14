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
              loc: [2, 11],
              note: 'O método validate'
            },
            {
              loc: [3, 4],
              note: 'content é uma variável global'
            },
            {
              loc: [3, 6],
              note: 'O caso de falha termina o processo com um código'
            },
            {
              loc: [6, 9],
              note: 'O caso de sucesso retorna um código numérico - só inteiros são válidos'
            },
            {
              loc: [7, 8],
              note: 'Mas produz uma saída específica também'
            },
            {
              loc: [12, 22],
              note: 'O método publish'
            },
            {
              loc: [13, 17],
              note: 'Parecido com validate, post é uma variável global, usa código e popula a saída'
            },
            {
              loc: [23, 37],
              note: 'Função que orquestra outras funções'
            },
            {
              loc: [26, 27],
              note: 'Como validate pode terminar o processo tem que rodar em sub-shell'
            },
            {
              loc: [26, 27],
              note: 'E também precisa capturar a saída pra não precisa definir uma nova variável global'
            },
            {
              loc: [28, 29],
              note: 'E verificar a saída do último processo'
            },
            {
              loc: [29, 31],
              note: 'Se deu certo então a variável pode ser usada - publish usa post'
            },
            {
              loc: [32, 34],
              note: 'Outra vez verificar código de saída pra usar a variável'
            },
            {
              loc: [34, 36],
              note: 'Os else`s estão implícitos nas funções - e isso é ótimo pra introduzir bugs'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Bash</Heading>
          <List>
            <ListItem>código numérico de retorno</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; valores enigmáticos</ListItem>
            </Appear>
            <p/>
            <ListItem>variáveis globais</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; mais valores enigmáticos</ListItem>
            </Appear>
            <p/>
            <ListItem>pouco controle sobre erros</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; complicado ter controle local de erros e não usar variáves globais</ListItem>
            </Appear>
          </List>
        </Slide>
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
              loc: [5, 27],
              title: 'C#'
            },
            {
              loc: [5, 27],
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
              loc: [28, 40],
              note: 'Classe com a lógica para publicar o post'
            },
            {
              loc: [30, 31],
              note: 'É void, então não retorna nada'
            },
            {
              loc: [33, 34],
              note: 'Apenas modifica a instância'
            },
            {
              loc: [37, 38],
              note: 'Aqui poderia lançar uma outra exceção'
            },
            {
              loc: [41, 60],
              note: 'Uma classe de serviço pra orquestrar as outras classes'
            },
            {
              loc: [50, 59],
              note: 'Método com a lógica'
            },
            {
              loc: [53, 54],
              note: 'Validação pode ter uma exceção, mas fica pra camada de cima, ou não'
            },
            {
              loc: [55, 57],
              note: 'Mutação do post pelo serviço de agendamento'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>C#</Heading>
          <List>
            <ListItem>retorno de função + objetos</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; mais flexibilidade pra passar dados</ListItem>
            </Appear>
            <p/>
            <ListItem>mutação por ponteiros</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; menos mágico que variáveis globais</ListItem>
            </Appear>
            <p/>
            <ListItem>controle de erros por exceções</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; mais controle local mas é enigmático</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Go</Heading>
          <List>
            <ListItem>returno de função + tuplas</ListItem>
            <ListItem>mutação por ponteiros</ListItem>
            <ListItem>não usar variáveis é um erro</ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="go"
          code={require('raw-loader!./05_golang.example')}
          ranges={[
            {
              loc: [7, 27],
              title: 'Go'
            },
            {
              loc: [7, 11],
              note: 'Post com conteúdo obrigatório, URL opcional'
            },
            {
              loc: [16, 23],
              note: 'Validação é uma função que constrói um Post a partir do conteúdo'
            },
            {
              loc: [16, 17],
              note: 'Retorno é uma tupla, pode ser um Post se der certo ou um erro'
            },
            {
              loc: [18, 19],
              note: 'Caso de erro'
            },
            {
              loc: [20, 21],
              note: 'Caso de successo com a struct'
            },
            {
              loc: [24, 34],
              note: 'Publicação'
            },
            {
              loc: [24, 25],
              note: 'Recebe um ponteiro para um Post e possivelmente retorna um erro'
            },
            {
              loc: [27, 30],
              note: 'Caso de sucesso da publicação modifica o Post e retorna nada'
            },
            {
              loc: [30, 32],
              note: 'Caso de erro retorna uma mensagem'
            },
            {
              loc: [35, 52],
              note: 'Orquestração de tudo'
            },
            {
              loc: [38, 43],
              note: 'Verificação se o método teve sucesso antes de usar o resultado'
            },
            {
              loc: [39, 42],
              note: 'Em caso de erro termina a execução'
            },
            {
              loc: [44, 50],
              note: 'Outra verificação antes de usar o resultado'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Go</Heading>
          <List>
            <ListItem>returno de função + tuplas</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; mais de um valor semântico por retorno</ListItem>
            </Appear>
            <p/>
            <ListItem>mutação por ponteiros</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; mais explícito que objetos</ListItem>
            </Appear>
            <p/>
            <ListItem>não usar variáveis é um erro</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; erros de esquecimento são eliminados</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Rust</Heading>
          <List>
            <ListItem>retorno de função + tipos + macros</ListItem>
            <ListItem>mutabilidade explícita</ListItem>
            <ListItem>match não-exaustivo é um erro</ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="rust"
          code={require('raw-loader!./06_rust.example')}
          ranges={[
            {
              loc: [0, 20],
              title: 'Rust'
            },
            {
              loc: [0, 4],
              note: 'Post com conteúdo obrigatório, URL opcional'
            },
            {
              loc: [15, 22],
              note: 'Validação é uma função que constrói um Post a partir do conteúdo'
            },
            {
              loc: [15, 16],
              note: 'Retorno é um Result, pode ser um Post se der certo ou uma mensagem de erro'
            },
            {
              loc: [16, 18],
              note: 'Caso de erro com a string'
            },
            {
              loc: [18, 20],
              note: 'Caso de successo com a struct'
            },
            {
              loc: [23, 33],
              note: 'Publicação'
            },
            {
              loc: [23, 24],
              note: 'Retorno também é um Result, nada em caso de sucesso ou uma mensagem de erro'
            },
            {
              loc: [23, 24],
              note: 'E pra modificar o post precisa da marcação mut'
            },
            {
              loc: [24, 29],
              note: 'Caso de sucesso da publicação'
            },
            {
              loc: [25, 27],
              note: 'URL é opcional, aqui indica que agora tem um valor'
            },
            {
              loc: [29, 31],
              note: 'Caso de falha'
            },
            {
              loc: [34, 42],
              note: 'Orquestração de tudo'
            },
            {
              loc: [36, 37],
              note: 'Como o retorno é um Result dá pra usar a macro `?`'
            },
            {
              loc: [37, 38],
              note: 'Outra vez a macro'
            },
            {
              loc: [39, 40],
              note: 'URL é opcional, então tem que extrair o valor'
            },
          ]}
        />
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Rust</Heading>
          <List>
            <ListItem>retorno de função + tipos + macros</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; estrutura dos tipo e macro pra ergonomia</ListItem>
            </Appear>
            <p/>
            <ListItem>mutabilidade explícita</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; mais explícito que objetos</ListItem>
            </Appear>
            <p/>
            <ListItem>match não-exaustivo é um erro</ListItem>
            <Appear>
              <ListItem textColor="tertiary">&rarr; erros de esquecimento são eliminados</ListItem>
            </Appear>
          </List>
        </Slide>
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
          <Heading size={4}>Como faço para usar?</Heading>
        </Slide>
        <CodeSlide
          lang="ruby"
          code={require('raw-loader!./07_result.rb')}
          ranges={[
            {
              loc: [0, 20],
              title: 'Pseudo-code'
            },
            {
              loc: [3, 24],
              note: 'Caso de sucesso'
            },
            {
              loc: [25, 45],
              note: 'Caso de falha'
            },
            {
              loc: [46, 53],
              note: 'Funções de conveniência'
            },
            {
              loc: [54, 60],
              note: 'Uso simples'
            }
          ]}
        />
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
          <Text>Valores mágicos não são um bom meio de comunicação</Text>
          <Text>null, 0, "", false dependem do contexto</Text>
          <Text>Não precisa custar nada um retorno explícito</Text>
        </Slide>
        <Slide bgColor="bgColor">
          <Text>Código de retorno é uma ideia simples</Text>
          <Text>Result/Option é uma implementação menos mágica dessa ideia</Text>
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
