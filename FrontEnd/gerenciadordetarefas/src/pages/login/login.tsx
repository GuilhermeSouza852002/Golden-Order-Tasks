import "./login.css";

function Login () {

  return (
    <div>
      <form>
        <h1>Acesse o sistema</h1>
        <div>
          <input type="text" placeholder="E-mail" />
        </div>

        <div>
          <input type="password" placeholder="Senha" />
        </div>

        <button type="submit">Login</button>
        <div>
          <p>
            Não tem uma conta? <a href="/cadastro">Registrar-se</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;