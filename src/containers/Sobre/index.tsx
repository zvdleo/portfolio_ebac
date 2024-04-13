import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>About me</Titulo>
    <Paragrafo tipo="principal">
      Hello! I am a programming and systems development enthusiast, with a
      special passion for the Full Stack area. Since then, I have dedicated my
      time and energy to constantly improving this knowledge. I am a firm
      believer in the power of continuous learning and have been actively
      seeking opportunities to expand my expertise. My determination to master
      my craft is reflected in my pursuit of challenges that encourage me to
      grow as a professional.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=zvdleo&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zvdleo&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
