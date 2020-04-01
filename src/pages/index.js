import React from 'react';
import { Helmet } from "react-helmet";
import { Line } from 'react-chartjs-2';

import Layout from '../components/Layout';

import Logo from '../assets/mundi.jpg';

import './styles.css';

const Index = () => {

	let Cases = [
	    {
	      "pais": "Estados Unidos",
	      "casos": "140.886"
	    },
	    {
	      "pais": "Itália",
	      "casos": "97.689"
	    },
	    {
	      "pais": "China",
	      "casos":	"82.122"
	    },
	    {
	      "pais": "Espanha",
	      "casos":	"80.110"
	    },
	    {
	      "pais": "Alemanha",
	      "casos":	"62.095"
	    },
	    {
	      "pais": "França",
	      "casos":	"40.708"
	    },
	    {
	      "pais": "Irã",
	      "casos":	"38.309"
	    },
	    {
	      "pais": "Reino Unido",
	      "casos":	"19.780"
	    },
	    {
	      "pais": "Suíça",
	      "casos":	"14.829"
	    },
	    {
	      "pais": "Países Baixos",
	      "casos":	"10.930"
	    },
	    {
	      "pais": "Bélgica",
	      "casos":	"10.836"
	    },
	    {
	      "pais": "Coreia do Sul",
	      "casos":	"9.583"},
	    {
	      "pais": "Peru",
	      "casos":	"9.217"},
	    {
	      "pais": "Áustria",
	      "casos":	"8.788"},
	    {
	      "pais": "Canadá",
	      "casos":	"6.280"},
	    {
	      "pais": "Portugal",
	      "casos":	"5.962"},
	    {
	      "pais": "Brasil",
	      "casos":	"4.552"},
	    {
	      "pais": "Noruega",
	      "casos":	"4.284"},
	    {
	      "pais": "Israel",
	      "casos":	"4.247"},
	    {
	      "pais": "Austrália",
	      "casos":	"3.984"},
	    {
	      "pais": "Suécia",
	      "casos":	"3.700"
	    },
	    {
	      "pais": "República Checa",
	      "casos":	"2.817"
	    },
	    {
	      "pais": "Irlanda",
	      "casos":	"2.615"
	    },
	    {
	      "pais": "Dinamarca",
	      "casos":	"2.564"
	    },
	    {
	      "pais": "Malásia",
	      "casos":	"2.470"
	    },
	    {
	      "pais": "Chile",
	      "casos":	"2.139"
	    },
	    {
	      "pais": "Luxemburgo",
	      "casos":	"1.950"
	    },
	    {
	      "pais": "Equador",
	      "casos":	"1.924"
	    },
	    {
	      "pais": "Japão",
	      "casos":	"1.866"
	    },
	    {
	      "pais": "Polônia",
	      "casos":	"1.862"
	    },
	    {
	      "pais": "Romênia",
	      "casos":	"1.815"
	    },
	    {
	      "pais": "Paquistão",
	      "casos":	"1.597"
	    },
	    {
	      "pais": "Rússia",
	      "casos":	"1.534"
	    },
	    {
	      "pais": "Filipinas",
	      "casos":	"1.418"
	    },
	    {
	      "pais": "Tailândia",
	      "casos":	"1.388"
	    },
	    {
	      "pais": "Arábia Saudita",
	      "casos":	"1.299"
	    },
	    {
	      "pais": "Indonésia",
	      "casos":	"1.285"
	    },
	    {
	      "pais": "África do Sul",
	      "casos":	"1.280"
	    },
	    {
	      "pais": "Finlândia",
	      "casos":	"1.240"
	    },
	    {
	      "pais": "Grécia",
	      "casos":	"1.156"
	    },
	    {
	      "pais": "Índia",
	      "casos":	"1.024"
	    },
	    {
	      "pais": "Islândia",
	      "casos":	"1.020"
	    },
	    {
	      "pais": "Panamá",
	      "casos":	"901"
	    },
	    {
	      "pais": "República Dominicana",
	      "casos":	"859"
	    },
	    {
	      "pais": "México",
	      "casos":	"848"
	    },
	    {
	      "pais": "Cingapura",
	      "casos":	"844"
	    },
	    {
	      "pais": "Argentina",
	      "casos":	"745"
	    },
	    {
	      "pais": "Sérvia",
	      "casos":	"741"
	    },
	    {
	      "pais": "Eslovênia",
	      "casos":	"730"
	    },
	    {
	      "pais": "Croácia",
	      "casos":	"713"
	    },
	    {
	      "pais": "diamond princess",
	      "casos":	"712"
	    },
	    {
	      "pais": "Colômbia",
	      "casos":	"702"
	    },
	    {
	      "pais": "Estônia",
	      "casos":	"679"
	    },
	    {
	      "pais": "Catar",
	      "casos":	"634"
	    },
	    {
	      "pais": "Egito",
	      "casos":	"609"
	    },
	    {
	      "pais": "Emirados Árabes Unidos",
	      "casos":	"570"
	    },
	    {
	      "pais": "Iraque",
	      "casos":	"547"
	    },
	    {
	      "pais": "Nova Zelândia",
	      "casos":	"514"
	    },
	    {
	      "pais": "Argélia",
	      "casos": "511"
	    },
	    {
	      "pais": "Barém",
	      "casos": "499"
	    },
	    {
	      "pais": "Marrocos",
	      "casos": "479"
	    },
	    {
	      "pais": "Ucrânia",
	      "casos": "475"
	    },
	    {
	      "pais": "Lituânia",
	      "casos": "460"
	    },
	    {
	      "pais": "Líbano",
	      "casos": "438"
	    },
	    {
	      "pais": "Armênia",
	      "casos": "424"
	    },
	    {
	      "pais": "Hungria",
	      "casos": "408"
	    },
	    {
	      "pais": "Letônia",
	      "casos": "347"
	    },
	    {
	      "pais": "Bulgária",
	      "casos": "346"
	    },
	    {
	      "pais": "Andorra",
	      "casos": "334"
	    },
	    {
	      "pais": "Bósnia e Herzegovina",
	      "casos": "323"
	    },
	    {
	      "pais": "Costa Rica",
	      "casos": "314"
	    },
	    {
	      "pais": "Eslováquia",
	      "casos": "314"
	    },
	    {
	      "pais": "Tunísia",
	      "casos": "312"
	    },
	    {
	      "pais": "Uruguai",
	      "casos": "304"
	    },
	    {
	      "pais":"Taiwan",
	      "casos": "298"
	    },
	    {
	      "pais": "Cazaquistão",
	      "casos": "284"
	    },
	    {
	      "pais": "Moldova",
	      "casos": "263"
	    },
	    {
	      "pais": "Coreia do Norte",
	      "casos": "259"
	    },
	    {
	      "pais": "Jordânia",
	      "casos": "259"
	    },
	    {
	      "pais": "Kuwait",
	      "casos": "255"
	    },
	    {
	      "pais": "San Marino",
	      "casos": "224"
	    },
	    {
	      "pais": "Burkina Faso",
	      "casos": "222"
	    },
	    {
	      "pais": "Chipre",
	      "casos": "214"
	    },
	    {
	      "pais": "Albânia",
	      "casos": "212"
	    },
	    {
	      "pais": "Azerbaijão",
	      "casos": "209"
	    },
	    {
	      "pais": "Vietnã",
	      "casos": "188"
	    },
	    {
	      "pais": "Omã",
	      "casos": "167"
	    },
	    {
	      "pais": "Costa do Marfim",
	      "casos": "165"
	    },
	    {
	      "pais": "Gana",
	      "casos": "152"
	    },
	    {
	      "pais": "Malta",
	      "casos": "151"
	    },
	    {
	      "pais": "Usbequistão",
	      "casos": "144"
	    },
	    {
	      "pais": "Senegal",
	      "casos": "142"
	    },
	    {
	      "pais": "Camarões",
	      "casos": "139"
	    },
	    {
	      "pais": "Cuba",
	      "casos": "139"
	    },
	    {
	      "pais": "Brunei",
	      "casos": "126"
	    },
	    {
	      "pais": "Afeganistão",
	      "casos": "120"
	    },
	    {
	      "pais": "Venezuela",
	      "casos": "119"
	    },
	    {
	      "pais": "Sri Lanka",
	      "casos": "117"
	    },
	    {
	      "pais": "Nigéria",
	      "casos": "111"
	    },
	    {
	      "pais": "Honduras",
	      "casos": "110"
	    },
	    {
	      "pais": "Saara Ocidental",
	      "casos": "109"
	    },
	    {
	      "pais": "Ilhas Maurício",
	      "casos": "107"
	    },
	    {
	      "pais": "Camboja",
	      "casos": "103"
	    },
	    {
	      "pais": "Bielorrússia",
	      "casos": "94"
	    },
	    {
	      "pais": "Kosovo",
	      "casos": "94"
	    },
	    {
	      "pais": "Geórgia",
	      "casos": "91"
	    },
	    {
	      "pais": "Montenegro",
	      "casos": "85"
	    },
	    {
	      "pais": "Quirguistão",
	      "casos": "84"
	    },
	    {
	      "pais": "Bolívia",
	      "casos": "81"
	    },
	    {
	      "pais": "Trindade e Tobago",
	      "casos": "78"
	    },
	    {
	      "pais": "Ruanda",
	      "casos": "70"
	    },
	    {
	      "pais": "República Democrática do Congo",
	      "casos": "65"
	    },
	    {
	      "pais": "Paraguai",
	      "casos": "59"
	    },
	    {
	      "pais": "Liechtenstein",
	      "casos": "56"
	    },
	    {
	      "pais": "Bangladesh",
	      "casos": "48"
	    },
	    {
	      "pais": "Mônaco",
	      "casos": "46"
	    },
	    {
	      "pais": "Quênia",
	      "casos": "42"
	    },
	    {
	      "pais": "Madagáscar",
	      "casos": "39"
	    },
	    {
	      "pais": "Guatemala",
	      "casos": "34"
	    },
	    {
	      "pais": "Barbados",
	      "casos": "33"
	    },
	    {
	      "pais": "Uganda",
	      "casos": "33"
	    },
	    {
	      "pais": "Jamaica",
	      "casos": "32"
	    },
	    {
	      "pais": "Zâmbia",
	      "casos": "29"
	    },
	    {
	      "pais": "Togo",
	      "casos": "25"
	    },
	    {
	      "pais": "El Salvador",
	      "casos": "24"
	    },
	    {
	      "pais": "Guiana",
	      "casos": "23"
	    },
	    {
	      "pais": "Etiópia",
	      "casos": "21"
	    },
	    {
	      "pais": "República do Congo",
	      "casos": "19"
	    },
	    {
	      "pais": "Djibuti",
	      "casos": "18"
	    },
	    {
	      "pais": "Mali",
	      "casos": "18"
	    },
	    {
	      "pais": "Níger",
	      "casos": "18"
	    },
	    {
	      "pais": "Maldivas",
	      "casos": "17"
	    },
	    {
	      "pais": "Guiné",
	      "casos": "16"
	    },
	    {
	      "pais": "Haiti",
	      "casos": "15"
	    },
	    {
	      "pais": "Tanzânia",
	      "casos": "14"
	    },
	    {
	      "pais": "Eritreia",
	      "casos": "12"
	    },
	    {
	      "pais": "Guiné Equatorial",
	      "casos":   "12"
	    },
	    {
	      "pais": "Mongólia",
	      "casos": "12"
	    },
	    {
	      "pais": "Dominica",
	      "casos": "11"
	    },
	    {
	      "pais": "Namíbia",
	      "casos": "11"
	    },
	    {
	      "pais": "The Bahamas",
	      "casos": "11"
	    },
	    {
	      "pais": "Burma",
	      "casos": "10"
	    },
	    {
	      "pais": "Granada",
	      "casos": "9"
	    },
	    {
	      "pais": "Santa Lúcia",
	      "casos": "9"
	    },
	    {
	      "pais": "Síria",
	      "casos": "9"
	    },
	    {
	      "pais": "Suazilândia",
	      "casos": "9"
	    },
	    {
	      "pais": "Laos",
	      "casos": "8"
	    },
	    {
	      "pais": "Líbia",
	      "casos": "8"
	    },
	    {
	      "pais": "Moçambique",
	      "casos": "8"
	    },
	    {
	      "pais": "Seicheles",
	      "casos": "8"
	    },
	    {
	      "pais": "Suriname",
	      "casos": "8"
	    },
	    {
	      "pais": "Angola",
	      "casos": "7"
	    },
	    {
	      "pais": "Antígua e Barbuda",
	      "casos": "7"
	    },
	    {
	      "pais": "Gabão",
	      "casos": "7"
	    },
	    {
	      "pais": "Zimbábue",
	      "casos": "7"
	    },
	    {
	      "pais": "Benin",
	      "casos": "6"
	    },
	    {
	      "pais": "cabo Verde",
	      "casos": "6"
	    },
	    {
	      "pais": "Cidade do Vaticano",
	      "casos": "6"
	    },
	    {
	      "pais": "São Martinho",
	      "casos": "6"
	    },
	    {
	      "pais": "Fiji",
	      "casos": "5"
	    },
	    {
	      "pais": "Mauritânia",
	      "casos": "5"
	    },
	    {
	      "pais": "Nepal",
	      "casos": "5"
	    },
	    {
	      "pais": "Butão",
	      "casos": "4"
	    },
	    {
	      "pais": "Nicarágua",
	      "casos": "4"
	    },
	    {
	      "pais": "The Gambia",
	      "casos": "4"
	    },
	    {
	      "pais": "Chade",
	      "casos": "3"
	    },
	    {
	      "pais": "Libéria",
	      "casos": "3"
	    },
	    {
	      "pais": "República Centro-Africana",
	      "casos": "3"
	    },
	    {
	      "pais": "Somália",
	      "casos": "3"
	    },
	    {
	      "pais": "Belize",
	      "casos": "2"
	    },
	    {
	      "pais": "Guiné-Bissau",
	      "casos": "2"
	    },
	    {
	      "pais": "MS Zaandam",
	      "casos": "2"
	    },
	    {
	      "pais": "São Cristóvão e Névis",
	      "casos": "2"
	    },
	    {
	      "pais": "Papua Nova Guiné",
	      "casos": "1"
	    },
	    {
	      "pais": "São Vicente e Granadinas",
	      "casos": "1"
	    },
	    {
	      "pais": "Timor-Leste",
	      "casos": "1"
	    },
	  ];

	let line = {
	  labels: ['Jan 22', 'Fev 15', 'Fev 27', 'Mar 10', 'Mar 30'],
	  datasets: [
	    {
	      label: 'Casos',
				fill: false,
	      lineTension: 0.1,
	      backgroundColor: 'rgba(75,192,192,0.4)',
	      borderColor: '#B8D335',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: '#B8D335',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: '#B8D335',
	      pointHoverBorderColor: '#B8D335',
	      pointHoverBorderWidth: 2,
	      pointRadius: 2,
	      pointHitRadius: 10,
	      data: [580, 69197, 83112, 118948, 784138],
	    },
			{
	      label: 'Mortes',
				fill: false,
	      lineTension: 0.1,
	      backgroundColor: 'rgba(75,192,192,0.4)',
	      borderColor: 'rgba(75,192,192,0.4)',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: 'rgba(75,192,192,0.4)',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: 'rgba(75,192,192,0.4)',
	      pointHoverBorderColor: 'rgba(75,192,192,0.4)',
	      pointHoverBorderWidth: 2,
	      pointRadius: 2,
	      pointHitRadius: 10,
	      data: [17, 1669, 2858, 4296, 37773],
	    },
	  ],
	};

	return (
		<Layout page={'Coronavirus - Sobre'} footer={true}>
			<Helmet>
				<title>Coronavirus - Sobre</title>
				<meta name="description" content="Coronavirus. Tudo sobre o coronavirus hoje. Coronavirus casos no Brasil!" />
				<meta name="keywords" content="coronavirus,coronavirus hoje,coronavirus casos,casos de coronavirus, sobre o coronavirus, virus" />
				<meta name="author" content="FabioKido" />
			</Helmet>
			<div className='principal' style={{ backgroundImage: `url(${Logo})` }}>
				<h1>Coronavirus</h1>
				<div className='cont'>
					<div className='conts'>
						<h2>Casos</h2>
						<h3>858,377</h3>
					</div>
					<div className='conts'>
						<h2>Hoje</h2>
						<h3>63.159</h3>
					</div>
				</div>
				<div className='cont'>
					<div className='conts'>
						<h2>Mortes</h2>
						<h3>33.928</h3>
					</div>
					<div className='conts'>
						<h2>Hoje</h2>
						<h3>3.464</h3>
					</div>
				</div>
			</div>
			<div className='content'>
				<div className='info-table'>
					<h1>Casos de coronavirus pelo mundo</h1>
					<table>
						<div style={{ background: '#B8D335', margin: '2px' }}>
							<thead>
									<tr>
											<th>País</th>
											<th>Casos confirmados</th>
									</tr>
							</thead>
						</div>
						<div style={{ maxHeight: '500px', width: '470px', overflow: 'auto'}}>
							<tbody>
								{Cases.map(item => (
										<tr key={ item.pais }>
											<td>
													{item.pais}
											</td>
											<td style={{ textAlign: 'center' }}>
													{item.casos}
											</td>
										</tr>
									))
								}
							</tbody>
						</div>
					</table>
				</div>
				<div className='graphic-wld'>
					<h1>Casos confirmados em cada mês</h1>
					<div className='Line'>
						<Line data={line} />
					</div>
				</div>
				<div className='text'>
					<h1>História</h1>
					<p>
						A <b>Organização Mundial da Saúde (OMS)</b> declarou, em 30 de janeiro de 2020, que o surto da doença causada pelo novo <b>coronavírus</b> (<b><i>COVID-19</i></b>) constitui uma Emergência de Saúde Pública de Importância Internacional – o mais alto nível de alerta da Organização, conforme previsto no Regulamento Sanitário Internacional. <br/><br/> Em 11 de março de 2020, a COVID-19 foi caracterizada pela OMS como uma pandemia.
					</p>
				</div>
				<div className='text'>
					<h1>Medidas de Prevenção</h1>
					<img src='' alt='' />
					<p>
						Os vírus respiratórios se espalham pelo contato, por isso a importância da prática da higiene frequente, a desinfecção de objetos e superfícies tocados com frequência, como celulares, brinquedos, maçanetas, corrimão, são indispensáveis para a proteção contra o vírus. <br/><br/> Até mesmo a forma de cumprimentar o outro deve mudar, evitando abraços, apertos de mãos e beijos no rosto. Essas são as maneiras mais importantes pelas quais as pessoas podem proteger a si e sua família de doenças respiratórias, incluindo o <b>coronavírus</b>.
					</p>
					<p>
						Para os serviços públicos e privados, é indicado que disponibilizem locais para que os trabalhadores lavem as mãos com frequência, álcool em gel 70% e toalhas de papel descartáveis. Há ainda a orientação sobre o uso de máscaras e outros Equipamentos de Proteção Individual (EPI). <br/><br/> O orgãos de Saúde recomenda que a utilização de equipamento de proteção seja feita apenas por pessoas doentes, casos confirmados da doença, contatos domiciliares e profissionais de saúde. Para áreas com transmissão local da doença, é recomendado que idosos e doentes crônicos evitem contato social como idas ao cinema, shoppings, viagens e locais com aglomeração de pessoas.
					</p>
				</div>
				<div className='text'>
					<h1>Os Coronavirus - (<b>CoV</b>)</h1>
					<p>
						Os <b>coronavírus</b> humanos comuns causam infecções respiratórias brandas a moderadas de curta duração. Os sintomas podem envolver coriza, tosse, dor de garganta e febre. <br/><br/> Esses vírus algumas vezes podem causar infecção das vias respiratórias inferiores, como pneumonia. Esse quadro é mais comum em pessoas com doenças cardiopulmonares, com sistema imunológico comprometido ou em idosos.
					</p>
					<p>
						Além desse novo, tem-se, o <b><i>MERS-CoV</i></b>, assim como o <b><i>SARS-CoV</i></b>, que causam infecções graves.
					</p>
				</div>
			</div>
		</Layout>
	);
}

export default Index;
