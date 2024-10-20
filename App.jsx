import './App.css'
import BotaoClique from './BotaoClique'
import DivEstilizada from './DivEstilizada'
import FragmentoExemplo from './FragmentoExemplo'
import Imagem from './Imagem'
import LinkReact from './LinkReact'
import ListaTarefas from './ListaTarefas'
import OlaMundo from './OlaMundo'
import Paragrafo from './Paragrafo'
import Saudacao from './Saudacao'
import TituloSubtitulo from './TituloSubtitulo'

function App() {

  return (
    <>
     <OlaMundo />
     <Paragrafo />
     <ListaTarefas />
     <Imagem />
     <BotaoClique />
     <LinkReact />
     <TituloSubtitulo />
     <Saudacao hora={false} />
     <DivEstilizada />
     <FragmentoExemplo  />
    </>
  )
}

export default App
