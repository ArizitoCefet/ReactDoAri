import { SSection } from "./styles";
export interface ICard {
  titulo: string
  data: string
  img: string
}
export const Card = ({ titulo, data , img }: ICard) => {
  return (
    <SSection>
      <aside>
        <h5>Titulo:</h5>
        <p>{titulo}</p>
      </aside>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <div>
        <aside>
          <img src={img} alt="a" />
        </aside>
      </div>
    </SSection>
  );
};
