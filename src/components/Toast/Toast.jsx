import "./Toast.css"
const Toast = ({text}) => {
  return (
    <div id="snackbar" className={text.length ? "show" : ""}>{text}</div>
  )
}

export default Toast
