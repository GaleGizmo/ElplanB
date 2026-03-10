export interface Translations {
  es?: string;
  gl?: string;
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  lyrics: string;
  translations?: Translations;
}

export const songs: Song[] = [
  {
    id: "apuesta-por-el-rock",
    title: "Apuesta por el Rock 'N' Roll",
    artist: "Más Birras",
    lyrics: `Ya no puedo darte el corazón
Iré donde quieran mis botas
Y si quieres que te diga qué hay que hacer
Te diré que apuestes por mi derrota

Quítate la ropa, así está bien
No dejes nada por hacer, yeh
Si has venido a comprarme, lárgate
Si vas a venir conmigo, agárrate

Larguémonos, chica hacia el mar
No hay amanecer en esta ciudad
Y no sé si nací para correr
Pero quizás sí que nací para apostar

Sé que ya nada va a ocurrir
Pero ahora estoy contra las cuerdas
Y no veo ni una forma de salir
Pero voy a apostar fuerte mientras pueda

Larguémonos, chica hacia el mar
No hay amanecer en esta ciudad
Y no sé si nací para correr
Pero quizás sí que nací para apostar

Ya no puedo darte el corazón
Perdí mi apuesta por el rock'n'roll
Perdí mi apuesta por el rock'n'roll
Perdí mi apuesta

Es la deuda que tengo que pagar
Y ya no tiene sentido abandonar
Ya no tiene sentido abandonar

Ooh
No
Late el corazón`,
  },
  {
    id: "arms-of-a-woman",
    title: "Arms of a Woman",
    artist: "Amos Lee",
    lyrics: `I am at ease in the arms of a woman
Although now most of my days I spend alone
Thousand miles from the place I was born
When she wakes me, she takes me back home

Now, most days I spend like a child
Who's afraid of ghosts in the night
I know there ain't nothing out there
I'm still afraid to turn on the lights

I am at ease in the arms of a woman
Although now most of my days I spend alone
A thousand miles, the place I was born
When she wakes me, she takes me back home

A thousand miles, the place I was born
When she wakes me, she takes me back home

I am at ease in the arms of a woman
Although now most of my days I spend alone
A thousand miles, the place I was born
When she wakes me, she takes me
Yeah, when she wakes me, she takes me
Yeah, when she wakes me, she takes me back home
When she wakes me
She takes me back home`,
    translations: {
      es: `Estoy a gusto en los brazos de una mujer
Aunque ahora la mayoría de mis días los paso solo
A mil millas del lugar donde nací
Cuando ella me despierta, me lleva de vuelta al hogar

Ahora, la mayoría de los días los paso como un niño
Que tiene miedo de los fantasmas en la noche
Sé que no hay nada ahí afuera
Aún así tengo miedo de encender las luces

Estoy a gusto en los brazos de una mujer
Aunque ahora la mayoría de mis días los paso solo
A mil millas, el lugar donde nací
Cuando ella me despierta, me lleva de vuelta al hogar
A mil millas, el lugar donde nací
Cuando ella me despierta, me lleva de vuelta al hogar

Estoy a gusto en los brazos de una mujer
Aunque ahora la mayoría de mis días los paso solo
A mil millas, el lugar donde nací
Cuando ella me despierta, me lleva
Sí, cuando ella me despierta, me lleva
Sí, cuando ella me despierta, me lleva de vuelta a casa
Cuando ella me despierta
Me lleva de vuelta a casa`,
      gl: `Estou a gusto nos brazos dunha muller
Aínda que agora a maioría dos meus días os paso só
A mil millas do lugar onde nacín
Cando ela me esperta, lévame de volta ao fogar

Agora, a maioría dos días os paso como un neno
Que ten medo das pantasmas na noite
Sei que non hai nada aí fóra
Aínda así teño medo de acender as luces

Estou a gusto nos brazos dunha muller
Aínda que agora a maioría dos meus días os paso só
A mil millas, o lugar onde nacín
Cando ela me esperta, lévame de volta ao fogar
A mil millas, o lugar onde nacín
Cando ela me esperta, lévame de volta ao fogar

Estou a gusto nos brazos dunha muller 
Aínda que agora a maioría dos meus días os paso só
A mil millas, o lugar onde nacín
Cando ela me esperta, lévame
Sí, cando ela me esperta, lévame
Sí, cando ela me esperta, lévame de volta ao fogar
Cando ela me esperta
Lévame de volta ao fogar`,
    },
  },
  {
    id: "back-to-black",
    title: "Back to Black",
    artist: "Amy Winehouse",
    lyrics: `He left no time to regret
Kept his dick wet with his same old safe bet
Me and my head high
And my tears dry, get on without my guy
You went back to what you knew
So far removed from all that we went through
And I tread a troubled track
My odds are stacked, I'll go back to black

We only said goodbye with words
I died a hundred times
You go back to her, and I go back to—
I go back to us

I love you much
It's not enough, you love blow and I love puff
And life is like a pipe
And I'm a tiny penny rollin' up the walls inside

We only said goodbye with words
I died a hundred times
You go back to her, and I go back to—
We only said goodbye with words
I died a hundred times
You go back to her, and I go back to—


We only said goodbye with words
I died a hundred times
You go back to her, and I go back to—
We only said goodbye with words
I died a hundred times
You go back to her, and I go back to black`,
    translations: {
      es: `No le dejó tiempo al arrepentimiento
Mantuvo su miembro húmedo con su apuesta de siempre
Yo con la cabeza alta
Y los ojos secos, siguiendo sin él
Volviste a lo que conocías
Tan lejos de todo lo que vivimos
Y yo sigo un camino difícil
Las probabilidades en mi contra, volveré al negro

Solo nos dijimos adiós con palabras
Morí cien veces
Tú vuelves con ella, y yo vuelvo a—
Yo vuelvo a nosotros

Te quiero mucho
No es suficiente, tú amas la coca y yo el hachís
Y la vida es como una pipa
Y yo soy una pequeña moneda rodando por las paredes

Solo nos dijimos adiós con palabras
Morí cien veces
Tú vuelves con ella, y yo vuelvo a—
Solo nos dijimos adiós con palabras
Morí cien veces
Tú vuelves con ella, y yo vuelvo a—


Solo nos dijimos adiós con palabras
Morí cien veces
Tú vuelves con ella, y yo vuelvo a—
Solo nos dijimos adiós con palabras
Morí cien veces
Tú vuelves con ella, y yo vuelvo al negro`,
      gl: `Non lle deixou tempo ao arrepentimento
Mantivo o seu membro húmido coa súa aposta de sempre
Eu coa cabeza alta
E os ollos secos, seguindo sen el
Volviche ao que coñecías
Tan lonxe de todo o que vivimos
E eu sigo un camiño difícil
As probabilidades na miña contra, volverei ao negro

Só nos dixemos adeus con palabras
Morrín cen veces
Ti volves con ela, e eu volvo a—
Eu volvo a nós

Quérote moito
Non é dabondo, ti amas a coca e eu o haxix
E a vida é coma unha pipa
E eu son unha pequena moeda rodando polas paredes

Só nos dixemos adeus con palabras
Morrín cen veces
Ti volves con ela, e eu volvo a—
Só nos dixemos adeus con palabras
Morrín cen veces
Ti volves con ela, e eu volvo a—


Só nos dixemos adeus con palabras
Morrín cen veces
Ti volves con ela, e eu volvo a—
Só nos dixemos adeus con palabras
Morrín cen veces
Ti volves con ela, e eu volvo ao negro`,
    },
  },
  {
    id: "billie-jean",
    title: "Billie Jean",
    artist: "Michael Jackson",
    lyrics: `She was more like a beauty queen from a movie scene
I said don't mind, but what do you mean I am the one
Who will dance on the floor in the round
She said I am the one
Who will dance on the floor in the round

She told me her name was Billie Jean, as she caused a scene
Then every head turned with eyes that dreamed of being the one
Who will dance on the floor in the round

People always told me, be careful of what you do
And don't go around breaking young girls' hearts
And mother always told me, be careful of who you love
And be careful of what you do, 'cause the lie becomes the truth, yeah

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son
She says I am the one
But the kid is not my son

For 40 days and for 40 nights, the law was on her side
But who can stand when she's in demand, her schemes and plans
Who will dance on the floor in the round

So take my strong advice, just remember to always think twice
Do think twice

She told my baby we'd danced 'til three, then she looked at me
Then showed a photo, my baby cried, his eyes looked like mine
Go on, dance on the floor in the round, baby

People always told me, be careful of what you do
And don't go around breaking young girls' hearts
And mother always told me, be careful of who you love
And be careful of what you do, 'cause the lie becomes the truth, yeah

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son
She says I am the one
But the kid is not my son, oh no

Billie Jean is not my lover
Billie Jean is not my lover
Billie Jean is not my lover`,

    translations: {
      es: `Ella era más como una reina de belleza de una escena de película
Dije no me importa, pero ¿qué quieres decir con que soy yo
quien bailará en el centro de la pista?
Ella dijo que soy yo
Quien bailará en el centro de la pista

Ella me dijo que su nombre era Billie Jean, mientras montaba una escena
Entonces todas las cabezas se volvieron con ojos que soñaban con ser el elegido,
quien bailará en el centro de la pista

La gente siempre me dijo, ten cuidado con lo que haces
Y no vayas por ahí rompiendo los corazones de las jóvenes
Y mi madre siempre me dijo, ten cuidado con quién amas
Y ten cuidado con lo que haces, porque la mentira se convierte en verdad, sí

Billie Jean no es mi amante
Ella es solo una chica que afirma que soy yo
Pero el niño no es mi hijo
Ella dice que soy yo
Pero el niño no es mi hijo

Durante 40 días y 40 noches, la ley estuvo de su lado
Pero ¿quién puede resistir cuando ella está en demanda, sus planes y esquemas?
¿Quién bailará en el centro de la pista?
Así que toma mi firme consejo, recuerda siempre pensar dos veces
Piensa dos veces
Ella le dijo a mi chica que habíamos bailado hasta las tres, luego me miró
Luego mostró una foto, mi chica lloró, sus ojos se parecían a los míos
Vamos, baila en el centro de la pista, nena

La gente siempre me dijo, ten cuidado con lo que haces
Y no vayas por ahí rompiendo los corazones de las jóvenes
Y mi madre siempre me dijo, ten cuidado con quién amas
Y ten cuidado con lo que haces, porque la mentira se convierte en verdad, sí.

Billie Jean no es mi amante
Ella es solo una chica que afirma que soy yo
Pero el niño no es mi hijo
Ella dice que soy yo
Pero el niño no es mi hijo, oh no

Billie Jean no es mi amante
Billie Jean no es mi amante
Billie Jean no es mi amante`,
      gl: `Ela era máis como unha raíña de beleza dunha escena de película
Dixen non me importa, pero que queres dicir con que son eu
quen bailará no centro da pista?
Ela dixo que son eu
Quen bailará no centro da pista

Ela me dixo que o seu nome era Billie Jean, mentres montaba unha escena
Entón todas as cabezas se volveron con ollos que soñaban con ser o elixido
Quen bailará no centro da pista

A xente sempre me dixo, ten cuidado co que fas
E non andes por aí rompendo os corazóns das novas
E a miña nai sempre me dixo, ten cuidado con quen amas
E ten cuidado co que fas, porque a mentira convértese en verdade, sí
Billie Jean non é a miña amante
Ela é só unha rapaza que afirma que son o elixido
Pero o neno non é o meu fillo
Ela di que son o elixido
Pero o neno non é o meu fillo
Durante 40 días e 40 noites, a lei estivo do seu lado
Pero quen pode resistir cando ela está en demanda, os seus plans e esquemas
Quen bailará no centro da pista

Así que escoita o meu firme consello, lembra sempre pensar dúas veces
Pensa dúas veces
Ela díxolle á miña nena que bailamos ata as tres, logo me mirou
Logo mostrou unha foto, a miña nena chorou, os seus ollos parecíanse aos meus
Vamos, baila no centro da pista, nena

A xente sempre me dixo, ten cuidado co que fas
E non andes por aí rompendo os corazóns das novas
E a miña nai sempre me dixo, ten cuidado con quen amas
E ten cuidado co que fas, porque a mentira convértese en verdade, sí

Billie Jean non é a miña amante
Ela é só unha rapaza que afirma que son o elixido
Pero o neno non é o meu fillo
Ela di que son o elixido
Pero o neno non é o meu fillo, oh no

Billie Jean non é a miña amante
Billie Jean non é a miña amante
Billie Jean non é a miña amante`,
    },
  },
  {
    id: "creep",
    title: "Creep",
    artist: "Radiohead",
    lyrics: `When you were here before
Couldn't look you in the eye
You're just like an angel
Your skin makes me cry
You float like a feather
In a beautiful world
I wish I was special
You're so fucking special

But I'm a creep
I'm a weirdo
What the hell am I doing here?
I don't belong here

I don't care if it hurts
I want to have control
I want a perfect body
I want a perfect soul
I want you to notice
When I'm not around
You're so fucking special
I wish I was special

But I'm a creep
I'm a weirdo
What the hell am I doing here?
I don't belong here

Oh, oh
She's running out the door
She's running out
She run, run, run, run
Run

Whatever makes you happy
Whatever you want
You're so fucking special
I wish I was special

But I'm a creep
I'm a weirdo
What the hell am I doing here?
I don't belong here
I don't belong here`,

    translations: {
      es: `Cuando estabas aquí antes
No podía mirarte a los ojos 
Eres como un ángel
Tu piel me hace llorar
Flotas como una pluma
En un mundo hermoso
Ojalá yo fuera especial
Eres tan jodidamente especial

Pero soy un bicho raro
Soy un raro
¿Qué demonios hago aquí?
No pertenezco aquí

No me importa si duele
Quiero tener el control
Quiero un cuerpo perfecto
Quiero un alma perfecta
Quiero que notes
Cuando no estoy cerca
Eres tan jodidamente especial
Ojalá yo fuera especial

Pero soy un bicho raro
Soy un raro 
¿Qué demonios hago aquí?
No pertenezco aquí

Oh, oh
Ella sale corriendo por la puerta
Ella sale corriendo
Ella corre, corre, corre, corre
Corre

Lo que sea que te haga feliz
Lo que sea que quieras
Eres tan jodidamente especial
Ojalá yo fuera especial
Pero soy un bicho raro
Soy un raro
¿Qué demonios hago aquí?
No pertenezco aquí
No pertenezco aquí`,
      gl: `Cando estabas aquí antes
Non podía mirarte aos ollos
Eres coma un anxo
A túa pel me fai chorar
Flotas coma unha pluma
Nun mundo fermoso
Ogallá eu fora especial
Eres tan fodidamente especial

Pero son un bicho raro
Son un raro
Que demo fago aquí?
Non pertenzo aquí
Non pertenzo aquí

Non me importa se doe
Quero ter o control
Quero un corpo perfecto
Quero unha alma perfecta
Quero que te decates
Cando non estou preto
Eres tan fodidamente especial
Ogallá eu fora especial

Pero son un bicho raro
Son un raro
Que demo fago aquí?
Non pertenzo aquí
Non pertenzo aquí

Oh, oh
Ela sae correndo pola porta
Ela sae correndo
Ela corre, corre, corre, corre
Corre

O que sexa que te faga feliz
O que sexa que queiras
Eres tan fodidamente especial
Ogallá eu fora especial
Pero son un bicho raro
Son un raro
Que demo fago aquí?
Non pertenzo aquí
Non pertenzo aquí`,
    },
  },
  {
    id: "dancing-in-the-dark",
    title: "Dancing in the Dark",
    artist: "Bruce Springsteen",
    lyrics: `I get up in the evening
And I ain't got nothing to say
I come home in the morning
I go to bed feeling the same way
I ain't nothing but tired
Man, I'm just tired and bored with myself
Hey there, baby
I could use just a little help

You can't start a fire
You can't start a fire without a spark
This gun's for hire
Even if we're just dancing in the dark

Messages keep getting clearer
Radio's on and I'm moving 'round my place
I check my look in the mirror
I wanna change my clothes, my hair, my face
Man, I ain't getting nowhere
I'm just living in a dump like this
There's something happening somewhere
Baby, I just know that there is

You can't start a fire
You can't start a fire without a spark
This gun's for hire
Even if we're just dancing in the dark

Stay on the streets of this town
And they'll be carving you up, all right
They say you gotta stay hungry
Hey baby, I'm just about starving tonight
I'm dying for some action
I'm sick of sitting around here, trying to write this book
I need a love reaction
Come on, baby, give me just one look

You can't start a fire
Sitting around crying over a broken heart
This gun's for hire
Even if we're just dancing in the dark

You can't start a fire
Worrying about your little world falling apart
This gun's for hire
Even if we're just dancing in the dark`,
    translations: {
      es: `Me levanto por la noche
Y no tengo nada que decir
Llego a casa por la mañana
Me acuesto sintiéndome igual
No soy nada más que cansancio
Tío, estoy cansado y aburrido de mí mismo.
Oye, nena,
me vendría bien un poco de ayuda

No puedes encender un fuego
No puedes encender un fuego sin una chispa
Esta pistola se alquila,
incluso si solo estamos bailando en la oscuridad

Los mensajes cada vez son más claros,
La radio está encendida y doy vueltas por la casa.
Me miro en el espejo,
quiero cambiar mi ropa, mi cabello, mi cara
Tío, no estoy llegando a ninguna parte,
sigo metido en un sitio cutre como este.
Pero algo está pasando en algún lugar,
cariño, estoy seguro de que sí.

No puedes encender un fuego
No puedes encender un fuego sin una chispa
Esta pistola se alquila,
incluso si solo estamos bailando en la oscuridad

Quédate en las calles de esta ciudad
Y te van a destrozar, ya lo verás
Dicen que tienes que mantenerte hambriento
Oye nena, yo me muero de hambre esta noche
Estoy muriendo por algo de acción
Estoy harto de sentarme aquí, tratando de escribir este libro
Necesito una reacción de amor
Vamos, nena, mírame solo una vez

No puedes encender un fuego
Sentado aquí llorando por un corazón roto
Esta pistola se alquila,
Incluso si solo estamos bailando en la oscuridad

No puedes encender un fuego
Preocupándote porque tu pequeño mundo se desmorona.
Esta pistola se alquila,
incluso si solo estamos bailando en la oscuridad`,
      gl: `Ergome ao serán
e non teño nada que dicir.
Chego á casa pola mañá
e vou para a cama sentíndome igual ca sempre.
Non son máis ca cansazo,
home, estou farto e aburrido de min mesmo.
Ei, nena,
viríame ben unha pouca axuda.

Non se pode prender lume,
non se pode prender lume sen unha chispa.
Esta pistola está en alugueiro,
aínda que só esteamos bailando na escuridade.

As mensaxes cada vez están máis claras,
a radio soa e vou dando voltas pola casa.
Mírome no espello
e danme ganas de cambiar de roupa, de pelo, de cara.
Home, non vou a ningures,
sigo vivindo nunha merda de sitio coma este.
Pero algo está pasando nalgún sitio,
nena, estou seguro de que si.

Non se pode prender lume,
non se pode prender lume sen unha chispa.
Esta pistola está en alugueiro,
aínda que só esteamos bailando na escuridade.

Queda polas rúas desta vila
e xa verás como te pasan por riba.
Din que hai que seguir con fame,
ei, nena, eu esta noite estou a piques de morrer de fame.
Morro por algo de acción,
estou farto de quedar aquí sentado tentando escribir este libro.
Preciso unha reacción de amor,
veña, nena, vótame só unha ollada.

Non se pode prender lume
quedando sentado a chorar por un corazón roto.
Esta pistola está en alugueiro,
aínda que só esteamos bailando na escuridade.

Non se pode prender lume
preocupándote porque o teu pequeno mundo se derruba.
Esta pistola está en alugueiro,
aínda que só esteamos bailando na escuridade`,
    },
  },
  {
    id: "fix-you",
    title: "Fix You",
    artist: "Coldplay",
    lyrics: `When you try your best, but you don't succeed
When you get what you want, but not what you need
When you feel so tired, but you can't sleep
Stuck in reverse

When the tears come streaming down your face
'Cause you lose something, you can't replace
When you love someone, but it goes to waste
What could it be worse?

Lights will guide you home
And ignite your bones
And I will try to fix you

Well, high up above, or down below
When you're too in love to let it go
But if you never try, you'll never know
Just what you're worth

Oh, oh, oh
Lights will guide you home
And ignite your bones
And I will try to fix you

Tears stream down your face
When you lose something, you cannot replace
Oh, and the tears stream down your face, and I
Oh, tears stream down your face
I promise you I will learn from my mistakes
Oh, and the tears stream down your face, and I, oh

Lights will guide you home
And ignite your bones
And I will try to fix you`,
    translations: {
      es: `Cuando intentas hacerlo lo mejor posible, pero no lo consigues
Cuando obtienes lo que quieres, pero no lo que necesitas
Cuando te sientes tan cansado, pero no puedes dormir
Atrapado yendo marcha atrás

Cuando las lágrimas empiezan a correr por tu cara
Porque pierdes algo que no puedes reemplazar
Cuando amas a alguien, pero todo se pierde
¿Puede haber algo peor?

Las luces te guiarán a casa
Y encenderán tus huesos
Y yo intentaré arreglarte

Allá arriba en lo alto, o allá abajo
Cuando estás demasiado enamorado para dejarlo ir
Pero si nunca lo intentas, nunca sabrás
Cuánto vales en realidad

Oh, oh, oh
Las luces te guiarán a casa
Y encenderán tus huesos
Y yo intentaré arreglarte

Las lágrimas corren por tu cara
Cuando pierdes algo que no puedes reemplazar
Oh, y las lágrimas corren por tu cara, y yo…

Oh, las lágrimas corren por tu cara
Te prometo que aprenderé de mis errores
Oh, y las lágrimas corren por tu cara, y yo…

Las luces te guiarán a casa
Y encenderán tus huesos
Y yo intentaré arreglarte`,
      gl: `Cando fas todo o posible, pero non che sae ben
Cando tes o que queres, mais non o que che fai ben
Cando estás tan canso que non podes durmir
Quedaches preso sen poder seguir

Cando as bágoas che baixan pola cara
Porque algo se perdeu e non volta máis
Cando amas a alguén e todo se vai
Hai algo peor que iso, quizais?

As luces han guiarte á casa
E prenderán no teu interior
E eu vou tentar, vou tentar
Arranxar o teu corazón

Alá no máis alto ou no fondo do mar
Cando amas tanto que non queres soltar
Pero se nunca o tentas, non saberás
Canto vales de verdade, xamais

Oh, oh, oh
As luces han guiarte á casa
E prenderán no teu interior
E eu vou tentar, vou tentar
Arranxar o teu corazón

Bágoas baixan pola túa cara
Cando algo se perde e non volta máis
Oh, e as bágoas baixan pola túa cara, e eu…
Oh, bágoas baixan pola túa cara
Prométoche aprender dos meus erros
Oh, e as bágoas baixan pola túa cara, e eu…

As luces han guiarte á casa
E prenderán no teu interior
E eu vou tentar, vou tentar
Arranxar o teu corazón`,
    },
  },
  {
    id: "get-back",
    title: "Get Back",
    artist: "The Beatles",
    lyrics: `Jo Jo was a man who thought he was a loner
But he knew it couldn't last
Jo Jo left his home in Tucson, Arizona
For some California grass

Get back, get back
Get back to where you once belonged
Get back, get back
Get back to where you once belonged
Get back, Jo Jo!

Get back, get back
Get back to where you once belonged
Get back, get back
Get back to where you once belonged

Sweet Loretta Martin thought she was a woman
But she was another man
All the girls around her say she's got it coming
But she gets it while she can

Get back, get back
Get back to where you once belonged
Get back, get back
Get back to where you once belonged
Get back, Jo Jo

Get back, get back
Get back to where you once belonged
Get back, get back
Get back to where you once belonged`,
    translations: {
      es: `Jo Jo era un hombre que pensaba que era un solitario
Pero sabía que aquello no podía durar
Jo Jo dejó su casa en Tucson, Arizona
Por un poco de hierba de California

Vuelve, vuelve
Vuelve a donde una vez perteneciste
Vuelve, vuelve
Vuelve a donde una vez perteneciste
¡Vuelve, Jo Jo!


Vuelve, vuelve
Vuelve a donde una vez perteneciste
Vuelve, vuelve
Vuelve a donde una vez perteneciste


La dulce Loretta Martin pensaba que era una mujer
Pero en realidad era otro hombre
Todas las chicas a su alrededor dicen que se lo está buscando
Pero ella aprovecha mientras puede

Vuelve, vuelve
Vuelve a donde una vez perteneciste
Vuelve, vuelve
Vuelve a donde una vez perteneciste
¡Vuelve, Jo Jo!

Vuelve, vuelve
Vuelve a donde una vez perteneciste
Vuelve, vuelve
Vuelve a donde una vez perteneciste`,
      gl: `Jo Jo era un tipo que ía de solitario,
pero sabía que aquilo non ía durar.
Jo Jo deixou a casa en Tucson, Arizona,
por probar a herba de California.

Volta xa, volta xa,
volta ao lugar onde empezaches.
Volta xa, volta xa,
volta ao lugar onde empezaches.
Volta, Jo Jo,

Volta xa, volta xa,
volta ao lugar onde empezaches.
Volta xa, volta xa,
volta ao lugar onde empezaches.


A doce Loretta Martin dicía que era muller,
pero en realidade era outro home.
Todas as mozas ao redor dicían: xa lle chegará,
pero ela colle o que pode mentres poida.

Volta xa, volta xa,
volta ao lugar onde empezaches.
Volta xa, volta xa,
volta ao lugar onde empezaches.
Volta, Jo Jo,

Volta xa, volta xa,
volta ao lugar onde empezaches.
Volta xa, volta xa,
volta ao lugar onde empezaches`,
    },
  },
  {
    id: "house-of-the-rising-sun",
    title: "The House of the Rising Sun",
    artist: "The Animals",
    lyrics: `There is a house in New Orleans
They call the Rising Sun
And it's been the ruin of many a poor boy
And God, I know I'm one

My mother was a tailor
She sewed my new blue jeans
My father was a gamblin' man
Down in New Orleans

Now the only thing a gambler needs
Is a suitcase and a trunk
And the only time he'll be satisfied
Is when he's on a trump

Oh, mother, tell your children
Not to do what I have done
Spend your lives in sin and misery
In the House of the Rising Sun

Well, I got one foot on the platform
The other foot on the train
I'm goin' back to New Orleans
To wear that ball and chain

Well, there is a house in New Orleans
They call the Rising Sun
And it's been the ruin of many a poor boy
And God, I know I'm one`,
    translations: {
      es: `Hay una casa en Nueva Orleans
que llaman el Sol Naciente.
Y ha sido la ruina de muchos pobres muchachos,
y Dios sabe que yo soy uno.

Mi madre era costurera,
ella cosió mis nuevos vaqueros azules.
Mi padre era un jugador
allá en Nueva Orleans.

Ahora, lo único que necesita un jugador
es una maleta y un baúl.
Y el único momento en que se siente satisfecho
es cuando tiene un triunfo en la mano.

Oh, madre, dile a tus hijos
que no hagan lo que yo he hecho:
pasar la vida entre pecado y miseria
en la Casa del Sol Naciente.

Bueno, tengo un pie en el andén
y el otro pie en el tren.
Voy de vuelta a Nueva Orleans
a cargar otra vez con esa cadena y esa bola.

Pues hay una casa en Nueva Orleans
que llaman el Sol Naciente.
Y ha sido la ruina de muchos pobres muchachos,
y Dios sabe que yo soy uno.`,
      gl: `Hai unha casa en Nova Orleáns
á que lle din o Sol Nacente.
E foi a ruína de moitos pobres rapaces,
e Deus sabe que eu son un.

Miña nai era costureira,
ela cosérame os meus pantalóns azuis novos.
Meu pai era un xogador
alá en Nova Orleáns.

Agora, o único que precisa un xogador
é unha maleta e un baúl.
E o único momento no que queda satisfeito
é cando leva triunfo na man.

Oh, nai, dilles aos teus fillos
que non fagan o que fixen eu:
pasar a vida entre pecado e miseria
na Casa do Sol Nacente.

Ben, teño un pé no andén
e o outro pé no tren.
Volvo de novo a Nova Orleáns
para cargar coa bola e a cadea.

Pois hai unha casa en Nova Orleáns
á que lle chaman o Sol Nacente.
E foi a ruína de moitos pobres rapaces,
e Deus sabe que eu son un`,
    },
  },
  {
    id: "otherside",
    title: "Otherside",
    artist: "Red Hot Chili Peppers",
    lyrics: `How long, how long will I slide?
Separate my side, I don't
I don't believe it's bad
Slit my throat, it's all I ever

I heard your voice through a photograph
I thought it up and brought up the past
Once you know you can never go back
I gotta take it on the other side
Centuries are what it meant to me
A cemetery where I marry the sea
Stranger things could never change my mind
I gotta take it on the other side
Take it on the other side
Take it on, take it on

How long, how long will I slide?
Separate my side, I don't
I don't believe it's bad
Slit my throat, it's all I ever

Pour my life into a paper cup
The ashtray's full and I'm spillin' my guts
She wants to know, am I still a slut?
I've got to take it on the other side
Scarlet starlet and she's in my bed
A candidate for a soul mate bled
Push the trigger and I pull the thread
I gotta take it on the other side
Take it on the other side
Take it on, take it on

How long, how long will I slide?
Separate my side, I don't
I don't believe it's bad
Slit my throat, it's all I ever

Turn me on, take me for a hard ride
Burn me out, leave me on the other side
I yell and tell it that it's not my friend
I tear it down, I tear it down
And then it's born again

How long, how long will I slide?
Separate my side, I don't
I don't believe it's bad
Slit my throat, it's all I ever
How long, I don't, I don't believe it's bad
Slit my throat, it's all I ever`,

    translations: {
      es: `¿Cuánto tiempo, cuánto tiempo seguiré deslizándome?
Separa mi lado, yo no…
yo no creo que sea malo.
Córtame la garganta, es todo lo que siempre…

Escuché tu voz a través de una fotografía,
lo imaginé y trajo de vuelta el pasado.
Una vez que lo sabes, ya no puedes volver atrás,
tengo que afrontarlo en el otro lado.

Siglos es lo que significó para mí,
un cementerio donde me caso con el mar.
Cosas más extrañas no cambiarían mi mente,
tengo que afrontarlo en el otro lado.
Afrontarlo en el otro lado,
afrontarlo, afrontarlo.

¿Cuánto tiempo, cuánto tiempo seguiré deslizándome?
Separa mi lado, yo no…
yo no creo que sea malo.
Córtame la garganta, es todo lo que siempre…

Vierto mi vida en un vaso de papel,
el cenicero está lleno y estoy soltando todo lo que llevo dentro.
Ella quiere saber si sigo siendo un libertino.
Tengo que afrontarlo en el otro lado.

Una estrella escarlata y está en mi cama,
candidata a alma gemela desangrada.
Aprieta el gatillo y yo tiro del hilo,
tengo que afrontarlo en el otro lado.
Afrontarlo en el otro lado,
afrontarlo, afrontarlo.

¿Cuánto tiempo, cuánto tiempo seguiré deslizándome?
Separa mi lado, yo no…
yo no creo que sea malo.
Córtame la garganta, es todo lo que siempre…

Enciéndeme, llévame a un viaje duro,
consúmeme y déjame al otro lado.
Grito y le digo que no es mi amigo,
lo derribo, lo derribo,
y entonces vuelve a nacer.

¿Cuánto tiempo, cuánto tiempo seguiré deslizándome?
Separa mi lado, yo no…
yo no creo que sea malo.
Córtame la garganta, es todo lo que siempre…
¿Cuánto tiempo? Yo no… yo no creo que sea malo.
Córtame la garganta, es todo lo que siempre…
      `,
      gl: `Canto tempo, canto tempo seguirei esvarando?
Separa o meu lado, eu non…
eu non creo que sexa malo.
Córtame a gorxa, é todo o que sempre…

Escoitei a túa voz a través dunha fotografía,
imaxineino e trouxo de volta o pasado.
Unha vez que o sabes, xa non podes volver atrás,
teño que afrontalo do outro lado.
Séculos é o que significou para min,
un cemiterio onde caso co mar.
Cousas máis estrañas non cambiarían a miña mente,
teño que afrontalo do outro lado.
Afrontalo do outro lado,
afrontalo, afrontalo.

Canto tempo, canto tempo seguirei esvarando?
Separa o meu lado, eu non…
eu non creo que sexa malo.
Córtame a gorxa, é todo o que sempre…

Verto a miña vida nun vaso de papel,
o cinceiro está cheo e estou botando fóra todo o que levo dentro.
Ela quere saber se sigo sendo un libertino.
Teño que afrontalo do outro lado.
Unha estrela escarlata e está na miña cama,
candidata a alma xemelga desangrada.
Preme o gatillo e eu tiro do fío,
teño que afrontalo do outro lado.
Afrontalo do outro lado,
afrontalo, afrontalo.

Canto tempo, canto tempo seguirei esvarando?
Separa o meu lado, eu non…
eu non creo que sexa malo.
Córtame a gorxa, é todo o que sempre…

Acéndeme, lévame nunha viaxe dura,
consómeme e déixame do outro lado.
Berro e dígolle que non é o meu amigo,
derrúboo, derrúboo,
e logo volve nacer.

Canto tempo, canto tempo seguirei esvarando?
Separa o meu lado, eu non…
eu non creo que sexa malo.
Córtame a gorxa, é todo o que sempre…
Canto tempo? Eu non… eu non creo que sexa malo.
Córtame a gorxa, é todo o que sempre…`,
    },
  },

  {
    id: "people-are-strange",
    title: "People Are Strange",
    artist: "The Doors",
    lyrics: `People are strange, when you're a stranger
Faces look ugly, when you're alone
Women seem wicked, when you're unwanted
Streets are uneven, when you're down

When you're strange
Faces come out of the rain
When you're strange
No one remembers your name
When you're strange
When you're strange
When you're strange

People are strange, when you're a stranger
Faces look ugly, when you're alone
Women seem wicked, when you're unwanted
Streets are uneven, when you're down

When you're strange
Faces come out of the rain
When you're strange
No one remembers your name
When you're strange
When you're strange
When you're strange

Alright, yeah

When you're strange
Faces come out of the rain
When you're strange
No one remembers your name
When you're strange
When you're strange
When you're strange`,
    translations: {
      es: `La gente es extraña, cuando eres un extraño
Las caras se ven feas, cuando estás solo
Las mujeres parecen malvadas, cuando no eres deseado
Las calles son irregulares, cuando estás deprimido

Cuando eres un extraño
Salen caras de la lluvia
Cuando eres un extraño
Nadie recuerda tu nombre
Cuando eres un extraño
Cuando eres un extraño
Cuando eres un extraño

La gente es extraña, cuando eres un extraño
Las caras se ven feas, cuando estás solo
Las mujeres parecen malvadas, cuando no eres deseado
Las calles son irregulares, cuando estás deprimido
Cuando eres un extraño
Salen caras de la lluvia
Cuando eres un extraño
Nadie recuerda tu nombre
Cuando eres un extraño
Cuando eres un extraño
Cuando eres un extraño
Muy bien, sí
Cuando eres un extraño
Salen caras de la lluvia
Cuando eres un extraño
Nadie recuerda tu nombre
Cuando eres un extraño
Cuando eres un extraño
Cuando eres un extraño`,
      gl: `A xente é estraña, cando es un estraño
As caras vense feas, cando estás só
As mulleres semellan malvadas, cando non es desexado
As rúas son irregulares, cando estás deprimido
Cando es un estraño
Saen rostros da choiva 
Cando es un estraño
Ninguén lembra o teu nome
Cando es un estraño
Cando es un estraño
Cando es un estraño
A xente é estraña, cando es un estraño
As caras vense feas, cando estás só
As mulleres semellan malvadas, cando non es desexado
As rúas son irregulares, cando estás deprimido
Cando es un estraño
Saen rostros da choiva
Cando es un estraño
Ninguén lembra o teu nome
Cando es un estraño
Cando es un estraño
Cando es un estraño
Moi ben, sí
Cando es un estraño
Saen rostros da choiva
Cando es un estraño
Ninguén lembra o teu nome
Cando es un estraño
Cando es un estraño
Cando es un estraño`,
    },
  },

  {
    id: "saturday-night",
    title: "Saturday Night",
    artist: "The Misfits",
    lyrics: `There's 52 ways to murder anyone One
     and two are the same
     and they both work as well 
     I'm coming clean for Amy 
     Julie doesn't scream as well 
     and the cops won't listen all night 
     And so maybe, maybe I'll be over 
     Just as soon as I fill 'em all in 

     And I can remember when I saw her last 
     We were running all around and having a blast 
     But the back seat of the drive-in is so lonely without you 
     Knowin' you're home I was thinking about you 
     There was something I forgot to say 
     I was crying on Saturday night 
     I was cruising without you 
     They were playing our song 
     I was crying on a Saturday night 
     
     I can remember when I saw her last 
     We were running all around and havin' a blast 
     But the back seat of the drive-in is so lonely without you 
     Knowin' you're home 
     I was thinking about you 
     There was something I forgot to say 
     I was crying on a Saturday night 
     I was cruising without you 
     They were playing our song 
     I was crying on a Saturday night 
     
     As the moon becomes the nighttime 
     You go viciously, quietly, away 
     I'm sitting in the bedroom 
     Where we used to sit and smoke cigarettes 
     Now I'm watching, watching you die, oh 
     And I can remember when I saw her last (Whoa) 
     We were running all around and havin' a blast (Whoa) 
     But the back seat of the drive-in is so lonely without you 
     I know when you're home 
     I was thinking about you 
     There was somethin' I forgot to say 
     I was crying on a Saturday night 
     I was cruising without you 
     They were playing our song 
     I was crying on a Saturday night 
     I was crying on a Saturday night 
     I was crying on a Saturday night 
     I was crying, oh, I was crying on a Saturday night Ohh`,
    translations: {
      es: `Ooh-ooh, ooh-ooh-ooh
Whoa-oh, oh, oh-oh
Oh-oh, oh-oh
Hay 52 formas de asesinar a alguien
La una y la dos son iguales
Y ambas funcionan igual de bien
Voy a confesar lo de Amy
Julie no grita tan bien
Y los polis no van a escuchar toda la noche
Y así que tal vez, tal vez me pasaré
En cuanto acabe de contárselo todo

Y puedo recordar cuando la vi por última vez
Estábamos corriendo por todas partes y lo pasábamos genial, 
Pero el asiento trasero del autocine es tan solitario sin ti
Sabiendo que estás en casa, estaba pensando en ti
Hubo algo que olvidé decir
Estaba llorando el sábado por la noche

Estaba de paseo sin ti
Estaban poniendo nuestra canción
Estaba llorando el sábado por la noche

Mientras la luna se convierte en la noche
Te alejas de forma violenta, silenciosa
Estoy sentado en el dormitorio
Donde solíamos sentarnos a fumar cigarrillos
Ahora estoy mirando, mirándote morir
Oh-oh, oh-oh, oh
Puedo recordar cuando la vi por última vez
Estábamos corriendo por todas partes y lo pasábamos genial
Pero el asiento trasero del autocine es tan solitario sin ti
Es tan solitario sin ti
Sabiendo que estás en casa, estaba pensando en ti
Hubo algo que olvidé decir
Estaba llorando el sábado por la noche
Estaba de paseo sin ti
Estaban poniendo nuestra canción
Estaba llorando el sábado por la noche
Estaba llorando el sábado por la noche
Estaba llorando el sábado por la noche
Estaba llorando, oh, estaba llorando el sábado por la noche Ohh`,
      gl: `Ooh-ooh, ooh-ooh-ooh
Whoa-oh, oh, oh-oh
Oh-oh, oh-oh
Hai 52 formas de asasininar a alguén
A unha e a dous son iguais
E ambas funcionan igual de ben
Vou confesar o de Amy
Julie non grita tan ben
E os policías non escoitarán toda a noite
E así que tal vez, tal vez me pasarei
En canto acabe de llo contar todo

E podo lembrar cando a vin por derradeira vez
Estábamos correndo por todas partes e pasámolo xenial,
Pero o asento traseiro do autocine é tan solitario sen ti
Sabendo que estás en casa, estaba pensando en ti
Houbo algo que esquezin decir
Estaba chorando o sábado pola noite

Estaba de paseo sen ti
Estaban poñendo a nosa canción
Estaba chorando o sábado pola noite

Mentres a lúa se torna na noite
Afástaste de forma violenta, silenciosa
Estou sentado no dormitorio
Onde solíamos sentarnos a fumar cigarrillos
Agora estou mirando, mirándote morrer
Oh-oh, oh-oh, oh

Podo lembrar cando a vin por derradeira vez
Estábamos correndo por todas partes e pasámolo xenial
Pero o asento traseiro do autocine é tan solitario sen ti
Sabiendo que estás en casa, estaba pensando en ti
Houbo algo que esquezin decir
Estaba chorando o sábado pola noite

Estaba de paseo sen ti
Estaban poñendo a nosa canción
Estaba chorando o sábado pola noite
Estaba chorando o sábado pola noite
Estaba chorando o sábado pola noite
Estaba chorando, oh, estaba chorando o sábado pola noite Ohh`,
    },
  },
  {
    id: "take-me-out",
    title: "Take Me Out",
    artist: "Franz Ferdinand",
    lyrics: `So if you're lonely, you know I'm here waiting for you
I'm just a crosshair, I'm just a shot away from you
And if you leave here, you leave me broken, shattered, I lie
I'm just a crosshair, I'm just a shot, then we can die

Oh, oh, oh
I know I won't be leaving here with you

I say, "Don't you know?"
You say you don't know
I say, "Take me out!"

I say, "You don't show"
Don't move, time is slow
I say, "Take me out!"

Well, I say, "You don't know"
You say you don't go
I say, "Take me out!"

If I move, this could die
Eyes move, this could die
I want you to take me out

I know I won't be leaving here 
Oh, I know I won't be leaving here
I know I won't be leaving here 
I know I won't be leaving here with you 

I say, "Don't you know?"
You say you don't know
I say, "Take me out!"

If I wane, this could die
If I wait, this could die
I want you to take me out

If I move, this could die
Eyes move, this can die
Come on, take me out

I know I won't be leaving here 
Oh, I know I won't be leaving here
I know I won't be leaving here 
I know I won't be leaving here with you`,
    translations: {
      es: `Así que si estás sola, sabes que estoy aquí esperándote.
Soy solo una mira, estoy a solo un disparo de ti.
Y si te vas de aquí, me dejas roto, destrozado, tirado.
Soy solo una mira, estoy a un disparo… y entonces podremos morir.

Oh, oh, oh…
Sé que no voy a salir de aquí contigo.

Yo digo: «¿No lo sabes?»
Tú dices que no lo sabes.
Yo digo: «¡Sácame de aquí!»

Yo digo: «No te muestras.»
No te muevas, el tiempo va despacio.
Yo digo: «¡Sácame de aquí!»

Bueno, yo digo: «No lo sabes.»
Tú dices que no te vas.
Yo digo: «¡Sácame de aquí!»

Si me muevo, esto podría morir.
Si se cruzan nuestras miradas, esto podría morir.
Quiero que me saques de aquí.

Sé que no voy a salir de aquí.
Oh, sé que no voy a salir de aquí.
Sé que no voy a salir de aquí.
Sé que no voy a salir de aquí contigo.

Yo digo: «¿No lo sabes?»
Tú dices que no lo sabes.
Yo digo: «¡Sácame de aquí!»

Si me apago, esto podría morir.
Si espero, esto podría morir.
Quiero que me saques de aquí.

Si me muevo, esto podría morir.
Si se cruzan nuestras miradas, esto podría morir.
Vamos, sácame de aquí.

Sé que no voy a salir de aquí.
Oh, sé que no voy a salir de aquí.
Sé que no voy a salir de aquí.
Sé que no voy a salir de aquí contigo.`,
      gl: `Así que se estás soa, sabes que estou aquí agardando por ti.
Son só unha mira, estou a un disparo de ti.
E se marchas de aquí, déixasme roto, esnaquizado, tirado.
Son só unha mira, estou a un disparo… e logo poderemos morrer.

Oh, oh, oh…
Sei que non vou saír de aquí contigo.

Eu digo: «Non o sabes?»
Ti dis que non o sabes.
Eu digo: «Sácame de aquí!»

Eu digo: «Non te mostras.»
Non te movas, o tempo vai amodo.
Eu digo: «Sácame de aquí!»

Ben, eu digo: «Non o sabes.»
Ti dis que non marchas.
Eu digo: «Sácame de aquí!»

Se me movo, isto podería morrer.
Se se cruzan as nosas miradas, isto podería morrer.
Quero que me saques de aquí.

Sei que non vou saír de aquí.
Oh, sei que non vou saír de aquí.
Sei que non vou saír de aquí.
Sei que non vou saír de aquí contigo.

Eu digo: «Non o sabes?»
Ti dis que non o sabes.
Eu digo: «Sácame de aquí!»

Se me apago, isto podería morrer.
Se agardo, isto podería morrer.
Quero que me saques de aquí.

Se me movo, isto podería morrer.
Se se cruzan as miradas, isto podería morrer.
Veña, sácame de aquí.

Sei que non vou saír de aquí.
Oh, sei que non vou saír de aquí.
Sei que non vou saír de aquí.
Sei que non vou saír de aquí contigo.`,
    },
  },

  {
    id: "turn-the-page",
    title: "Turn the Page",
    artist: "Bob Seger",
    lyrics: `On a long and lonesome highway
East of Omaha
You can listen to the engines moanin'
Out this one-note song
You'd think about the woman
Or the girl you knew the night before
But your thoughts will soon be wanderin'
The way they always do
When you're ridin' 16 hours
There's nothin' much to do
And you don't feel much like ridin'
You just wish the trip was through

Here I am, on the road again
There I am, up on the stage
There I go playin' the star again
There I go, turn the page

So you walk into this restaurant
All strung out from the road
And you feel the eyes upon you
As you're shakin' off the cold
You pretend it doesn't bother you
But you just want to explode
Yeah, most times you can't hear 'em talk
Other times you can
All the same old clichés
Is it woman, is it man?
And you always seem outnumbered
You don't dare make a stand
Make your stand

Here I am, on the road again
There I am, up on the stage
Here I go playin' the star again
There I go, turn the page

Oh-oh, out there in the spotlight
You're a million miles away
Every ounce of energy
You try and give away
As the sweat pours out your body
Like the music that you play, yeah
Later in the evenin'
As you lie awake in bed
With the echoes of the amplifiers
Ringin' in your head
You smoke the day's last cigarette
Rememberin' what she said
What she said, yeah, yeah

Yeah, and here I am, on the road again
There I am, up on the stage
Here I go, playin' the star again
And there I go, turn the page
And there I go, turn that page
There I go, yeah-yeah
There I go, yeah-yeah`,
    translations: {
      es: `En una larga y solitaria autopista
al este de Omaha
puedes escuchar a los motores quejarse
con esa canción de una sola nota.
Piensas en la mujer
o en la chica que conociste la noche anterior,
pero pronto tus pensamientos empiezan a divagar
como siempre hacen
cuando llevas 16 horas conduciendo
y no hay mucho que hacer.
Y ya no te apetece seguir en la carretera,
solo deseas que el viaje termine.

Aquí estoy, otra vez en la carretera.
Ahí estoy, subido al escenario.
Ahí voy, haciendo de estrella otra vez.
Ahí voy… paso la página.

Así que entras en ese restaurante
agotado por el camino,
y sientes todas las miradas sobre ti
mientras te sacudes el frío.
Finges que no te importa,
pero por dentro estás a punto de estallar.
Sí, la mayoría de las veces no los oyes hablar,
otras veces sí.
Los mismos clichés de siempre:
¿es una mujer?, ¿es un hombre?
Y siempre parece que estás en minoría,
no te atreves a plantar cara.
A plantar cara.

Aquí estoy, otra vez en la carretera.
Ahí estoy, subido al escenario.
Ahí voy, haciendo de estrella otra vez.
Ahí voy… paso la página.

Oh, allá fuera bajo los focos
estás a un millón de kilómetros de todo.
Cada gramo de energía
intentas entregarlo,
mientras el sudor sale de tu cuerpo
como la música que estás tocando.

Más tarde, por la noche,
cuando estás despierto en la cama
con el eco de los amplificadores
resonando en tu cabeza,
fumas el último cigarrillo del día
recordando lo que ella dijo,
lo que ella dijo.

Sí, aquí estoy otra vez en la carretera.
Ahí estoy, subido al escenario.
Ahí voy, haciendo de estrella otra vez.
Y ahí voy… paso la página.
Y ahí voy… paso esa página.
Ahí voy, sí, sí.
Ahí voy, sí, sí.`,
      gl: `Nunha longa e solitaria estrada
ao leste de Omaha
podes escoitar os motores queixarse
con esa canción dunha soa nota.
Pensarás na muller
ou na rapaza que coñeciches a noite anterior,
pero axiña os teus pensamentos empezan a vagar
coma sempre fan
cando levas 16 horas conducindo
e non hai moito que facer.
E xa nin che apetece seguir na estrada,
só desexas que a viaxe remate.

Aquí estou, na estrada outra vez.
Alí estou, enriba do escenario.
Alá vou, facendo de estrela outra vez.
Alá vou… pasar páxina.

Así que entras nese restaurante
rebentado de tanto camiño,
e sentes as miradas cravadas en ti
mentres te sacodes o frío.
Finxes que non che importa,
pero por dentro estás a piques de estalar.
Si, a maioría das veces nin os escoitas falar,
outras veces si.
Os mesmos tópicos de sempre:
é unha muller?, é un home?
E sempre semella que estás en minoría,
non te atreves a plantar cara.
A plantar cara.

Aquí estou, na estrada outra vez.
Alí estou, enriba do escenario.
Alá vou, facendo de estrela outra vez.
Alá vou… pasar páxina.

Oh, alá baixo os focos
estás a un millón de quilómetros de todo.
Cada anaco de enerxía
intentas entregalo,
mentres o suor sae do teu corpo
coma a música que estás a tocar.

Máis tarde pola noite,
cando estás esperto na cama
co eco dos amplificadores
soando na túa cabeza,
fumas o último cigarro do día
lembrando o que ela dixo,
o que ela dixo.

Si, aquí estou na estrada outra vez.
Alí estou, enriba do escenario.
Alá vou, facendo de estrela outra vez.
E alá vou… pasar páxina.
E alá vou… pasar esa páxina.
Alá vou, si, si.
Alá vou, si, si.`,
    },
  },
  {
    id: "where-eagles-dare",
    title: "Where Eagles Dare",
    artist: "The Misfits",
    lyrics: `We walk the streets at night
We go where eagles dare
They pick up every movement
They pick up every loser
With jaded eyes and features
You think they really care

I ain't no goddamn son of a bitch
You better think about it, baby
I ain't no goddamn son of a bitch
You better think about it baby, babe

An omelet of disease awaits your noontime meal
Her mouth of germicide seducing all your glands

I ain't no goddamn son of a bitch
You better think about it, baby
I ain't no goddamn son of a bitch
You better think about it baby, babe

I ain't no goddamn son of a bitch
You better think about it, baby
I ain't no goddamn son of a bitch
You better think about it baby, babe

Let's test your threshold of pain, and
Let's see how long you last
That hatpin in your retina
Unbosoms all your past
With jaded eyes and features
You think they really care

Let's go where eagles dare
We'll go where eagles dare

I ain't no goddamn son of a bitch
You better think about it, baby
I ain't no goddamn son of a bitch
You better think about it, baby
I ain't no goddamn son of a bitch
You better think about it, baby babe`,
    translations: {
      es: `Caminamos por las calles de noche
Vamos donde las águilas se atreven 
Captan cada movimiento
Captan a cada perdedor
Con ojos y rostros cansados
¿De verdad crees que les importa?

No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño
No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño, nena

Una tortilla de enfermedad espera tu almuerzo
Su boca de germicida seduce todas tus glándulas

No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño
No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño, nena

No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño
No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño, nena

Vamos a poner a prueba tu umbral del dolor
y veamos cuánto aguantas
Ese alfiler de sombrero en tu retina
desnuda todo tu pasado
Con ojos y rostros cansados
¿De verdad crees que les importa?

Vamos donde se atreven las águilas
Iremos donde se atreven las águilas

No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño
No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño
No soy ningún maldito hijo de puta
Será mejor que lo pienses, cariño, nena
      `,
      gl: `Camiñamos polas rúas de noite
Imos onde as aguias ousan
Captan cada movemento
Captan a cada perdedor
Con ollos e rostros gastados
Ti cres de verdade que lles importa?

Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena
Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena, meu ben

Unha tortilla de enfermidade agarda polo teu xantar
A súa boca de xermicida seduce todas as túas glándulas

Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena
Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena, meu ben

Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena
Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena, meu ben

Imos probar o teu limiar de dor
e ver canto es quen de aguantar
Ese alfinete de sombreiro na túa retina
desnuda todo o teu pasado
Con ollos e rostros gastados
Ti cres de verdade que lles importa?

Imos onde se atreven as aguias
Iremos onde se atreven as aguias

Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena
Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena
Eu non son ningún maldito fillo de puta
Mellor que o penses ben, nena, meu ben
      `,
    },
  },
  {
    id: "wish-you-were-here",
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    lyrics: `So, so you think you can tell
Heaven from Hell, blue skies from pain
Can you tell a green field from a cold steel rail?
A smile from a veil? Do you think you can tell?

Did they get you to trade your heroes for ghosts?
Hot ashes for trees, hot air for a cool breeze?
Cold comfort for change? Did you exchange
A walk-on part in the war for a lead role in a cage?

How I wish, how I wish you were here
We're just two lost souls swimming in a fishbowl, year after year
Running over the same old ground, what have we found?
The same old fears, wish you were here`,
    translations: {
      es: `Así que, ¿crees que puedes distinguir
el cielo del infierno, el cielo azul del dolor?
¿Puedes distinguir un campo verde de una vía de acero frío?
¿Una sonrisa de un velo? ¿Crees que puedes distinguirlos?

¿Te hicieron cambiar a tus héroes por fantasmas?
¿Cenizas calientes por árboles, aire caliente por una brisa fresca?
¿Consuelo frío por cambio? ¿Cambiaste
un papel secundario en la guerra por ser protagonista en una jaula?

Cómo desearía, cómo desearía que estuvieras aquí
Solo somos dos almas perdidas nadando en una pecera, año tras año
Pisando el mismo viejo terreno, ¿qué hemos encontrado?
Los mismos viejos temores, ojalá estuvieras aquí`,
      gl: `Daquela, cres que podes distinguir
o ceo do inferno, o ceo azul da dor?
Podes distinguir un campo verde dunha vía de aceiro frío?
Unha sonrisa dun veo? Cres que podes distinguilos?

Fixeronche cambiar aos teus heroes por pantasmas?
Cinzas quentes por arbres, aire quente por unha brisa fresca?
Consolo frío por cambio? Cambiaches
un papel secundario na guerra por ser protagonista nunha gaiola?

Como desexaría, como desexaría que estiveses aquí
Somos só dúas almas perdidas nadando nunha peceira, ano tras ano
Pisando o mesmo vello chan, que temos achado?
Os mesmos vellos medos, ogallá que estiveses aquí`,
    },
  },
];
