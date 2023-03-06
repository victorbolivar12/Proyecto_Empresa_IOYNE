import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Card = ({ title, createComponent, tableComponent }) => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '30px' }}>{title}</h1>
                {createComponent}
            </div>
            <Row>
                <Col>
                    {tableComponent}
                </Col>
            </Row>
        </Container>
    )
}