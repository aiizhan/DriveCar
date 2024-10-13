import HeaderAdmin from "./headerAdmin/HeaderAdmin"
import MenuAdmin from "./menuAdmin/MenuAdmin"
import TodoAdmin from "./todoAdmin/TodoAdmin"

const AdminPart = () => {
  return (
    <div className="flex" >
        <MenuAdmin />
      <div>
      <HeaderAdmin />
      <TodoAdmin />
      </div>
    </div>
  )
}

export default AdminPart