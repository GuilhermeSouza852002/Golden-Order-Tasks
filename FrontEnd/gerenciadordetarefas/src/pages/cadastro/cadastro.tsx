import "./cadastro.css";

function Cadastro () {

  return (
    <div>
      <form>
        <h1>Cadastrar-se</h1>
        <div>
          <input type="text" placeholder="E-mail" />
        </div>

        <div>
          <input type="password" placeholder="Senha" />
        </div>

        <button type="submit">Cadastrar-se</button>
        <div>
          <p>
            Já possui uma conta? <a href="/login">Entrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;