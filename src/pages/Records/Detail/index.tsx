import React, { useState, useEffect } from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../services/api";
import moment from "moment";

interface IRecords {
  id: number;
  name: string;
  ra: string;
  age: number;
  nascimento: string;
  address: string;
  registered: boolean;
}

const Detail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [record, setRecord] = useState<IRecords>();

  function back() {
    history.goBack();
  }

  async function findRecord() {
    const response = await api.get<IRecords>(`/record/${id}`);
    console.log(response);
    setRecord(response.data);
  }

  useEffect(() => {
    findRecord();
  }, [id]);

  return (
    <div className="container">
      <br />
      <div className="record-header">
        <h1>Detalhes do Cadastro</h1>
        <Button variant="dark" size="sm" onClick={back}>
          Voltar
        </Button>
      </div>
      <br />

      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="https://github.com/Danielccc3" target="_blank">
                Github
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/daniel-correia-cabral-correa-03247b225/"
                target="_blank"
              >
                Linkedin
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>{record?.name}</Card.Title>

          <Card.Text>
            <strong>ID</strong> - {record?.id}
            <br />
            <strong>Idade </strong> - {record?.age}
            <br />
            <strong>Nascimento </strong> -{" "}
            {moment(record?.nascimento).format("DD/MM/YYYY")}
            <br />
            <strong>Endereço </strong> - {record?.address}
            <br />
            <br/>
            {record?.registered ? "Desmatriculado(a)" : "Matriculado(a)"}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}></Card>
    </div>
  );
};
export default Detail;