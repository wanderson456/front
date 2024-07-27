import estrela from '../assets/star.svg'
import estrelabranca from '../assets/star-icon.svg'
import styled from 'styled-components';
const Avaliacao = styled.img`
width: 30px;
height: 30px;
display: inline-block;

`

const Star = () => {
    return ( 
        <>
       <Avaliacao src={estrela}/>
       <Avaliacao src={estrela}/>
       <Avaliacao src={estrela}/>
       <Avaliacao src={estrela}/>
       <Avaliacao src={estrelabranca}/>
        
        </>
     );
}
 
export default Star;