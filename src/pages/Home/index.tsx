import React from "react";
import { Link } from "react-router-dom";
import "./index.css";



const Home: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Cadastro Alunos</h1>
          <p className="lead">
            Sistema criado para matricular, desmatricular, editar e excluir cadastro do aluno.
          </p>
          <Link className="button btn" style={{color: 'light-blue'}} to="/cadastros">
            Acessar cadastros
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;