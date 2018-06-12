db.ejer.insert({
   _id:0, nombre:"control",
   descripcion:"Unidad de control"
   nivel:[{
       Id_nivel:0, Nombre:"Inicio",
       descripcion:"Variable de control",
       expresion:[{}]
   }]
});


db.ejer.insert({
   _id:1, nombre:"Abecedario",
   descripcion:"Abecedario en español mexicano"
   nivel:[{ 
       Id_nivel:1, Nombre:"A_J",
       descripcion:"Letras del abecedario, de la A a la J",
       expresion:[{
           id_exp:1,
           palabra:"A",
           id_tipo:1,
           descripcion:"La letra A del abecedario español mexicano."
                }, {
           id_exp:2,
           palabra:"B",
           id_tipo:1,
           descripcion:"La letra B del abecedario español mexicano."
                }, {
           id_exp:3,
           palabra:"C",
           id_tipo:1,
           descripcion:"La letra C del abecedario español mexicano."
                }, {
           id_exp:4,
           palabra:"D",
           id_tipo:1,
           descripcion:"La letra D del abecedario español mexicano."
                }, {
           id_exp:5,
           palabra:"E",
           id_tipo:1,
           descripcion:"La letra E del abecedario español mexicano."
                }, {
           id_exp:6,
           palabra:"F",
           id_tipo:1,
           descripcion:"La letra F del abecedario español mexicano."
                }, {
           id_exp:7,
           palabra:"G",
           id_tipo:1,
           descripcion:"La letra G del abecedario español mexicano."
                }, {
           id_exp:8,
           palabra:"H",
           id_tipo:1,
           descripcion:"La letra H del abecedario español mexicano."
                }, {
           id_exp:9,
           palabra:"I",
           id_tipo:1,
           descripcion:"La letra I del abecedario español mexicano."
                }, {
           id_exp:10,
           palabra:"J",
           id_tipo:1,
           descripcion:"La letra J del abecedario español mexicano."
       }]
   }, { 
       Id_nivel:2, Nombre:"K-Q",
       descripcion:"Letras del abecedario, de la K a la Q",
       expresion:[{
           id_exp:11,
           palabra:"K",
           id_tipo:1,
           descripcion:"La letra K del abecedario español mexicano."
                }, {
           id_exp:12,
           palabra:"L",
           id_tipo:1,
           descripcion:"La letra L del abecedario español mexicano."
                }, {
           id_exp:13,
           palabra:"LL",
           id_tipo:1,
           descripcion:"La letra LL del abecedario español mexicano."
                }, {
           id_exp:14,
           palabra:"M",
           id_tipo:1,
           descripcion:"La letra M del abecedario español mexicano."
                }, {
           id_exp:15,
           palabra:"N",
           id_tipo:1,
           descripcion:"La letra N del abecedario español mexicano."
                }, {
           id_exp:16,
           palabra:"NN",
           id_tipo:1,
           descripcion:"La letra Ñ del abecedario español mexicano."
                }, {
           id_exp:17,
           palabra:"O",
           id_tipo:1,
           descripcion:"La letra O del abecedario español mexicano."
                }, {
           id_exp:18,
           palabra:"P",
           id_tipo:1,
           descripcion:"La letra P del abecedario español mexicano."
                }, {
           id_exp:19,
           palabra:"Q",
           id_tipo:1,
           descripcion:"La letra Q del abecedario español mexicano."
                }]
   }, { 
       Id_nivel:3, Nombre:"R-Z",
       descripcion:"Letras del abecedario, de la R a la Z",
       expresion:[{
           id_exp:20,
           palabra:"R",
           id_tipo:1,
           descripcion:"La letra R del abecedario español mexicano."
                },{
            id_exp:21,
           palabra:"RR",
           id_tipo:1,
           descripcion:"La letra RR del abecedario español mexicano."
                },{
           id_exp:22,
           palabra:"S",
           id_tipo:1,
           descripcion:"La letra S del abecedario español mexicano."
                }, {
           id_exp:23,
           palabra:"T",
           id_tipo:1,
           descripcion:"La letra T del abecedario español mexicano."
                }, {
           id_exp:24,
           palabra:"U",
           id_tipo:1,
           descripcion:"La letra U del abecedario español mexicano."
                }, {
           id_exp:25,
           palabra:"V",
           id_tipo:1,
           descripcion:"La letra V del abecedario español mexicano."
                }, {
           id_exp:26,
           palabra:"W",
           id_tipo:1,
           descripcion:"La letra W del abecedario español mexicano."
                }, {
           id_exp:27,
           palabra:"X",
           id_tipo:1,
           descripcion:"La letra X del abecedario español mexicano."
                }, {
           id_exp:28,
           palabra:"Y",
           id_tipo:1,
           descripcion:"La letra Y del abecedario español mexicano."
                }, {
           id_exp:29,
           palabra:"Z",
           id_tipo:1,
           descripcion:"La letra Z del abecedario español mexicano."
                }]
   }]
});

