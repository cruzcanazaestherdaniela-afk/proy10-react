import {Card,CardBody,CardTitle,CardText,Button} from 'reactstrap';

function CardInfo(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <img src={props.imagen} alt={props.titulo} />

      <CardBody>
        <CardTitle tag="h5">
          {props.titulo}
        </CardTitle>

        <CardText>
          {props.descripcion}
        </CardText>
      </CardBody>
    </Card>
  );
}

export default CardInfo;