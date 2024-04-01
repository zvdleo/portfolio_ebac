import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      pariatur, debitis fuga laudantium natus sequi dignissimos placeat
      suscipit? Tenetur nihil, officia aliquam inventore nostrum incidunt cumque
      in dolorem eligendi. Laboriosam!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=zvdleo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zvdleo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
