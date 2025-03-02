export default function App() {
  return <div className="app">
 <Logo/>
 <Form/>
 <PackingList/>
 <State/>
  </div>
}

function Logo() {
  return <h1> רחוק מאוד</h1>
}

function Form() {
  return (
    <div className="add-form">
      <h3>מה צריך בשביל הטיול?</h3>
    </div>
  )
}


function PackingList(){
  return <div className="list">רשימה</div>
}

function State() {
  return (
    <footer>
      <em>יש לך X מוצרים ברשימה וכבר הרזת X </em>
    </footer>
  )
}