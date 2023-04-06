import React,{useRef} from 'react';//use ref nos permite llamar etiquetas, similar a getElementById
import '../styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	const form =useRef(null);//deeclaramos el form como null,(este metodo no es tan seguro como FormData)

	const handleSubmit=(event)=>{//esta funcion va a extraer el contenido de los imputs, almacenarlo en un objeto y mostrarlo en consola
		event.preventDefault()//evitar la accion por defecto del boton,(por que type='submit')	
		const formData= new FormData(form.current);//asignamos el FormData de js a la constante formData, form.current hace referencia a el formulario actual?
		const data={//data es el objeto donde sale la info
			username:formData.get('email'), //
			password:formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}> {/* le asignamos el useRef a este formulario */}
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" /> {/*  */}
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" /> {/*name va a ser lo que tome formData */}
					<button type='submit' onClick={handleSubmit} className="primary-button login-button" >log in</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" onClick={handleSubmit} >Sign up</button>{/* ejecuta la funcion handleSubmit */}
			</div>
		</div>
	);
}

export default Login;
