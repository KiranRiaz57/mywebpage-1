import Image from "next/image";
import Navbar from "../components/navbar";


export default function Poems() {
  return (
    <div>
      <Navbar />
     <h1  className="font-bold text-[64px] leading-[77.4px] tracking-[-0.02em] text-purple-600 text-center">Our list of nursery rhymes</h1>
     <p className="text-center w-[350] ml-[450px]">Baby nursery rhymes are also really important to your little one's speech development. 
      They can help young children develop auditory skills such as being able to tell the 
      difference between sounds and develop the ear for the music of words. Rhymes like the ones
       listed below also help children to articulate words, 
      practise pitch and volume, and enunciate early by saying them over and over again.</p>
      <div>
        
          <h1 className="font-bold text-[45px] text-center text-orange-300" >Twinkle, twinkle little star</h1>
          <p className="text-center">Twinkle, twinkle, little star,<br />
      How I wonder what you are,<br />
     Up above the world so high,<br />
       Like a diamond in the sky, <br />twinkle, twinkle, little star,<br />
         How I wonder what you are.</p><br />
           <h1 className="font-bold text-[45px] text-center text-orange-300" >I'm a Little Tea Pot</h1>
           <p className="text-center">I’m a little teapot, short and stout <br />
Here’s my handle (place hand on hip) <br />
Here’s my spout (stick your other arm out straight) <br />
When I get all steamed up, hear me shout <br />
Just tip me over and pour me out (lean over with your spout arm)</p>
           <h1 className="font-bold text-[45px] text-center text-orange-300" >London Bridge is Falling Down</h1>
           <p className="text-center">London Bridge is falling down,
Falling down, falling down. <br />
London Bridge is falling down, <br />
My fair lady.

Build it up with wood and clay, <br />
Wood and clay, wood and clay, <br />
Build it up with wood and clay,<br />
My fair lady.

Wood and clay will wash away, <br />
Wash away, wash away,<br />
Wood and clay will wash away,<br />
My fair lady.

Build it up with iron and steel,<br />
Iron and steel, iron and steel,<br />
Build it up with iron and steel,<br />
My fair lady.

Iron and steel will bend and bow,<br />
Bend and bow, bend and bow, <br />
Iron and steel will bend and bow,<br />
My fair lady.

Build it up with silver and gold,<br />
Silver and gold, silver and gold,<br />
Build it up with silver and gold,<br />
My fair lady.</p>
           <h1 className="font-bold text-[45px] text-center text-orange-300">Mary Had a Little Lamb</h1>
           <p className="text-center">Mary had a little lamb,
His fleece was white as snow,<br />
And everywhere that Mary went,<br />
The lamb was sure to go

He followed her to school one day,<br />
Which was against the rule,<br />
It made the children laugh and play,<br />
To see a lamb at school.

And so the teacher turned him out,<br />
But still he lingered near,<br />
And waited patiently about,<br />
Till Mary did appear.

"What makes the lamb love Mary so?"<br />
The eager children cry;<br />
"Why, Mary loves the lamb, you know,"<br />
The teacher did reply.</p>
           <h1 className="font-bold text-[45px] text-center text-orange-300">Humpty Dumpty</h1>
           <p className="text-center">Humpty Dumpty sat on a wall,<br />
Humpty Dumpty had a great fall,<br />
All the king’s horses and all the king’s men,<br />
Couldn’t put Humpty together again.</p>
          <h1 className="font-bold text-[45px] text-center text-orange-300">Baa baa black sheep</h1>
          <p className="text-center">Baa baa black sheep, have you any wool? <br />
Yes sir, yes sir, three bags full! <br />
One for the master, one for the dame, <br />
And one for the little boy who lives down the lane</p>

      </div>
    </div>
  );
}