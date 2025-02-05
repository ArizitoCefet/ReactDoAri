import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentario() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          titulo={item.titulo}
          data={item.data}
          img={item.img}
        />
      ))}
    </S.Section>
  )
}