db.ejer.insert({
   _id:2, nombre:"Numeros",
   descripcion:"Numeros del 1 al 10"
   nivel:[{ 
       Id_nivel:4, Nombre:"1 - 5",
       descripcion:"Numeros, del 1 al 5	",
       expresion:[{
           id_exp:30,
           palabra:"1",
           id_tipo:2,
           descripcion:"El numero 1."
                }, {
           id_exp:31,
           palabra:"2",
           id_tipo:2,
           descripcion:"El numero 2."
                }, {
           id_exp:32,
           palabra:"3",
           id_tipo:2,
           descripcion:"El numero 3."
                }, {
           id_exp:33,
           palabra:"4",
           id_tipo:2,
           descripcion:"El numero 4."
                }, {
           id_exp:34,
           palabra:"5",
           id_tipo:2,
           descripcion:"El numero 5."
       }]
   }, { 
       Id_nivel:5, Nombre:"6-10",
       descripcion:"Numeros, del 6 al 10",
       expresion:[{
            id_exp:35,
           palabra:"6",
           id_tipo:2,
           descripcion:"El numero 6."
                }, {
           id_exp:36,
           palabra:"7",
           id_tipo:2,
           descripcion:"El numero 7."
                }, {
           id_exp:37,
           palabra:"8",
           id_tipo:2,
           descripcion:"El numero 8."
                }, {
           id_exp:38,
           palabra:"9",
           id_tipo:2,
           descripcion:"El numero 9."
                }, {
           id_exp:39,
           palabra:"10",
           id_tipo:2,
           descripcion:"El numero 10."
                }]
   }]
});

db.ejer.insert({
   _id:3, nombre:"Conversacion",
   descripcion:"Saludos, adjetivos y pronombres"
   nivel:[{ 
       Id_nivel:6, Nombre:"Saludos",
       descripcion:"La forma de saludar y despedirse",
       expresion:[{
           id_exp:40,
           palabra:"HOLA",
           id_tipo:3,
           descripcion:"Expresión para saludar."
                }, {
           id_exp:41,
           palabra:"ADIOS",
           id_tipo:3,
           descripcion:"Expresión para despedirse."
                }, {
           id_exp:42,
           palabra:"BUENAS NOCHES",
           id_tipo:4,
           descripcion:"Expresión para irse a acostar."

       }]
   }, { 
       Id_nivel:7, Nombre:"Adjetivos",
       descripcion:"La forma de decir adjetivos y estados de animo",
       expresion:[{
           id_exp:43,
           palabra:"ABSURDO",
           id_tipo:5,
           descripcion:"Contrario y opuesto a la razón."
                }, {
           id_exp:44,
           palabra:"ALEGRE",
           id_tipo:5,
           descripcion:"Denota alegría o viveza."
                } , {
            id_exp:45,
           palabra:"CANSADO",
           id_tipo:5,
           descripcion:"Manifestación de cansancio."
                }]
   }, {
       Id_nivel:8, Nombre:"Pronombre",
       descripcion:"Pronombres, primera y segunda persona",
       expresion:[{
            id_exp:46,
           palabra:"YO",
           id_tipo:6,
           descripcion:"Forma que designa a la persona que habla o escribe."
                }, {
           id_exp:47,
           palabra:"TU",
           id_tipo:6,
           descripcion:"Forma que designa a la persona a la que se dirige quien habla o escribe."
                }, {
           id_exp:48,
           palabra:"EL",
           id_tipo:6,
           descripcion:"Forma que designa a la persona, el animal o la cosa de los que se habla."
                }]
   }]
});



