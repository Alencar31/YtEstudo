import { 
    ButtonIcon,
    Container, 
    MenuItem,
    Linha,
    OpcoesItem,
} from "./styles";
import NotificationIcon from '../../assets/sino.png';
import Microfone from '../../assets/microfone-gravador.png';
import Video from '../../assets/video.png';
import Musicas from '../../assets/Músicas.png';
import Esportes from '../../assets/Esporte.png';
import Jogos from '../../assets/jogos.png';

const items = ['Inicio','Microfone','video']
const img = [NotificationIcon,Microfone,Video]
const items2 = ['Músicas','Esporte','Jogos']
const img2 = [Musicas,Esportes,Jogos]

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps){
    return (
        <Container openMenu={openMenu}>
            {items.map((opcao,indice) => (
                <MenuItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={img[indice]} />
                    <span>{items[indice]}</span>
                </MenuItem>
            ))}
            <Linha />
            {items2.map((opcao2,indice2) => (
                <OpcoesItem openMenu={openMenu}>
                    <ButtonIcon alt="" src={img2[indice2]} />
                    <span>{items2[indice2]}</span>
                </OpcoesItem>))}
        </Container>      
    )
}

export default Menu;