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
              loc: [2, 21],
              title: 'Bash'
            },
            {
              loc: [6, 9],
              note: 'validate retorna um código e joga no stdout o resultado'
            },
            {
              loc: [9, 12],
              note: 'publish_or_distribute popula uma variável global'
            },
            {
              loc: [22, 35],
              note: 'o método validate'
            },
            {
              loc: [28, 30],
              note: 'o caso de falha'
            },
            {
              loc: [31, 33],
              note: 'o caso de sucesso'
            },
            {
              loc: [36, 44],
              note: 'o método publish_or_schedule'
            },
            {
              loc: [41, 43],
              note: 'não tem retorno, popula variáveis globais'
            },
            {
              loc: [9, 16],
              note: 'verificação se uma das variáveis tem algum valor'
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
        <Slide bgColor="bgColor">
          <Heading size={3} caps>C-like</Heading>
          <List>
            <ListItem>código de retorno</ListItem>
            <ListItem>retorno de função</ListItem>
            <ListItem>mutação por ponteiros</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>C#</Heading>
          <List>
            <ListItem>retorno de função + objetos</ListItem>
            <ListItem>mutação explícita por ponteiros</ListItem>
            <ListItem>controle de erros por exceções</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Elixir</Heading>
          <List>
            <ListItem>retorno de função + tuplas</ListItem>
            <ListItem>destructuring + matching</ListItem>
            <ListItem>imutabilidade</ListItem>
            <ListItem>controle de erros por exceções</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Go</Heading>
          <List>
            <ListItem>returno de função + tuplas</ListItem>
            <ListItem>não usar variáveis é um erro</ListItem>
            <ListItem>mutabilidade</ListItem>
            <ListItem>panic!</ListItem>
          </List>
        </Slide>
        <Slide bgColor="bgColor">
          <Heading size={3} caps>Rust</Heading>
          <List>
            <ListItem>retorno de função + tipos</ListItem>
            <ListItem>match não-exaustivo é um erro</ListItem>
            <ListItem>mutabilidade explícita</ListItem>
            <ListItem>panic!</ListItem>
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