db.ejer.insert({
   _id:4, nombre:"Alimentos",
   descripcion:"Bebidas y comidas"
   nivel:[{ 
       Id_nivel:9, Nombre:"Bebidas",
       descripcion:"Bebidas más comunes de tomar día a día",
       expresion:[{
           id_exp:49,
           palabra:"AGUA",
           id_tipo:7,
           descripcion:"Líquido potable transparente insipido e incoloro."
                }, {
           id_exp:50,
           palabra:"COCA-COLA",
           id_tipo:7,
           descripcion:"Gaseosa dulce con sabor a cola."
                }, {
           id_exp:51,
           palabra:"ATOLE",
           id_tipo:7,
           descripcion:"Bebida caliente de harina de maíz disuelta en agua o leche."
                }, {
           id_exp:52,
           palabra:"LECHE",
           id_tipo:7,
           descripcion:"Bebida lactea nutritiva procedente de la vaca."

       }]
   }, { 
       Id_nivel:10, Nombre:"Comida",
       descripcion:"Comida casera y de restaurant",
       expresion:[{
           id_exp:53,
           palabra:"HUEVO",
           id_tipo:7,
           descripcion:"Alimento procedente generalmente de gallina destinado a la alimentación."
                }, {
           id_exp:54,
           palabra:"HAMBURGUESA",
           id_tipo:7,
           descripcion:"Comida rápida popular hecha de carne picada freida dentro de un pan."
                } , {
            id_exp:55,
           palabra:"MIEL",
           id_tipo:7,
           descripcion:"Alimento de sabor dulce que es elaborado por las abejas a partir del néctar de las flores."
                }]
   }]
});


db.ejer.insert({
   _id:5, nombre:"Calendario",
   descripcion:"Dias y tiempos"
   nivel:[{ 
       Id_nivel:11, Nombre:"Días-1",
       descripcion:"Días de la semana, de L a J",
       expresion:[{
           id_exp:56,
           palabra:"LUNES",
           id_tipo:7,
           descripcion:"Primer día de la semana."
                }, {
           id_exp:57,
           palabra:"MARTES",
           id_tipo:7,
           descripcion:"Segundo día de la semana."
                }, {
           id_exp:58,
           palabra:"MIERCOLES",
           id_tipo:7,
           descripcion:"Tercer día de la semana."
                }, {
           id_exp:59,
           palabra:"JUEVES",
           id_tipo:7,
           descripcion:"Cuarto día de la semana."

       }]
   }, { 
       Id_nivel:12, Nombre:"Dias-2",
       descripcion:"Días de la semana, de V a D",
       expresion:[{
           id_exp:60,
           palabra:"VIERNES",
           id_tipo:7,
           descripcion:"Quinto día de la semana."
                }, {
           id_exp:61,
           palabra:"SABADO",
           id_tipo:7,
           descripcion:"Sexto día de la semana."
                } , {
            id_exp:62,
           palabra:"DOMINGO",
           id_tipo:7,
           descripcion:"Séptimo día de la semana."
                }]
   }, { 
       Id_nivel:13, Nombre:"Tiempo",
       descripcion:"Ayer, hoy y mañana",
       expresion:[{
           id_exp:63,
           palabra:"HOY",
           id_tipo:8,
           descripcion:"En este día."
                }, {
           id_exp:64,
           palabra:"AYER",
           id_tipo:8,
           descripcion:"En el día que precede inmediatamente al de hoy."
                } , {
            id_exp:65,
           palabra:"MAÑANA",
           id_tipo:8,
           descripcion:"En el día que sigue inmediatamente al de hoy."
        }]
   }]
});




