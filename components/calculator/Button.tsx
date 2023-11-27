

interface args {label: string, withBg: boolean, onTap: Function}
const Button = (props: args) => {
  

  return (
    <button onClick={() => props.onTap()}  className={`px-4 md:px-6 py-2 text-center rounded-lg text-xl xl:text-2xl font-semibold shadow-xl shadow-slate-300 ${props.withBg ? 'text-indigo-700 bg-blue-300' : 'text-slate-600 bg-blue-200 '}`}>{props.label}</button>
  )
}

export default Button