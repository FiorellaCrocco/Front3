function Cuentas(props) {
  return (
    <div className="flex">
      {props.accounts.map((user) => {
        return (
          <div key={user.id} className="card" onClick={() => props.onClick(user)}>
            {user.nombre}
          </div>
        );
      })}
    </div>
  );
}

export default Cuentas;