db.ejer.insert({
   _id:6, nombre:"Emergencia",
   descripcion:"Accidentes, Asaltos, Salud y posibles riesgos"
   nivel:[{ 
       Id_nivel:14, Nombre:"Accidente",
       descripcion:"Palabras relacionadas con accidentes",
       expresion:[{
           id_exp:66,
           palabra:"ACCIDENTE",
           id_tipo:7,
           descripcion:"Suceso eventual o acción de que resulta daño involuntario para las personas o las cosas."
                }, {
           id_exp:67,
           palabra:"AYUDAR",
           id_tipo:9,
           descripcion:"Auxiliar o socorrer."
                }, {
           id_exp:68,
           palabra:"CUIDADO",
           id_tipo:3,
           descripcion:"Preocupacion y temor o para llamar la atención."
                }, {
           id_exp:69,
           palabra:"SALUD",
           id_tipo:7,
           descripcion:"Bien público o particular de cada uno."

       }]
   }]
});







-----UNIDAD--------
un  nomb    desc
0	Control	Unidad de control
1	Abecedario	Abecedario en español mexicano
2	Numeros	Numeros del 1 al 10
3	Conversacion	Saludos, adjetivos y pronombres
4	Alimentos	Bebidas y comidas
5	Calendario	Dias, meses y tiempos
6	Emergencia	Accidentes, Asaltos, Salud y posibles riesgos


-----NIVEL----------
UN  NOM     DESC                ID_UNI
0	Inicio	Variable de control	0
1	A_J	Letras del abecedario, de la A a la J	1
2	K-Q	Letras del abecedario, de la K a la Q	1
3	R-Z	Letras del abecedario, de la R a la Z	1
4	1-5	Numeros, del 1 al 5	2
5	6-10	Numeros, del 6 al 10	2
6	Saludos	La forma de saludar y despedirse	3
7	Adjetivos	La forma de decir adjetivos y estados de animo	3
8	Pronombre	Pronombres, primera y segunda persona	3
9	Bebidas	Bebidas más comunes de tomar día a día	4
10	Comida	Comida casera y de restaurant	4
11	Días-1	Días de la semana, de L a J	5
12	Dias-2	Días de la semana, de V a D	5
13	Tiempo	Ayer, hoy y mañana	5
14	Accidente	Palabras relacionadas con accidentes	6
15	Meses	Todos los meses del año	6




1	1
1	2
1	3
1	4
1	5
1	6
1	7
1	8
1	9
1	10
2	11
2	12
2	13
2	14
2	15
2	16
2	17
2	18
2	19
3	20
3	21
3	22
3	23
3	24
3	25
3	26
3	27
3	28
3	29
4	30
4	31
4	32
4	33
4	34
5	35
5	36
5	37
5	38
5	39
6	40
6	41
6	42
7	43
7	44
7	45
8	46
8	47
8	48
9	49
9	50
9	51
9	52
10	53
10	54
10	55
11	56
11	57
11	58
11	59
12	60
12	61
12	62
13	63
13	64
13	65
14	66
14	67
14	68
14	69

