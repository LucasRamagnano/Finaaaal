:root {
	--rojo: #E50914;
	--fondo: #141414;
}

 {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background: var(--fondo);
	font-family: 'Open Sans', sans-serif;
}

.contenedor {
	width: 90%;
	margin: auto;
}

header {
	padding: 30px 0;
}

header .contenedor {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header .logotipo {
	font-family: 'Bebas Neue', cursive;
	font-weight: normal;
	color: var(--rojo);
	font-size: 40px;
}

header nav a {
	color: #AAA;
	text-decoration: none;
	margin-right: 20px;
}

header nav a:hover,
header nav a.activo {
	color: #FFF;
}


pelicula-principal {
	font-size: 16px;
	min-height: 40.62em;
	color: #fff;
	background: linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url(../img/backdrop.jpg);
	background-position: center center;
	background-size: cover;
	margin-bottom: 3.12em;
	display: flex;
	align-items: end;
}

pelicula-principal .contenedor {
	margin: 0 auto;
	margin-bottom: 6.25em;
}

pelicula-principal .titulo {
	font-weight: 600;
	font-size: 3.12em;
	margin-bottom: 0.4em;
}

pelicula-principal .descripcion {
	font-weight: normal;
	font-size: 1em;
	line-height: 1.75em;
	max-width: 50%;
	margin-bottom: 1.25em;
}

pelicula-principal .boton {
	background: rgba(0,0,0, 0.5);
	border: none;
	border-radius: 0.31em;
	padding: 0.93em 1.87em;
	color: #fff;
	margin-right: 1.25em;
	cursor: pointer;
	transition: .3s ease all;
	font-size: 1.12em;
}

pelicula-principal .boton:hover {
	background: #fff;
	color: #000;
}

pelicula-principal .boton i {
	margin-right: 1.25em;
}

@media screen and (max-width: 800px) {
	header .logotipo {
		margin-bottom: 10px;
		font-size: 30px;
	}

	header .contenedor {
		flex-direction: column;
		text-align: center;
	}

	pelicula-principal {
		font-size: 14px;
	}

	pelicula-principal .descripcion {
		max-width: 100%;
	}
}