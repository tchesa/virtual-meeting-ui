import ProtectedIcon from "../../assets/icons/protected-icon"

type Props = {
  value ?: boolean
}

const Protected = ({ value = false }: Props) => (
  <div className="protected">
    <ProtectedIcon />
  </div>
)

export default Protected