-----------Expresion-------
1	A	1	...	La letra A del abecedario español mexicano.
2	B	1	...	La letra B del abecedario español mexicano.
3	C	1	...	La letra C del abecedario español mexicano.
4	D	1	...	La letra D del abecedario español mexicano.
5	E	1	...	La letra E del abecedario español mexicano.
6	F	1	...	La letra F del abecedario español mexicano.
7	G	1	...	La letra G del abecedario español mexicano.
8	H	1	...	La letra H del abecedario español mexicano.
9	I	1	...	La letra I del abecedario español mexicano.
10	J	1	...	La letra J del abecedario español mexicano.
11	K	1	...	La letra K del abecedario español mexicano.
12	L	1	...	La letra L del abecedario español mexicano.
13	LL	1	...	La letra LL del abecedario español mexicano.
14	M	1	...	La letra M del abecedario español mexicano.
15	N	1	...	La letra N del abecedario español mexicano.
16	NN	1	...	La letra Ñ del abecedario español mexicano.
17	O	1	...	La letra O del abecedario español mexicano.
18	P	1	...	La letra P del abecedario español mexicano.
19	Q	1	...	La letra Q del abecedario español mexicano.
20	R	1	...	La letra R del abecedario español mexicano.
21	RR	1	...	La letra RR del abecedario español mexicano.
22	S	1	...	La letra S del abecedario español mexicano.
23	T	1	...	La letra T del abecedario español mexicano.
24	U	1	...	La letra U del abecedario español mexicano.
25	V	1	...	La letra V del abecedario español mexicano.
26	W	1	...	La letra W del abecedario español mexicano.
27	X	1	...	La letra X del abecedario español mexicano.
28	Y	1	...	La letra Y del abecedario español mexicano.
29	Z	1	...	La letra Z del abecedario español mexicano.
30	1	2	...	El numero 1. 
31	2	2	...	El numero 2. 
32	3	2	...	El numero 3. 
33	4	2	...	El numero 4. 
34	5	2	...	El numero 5. 
35	6	2	...	El numero 6. 
36	7	2	...	El numero 7. 
37	8	2	...	El numero 8. 
38	9	2	...	El numero 9. 
39	10	2	...	El numero 10. 
40	HOLA	3	...	Expresión para saludar.
41	ADIOS	3	...	Expresión para despedirse.
42	BUENAS NOCHES	4	...	Expresión para irse a acostar.
43	ABSURDO	5	...	Contrario y opuesto a la razón.
44	ALEGRE	5	...	Denota alegría o viveza.
45	CANSADO	5	...	Manifestación de cansancio.
46	YO	6	...	Forma que designa a la persona que habla o escribe.
47	TU	6	...	Forma que designa a la persona a la que se dirige quien habla o escribe.
48	EL	6	...	Forma que designa a la persona, el animal o la cosa de los que se habla.
49	AGUA	7	...	Líquido potable transparente insipido e incoloro.
50	COCA-COLA	7	...	Gaseosa dulce con sabor a cola.
51	ATOLE	7	...	Bebida caliente de harina de maíz disuelta en agua o leche.
52	LECHE	7	...	Bebida lactea nutritiva procedente de la vaca.
53	HUEVO	7	...	Alimento procedente generalmente de gallina destinado a la alimentación.
54	HAMBURGUESA	7	...	Comida rápida popular hecha de carne picada freida dentro de un pan.
55	MIEL	7	...	Alimento de sabor dulce que es elaborado por las abejas a partir del néctar de las flores.
56	LUNES	7	...	Primer día de la semana.
57	MARTES	7	...	Segundo día de la semana.
58	MIERCOLES	7	...	Tercer día de la semana.
59	JUEVES	7	...	Cuarto día de la semana.
60	VIERNES	7	...	Quinto día de la semana.
61	SABADO	7	...	Sexto día de la semana.
62	DOMINGO	7	...	Séptimo día de la semana.
63	HOY	8	...	En este día.
64	AYER	8	...	En el día que precede inmediatamente al de hoy.
65	MAÑANA	8	...	En el día que sigue inmediatamente al de hoy.
66	ACCIDENTE	7	...	Suceso eventual o acción de que resulta daño involuntario para las personas o las cosas.
67	AYUDAR	9	...	Auxiliar o socorrer.
68	CUIDADO	3	...	Preocupacion y temor o para llamar la atención.
69	SALUD	7	...	Bien público o particular de cada uno.



